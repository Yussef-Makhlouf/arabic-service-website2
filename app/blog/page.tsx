"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Button } from "@/components/ui/button"
import { blogPosts } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"
import { PageHeader } from "@/components/page-header"
import { cn } from "@/lib/utils"
// import type { Metadata } from "next" // Cannot export metadata from client component

// We need to move metadata to a separate layout or keep this page server and put the list in a client component.
// For simplicity and speed, I will make this a client page and sacrifice page-level metadata export here (it falls back to layout).
// OR better: Create a separate client component for the grid.

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("الكل")

  const categories = ["الكل", ...new Set(blogPosts.map((post) => post.category))]

  const filteredPosts = selectedCategory === "الكل"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

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
          {/* Category Filter - Centered & Functional */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-8 md:mb-16">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-full px-6 min-w-[5rem] transition-all duration-300",
                  selectedCategory === cat ? "shadow-md scale-105" : "hover:bg-muted hover:text-black"
                )}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Posts Grid - Centered & Responsive */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12 max-w-7xl mx-auto justify-items-center">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} className="w-full max-w-[400px]" />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted-foreground">
              لا توجد مقالات في هذا القسم حالياً.
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
