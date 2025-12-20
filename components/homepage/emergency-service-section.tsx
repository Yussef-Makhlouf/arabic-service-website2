import { Phone, Clock, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function EmergencyServiceSection() {
  return (
    <section className="py-16 md:py-24 bg-destructive/5 border-y-4 border-destructive/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Alert Header */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
            <span className="text-destructive font-bold text-sm uppercase tracking-wider">خدمة الطوارئ</span>
            <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" />
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">هل تعاني من تسريب مياه؟</h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              نصلك في أقل من <span className="text-destructive font-bold">30 دقيقة</span>
            </p>
            <p className="text-lg text-muted-foreground">فريق طوارئ متخصص متاح 24/7 لحل مشاكل التسريب الفورية</p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-background rounded-xl border-2 border-border">
              <div className="w-14 h-14 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="font-bold text-foreground mb-2">استجابة فورية</h3>
              <p className="text-sm text-muted-foreground">نصلك في أقل من 30 دقيقة في معظم أحياء الرياض</p>
            </div>

            <div className="text-center p-6 bg-background rounded-xl border-2 border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">متاح 24/7</h3>
              <p className="text-sm text-muted-foreground">خدمة طوارئ على مدار الساعة طوال أيام الأسبوع</p>
            </div>

            <div className="text-center p-6 bg-background rounded-xl border-2 border-border">
              <div className="w-14 h-14 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-success" />
              </div>
              <h3 className="font-bold text-foreground mb-2">ضمان مكتوب</h3>
              <p className="text-sm text-muted-foreground">جميع أعمال الطوارئ مشمولة بضمان كتابي</p>
            </div>

            <div className="text-center p-6 bg-background rounded-xl border-2 border-border">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-foreground mb-2">فحص فوري</h3>
              <p className="text-sm text-muted-foreground">كشف وتحديد مصدر التسريب باستخدام أحدث الأجهزة</p>
            </div>
          </div>

          {/* Emergency Types */}
          <div className="mb-12 p-8 bg-background rounded-2xl border-2 border-border">
            <h3 className="text-2xl font-bold text-center mb-6">نتعامل مع جميع حالات الطوارئ:</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-foreground">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                <span>تسريب مياه الأمطار من الأسطح</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                <span>تسريب خزانات المياه الأرضية والعلوية</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                <span>تسرب من الحمامات والمطابخ</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                <span>تصدعات وشروخ تسبب تسريب</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                <span>رطوبة وعفن في الجدران</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-destructive rounded-full mt-2" />
                <span>مشاكل عزل قديم فاشل</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+966507067378">
              <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-lg px-8 py-6 h-auto">
                <Phone className="w-6 h-6 ml-2" />
                اتصل الآن: 0507067378
              </Button>
            </a>
            <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 h-auto border-2 bg-transparent">
                <svg className="w-6 h-6 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                واتساب فوري
              </Button>
            </a>
          </div>

          {/* Trust Message */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              ✓ فريق مدرب ومعتمد &nbsp;|&nbsp; ✓ معدات متطورة &nbsp;|&nbsp; ✓ أسعار عادلة وشفافة
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
