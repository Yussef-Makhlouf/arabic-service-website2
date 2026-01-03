import Image from "next/image"
import { Award, Shield, Users, Clock, CheckCircle } from "lucide-react"

export function AboutSection() {
  const stats = [
    { value: "15+", label: "سنة خبرة", icon: Clock },
    { value: "5000+", label: "مشروع منجز", icon: Award },
    { value: "15", label: "سنة ضمان", icon: Shield },
    { value: "50+", label: "فني متخصص", icon: Users },
  ]

  const highlights = [
    "معتمدون من الهيئة السعودية للمهندسين",
    "مواد عزل مطابقة لمعايير SASO",
    "فريق فني سعودي مدرب",
    "سرعة في التنفيذ والالتزام بالمواعيد",
  ]

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                من نحن
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                شركة العزل المتقدم
                <span className="block text-secondary mt-2">خبرة تمتد لأكثر من 15 عاماً</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                تأسست شركة العزل المتقدم في <strong className="text-foreground">الرياض</strong> عام 2009 بهدف تقديم حلول عزل متكاملة تواكب التحديات المناخية في المملكة العربية السعودية.
              </p>
              <p>
                نتخصص في <strong className="text-foreground">عزل الفوم البولي يوريثان</strong> والعزل المائي وكشف التسربات، ونخدم القطاعات السكنية والتجارية والصناعية في الرياض والخرج والمناطق المحيطة.
              </p>
            </div>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 bg-success/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="text-center p-4 bg-muted/50 rounded-xl border border-border"
                  >
                    <Icon className="h-5 w-5 text-secondary mx-auto mb-2" />
                    <div className="text-xl md:text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/workerin-protective-suit-spraying-wall-foam.webp"
                alt="فريق شركة العزل المتقدم أثناء تنفيذ عزل فوم احترافي"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 right-6 left-6">
                <p className="text-white font-bold text-lg">جودة عمل بمعايير عالمية</p>
                <p className="text-white/80 text-sm">الرياض والخرج</p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-secondary text-secondary-foreground p-4 rounded-xl shadow-lg">
              <div className="text-2xl md:text-3xl font-bold">15+</div>
              <div className="text-sm">سنة خبرة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
