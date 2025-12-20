import { AlertCircle, TrendingUp, Shield, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingTransparencySection() {
  const factors = [
    {
      icon: Target,
      title: "مساحة السطح",
      description: "كلما زادت المساحة، انخفض سعر المتر المربع الواحد",
      impact: "عالي",
    },
    {
      icon: TrendingUp,
      title: "نوع العزل المختار",
      description: "الفوم أغلى من الأسمنتي، لكنه أطول عمراً وأعلى كفاءة",
      impact: "عالي جداً",
    },
    {
      icon: Shield,
      title: "حالة السطح",
      description: "الأسطح التي تحتاج معالجات أو تسوية قد تتطلب تكاليف إضافية",
      impact: "متوسط",
    },
    {
      icon: AlertCircle,
      title: "الموقع والوصول",
      description: "سهولة الوصول للسطح وارتفاع المبنى يؤثر على التكلفة",
      impact: "منخفض",
    },
  ]

  const priceRanges = [
    {
      type: "العزل الأسمنتي",
      range: "50-70 ريال/م²",
      best: "الميزانيات المحدودة",
      note: "مناسب للعزل الأساسي والمشاريع الصغيرة",
    },
    {
      type: "العزل المائي بالبيتومين",
      range: "80-110 ريال/م²",
      best: "حماية مائية قوية",
      note: "ممتاز للأقبية والخزانات",
    },
    {
      type: "عزل الفوم (بولي يوريثان)",
      range: "140-180 ريال/م²",
      best: "الأداء الأمثل طويل الأمد",
      note: "الأعلى كفاءة والأطول عمراً (20+ سنة)",
      recommended: true,
    },
    {
      type: "كشف التسربات",
      range: "300-800 ريال (حسب المساحة)",
      best: "التشخيص الدقيق",
      note: "يشمل التقرير والتوصيات",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            شفافية كاملة في التسعير
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            كم تكلفة العزل؟ دعنا نوضح لك
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            نؤمن بالشفافية الكاملة - إليك ما يحدد الأسعار وكيف تحصل على أفضل قيمة مقابل استثمارك
          </p>
        </div>

        {/* Factors That Affect Pricing */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">العوامل التي تؤثر على التكلفة</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {factors.map((factor, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <factor.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{factor.title}</h4>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{factor.description}</p>
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-bold ${
                    factor.impact === "عالي جداً" || factor.impact === "عالي"
                      ? "bg-destructive/10 text-destructive"
                      : factor.impact === "متوسط"
                        ? "bg-warning/10 text-warning"
                        : "bg-success/10 text-success"
                  }`}
                >
                  تأثير {factor.impact}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Price Ranges */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">نطاقات الأسعار التقريبية</h3>
          <div className="space-y-4">
            {priceRanges.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl border-2 transition-all ${
                  item.recommended
                    ? "bg-primary/5 border-primary shadow-lg"
                    : "bg-background border-border hover:border-primary/30"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-xl font-bold text-foreground">{item.type}</h4>
                      {item.recommended && (
                        <span className="px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full font-bold">
                          الأكثر طلباً
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">
                      مثالي لـ: <span className="font-semibold text-foreground">{item.best}</span>
                    </p>
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                  <div className="md:text-left">
                    <p className="text-2xl md:text-3xl font-bold text-primary">{item.range}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Warning About Cheap Services */}
        <div className="max-w-4xl mx-auto mb-12 p-8 bg-warning/10 border-2 border-warning/30 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-warning/20 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-warning" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">احذر من الأسعار المنخفضة جداً!</h3>
              <div className="space-y-2 text-foreground">
                <p className="leading-relaxed">
                  <strong>السعر المنخفض جداً قد يعني:</strong>
                </p>
                <ul className="space-y-1 mr-6">
                  <li>• استخدام مواد رديئة أو مغشوشة</li>
                  <li>• عمالة غير مدربة أو غير مؤهلة</li>
                  <li>• عدم وجود ضمان حقيقي</li>
                  <li>• تكاليف إصلاح باهظة لاحقاً</li>
                </ul>
                <p className="mt-4 font-semibold text-warning">
                  استثمارك في عزل جيد يدوم 15-20 سنة أفضل من توفير بضع مئات الريالات اليوم وخسارة آلاف الريالات غداً
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How to Get Best Value */}
        <div className="max-w-4xl mx-auto p-8 bg-success/5 border-2 border-success/30 rounded-2xl mb-12">
          <h3 className="text-2xl font-bold text-center mb-6">كيف تحصل على أفضل قيمة؟</h3>
          <div className="grid md:grid-cols-2 gap-4 text-foreground">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span>اختر المواد عالية الجودة من البداية</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span>تأكد من الضمان المكتوب</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span>اطلب معاينة موقع مجانية</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span>قارن بين عروض الشركات المعتمدة</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span>احسب التوفير على المدى الطويل</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <span>راجع تقييمات العملاء السابقين</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">احصل على عرض سعر مخصص لمشروعك</h3>
          <p className="text-muted-foreground mb-6">معاينة مجانية وعرض سعر تفصيلي بدون التزام</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              احجز معاينة مجانية الآن
            </Button>
            <Button size="lg" variant="outline">
              تحدث مع مستشار
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
