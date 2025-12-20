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
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return { title: "المقال غير موجود" }
  }

  return {
    title: `${post.title} | المدونة`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">

        {/* Article Header */}
        <header className="py-20 md:py-32 bg-background relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="container px-4 max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="flex items-center justify-center gap-2">
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors flex items-center text-sm gap-1 bg-muted/50 px-3 py-1 rounded-full">
                المدونة
                <ChevronLeft className="w-3 h-3" />
              </Link>
              <span className="text-muted-foreground text-sm">/</span>
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.2] tracking-tight text-balance text-foreground">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm md:text-base border-t border-dashed border-border/60 py-8 w-full max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{new Date(post.date).toLocaleDateString("ar-SA", { dateStyle: "long" })}</span>
              </div>
              <span className="text-border hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container px-4 max-w-5xl mx-auto mb-20">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="container px-4 max-w-3xl mx-auto">
          {/* Excerpt */}
          <div className="mb-16">
            <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground/90 text-center text-balance">
              {post.excerpt}
            </p>
            <div className="h-1 w-24 bg-primary/20 mx-auto mt-8 rounded-full" />
          </div>

          {/* Main Content */}
          <div className="prose prose-lg md:prose-xl max-w-none 
                prose-headings:font-bold prose-headings:text-foreground prose-headings:tracking-tight prose-headings:scroll-mt-24
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-center
                prose-h3:text-2xl prose-h3:mt-12
                prose-p:text-muted-foreground prose-p:leading-loose prose-p:text-justify
                prose-li:text-muted-foreground
                prose-img:rounded-3xl prose-img:shadow-lg prose-img:my-12 prose-img:border"
          >          {post.content.split("\n").map((line, idx) => {
            if (line.startsWith("## ")) {
              return <h2 key={idx}>{line.replace("## ", "")}</h2>
            }
            if (line.startsWith("### ")) {
              return <h3 key={idx}>{line.replace("### ", "")}</h3>
            }
            if (line.startsWith("**") && line.endsWith("**")) {
              return <strong key={idx} className="block mt-8 mb-4 text-foreground text-lg">{line.replace(/\*\*/g, "")}</strong>
            }
            if (line.startsWith("- ")) {
              return <li key={idx} className="mr-6 mb-2 text-lg">{line.replace("- ", "")}</li>
            }
            if (line.startsWith("|")) return null
            if (line.trim() === "") return null
            return <p key={idx}>{line}</p>
          })}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 pt-24 border-t container px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">اقرأ أيضاً</h2>
              <Button variant="ghost" asChild className="gap-2">
                <Link href="/blog">
                  عرض جميع المقالات
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}

      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
