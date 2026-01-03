import { Check, X, Sparkles } from "lucide-react"

export function ComparisonTable() {
  const features = [
    { feature: "عزل مائي وحراري معاً", foam: true, traditional: false },
    { feature: "طبقة متصلة بدون فواصل", foam: true, traditional: false },
    { feature: "سرعة التنفيذ (يوم واحد)", foam: true, traditional: false },
    { feature: "توفير 40% من الكهرباء", foam: true, traditional: false },
    { feature: "مقاوم للأشعة فوق البنفسجية", foam: true, traditional: true },
    { feature: "خفيف الوزن", foam: true, traditional: false },
    { feature: "تكلفة أولية منخفضة", foam: false, traditional: true },
    { feature: "ضمان طويل الأمد (15+ سنة)", foam: true, traditional: false },
    { feature: "لا يحتاج صيانة دورية", foam: true, traditional: false },
  ]

  return (
    <section className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            مقارنة أنواع العزل
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            عزل الفوم vs العزل التقليدي
          </h2>
          <p className="text-muted-foreground">
            اكتشف الفرق بين عزل الفوم البولي يوريثان والعزل التقليدي واختر الأنسب لمنزلك
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-primary text-primary-foreground">
              <div className="p-4 md:p-6 font-medium">المميزات</div>
              <div className="p-4 md:p-6 text-center border-r border-white/10">
                <div className="flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4 text-secondary" />
                  <span className="font-bold">عزل الفوم</span>
                </div>
                <span className="text-xs text-white/70">(البولي يوريثان)</span>
              </div>
              <div className="p-4 md:p-6 text-center border-r border-white/10">
                <span className="font-bold">العزل التقليدي</span>
                <span className="block text-xs text-white/70">(البيتومين/الرولات)</span>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-border">
              {features.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-card' : 'bg-muted/30'}`}
                >
                  <div className="p-4 md:p-5 text-sm md:text-base text-foreground">
                    {item.feature}
                  </div>
                  <div className="p-4 md:p-5 flex justify-center border-r border-border">
                    {item.foam ? (
                      <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-success" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                        <X className="h-5 w-5 text-destructive" />
                      </div>
                    )}
                  </div>
                  <div className="p-4 md:p-5 flex justify-center border-r border-border">
                    {item.traditional ? (
                      <div className="w-8 h-8 bg-success/10 rounded-full flex items-center justify-center">
                        <Check className="h-5 w-5 text-success" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                        <X className="h-5 w-5 text-destructive" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Table Footer - Recommendation */}
            <div className="bg-secondary/10 p-6 border-t border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-right">
                  <p className="font-bold text-foreground">توصيتنا: عزل الفوم البولي يوريثان</p>
                  <p className="text-sm text-muted-foreground">الخيار الأمثل لمناخ السعودية الحار</p>
                </div>
                <a
                  href="tel:+966507067378"
                  className="px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  احصل على عرض سعر
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-bold text-foreground mb-2">متى نختار الفوم؟</h3>
            <p className="text-sm text-muted-foreground">
              للأسطح الخرسانية والشينكو، والمباني التي تحتاج عزل حراري ومائي معاً، وعند الرغبة في توفير فواتير الكهرباء.
            </p>
          </div>
          <div className="bg-card p-6 rounded-xl border border-border">
            <h3 className="font-bold text-foreground mb-2">متى نختار التقليدي؟</h3>
            <p className="text-sm text-muted-foreground">
              للأسطح المبلطة، والميزانيات المحدودة، أو عند الحاجة لعزل مائي فقط دون العزل الحراري.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
