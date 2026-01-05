"use client"

import * as React from "react"
import { Search, MapPin, Building2, SlidersHorizontal } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NeighborhoodShowcaseCard } from "./neighborhood-showcase-card"
import {
    neighborhoods,
    regionLabels,
    type NeighborhoodRegion,
} from "@/lib/neighborhoods-data"

const REGIONS: { id: NeighborhoodRegion | "all"; label: string }[] = [
    { id: "all", label: "الكل" },
    { id: "north", label: "شمال الرياض" },
    { id: "south", label: "جنوب الرياض" },
    { id: "east", label: "شرق الرياض" },
    { id: "west", label: "غرب الرياض" },
    { id: "center", label: "وسط الرياض" },
    { id: "suburbs", label: "الضواحي" },
]

export function NeighborhoodsShowcase() {
    const [searchQuery, setSearchQuery] = React.useState("")
    const [activeTab, setActiveTab] = React.useState<string>("all")
    const [visibleCount, setVisibleCount] = React.useState(12)

    // Filter neighborhoods based on search query and active tab
    const filteredNeighborhoods = React.useMemo(() => {
        return neighborhoods.filter((neighborhood) => {
            const matchesSearch =
                neighborhood.name.includes(searchQuery) ||
                neighborhood.description.includes(searchQuery)
            const matchesRegion =
                activeTab === "all" || neighborhood.region === activeTab

            return matchesSearch && matchesRegion
        })
    }, [searchQuery, activeTab])

    // Reset visible count when filters change
    React.useEffect(() => {
        setVisibleCount(12)
    }, [searchQuery, activeTab])

    const loadMore = () => {
        setVisibleCount((prev) => prev + 12)
    }

    const hasMore = visibleCount < filteredNeighborhoods.length

    return (
        <section className="py-24 bg-gradient-to-b from-background to-muted/30 max-w-7xl mx-auto">
            <div className="container px-4 md:px-6">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <Badge variant="secondary" className="px-4 py-1.5 text-sm font-medium rounded-full">
                        <Building2 className="w-4 h-4 mr-2" />
                        نغطي جميع أحياء الرياض
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-foreground">
                        خدماتنا تصلك
                        <span className="text-primary block mt-2">أينما كنت</span>
                    </h2>
                    <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        شبكة تغطية واسعة تشمل كافة أحياء الرياض وضواحيها. ابحث عن حيّك وتأكد من وصول خدماتنا بضمان الجودة والسرعة.
                    </p>
                </div>

                {/* Filters & Search Toolbar */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-card p-4 rounded-2xl shadow-sm border border-border/50">
                        {/* Search Input */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="ابحث عن اسم الحي..."
                                className="pr-10 h-12 text-base bg-background/50 border-input/50 focus:bg-background transition-all"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Region Tabs - Desktop */}
                        <Tabs
                            defaultValue="all"
                            value={activeTab}
                            onValueChange={setActiveTab}
                            className="hidden md:flex flex-1 justify-end"
                        >
                            <TabsList className="h-12 bg-muted/50 p-1 gap-1 w-auto">
                                {REGIONS.map((region) => (
                                    <TabsTrigger
                                        key={region.id}
                                        value={region.id}
                                        className="h-10 px-4 rounded-sm data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all"
                                    >
                                        {region.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    </div>

                    {/* Region Tabs - Mobile Scrollable */}
                    <div className="md:hidden mt-4 overflow-x-auto pb-4 scrollbar-hide">
                        <div className="flex gap-2 min-w-max px-2">
                            {REGIONS.map((region) => (
                                <Button
                                    key={region.id}
                                    variant={activeTab === region.id ? "default" : "outline"}
                                    size="sm"
                                    onClick={() => setActiveTab(region.id)}
                                    className="rounded-full"
                                >
                                    {region.label}
                                </Button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 match-height">
                    {filteredNeighborhoods.slice(0, visibleCount).map((neighborhood) => (
                        <NeighborhoodShowcaseCard
                            key={neighborhood.id}
                            neighborhood={neighborhood}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {filteredNeighborhoods.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="bg-muted/50 p-6 rounded-full mb-4">
                            <MapPin className="h-10 w-10 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">عذراً، لم نجد نتائج</h3>
                        <p className="text-muted-foreground">
                            لا يوجد حي بهذا الاسم في القائمة الحالية. لكننا نغطي الرياض بالكامل!
                        </p>
                        <Button className="mt-6" variant="outline">
                            تواصل معنا للتأكد
                        </Button>
                    </div>
                )}

                {/* Load More */}
                {hasMore && (
                    <div className="flex justify-center mt-12">
                        <Button
                            onClick={loadMore}
                            size="lg"
                            variant="secondary"
                            className="px-8 min-w-[200px]"
                        >
                            عرض المزيد ({filteredNeighborhoods.length - visibleCount})
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}
