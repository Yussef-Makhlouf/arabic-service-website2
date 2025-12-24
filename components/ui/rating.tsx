import { Star, StarHalf, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface RatingProps {
    rating: number
    totalReviews: number
    className?: string
    label?: string
}

export function Rating({
    rating,
    totalReviews,
    className,
    label = "Customer Reviews"
}: RatingProps) {
    // Ensure rating is between 0 and 5
    const clampedRating = Math.max(0, Math.min(5, rating))

    // Create array of 5 items for rendering
    const stars = Array.from({ length: 5 }, (_, i) => i + 1)

    return (
        <div className={cn(
            "flex flex-col items-center justify-center p-6 bg-white border border-border rounded-2xl shadow-sm hover:shadow-md transition-shadow",
            className
        )}>
            {/* Label */}
            <h3 className="text-xl font-bold text-foreground mb-4 font-heading">
                {label}
            </h3>

            {/* Stars Container */}
            <div className="flex items-center gap-1 mb-3 relative">
                {stars.map((starIndex) => {
                    // Calculate fill percentage for this star
                    // e.g. rating 4.7
                    // star 1: 4.7 >= 1 -> 100%
                    // star 4: 4.7 >= 4 -> 100%
                    // star 5: 4.7 - 4 = 0.7 -> 70%
                    let fillPercentage = 0
                    if (clampedRating >= starIndex) {
                        fillPercentage = 100
                    } else if (clampedRating > starIndex - 1) {
                        fillPercentage = (clampedRating - (starIndex - 1)) * 100
                    }

                    return (
                        <div key={starIndex} className="relative w-8 h-8">
                            {/* Background Star (Gray/Empty) */}
                            <Star
                                className="absolute inset-0 w-full h-full text-muted stroke-[1.5px]"
                                fill="transparent"
                            />

                            {/* Foreground Star (Gold/Filled) - Masked */}
                            <div
                                className="absolute inset-0 overflow-hidden"
                                style={{ width: `${fillPercentage}%` }}
                            >
                                <Star
                                    className="w-8 h-8 text-yellow-400 fill-yellow-400 stroke-yellow-400"
                                />
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Rating Text */}
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
                <span className="text-2xl font-bold text-foreground">{clampedRating.toFixed(1)}</span>
                <span className="text-sm">/ 5.0</span>
            </div>

            {/* Review Count logic for structured data later or just display */}
            <div className="mt-2 text-sm text-muted-foreground flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>based on {totalReviews.toLocaleString()} reviews</span>
            </div>

            {/* Schema.org Microdata for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org/",
                        "@type": "AggregateRating",
                        "ratingValue": clampedRating,
                        "bestRating": "5",
                        "ratingCount": totalReviews,
                        "itemReviewed": {
                            "@type": "LocalBusiness",
                            "name": "Service Provider" // Ideally dynamic
                        }
                    }),
                }}
            />
        </div>
    )
}
