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
        <article className={cn("group flex flex-col h-full space-y-2 md:space-y-3", className)}>
            {/* Image Container */}
            <Link href={`/blog/${post.slug}`} className="block overflow-hidden rounded-xl md:rounded-2xl aspect-[16/10] md:aspect-[3/2] relative bg-muted">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    priority={priority}
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </Link>

            {/* Content */}
            <div className="flex flex-col flex-1 space-y-1.5 md:space-y-2 pt-1">
                {/* Meta */}
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                    <span className="font-medium text-primary bg-primary/5 px-1.5 md:px-2 py-0.5 rounded text-[10px] md:text-xs">
                        {post.category}
                    </span>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        <time dateTime={post.date} className="text-[10px] md:text-xs">
                            {new Date(post.date).toLocaleDateString("ar-SA", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </time>
                    </div>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`} className="block">
                    <h3 className="text-sm md:text-lg font-bold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                    </h3>
                </Link>

                {/* Excerpt - Hidden on mobile for compact layout */}
                <p className="hidden md:block text-muted-foreground leading-relaxed line-clamp-2 text-sm">
                    {post.excerpt}
                </p>
            </div>
        </article>
    )
}
