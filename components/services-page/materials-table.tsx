"use client"

import { useState } from "react"
import { Check, X, Info } from "lucide-react"

const allMaterials = [
  {
    category: "العزل المائي",
    materials: [
      {
        name: "البيتومين المعدل APP",
        waterproof: true,
        heatInsulation: false,
        uv: true,
        lifespan: "15-20 سنة",
        cost: "متوسط",
        bestFor: "الأسطح المسطحة",
      },
      {
        name: "البيتومين المعدل SBS",
        waterproof: true,
        heatInsulation: false,
        uv: true,
        lifespan: "20-25 سنة",
        cost: "متوسط-مرتفع",
        bestFor: "المناطق الباردة",
      },
      {
        name: "أغشية TPO",
        waterproof: true,
        heatInsulation: true,
        uv: true,
        lifespan: "25-30 سنة",
        cost: "مرتفع",
        bestFor: "المباني التجارية",
      },
      {
        name: "أغشية EPDM",
        waterproof: true,
        heatInsulation: false,
        uv: true,
        lifespan: "30+ سنة",
        cost: "مرتفع",
        bestFor: "الأسطح الكبيرة",
      },
    ],
  },
  {
    category: "العزل الحراري",
    materials: [
      {
        name: "فوم بولي يوريثان 35",
        waterproof: true,
        heatInsulation: true,
        uv: false,
        lifespan: "25+ سنة",
        cost: "متوسط-مرتفع",
        bestFor: "الفلل والقصور",
      },
      {
        name: "فوم بولي يوريثان 40",
        waterproof: true,
        heatInsulation: true,
        uv: false,
        lifespan: "25+ سنة",
        cost: "مرتفع",
        bestFor: "المصانع والمستودعات",
      },
      {
        name: "صوف صخري",
        waterproof: false,
        heatInsulation: true,
        uv: true,
        lifespan: "40+ سنة",
        cost: "متوسط",
        bestFor: "العزل الصوتي أيضاً",
      },
      {
        name: "بوليسترين XPS",
        waterproof: true,
        heatInsulation: true,
        uv: false,
        lifespan: "25+ سنة",
        cost: "متوسط",
        bestFor: "الأساسات والأسطح",
      },
    ],
  },

]

export function MaterialsComparisonTable() {
  const [activeCategory, setActiveCategory] = useState("الكل")

  const categories = ["الكل", ...allMaterials.map((c) => c.category)]
  const displayedMaterials =
    activeCategory === "الكل"
      ? allMaterials.flatMap((c) => c.materials)
      : allMaterials.find((c) => c.category === activeCategory)?.materials || []

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            جدول مقارنة شامل لجميع مواد العزل
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            مقارنة تفصيلية لجميع المواد المستخدمة في خدماتنا لمساعدتك في اختيار المادة الأنسب لاحتياجاتك
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto rounded-xl border border-border bg-background shadow-sm">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="text-right p-4 font-bold sticky right-0 bg-primary z-10">المادة</th>
                <th className="text-center p-4 font-bold">عزل مائي</th>
                <th className="text-center p-4 font-bold">عزل حراري</th>
                <th className="text-center p-4 font-bold">مقاومة UV</th>
                <th className="text-right p-4 font-bold">العمر الافتراضي</th>
                <th className="text-right p-4 font-bold">التكلفة</th>
                <th className="text-right p-4 font-bold">الأنسب لـ</th>
              </tr>
            </thead>
            <tbody>
              {displayedMaterials.map((material, idx) => (
                <tr
                  key={idx}
                  className={`${idx % 2 === 0 ? "bg-background" : "bg-muted/30"} hover:bg-accent/50 transition-colors`}
                >
                  <td className="p-4 font-medium text-foreground sticky right-0 bg-inherit z-10 border-l border-border">
                    {material.name}
                  </td>
                  <td className="p-4 text-center">
                    {material.waterproof ? (
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {material.heatInsulation ? (
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {material.uv ? (
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-muted-foreground">{material.lifespan}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        material.cost === "متوسط"
                          ? "bg-accent text-foreground"
                          : material.cost === "متوسط-مرتفع"
                            ? "bg-amber-100 text-amber-800"
                            : material.cost === "مرتفع"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {material.cost}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground text-sm">{material.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>متوفر</span>
          </div>
          <div className="flex items-center gap-2">
            <X className="h-4 w-4 text-muted-foreground" />
            <span>غير متوفر</span>
          </div>
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-primary" />
            <span>الأسعار تقريبية وتختلف حسب المساحة والموقع</span>
          </div>
        </div>
      </div>
    </section>
  )
}
