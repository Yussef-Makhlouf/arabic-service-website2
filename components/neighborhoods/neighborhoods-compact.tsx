"use client"

import { MapPin, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { NeighborhoodCard } from "./neighborhood-card"
import { popularNeighborhoods } from "@/lib/neighborhoods-data"

interface NeighborhoodsCompactProps {
    title?: string
    showLink?: boolean
    maxItems?: number
    variant?: "grid" | "list"
}

export function NeighborhoodsCompact({
    title = "الأحياء التي نخدمها",
    showLink = true,
    maxItems = 12,
    variant = "grid"
}: NeighborhoodsCompactProps) {
    const displayedNeighborhoods = popularNeighborhoods.slice(0, maxItems)

    return (
        <div className="bg-muted/30 rounded-2xl p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{title}</h3>
                </div>
                {showLink && (
                    <Link
                        href="/#neighborhoods"
                        className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                    >
                        عرض الكل
                        <ArrowLeft className="w-4 h-4" />
                    </Link>
                )}
            </div>

            {/* Neighborhoods */}
            {variant === "grid" ? (
                <div className="grid sm:grid-cols-2 gap-3">
                    {displayedNeighborhoods.map((neighborhood) => (
                        <NeighborhoodCard
                            key={neighborhood.id}
                            neighborhood={neighborhood}
                            compact
                        />
                    ))}
                </div>
            ) : (
                <div className="space-y-2">
                    {displayedNeighborhoods.map((neighborhood) => (
                        <div
                            key={neighborhood.id}
                            className="flex items-center gap-2 p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
                        >
                            <MapPin className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-sm font-medium">{neighborhood.name}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* CTA */}
            <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">
                    نُغطي جميع أحياء الرياض والمناطق المحيطة
                </p>
                <Button variant="outline" size="sm" asChild className="gap-2">
                    <a href="tel:+966507067378">
                        اتصل لمعرفة المزيد
                    </a>
                </Button>
            </div>
        </div>
    )
}
