import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
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
        <article className={cn("group flex flex-col h-full space-y-4", className)}>
            {/* Image Container */}
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-2xl aspect-[3/2] relative bg-muted">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority={priority}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            {/* Content */}
            <div className="flex flex-col flex-1 space-y-3 pt-2">
                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="font-medium text-primary bg-primary/5 px-2 py-0.5 rounded text-xs">
                        {post.category}
                    </span>
                    <span className="text-gray-300">•</span>
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
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors text-balance">
                        {post.title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-4 text-base">
                    {post.excerpt}
                </p>
            </div>
        </article>
    )
}
