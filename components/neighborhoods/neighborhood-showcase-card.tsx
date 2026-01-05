"use client"

import { MapPin, ArrowUpLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Neighborhood } from "@/lib/neighborhoods-data"

interface NeighborhoodShowcaseCardProps {
    neighborhood: Neighborhood
    className?: string
}

export function NeighborhoodShowcaseCard({
    neighborhood,
    className,
}: NeighborhoodShowcaseCardProps) {
    return (
        <div
            className={`
        group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6
        transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1
        ${className}
      `}
        >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -m-16 h-32 w-32 rounded-full bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <MapPin className="h-6 w-6" />
                    </div>
                    {neighborhood.popular && (
                        <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-600 ring-1 ring-inset ring-amber-600/20">
                            الأكثر طلباً
                        </span>
                    )}
                </div>

                <h3 className="mb-2 text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {neighborhood.name}
                </h3>

                <p className="mb-6 flex-grow text-sm leading-relaxed text-muted-foreground">
                    {neighborhood.description}
                </p>

                <div className="mt-auto">
                    <Button
                        variant="ghost"
                        className="w-full justify-between hover:bg-primary hover:text-primary-foreground group/btn"
                        asChild
                    >
                        <a href="tel:+966555555555"> {/* Replace with actual number if known, or keep generic */}
                            <span>اطلب الخدمة الآن</span>
                            <ArrowUpLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-1 group-hover/btn:-translate-y-1" />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
