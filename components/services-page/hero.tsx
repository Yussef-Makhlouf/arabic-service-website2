import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Shield, Award, Clock, CheckCircle, Star } from "lucide-react"

const stats = [
  { value: "+15", label: "سنة خبرة", icon: Award },
  { value: "+5000", label: "مشروع منجز", icon: CheckCircle },
  { value: "15 سنة", label: "ضمان شامل", icon: Shield },
  { value: "24/7", label: "دعم فني", icon: Clock },
]

const trustBadges = [
  "معتمد من هيئة المواصفات السعودية",
  "مواد أمريكية وأوروبية",
  "فريق فني محترف",
]

export function ServicesPageHero() {
  return (
    <section className="relative min-h-[700px] flex items-center bg-gradient-to-br from-[#59478a] via-[#4a3a75] to-[#3d2f63] text-white overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* المحتوى */}
          <div className="space-y-8 text-center lg:text-right">
            {/* شارة الثقة */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full shadow-lg">
              <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
              <span className="text-sm md:text-base font-medium text-white/95">الشركة الأولى في عزل الأسطح بالرياض</span>
            </div>

            {/* العنوان الرئيسي */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-xl mb-4">
                خدمات عزل الأسطح
                <span className="block text-amber-300 mt-2">في الرياض والخرج</span>
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
                دليلك الشامل لجميع خدمات العزل المائي والحراري.
                <strong className="text-white"> عزل فوم، عزل مائي، كشف تسربات، وعزل خزانات</strong> بخبرة تتجاوز 15 عاماً ومواد معتمدة دولياً وضمان حقيقي يصل إلى 15 سنة.
              </p>
            </div>

            {/* شارات الثقة */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {trustBadges.map((badge, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm border border-white/10"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  {badge}
                </span>
              ))}
            </div>

            {/* أزرار CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-3 text-lg h-16 px-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white text-[#59478a] hover:bg-gray-100 font-bold"
                asChild
              >
                <a href="tel:+966507067378">
                  <Phone className="h-6 w-6" />
                  اتصل الآن: 0507067378
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-3 text-lg h-16 px-8 border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-6 w-6" />
                  واتساب للاستشارة
                </a>
              </Button>
            </div>

            {/* الإحصائيات */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/20">
              {stats.map((stat, i) => {
                const Icon = stat.icon
                return (
                  <div key={i} className="text-center p-3">
                    <Icon className="w-6 h-6 mx-auto mb-2 text-amber-400" />
                    <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* الصورة */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/cover3.webp"
                alt="خدمات عزل الأسطح في الرياض - عزل فوم وعزل مائي احترافي"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#59478a]/60 via-transparent to-transparent"></div>

              {/* بطاقة عائمة */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-lg">ضمان 15 سنة مكتوب</div>
                    <div className="text-sm text-muted-foreground">على جميع أعمال العزل والمواد</div>
                  </div>
                </div>
              </div>
            </div>

            {/* زخرفة */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
