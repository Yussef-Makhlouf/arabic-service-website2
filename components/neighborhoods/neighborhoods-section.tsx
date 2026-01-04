"use client"

import { useState, useMemo } from "react"
import { Search, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NeighborhoodCard } from "./neighborhood-card"
import {
    neighborhoods,
    regionLabels,
    type NeighborhoodRegion
} from "@/lib/neighborhoods-data"

export function NeighborhoodsSection() {
    const [searchQuery, setSearchQuery] = useState("")
    const [activeRegion, setActiveRegion] = useState<NeighborhoodRegion | "all">("all")
    const [showAll, setShowAll] = useState(false)

    const regions: (NeighborhoodRegion | "all")[] = ["all", "north", "south", "east", "west", "center", "suburbs"]

    const filteredNeighborhoods = useMemo(() => {
        let results = neighborhoods

        // Filter by region
        if (activeRegion !== "all") {
            results = results.filter(n => n.region === activeRegion)
        }

        // Filter by search query
        if (searchQuery.trim()) {
            const query = searchQuery.trim()
            results = results.filter(n =>
                n.name.includes(query) ||
                n.description.includes(query)
            )
        }

        return results
    }, [searchQuery, activeRegion])

    const displayedNeighborhoods = showAll ? filteredNeighborhoods : filteredNeighborhoods.slice(0, 24)
    const hasMore = filteredNeighborhoods.length > 24

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                        <MapPin className="w-4 h-4" />
                        التغطية الجغرافية
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        الأحياء التي نخدمها في الرياض
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        نُغطي أكثر من 150 حيًا وضاحية في الرياض والمناطق المحيطة بخدمات عزل الأسطح والفوم
                    </p>
                </div>

                {/* Search Box */}
                <div className="max-w-xl mx-auto mb-8">
                    <div className="relative">
                        <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            type="text"
                            placeholder="ابحث عن حيّك..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pr-12 h-14 text-lg rounded-xl border-2 focus:border-primary"
                        />
                    </div>
                </div>

                {/* Region Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {regions.map((region) => (
                        <Button
                            key={region}
                            variant={activeRegion === region ? "default" : "outline"}
                            size="sm"
                            onClick={() => setActiveRegion(region)}
                            className="rounded-full px-4"
                        >
                            {region === "all" ? "جميع الأحياء" : regionLabels[region]}
                        </Button>
                    ))}
                </div>

                {/* Results Count */}
                <div className="text-center mb-8">
                    <span className="text-muted-foreground">
                        عرض {displayedNeighborhoods.length} من أصل {filteredNeighborhoods.length} حي
                    </span>
                </div>

                {/* Neighborhoods Grid */}
                {filteredNeighborhoods.length > 0 ? (
                    <>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {displayedNeighborhoods.map((neighborhood) => (
                                <NeighborhoodCard
                                    key={neighborhood.id}
                                    neighborhood={neighborhood}
                                    showCTA={false}
                                />
                            ))}
                        </div>

                        {/* Show More Button */}
                        {hasMore && (
                            <div className="text-center mt-10">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => setShowAll(!showAll)}
                                    className="gap-2 px-8"
                                >
                                    {showAll ? (
                                        <>
                                            <ChevronUp className="w-5 h-5" />
                                            عرض أقل
                                        </>
                                    ) : (
                                        <>
                                            <ChevronDown className="w-5 h-5" />
                                            عرض جميع الأحياء ({filteredNeighborhoods.length})
                                        </>
                                    )}
                                </Button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-12 bg-card rounded-2xl border border-border">
                        <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-xl font-bold mb-2">لم يتم العثور على نتائج</h3>
                        <p className="text-muted-foreground">
                            جرّب البحث باسم حي آخر أو اختر منطقة مختلفة
                        </p>
                    </div>
                )}

                {/* CTA Banner */}
                <div className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        لم تجد حيّك في القائمة؟
                    </h3>
                    <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                        لا تقلق! نحن نُغطي جميع أحياء الرياض والمناطق المحيطة. تواصل معنا وسنصل إليك
                    </p>
                    <Button size="lg" variant="secondary" asChild className="font-bold text-lg px-8">
                        <a href="tel:+966507067378">
                            اتصل الآن: 0507067378
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
