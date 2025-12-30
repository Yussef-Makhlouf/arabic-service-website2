"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog/blog-card"
import { cn } from "@/lib/utils"

import type { BlogPost } from "@/lib/blog-data"

interface BlogGridClientProps {
    blogs: BlogPost[]
    categories: string[]
}

export function BlogGridClient({ blogs, categories }: BlogGridClientProps) {
    const [selectedCategory, setSelectedCategory] = useState("الكل")

    const filteredPosts = selectedCategory === "الكل"
        ? blogs
        : blogs.filter(post => post.category === selectedCategory)

    return (
        <>
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
        </>
    )
}
