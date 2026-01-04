import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Calendar,
  Clock,
  ChevronLeft,
  ArrowRight,
  Phone,
  MessageCircle,
  Shield,
  BookOpen,
  Star,
  Share2,
  Menu,
  CheckCircle
} from "lucide-react"
import { blogPosts, getRelatedPosts as getStaticRelatedPosts, type BlogPost } from "@/lib/blog-data"
import { getBlogBySlug, getRelatedBlogs, getBlogs } from "@/lib/api-client"
import { BlogCard } from "@/components/blog/blog-card"
import { MobileTableOfContents } from "@/components/blog/mobile-toc"
import { Section } from "@/components/blog/post-sections"
import { NeighborhoodsCompact } from "@/components/neighborhoods"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// Transform API blog data to match frontend interface
function transformApiBlog(apiBlog: any): BlogPost {
  return {
    id: apiBlog._id || apiBlog.id || 0,
    slug: apiBlog.slug,
    title: apiBlog.title,
    excerpt: apiBlog.excerpt,
    content: apiBlog.content,
    image: apiBlog.image || '/cover.webp',
    imageQuery: apiBlog.imageQuery || '',
    category: apiBlog.category || 'عام',
    date: apiBlog.publishedAt || apiBlog.createdAt || new Date().toISOString(),
    readTime: apiBlog.readTime || '5 دقائق',
    featured: apiBlog.featured || false,
    relatedServices: apiBlog.relatedServices || [],
  }
}

// Fetch blog from API with fallback to static data
async function getBlogData(slug: string): Promise<BlogPost | null> {
  try {
    const apiBlog = await getBlogBySlug(slug)
    if (apiBlog) {
      return transformApiBlog(apiBlog)
    }
  } catch (error) {
    console.error(`Failed to fetch blog ${slug}:`, error)
  }

  // Fallback to static data
  const staticPost = blogPosts.find(p => p.slug === slug)
  if (staticPost) {
    return staticPost
  }

  return null
}

// Fetch related blogs with fallback
async function getRelatedBlogsData(slug: string, limit: number = 3): Promise<BlogPost[]> {
  try {
    const apiRelated = await getRelatedBlogs(slug, limit)
    if (apiRelated && apiRelated.length > 0) {
      return apiRelated.map(transformApiBlog)
    }
    return getStaticRelatedPosts(slug, limit)
  } catch (error) {
    return getStaticRelatedPosts(slug, limit)
  }
}

// Generate static params from API + static data
export async function generateStaticParams() {
  try {
    const apiBlogs = await getBlogs('published')
    if (apiBlogs && apiBlogs.length > 0) {
      return apiBlogs.map((blog: any) => ({ slug: blog.slug }))
    }
  } catch (error) {
    console.log('Using static blog slugs for generateStaticParams')
  }

  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogData(slug)

  if (!post) {
    return { title: "المقال غير موجود" }
  }

  return {
    title: `${post.title} | مدونة طيبة للخدمات`,
    description: post.excerpt,
    keywords: [
      post.category,
      "عزل اسطح",
      "عزل فوم",
      "عزل مائي",
      "كشف تسربات",
      "الرياض",
      "الخرج",
    ].join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["طيبة للخدمات"],
      images: [post.image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

// Function to generate Article schema
function generateArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://tebaservices.com/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    image: `https://tebaservices.com${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "طيبة للخدمات",
      url: "https://tebaservices.com",
    },
    publisher: {
      "@type": "Organization",
      name: "طيبة للخدمات",
      logo: {
        "@type": "ImageObject",
        url: "https://tebaservices.com/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://tebaservices.com/blog/${post.slug}`,
    },
    articleSection: post.category,
    wordCount: post.content.split(/\s+/).length,
    inLanguage: "ar-SA",
  }
}

function generateBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://tebaservices.com" },
      { "@type": "ListItem", position: 2, name: "المدونة", item: "https://tebaservices.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://tebaservices.com/blog/${post.slug}` },
    ],
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogData(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getRelatedBlogsData(slug, 4)
  const articleSchema = generateArticleSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema(post)

  // Process content to add IDs to headings and extract TOC
  const processContent = (htmlContent: string) => {
    const sections: Section[] = []
    let processedHtml = htmlContent

    const headingRegex = /<(h[23])>(.*?)<\/\1>/g

    processedHtml = processedHtml.replace(headingRegex, (match, tag, content) => {
      const title = content.replace(/<[^>]*>/g, '').trim()
      const id = encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase())

      if (tag === 'h2') {
        sections.push({
          id,
          title,
          type: 'text',
          content: []
        })
      }

      return `<${tag} id="${id}">${content}</${tag}>`
    })

    return { processedHtml, sections }
  }

  const { processedHtml, sections } = processContent(post.content)
  const navSections = sections

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Header />
      <main className="min-h-screen bg-background overflow-x-hidden">

        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          {/* Pattern */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container px-4 py-12 md:py-20 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
                <Link href="/" className="hover:text-white transition-colors">
                  الرئيسية
                </Link>
                <ChevronLeft className="w-4 h-4" />
                <Link href="/blog" className="hover:text-white transition-colors">
                  المدونة
                </Link>
                <ChevronLeft className="w-4 h-4" />
                <Badge variant="secondary" className="bg-white/10 text-white border-0 hover:bg-white/20">
                  {post.category}
                </Badge>
              </nav>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-white lg:text-5xl font-bold leading-tight mb-8 font-heading">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span>{new Date(post.date).toLocaleDateString("ar-SA", { dateStyle: "long" })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span>{sections.length} أقسام</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container px-4 max-w-5xl mx-auto -mt-8 mb-12 relative z-20">
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Main Content */}
        <div className="container px-4 max-w-7xl mx-auto pb-20">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">

            {/* Article Content */}
            <article className="order-2 lg:order-1">
              {/* Excerpt Card */}
              <Card className="mb-10 border-r-4 border-primary bg-primary/5">
                <CardContent className="p-6">
                  <p className="text-lg md:text-xl font-medium leading-relaxed text-foreground">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>

              {/* Mobile TOC */}
              <div className="lg:hidden mb-10">
                <MobileTableOfContents sections={navSections} />
              </div>

              {/* Content */}
              <div
                className="prose prose-lg dark:prose-invert max-w-none 
                  prose-headings:font-heading prose-headings:text-foreground 
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-muted-foreground prose-p:leading-loose prose-p:mb-6
                  prose-li:text-muted-foreground prose-li:leading-relaxed
                  prose-img:rounded-2xl prose-img:shadow-xl
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  focus:outline-none"
                dangerouslySetInnerHTML={{ __html: processedHtml }}
              />

              {/* Rating Card */}
              <Card className="mt-16 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-amber-200 dark:border-amber-800">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-bold text-foreground mb-4 font-heading">هل وجدتم هذا المحتوى مفيداً؟</h4>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-8 h-8 fill-amber-400 text-amber-400 cursor-pointer hover:scale-110 transition-transform" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">قيّم هذا المقال من 1 إلى 5 نجوم</p>
                </CardContent>
              </Card>

              {/* Share Section */}
              <div className="mt-10 flex items-center justify-between p-6 bg-muted/30 rounded-2xl border border-border">
                <div className="flex items-center gap-3">
                  <Share2 className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium text-foreground">شارك المقال</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" /></svg>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <MessageCircle className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="order-1 lg:order-2">
              <div className="lg:sticky lg:top-24 space-y-6">

                {/* TOC Card */}
                {navSections.length > 0 && (
                  <Card className="border-border shadow-xl overflow-hidden">
                    <div className="bg-primary p-4">
                      <div className="flex items-center gap-2 text-white">
                        <Menu className="w-5 h-5" />
                        <h3 className="font-bold text-white">محتويات المقال</h3>
                      </div>
                    </div>
                    <CardContent className="p-0">
                      <nav className="divide-y divide-border">
                        {navSections.map((section, idx) => (
                          <a
                            key={idx}
                            href={`#${section.id}`}
                            className="flex items-center justify-between p-4 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            <span className="line-clamp-2 font-medium">{section.title}</span>
                            <ChevronLeft className="w-4 h-4 flex-shrink-0 opacity-50" />
                          </a>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>
                )}

                {/* CTA Card */}
                <Card className="border-border shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-br from-primary to-primary/80 p-6 text-white text-center">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-7 h-7" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-2">هل تحتاج خدماتنا؟</h3>
                    <p className="text-sm text-white/80 mb-5">تواصل معنا للحصول على استشارة مجانية</p>

                    <div className="space-y-3">
                      <Button
                        size="lg"
                        className="w-full gap-2 h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
                        asChild
                      >
                        <a href="tel:+966507067378">
                          <Phone className="h-5 w-5" />
                          اتصل الآن
                        </a>
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full gap-2 h-12 border-white/30 text-white hover:bg-white/10 bg-white/5"
                        asChild
                      >
                        <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-5 w-5" />
                          واتساب
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>

                {/* Trust Card */}
                <Card className="border-border shadow-lg">
                  <CardContent className="p-5">
                    <h4 className="font-bold text-foreground mb-4 text-center">لماذا تختارنا؟</h4>
                    <div className="space-y-3">
                      {[
                        "خبرة أكثر من 15 عاماً",
                        "مواد معتمدة عالمياً",
                        "ضمان 15 سنة مكتوب",
                        "فريق متخصص"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Neighborhoods Card */}
                <NeighborhoodsCompact
                  title="أحياء نخدمها"
                  maxItems={8}
                  variant="list"
                  showLink={true}
                />

              </div>
            </aside>

          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30 border-y border-border">
            <div className="container px-4 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
                <div className="text-center sm:text-right">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading mb-2">مقالات ذات صلة</h2>
                  <div className="h-1 w-16 bg-primary rounded-full mx-auto sm:mx-0" />
                </div>
                <Button variant="outline" size="lg" asChild className="rounded-xl border-border hover:bg-muted gap-2 hidden sm:flex">
                  <Link href="/blog">
                    جميع المقالات
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>

              <Button variant="outline" size="lg" asChild className="w-full rounded-xl border-border hover:bg-muted gap-2 mt-8 sm:hidden">
                <Link href="/blog">
                  جميع المقالات
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

          <div className="container px-4 max-w-3xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
              <Phone className="w-8 h-8 text-secondary" />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 font-heading">
              هل لديك أسئلة أو تحتاج استشارة؟
            </h2>
            <p className="text-lg text-white/85 mb-8 leading-relaxed">
              فريقنا المتخصص جاهز لمساعدتك والإجابة على جميع استفساراتك
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                size="lg"
                className="gap-3 text-lg h-14 px-10 bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-xl font-bold"
                asChild
              >
                <a href="tel:+966507067378">
                  <Phone className="h-5 w-5" />
                  اتصل الآن: 0507067378
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-3 text-lg h-14 px-10 border-white/30 text-white hover:bg-white/10 bg-white/5"
                asChild
              >
                <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  واتساب
                </a>
              </Button>
            </div>

            <div className="inline-flex items-center gap-2 text-white/70 text-sm">
              <Shield className="h-4 w-4" />
              <span>استشارة مجانية • ضمان 15 سنة</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
