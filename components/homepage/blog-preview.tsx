import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/ui/section-header"
import { blogPosts } from "@/lib/blog-data"

export function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="مدونة العزل"
          title="أحدث المقالات والنصائح المتخصصة"
          subtitle="اكتشف نصائح الخبراء وأحدث التقنيات في مجال العزل المائي والحراري"
        />

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {latestPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all group">
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image || `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(post.imageQuery)}`}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-primary/90 text-primary-foreground backdrop-blur-sm">
                  {post.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  اقرأ المزيد
                  <ArrowLeft className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA to Blog */}
        <div className="text-center mt-12">
          <Button size="lg" asChild variant="outline" className="group bg-transparent">
            <Link href="/blog" className="inline-flex items-center gap-2">
              عرض جميع المقالات ({blogPosts.length} مقالة)
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-all" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
