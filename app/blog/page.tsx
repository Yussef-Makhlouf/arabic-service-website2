import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { PageHeader } from "@/components/page-header"
import { BlogGridClient } from "@/components/blog/blog-grid-client"
import { getBlogs } from "@/lib/api-client"
import { blogPosts as staticBlogPosts } from "@/lib/blog-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "المدونة والمقالات - نصائح العزل والبناء | شركة طيبة للخدمات",
  description: "نشارككم أحدث الخبرات والنصائح في مجال العزل المائي والحراري وكشف التسربات لضمان أفضل حماية لمنزلكم.",
  keywords: ["مقالات عزل", "دليل العزل", "نصائح البناء", "توفير الكهرباء", "عزل الرياض"],
}

// Fetch blogs from API with fallback to static data
async function getBlogData() {
  try {
    const apiBlogs = await getBlogs('published')
    if (Array.isArray(apiBlogs) && apiBlogs.length > 0) {
      // Transform API data to match component interface
      return apiBlogs.map((blog: any, index: number) => ({
        id: blog._id || index + 1,
        slug: blog.slug,
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        image: blog.image || '/cover.png',
        imageQuery: '',
        category: blog.category || 'عام',
        date: new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('ar-SA'),
        readTime: blog.readTime || '5 دقائق',
        featured: blog.featured || false,
        relatedServices: blog.relatedServices || [],
      }))
    }
    return staticBlogPosts
  } catch (error) {
    console.error('Failed to fetch blogs:', error)
    return staticBlogPosts
  }
}

export default async function BlogPage() {
  const blogs = await getBlogData()
  const categories = ["الكل", ...new Set(blogs.map((post: any) => post.category))]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20 mx-auto">
        <PageHeader
          title="المدونة والمقالات"
          description="نشارككم أحدث الخبرات والنصائح في مجال العزل والبناء لضمان أفضل حماية لمنزلكم."
          badge="المعرفـة"
        />

        <div className="container px-4 py-8 md:py-12 mx-auto">
          <BlogGridClient blogs={blogs} categories={categories} />
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
