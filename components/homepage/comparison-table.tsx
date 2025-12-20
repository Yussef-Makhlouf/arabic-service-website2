import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"

export function ComparisonTable() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <SectionHeader
          badge="مقارنة شاملة ومفصلة"
          title="جدول مقارنة أنظمة العزل المختلفة"
          subtitle="مقارنة تفصيلية بين جميع أنواع العزل لمساعدتك على اتخاذ القرار الصحيح بناءً على احتياجاتك وميزانيتك"
        />

        {/* Mobile Scroll Indicator */}
        <p className="text-sm text-muted-foreground text-center mb-6 md:hidden">
          ← اسحب لمشاهدة جميع الخيارات →
        </p>

        {/* Responsive Table Container */}
        <div className="overflow-x-auto -mx-4 px-4 scroll-smooth">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden border border-border rounded-2xl shadow-lg">
              <table className="min-w-full divide-y divide-border">
                <thead className="bg-muted sticky top-0 z-10">
                  <tr>
                    <th className="sticky right-0 bg-muted px-6 py-4 text-right text-sm font-bold text-foreground border-l border-border">
                      معايير المقارنة
                    </th>
                    <th className="px-6 py-4 text-center bg-primary/10 border-l border-primary/20">
                      <div className="flex flex-col items-center gap-2">
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">
                          الأفضل ⭐
                        </span>
                        <span className="font-bold text-base">عزل الفوم</span>
                        <span className="text-xs text-muted-foreground">(بولي يوريثان)</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center border-l border-border">
                      <div className="flex flex-col items-center gap-1">
                        <span className="font-bold text-base">عزل مائي</span>
                        <span className="text-xs text-muted-foreground">(للأسطح)</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-background divide-y divide-border">
                  {/* Row: Price per meter */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="sticky right-0 bg-background px-6 py-4 font-semibold text-foreground border-l border-border">
                      سعر المتر (ريال)
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 border-l border-primary/10">
                      <span className="font-bold text-foreground">70-120 ريال</span>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <span className="text-foreground">50-90 ريال</span>
                    </td>
                  </tr>

                  {/* Row: Insulation Type */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="sticky right-0 bg-background px-6 py-4 font-semibold text-foreground border-l border-border">
                      نوع العزل
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 border-l border-primary/10">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-semibold">حراري + مائي</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <span>مائي فقط</span>
                    </td>
                  </tr>

                  {/* Row: Thermal Insulation */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="sticky right-0 bg-background px-6 py-4 font-semibold text-foreground border-l border-border">
                      العزل الحراري
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 border-l border-primary/10">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-bold text-success">ممتاز جداً</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 text-destructive" />
                        <span className="text-muted-foreground">ضعيف</span>
                      </div>
                    </td>
                  </tr>

                  {/* Row: Moisture Resistance */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="sticky right-0 bg-background px-6 py-4 font-semibold text-foreground border-l border-border">
                      مقاومة الرطوبة
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 border-l border-primary/10">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-bold text-success">ممتاز 100%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-success" />
                        <span>ممتاز</span>
                      </div>
                    </td>
                  </tr>

                  {/* Row: Lifespan */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="sticky right-0 bg-background px-6 py-4 font-semibold text-foreground border-l border-border">
                      العمر الافتراضي
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 border-l border-primary/10">
                      <span className="font-bold text-success">15-25 سنة</span>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <span>10-15 سنة</span>
                    </td>
                  </tr>

                  {/* Row: Maintenance */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="sticky right-0 bg-background px-6 py-4 font-semibold text-foreground border-l border-border">
                      الصيانة
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 border-l border-primary/10">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-bold text-success">منخفض جداً</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <span>متوسط</span>
                    </td>
                  </tr>

                  {/* Row: Installation Speed */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="sticky right-0 bg-background px-6 py-4 font-semibold text-foreground border-l border-border">
                      سرعة التنفيذ
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 border-l border-primary/10">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-bold text-success">سريع جداً (1-2 يوم)</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <span>متوسط (2-3 أيام)</span>
                    </td>
                  </tr>

                  {/* Row: Suitable for Building Types */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="sticky right-0 bg-background px-6 py-4 font-semibold text-foreground border-l border-border">
                      مناسب لأي نوع مبنى
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 border-l border-primary/10">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-bold text-success">جميع الأنواع</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <span>الأسطح المستوية</span>
                    </td>
                  </tr>

                  {/* Row: Energy Savings */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="sticky right-0 bg-background px-6 py-4 font-semibold text-foreground border-l border-border">
                      نسبة توفير الطاقة
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 border-l border-primary/10">
                      <div className="flex items-center justify-center gap-2">
                        <Check className="w-5 h-5 text-success" />
                        <span className="font-bold text-success">40-60%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <span className="text-muted-foreground">5-10%</span>
                    </td>
                  </tr>

                  {/* Row: Warranty */}
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="sticky right-0 bg-background px-6 py-4 font-semibold text-foreground border-l border-border">
                      الضمان
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 border-l border-primary/10">
                      <span className="font-bold text-success">10 سنوات</span>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <span>5-7 سنوات</span>
                    </td>
                  </tr>

                  {/* Row: Overall Rating */}
                  <tr className="hover:bg-muted/30 transition-colors bg-muted/50">
                    <td className="sticky right-0 bg-muted px-6 py-4 font-bold text-foreground border-l border-border">
                      التقييم الإجمالي
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/10 border-l border-primary/20">
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-500 text-xl">
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="block mt-1 text-sm font-bold">5/5</span>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-border">
                      <div className="flex items-center justify-center gap-1">
                        {[...Array(4)].map((_, i) => (
                          <span key={i} className="text-yellow-500 text-xl">
                            ⭐
                          </span>
                        ))}
                        <span className="text-gray-300 text-xl">☆</span>
                      </div>
                      <span className="block mt-1 text-sm">4/5</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Helper Text */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="p-6 bg-primary/5 rounded-xl border-2 border-primary/20">
            <h3 className="font-bold text-lg mb-3 text-foreground">كيف تقرأ الجدول؟</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span>العمود المميز باللون الأزرق هو الخيار الأكثر توصية من خبرائنا</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span>قارن الأسعار مع العمر الافتراضي للحصول على أفضل قيمة مقابل المال</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <span>انتبه لنوع العزل المطلوب (حراري أو مائي أو كلاهما) حسب احتياجات مبناك</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4 text-lg">
            غير متأكد من الخيار المناسب؟ احصل على استشارة مجانية من خبرائنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              واتساب: استشارة فورية
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              اطلب زيارة فنية مجانية
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
