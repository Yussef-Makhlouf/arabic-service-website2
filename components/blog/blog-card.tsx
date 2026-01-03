import Link from "next/link"
import Image from "next/image"
import { Calendar, ArrowLeft } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { BlogPost } from "@/lib/blog-data"

interface BlogCardProps {
    post: BlogPost
    featured?: boolean // Keeping prop interface compatible but not strictly utilizing for layout change if unnecessary
    className?: string
    priority?: boolean
}

export function BlogCard({ post, className, priority = false }: BlogCardProps) {
    return (
        <article className={cn("group flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300", className)}>
            {/* Image Container */}
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden aspect-[16/9] relative bg-muted">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority={priority}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {post.category}
                    </span>
                </div>
            </Link>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 md:p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("ar-SA", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                    </div>
                    {post.readTime && (
                        <>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span>{post.readTime}</span>
                        </>
                    )}
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="block mb-3">
                    <h3 className="text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed line-clamp-2 text-sm mb-6 flex-1">
                    {post.excerpt}
                </p>

                {/* CTA */}
                <div className="mt-auto pt-4 border-t border-border">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-bold text-primary group-hover:underline"
                    >
                        اقرأ المقال
                        <ArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                </div>
            </div>
        </article>
    )
}
