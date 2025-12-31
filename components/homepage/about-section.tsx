import { Shield, Award, Users, Clock, CheckCircle2, BadgeCheck, Wrench, Timer, Star, Building, Target, Zap } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const features = [
    { icon: BadgeCheck, text: "معتمدون من الهيئة السعودية للمهندسين" },
    { icon: Timer, text: "خبرة تزيد عن 15 عاماً في المجال" },
    { icon: Wrench, text: "استخدام أحدث التقنيات والمواد المعتمدة" },
    { icon: Users, text: "فريق عمل محترف ومدرب" },
    { icon: Shield, text: "ضمان شامل يصل إلى 15 سنه" },
    { icon: Award, text: "أسعار تنافسية وعروض مميزة" },
    { icon: Clock, text: "خدمة عملاء متميزة على مدار الساعة" },
    { icon: CheckCircle2, text: "التزام كامل بمواعيد التسليم" },
  ]

  return (
    <section id="about" className="py-20 bg-muted overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">من نحن</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
            شركة العزل المتقدم الرائدة والمتخصصة في خدمات عزل الأسطح، عزل الفوم، العزل المائي والحراري، وعزل خزانات المياه في المملكة العربية السعودية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/professional-roof-insulation-work-in-saudi-arabia.webp"
                  alt="فريق عمل شركة العزل المتقدم لخدمات العزل المعتمدة"
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
                    <p className="text-sm text-foreground/70">عام من الخبرة</p>
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
            {/* القصة السردية الشاملة - محتوى تقني مكثف لبناء السلطة (Authority) */}
            <div className="space-y-6 text-foreground/90 leading-relaxed text-right">
              <p className="text-lg">
                <strong className="text-primary">العزل المتقدم</strong> هي شركة سعودية رائدة تتجاوز المفاهيم التقليدية للمقاولات، لتقدم حلولاً هندسية متخصصة في <strong>عزل الأسطح</strong> (Slab Insulation) و<strong>عزل الفوم بولي يوريثان</strong>. انطلقنا قبل 15 عاماً برؤية تهدف إلى رفع كفاءة المباني السكنية والتجارية في <strong>الرياض والخرج</strong> لتتوافق مع أعلى معايير الاستدامة.
              </p>

              <div className="bg-primary/5 p-4 rounded-xl border-r-4 border-primary my-4">
                <h4 className="font-bold text-lg mb-2 text-primary">الالتزام بكود البناء السعودي (SBC-601)</h4>
                <p className="text-base text-muted-foreground">
                  نحن ندرك أن العزل الحراري أصبح متطلباً إلزامياً. لذا، تضمن حلولنا تحقيق <strong>معامل انتقال حراري (U-Value)</strong> يتوافق بدقة مع متطلبات <strong>كود البناء السعودي</strong> لترشيد الطاقة، مما يضمن لكم استخراج شهادة إتمام البناء دون عوائق وتوفيراً فعلياً في استهلاك الكهرباء.
                </p>
              </div>

              <p className="text-lg">
                نحن فخورون بكوننا شركة <strong>معتمدة من الهيئة السعودية للمهندسين</strong>، مما يعني أن جميع مشاريعنا تخضع لإشراف هندسي دقيق. لا نستخدم سوى مواد عزل (سواء فوم، بيتومين، أو مواد إسمنتية) حاصلة على علامة الجودة من <strong>هيئة المواصفات والمقاييس السعودية (SASO)</strong>. هذا الالتزام يغلق الباب تماماً أمام المواد المقلدة أو الرديئة التي تتلف بعد سنوات قليلة.
              </p>

              <p className="text-lg">
                في قطاع <strong>عزل خزانات المياه</strong>، نلتزم صارم بمواصفات <strong>هيئة الغذاء والدواء</strong> باستخدام مواد إيبوكسي (Food Grade) خالية من المذيبات الضارة، لضمان مياه نقية وصحية لعائلتك. خلال مسيرتنا، أنجزنا بنجاح أكثر من <strong>5000 مشروع</strong> تتنوع بين الفلل السكنية، المجمعات التجارية، والمرافق الحكومية، مع سجل ناصع من رضا العملاء.
              </p>

              <p className="text-lg">
                ثقتنا في جودتنا تترجم إلى <strong>ضمان حقيقي وشامل لمدة 15 سنة</strong>. هذا الضمان ليس مجرد ورقة، بل هو التزام بصيانة مجانية وفحص دوري للتأكد من سلامة العزل واستمرار كفاءته في صد الحرارة ومنع تسربات المياه لعقود.
              </p>
            </div>

            {/* Features Grid */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-heading text-xl font-bold mb-6 text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                لماذا تختار العزل المتقدم؟
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors"
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

        {/* مناطق الخدمة */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">نخدم جميع مناطق الرياض والخرج</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-3xl mx-auto">
            فريقنا المتخصص جاهز لتقديم خدمات العزل الاحترافية في جميع أنحاء المنطقة. نوفر خدمة سريعة وفعالة مع ضمان الجودة والالتزام بالمواعيد.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["شمال الرياض", "جنوب الرياض", "شرق الرياض", "غرب الرياض", "وسط الرياض", "الخرج", "الدرعية", "العليا", "النخيل", "الملقا", "حطين", "الياسمين"].map(
              (area) => (
                <span key={area} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors">
                  {area}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
