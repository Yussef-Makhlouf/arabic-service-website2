"use client"

import { MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Neighborhood } from "@/lib/neighborhoods-data"

interface NeighborhoodCardProps {
    neighborhood: Neighborhood
    showCTA?: boolean
    compact?: boolean
}

export function NeighborhoodCard({ neighborhood, showCTA = false, compact = false }: NeighborhoodCardProps) {
    return (
        <div className={`
      bg-card border border-border rounded-xl overflow-hidden
      hover:border-primary/50 hover:shadow-md transition-all duration-300
      ${compact ? 'p-4' : 'p-6'}
    `}>
            <div className="flex items-start gap-3">
                <div className={`
          bg-primary/10 rounded-lg flex items-center justify-center shrink-0
          ${compact ? 'w-10 h-10' : 'w-12 h-12'}
        `}>
                    <MapPin className={`text-primary ${compact ? 'w-5 h-5' : 'w-6 h-6'}`} />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-foreground ${compact ? 'text-sm' : 'text-base'} mb-1`}>
                        {neighborhood.name}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${compact ? 'text-xs line-clamp-2' : 'text-sm'}`}>
                        {neighborhood.description}
                    </p>
                </div>
            </div>

            {showCTA && (
                <div className="mt-4 pt-4 border-t border-border">
                    <Button size="sm" variant="outline" className="w-full gap-2" asChild>
                        <a href={`tel:+966507067378`}>
                            <Phone className="w-4 h-4" />
                            اطلب خدمتك في {neighborhood.name}
                        </a>
                    </Button>
                </div>
            )}
        </div>
    )
}
