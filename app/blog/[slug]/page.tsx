import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ChevronLeft, ArrowRight } from "lucide-react"
import { blogPosts, getBlogPostBySlug as getStaticBlogPost, getRelatedPosts as getStaticRelatedPosts, type BlogPost } from "@/lib/blog-data"
import { getBlogBySlug, getRelatedBlogs, getBlogs } from "@/lib/api-client"
import { BlogCard } from "@/components/blog/blog-card"
import { MobileTableOfContents } from "@/components/blog/mobile-toc"
import { Rating } from "@/components/ui/rating"
import { Section, TableOfContents } from "@/components/blog/post-sections"

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
    image: apiBlog.image || '/cover.png',
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
    return null
  } catch (error) {
    console.error(`Failed to fetch blog ${slug}:`, error)
    return null
  }
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

  // Fallback to static data
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
    title: `${post.title} | مدونة عزل الأسطح`,
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
      authors: ["شركة عزل الأسطح"],
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
      name: "شركة عزل الأسطح",
      url: "https://tebaservices.com",
    },
    publisher: {
      "@type": "Organization",
      name: "شركة عزل الأسطح",
      logo: {
        "@type": "ImageObject",
        url: "https://tebaservices.com/logo.png",
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

  const relatedPosts = await getRelatedBlogsData(slug, 3)
  const articleSchema = generateArticleSchema(post)
  const breadcrumbSchema = generateBreadcrumbSchema(post)


  // Process content to add IDs to headings and extract TOC
  const processContent = (htmlContent: string) => {
    const sections: Section[] = [];
    let processedHtml = htmlContent;

    // Regex to match h2/h3 tags and add IDs
    // Note: This is a simple regex and might need refinement for complex attributes
    const headingRegex = /<(h[23])>(.*?)<\/\1>/g;

    processedHtml = processedHtml.replace(headingRegex, (match, tag, content) => {
      const title = content.replace(/<[^>]*>/g, '').trim(); // Remove inner HTML tags from title
      const id = encodeURIComponent(title.replace(/\s+/g, '-').toLowerCase());

      // Only add H2s to TOC
      if (tag === 'h2') {
        sections.push({
          id,
          title,
          type: 'text',
          content: [] // Not used for TOC only
        });
      }

      return `<${tag} id="${id}">${content}</${tag}>`;
    });

    return { processedHtml, sections };
  };

  const { processedHtml, sections } = processContent(post.content);
  const navSections = sections;

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
      <main className="min-h-screen bg-background pb-20 overflow-x-hidden">

        {/* Article Header */}
        <header className="pt-12 md:pt-24 pb-8 md:pb-16 bg-background relative">
          <div className="container px-4 max-w-5xl mx-auto text-center space-y-6 md:space-y-10 relative z-10">
            <div className="flex flex-col items-center gap-4">
              <nav className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-full px-4 text-xs md:text-sm whitespace-nowrap">
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 bg-muted px-3 py-1.5 rounded-full">
                  المدونة
                  <ChevronLeft className="w-3.5 h-3.5" />
                </Link>
                <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-3 py-1">
                  {post.category}
                </Badge>
              </nav>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-[1.2] md:leading-[1.1] tracking-tight text-foreground text-balance px-2 font-amiri max-w-4xl mx-auto">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-muted-foreground text-sm md:text-lg border-t border-border pt-8 w-full max-w-2xl mx-auto font-tajawal">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center text-primary">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span>{new Date(post.date).toLocaleDateString("ar-SA", { dateStyle: "long" })}</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-muted flex items-center justify-center text-primary">
                  <Clock className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container px-4 sm:px-6 max-w-6xl mx-auto mb-12 md:mb-20">
          <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-black/5">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Article Layout */}
        <div className="container px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">

          <article className="max-w-4xl mx-auto lg:max-w-none w-full">
            {/* Excerpt */}
            <div className="mb-12 md:mb-16 relative">
              <div className="absolute -top-6 -right-6 w-12 h-12 text-border hidden md:block">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H16.017C14.9124 7 14.017 7.89543 14.017 9V11.5L13.517 12L12.517 11L13.017 10.5V9C13.017 6.23858 15.2556 4 18.017 4H19.017C21.7784 4 24.017 6.23858 24.017 9V14C24.017 17.3137 21.3307 20 18.017 20H14.017V21Z" transform="scale(-1, 1) translate(-24, 0)" />
                </svg>
              </div>
              <p className="text-xl md:text-3xl lg:text-4xl font-bold leading-[1.6] md:leading-relaxed text-secondary text-justify text-balance font-amiri border-r-4 border-primary pr-6 md:pr-10">
                {post.excerpt}
              </p>
            </div>

            {/* Mobile TOC */}
            <div className="lg:hidden mb-12">
              <MobileTableOfContents sections={navSections} />
            </div>

            {/* Content Sections */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-amiri prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-img:rounded-xl prose-img:shadow-lg focus:outline-none"
              dangerouslySetInnerHTML={{ __html: processedHtml }}
            />

            {/* Rating Component */}
            <div className="mt-20 md:mt-32 mb-10">
              <div className="bg-muted rounded-3xl p-8 md:p-12 text-center border border-border">
                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-6 md:mb-8 font-tajawal">هل وجدتم هذا المحتوى مفيداً؟</h4>
                <Rating
                  rating={5.0}
                  totalReviews={20000}
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </article>

          {/* Table of Contents - Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <TableOfContents sections={navSections} />
            </div>
          </aside>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20 md:mt-40 pt-16 md:pt-24 border-t border-border container px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 md:mb-16">
              <div className="text-center sm:text-right">
                <h2 className="text-3xl md:text-5xl font-black text-foreground font-amiri mb-2">إقرأ المزيد</h2>
                <div className="h-1.5 w-20 bg-primary rounded-full mx-auto sm:mx-0" />
              </div>
              <Button variant="outline" size="lg" asChild className="rounded-2xl border-border hover:bg-muted gap-2 font-tajawal px-8 h-14 text-lg hidden sm:flex">
                <Link href="/blog">
                  عرض جميع المقالات
                  <ArrowRight className="w-5 h-5 mr-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pb-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>

            <Button variant="outline" size="lg" asChild className="w-full rounded-2xl border-border hover:bg-muted gap-2 font-tajawal h-14 text-lg sm:hidden mt-8">
              <Link href="/blog">
                عرض جميع المقالات
                <ArrowRight className="w-5 h-5 mr-1" />
              </Link>
            </Button>
          </section>
        )}

      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
