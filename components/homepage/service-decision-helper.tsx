"use client"

import { useState } from "react"
import { Building2, Home, Factory, ThermometerSun, Droplets, Search, ArrowLeft, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type PropertyType = "residential" | "commercial" | "industrial" | null
type ProblemType = "heat" | "leak" | "both" | null

export function ServiceDecisionHelper() {
  const [step, setStep] = useState(1)
  const [propertyType, setPropertyType] = useState<PropertyType>(null)
  const [problemType, setProblemType] = useState<ProblemType>(null)

  const propertyTypes = [
    { id: "residential", label: "منزل / فيلا", icon: Home, desc: "سكني" },
    { id: "commercial", label: "تجاري / مكاتب", icon: Building2, desc: "تجاري" },
    { id: "industrial", label: "مستودع / مصنع", icon: Factory, desc: "صناعي" },
  ]

  const problemTypes = [
    { id: "heat", label: "حرارة عالية", icon: ThermometerSun, desc: "ارتفاع فواتير الكهرباء" },
    { id: "leak", label: "تسرب مياه", icon: Droplets, desc: "رطوبة أو تسربات" },
    { id: "both", label: "كلاهما", icon: Search, desc: "عزل شامل" },
  ]

  const getRecommendation = () => {
    if (problemType === "heat") {
      return {
        service: "عزل فوم حراري",
        slug: "foam-insulation",
        description: "نرشح لك عزل الفوم البولي يوريثان لتوفير الطاقة وتقليل فواتير الكهرباء بنسبة تصل إلى 40%",
      }
    }
    if (problemType === "leak") {
      return {
        service: "عزل مائي",
        slug: "waterproofing",
        description: "نرشح لك العزل المائي المتخصص لحماية المبنى من تسربات المياه والرطوبة",
      }
    }
    return {
      service: "عزل فوم شامل",
      slug: "foam-insulation",
      description: "نرشح لك عزل الفوم البولي يوريثان لأنه يجمع بين العزل المائي والحراري في طبقة واحدة",
    }
  }

  const reset = () => {
    setStep(1)
    setPropertyType(null)
    setProblemType(null)
  }

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
              مساعد اختيار الخدمة
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              ما هي الخدمة المناسبة لك؟
            </h2>
            <p className="text-muted-foreground">
              أجب على سؤالين بسيطين لنساعدك في اختيار الحل الأمثل
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 rounded-full transition-colors ${s <= step ? "bg-secondary" : "bg-border"
                  }`}
              />
            ))}
          </div>

          {/* Steps */}
          <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-center">ما نوع العقار؟</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {propertyTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <button
                        key={type.id}
                        onClick={() => {
                          setPropertyType(type.id as PropertyType)
                          setStep(2)
                        }}
                        className={`p-6 rounded-xl border-2 transition-all text-center hover:border-secondary hover:bg-secondary/5 ${propertyType === type.id
                            ? "border-secondary bg-secondary/5"
                            : "border-border"
                          }`}
                      >
                        <Icon className="h-10 w-10 mx-auto mb-3 text-secondary" />
                        <div className="font-bold text-foreground">{type.label}</div>
                        <div className="text-sm text-muted-foreground">{type.desc}</div>
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-center">ما المشكلة الرئيسية؟</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {problemTypes.map((type) => {
                    const Icon = type.icon
                    return (
                      <button
                        key={type.id}
                        onClick={() => {
                          setProblemType(type.id as ProblemType)
                          setStep(3)
                        }}
                        className={`p-6 rounded-xl border-2 transition-all text-center hover:border-secondary hover:bg-secondary/5 ${problemType === type.id
                            ? "border-secondary bg-secondary/5"
                            : "border-border"
                          }`}
                      >
                        <Icon className="h-10 w-10 mx-auto mb-3 text-secondary" />
                        <div className="font-bold text-foreground">{type.label}</div>
                        <div className="text-sm text-muted-foreground">{type.desc}</div>
                      </button>
                    )
                  })}
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-sm text-muted-foreground hover:text-foreground mx-auto block"
                >
                  ← العودة للسؤال السابق
                </button>
              </div>
            )}

            {step === 3 && problemType && (
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                  <Search className="h-8 w-8 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    توصيتنا: {getRecommendation().service}
                  </h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    {getRecommendation().description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold gap-2">
                    <a href="tel:+966507067378">
                      <Phone className="h-5 w-5" />
                      احصل على معاينة مجانية
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="gap-2">
                    <Link href={`/services/${getRecommendation().slug}`}>
                      تفاصيل الخدمة
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <button
                  onClick={reset}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  إعادة الاختبار
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
