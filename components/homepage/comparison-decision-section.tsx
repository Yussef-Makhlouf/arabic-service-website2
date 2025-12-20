import { Check, TrendingUp, Clock, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ComparisonDecisionSection() {
  const comparisonData = [
    {
      type: "عزل الفوم (البولي يوريثان)",
      recommended: true,
      bestFor: ["الأسطح المعرضة للشمس المباشرة", "المباني التجارية", "الفلل والقصور"],
      climate: "ممتاز للمناخ الحار (الرياض)",
      costRange: 4,
      lifespan: "15-25 سنة",
      maintenance: "منخفض جداً",
      features: [
        "عزل حراري ومائي في آن واحد",
        "خفيف الوزن ولا يضيف حمولة",
        "سريع التطبيق والجفاف",
        "مقاوم للعوامل الجوية القاسية",
      ],
      color: "bg-primary/10 border-primary",
    },
    {
      type: "العزل المائي بالبيتومين",
      recommended: false,
      bestFor: ["الأسطح المستوية", "الأقبية والخزانات الأرضية", "المباني السكنية"],
      climate: "جيد للمناخ الحار",
      costRange: 3,
      lifespan: "10-15 سنة",
      maintenance: "متوسط",
      features: ["عزل مائي قوي وموثوق", "مقاومة عالية للتسربات", "تكلفة معتدلة", "يحتاج صيانة دورية"],
      color: "bg-muted border-border",
    },
    {
      type: "العزل الأسمنتي",
      recommended: false,
      bestFor: ["الأسطح الخرسانية", "الحمامات والمطابخ", "المباني القديمة"],
      climate: "مناسب لجميع المناخات",
      costRange: 2,
      lifespan: "8-12 سنة",
      maintenance: "مرتفع",
      features: ["تكلفة اقتصادية", "سهل التطبيق", "يمكن الدهان فوقه", "يحتاج تجديد دوري"],
      color: "bg-muted border-border",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            دليل المقارنة الشامل
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">أي نوع عزل يناسب مبناك؟</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            مقارنة شاملة تساعدك على اتخاذ القرار الصحيح بناءً على نوع المبنى، المناخ، والميزانية
          </p>
        </div>

        {/* Decision Flow Layout - Non-traditional stacked comparison */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 rounded-2xl border-2 ${item.color} transition-all hover:shadow-lg`}
            >
              {/* Recommended Badge */}
              {item.recommended && (
                <div className="absolute -top-3 right-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  الأكثر توصية
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                {/* Left: Type Info */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{item.type}</h3>

                  {/* Best For Cards */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-muted-foreground mb-3">مثالي لـ:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.bestFor.map((use, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-background rounded-lg text-sm border border-border">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Specs Panel */}
                <div className="md:w-64 flex-shrink-0 space-y-4">
                  {/* Climate Suitability */}
                  <div className="p-4 bg-background rounded-xl border border-border">
                    <p className="text-sm text-muted-foreground mb-1">ملائمة المناخ</p>
                    <p className="font-bold text-foreground">{item.climate}</p>
                  </div>

                  {/* Cost Range Visual */}
                  <div className="p-4 bg-background rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">التكلفة</p>
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-2 flex-1 rounded-full ${i < item.costRange ? "bg-primary" : "bg-muted"}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Lifespan */}
                  <div className="p-4 bg-background rounded-xl border border-border">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-muted-foreground">العمر الافتراضي</p>
                      <Clock className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="font-bold text-foreground">{item.lifespan}</p>
                  </div>

                  {/* Maintenance */}
                  <div className="p-4 bg-background rounded-xl border border-border">
                    <p className="text-sm text-muted-foreground mb-1">الصيانة</p>
                    <p className="font-bold text-foreground">{item.maintenance}</p>
                  </div>

                  {/* CTA */}
                  <Button
                    className={`w-full ${item.recommended ? "bg-primary hover:bg-primary/90" : ""}`}
                    variant={item.recommended ? "default" : "outline"}
                  >
                    استشارة مجانية
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">غير متأكد من النوع المناسب؟ تحدث مع خبرائنا الآن</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              اتصل بنا عبر واتساب
            </Button>
            <Button size="lg" variant="outline">
              اطلب زيارة فنية مجانية
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
