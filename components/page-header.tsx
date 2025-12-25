import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface PageHeaderProps {
    title: string
    description?: string
    badge?: string
    className?: string
    children?: React.ReactNode
}

export function PageHeader({ title, description, badge, className, children }: PageHeaderProps) {
    return (
        <section className={cn("relative py-16 md:py-32 overflow-hidden bg-background border-b", className)}>
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(var(--secondary)_1px,transparent_1px)] [background-size:16px_16px]" />

            {/* Decorative Blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container px-4 text-center space-y-8 relative z-10 max-w-4xl mx-auto">
                {badge && (
                    <div className="flex justify-center">
                        <Badge variant="secondary" className="px-6 py-2 text-base rounded-full font-medium text-primary bg-primary/5 hover:bg-primary/10 border border-primary/10 transition-colors">
                            {badge}
                        </Badge>
                    </div>
                )}

                <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground text-balance leading-tight">
                    {title}
                </h1>

                {description && (
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
                        {description}
                    </p>
                )}

                {children}
            </div>
        </section>
    )
}
