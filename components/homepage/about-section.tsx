import { Shield, Award, Users, Clock, CheckCircle2, BadgeCheck, Wrench, Timer } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const features = [
    { icon: BadgeCheck, text: "معتمدون من الهيئة السعودية للمهندسين" },
    { icon: Timer, text: "خبرة تزيد عن 15 عاماً في المجال" },
    { icon: Wrench, text: "استخدام أحدث التقنيات والمواد المعتمدة" },
    { icon: Users, text: "فريق عمل محترف ومدرب" },
    { icon: Shield, text: "ضمان شامل يصل إلى 10 سنوات" },
    { icon: Award, text: "أسعار تنافسية وعروض مميزة" },
    { icon: Clock, text: "خدمة عملاء متميزة على مدار الساعة" },
    { icon: CheckCircle2, text: "التزام كامل بمواعيد التسليم" },
  ]

  const stats = [
    { value: "15+", label: "سنوات خبرة" },
    { value: "5000+", label: "مشروع منجز" },
    { value: "10", label: "سنوات ضمان" },
    { value: "24/7", label: "دعم فني" },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">من نحن</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            شركة رائدة في مجال عزل الأسطح والخزانات بخبرة تتجاوز 15 عاماً
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/professional-roof-insulation-work-in-saudi-arabia.jpg"
                  alt="فريق عمل شركة العزل المتقدم"
                  width={600}
                  height={450}
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-card border border-border rounded-xl p-4 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">+15</p>
                    <p className="text-sm text-foreground/70"> عام من الخبره</p>
                  </div>
                </div>
              </div>

              

              {/* Decorative Elements */}
              <div className="absolute -z-10 -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-5 text-foreground/90 leading-relaxed">
              <p className="text-lg">
                شركة العزل المتقدم هي إحدى الشركات الرائدة في مجال عزل الأسطح والخزانات في منطقة الرياض والخرج. تأسست
                الشركة منذ أكثر من 15 عاماً برؤية واضحة: تقديم أفضل حلول العزل باستخدام أحدث التقنيات والمواد المعتمدة
                عالمياً.
              </p>

              <p className="text-lg">
                نحن معتمدون من الهيئة السعودية للمهندسين، ونلتزم بأعلى معايير الجودة والسلامة المهنية في جميع أعمالنا.
                فريق عملنا يتكون من مهندسين وفنيين متخصصين حاصلين على تدريبات معتمدة في أحدث تقنيات العزل المائي
                والحراري.
              </p>

              <p className="text-lg">
                خلال مسيرتنا، قمنا بتنفيذ آلاف المشاريع السكنية والتجارية بنجاح تام، وحظينا بثقة عملائنا الكرام الذين
                يشهدون على جودة أعمالنا والتزامنا بالمواعيد.
              </p>
            </div>

            {/* Features Grid */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-heading text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                لماذا نحن الخيار الأفضل؟
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground/90 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  )
}
