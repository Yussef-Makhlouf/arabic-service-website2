import { Badge } from "@/components/ui/badge"

export function BlogHeader() {
    return (
        <div className="bg-background border-b py-16 md:py-24">
            <div className="container px-4 text-center space-y-6 max-w-4xl mx-auto">
                <Badge variant="secondary" className="px-4 py-1.5 text-base rounded-full font-medium text-muted-foreground bg-muted/50 hover:bg-muted">
                    المدونة
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground text-balance">
                    أحدث المقالات والنصائح
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
                    اكتشف أفضل الممارسات والتقنيات في مجال العزل والبناء من خبرائنا
                </p>
            </div>
        </div>
    )
}
