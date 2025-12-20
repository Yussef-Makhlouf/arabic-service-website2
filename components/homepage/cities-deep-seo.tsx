"use client"

import { MapPin, Clock, CheckCircle, Phone, Search, ChevronDown, Loader2 } from "lucide-react"
import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { neighborhoods, Neighborhood } from "@/lib/data/riyadh-neighborhoods"

const ITEMS_PER_PAGE = 6

export function CitiesDeepSEO() {
  const [activeRegion, setActiveRegion] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE)

  const regions = [
    { id: "all", name: "الكل" },
    { id: "north", name: "شمال الرياض" },
    { id: "south", name: "جنوب الرياض" },
    { id: "east", name: "شرق الرياض" },
    { id: "west", name: "غرب الرياض" },
    { id: "central", name: "وسط الرياض" },
  ]

  // Filter logic
  const filteredNeighborhoods = useMemo(() => {
    let result = neighborhoods

    // Region filter
    if (activeRegion !== "all") {
      result = result.filter(n => n.region === activeRegion)
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase()
      result = result.filter(n => n.name.includes(query) || n.commonProblems.includes(query))
    }

    return result
  }, [activeRegion, searchQuery])

  // Pagination logic
  const visibleNeighborhoods = filteredNeighborhoods.slice(0, visibleCount)
  const hasMore = visibleCount < filteredNeighborhoods.length

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_PAGE)
  }

  const handleRegionChange = (id: string) => {
    setActiveRegion(id)
    setVisibleCount(ITEMS_PER_PAGE) // Reset pagination on filter change
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setVisibleCount(ITEMS_PER_PAGE) // Reset pagination on search
  }

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 p-20 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 p-28 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 hover:bg-primary/20 transition-colors cursor-default">
            <MapPin className="w-4 h-4" />
            تغطية شاملة لأكثر من 150 حي
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
            خدمات عزل الأسطح في <span className="text-primary">جميع أحياء الرياض</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ابحث عن حيك وتعرف على الحلول المخصصة لمشاكل العزل في منطقتك.
            فرقنا موزعة استراتيجياً لضمان أسرع استجابة.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="ابحث عن اسم الحي (مثال: الملقا، النرجس...)"
              className="pr-12 h-14 text-lg rounded-2xl border-2 hover:border-primary/50 focus:border-primary transition-all shadow-sm"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Region Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => handleRegionChange(region.id)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 text-sm md:text-base ${activeRegion === region.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
                  }`}
              >
                {region.name}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-muted-foreground text-sm">
            يتم عرض {visibleNeighborhoods.length} من أصل {filteredNeighborhoods.length} حي
          </div>
        </div>

        {/* Neighborhoods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-12">
          {visibleNeighborhoods.map((item) => (
            <div
              key={item.id}
              className="group bg-card hover:bg-accent/5 rounded-2xl border border-border hover:border-primary/30 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.name}</h3>
                </div>
                <span className="text-xs font-medium px-2 py-1 bg-muted rounded-md text-muted-foreground">
                  {regions.find(r => r.id === item.region)?.name}
                </span>
              </div>

              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 p-2 rounded-lg">
                  <Clock className="w-4 h-4 text-success" />
                  <span>وصول خلال: <span className="font-semibold text-foreground">{item.responseTime}</span></span>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">المشاكل الشائعة</p>
                  <p className="text-sm font-medium text-foreground leading-relaxed line-clamp-2" title={item.commonProblems}>{item.commonProblems}</p>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">الحل الموصى به</p>
                  <p className="text-sm font-bold text-primary">{item.recommendedInsulation}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.specialties.slice(0, 2).map((spec, idx) => (
                    <span key={idx} className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-md text-foreground/80">
                      <CheckCircle className="w-3 h-3 text-success" />
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50">
                <Button
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  variant="outline"
                  onClick={() => {
                    const message = `السلام عليكم، أرغب في طلب خدمة عزل في *${item.name}* (${regions.find(r => r.id === item.region)?.name}).\nالمشكلة: ${item.commonProblems}`
                    window.open(`https://wa.me/966507067378?text=${encodeURIComponent(message)}`, '_blank')
                  }}
                >
                  <Phone className="w-4 h-4 ml-2" />
                  طلب خدمة في {item.name}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNeighborhoods.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">لا توجد نتائج مطابقة</h3>
            <p className="text-muted-foreground">جرب البحث باسم حي آخر أو تصفح المناطق</p>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <Button
              variant="ghost"
              size="lg"
              onClick={handleLoadMore}
              className="min-w-[200px] text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl border-2 border-dashed border-border hover:border-primary/30"
            >
              عرض المزيد من الأحياء
              <ChevronDown className="w-5 h-5 mr-2 animate-bounce" />
            </Button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-8 md:p-12 bg-primary text-primary-foreground rounded-3xl relative overflow-hidden max-w-5xl mx-auto shadow-2xl">
          <div className="absolute top-0 right-0 p-32 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 p-32 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">لم تجد حيك في القائمة؟</h3>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              لا تقلق! نحن نغطي كافة مناطق الرياض وما حولها. أسطولنا المتحرك جاهز لخدمتك أينما كنت.
              تواصل معنا الآن لتحديد موعد الزيارة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="xl"
                className="font-bold bg-primary text-primary-foreground min-w-[200px] h-14 text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                onClick={() => window.location.href = 'tel:0507067378'}
              >
                <Phone className="w-5 h-5 ml-2" />
                اتصل الآن
              </Button>
              <Button
                size="xl"
                className="font-bold bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 min-w-[200px] h-14 text-lg backdrop-blur-sm"
                onClick={() => window.open('https://wa.me/966507067378', '_blank')}
              >
                <CheckCircle className="w-5 h-5 ml-2" />
                واتساب مباشر
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
