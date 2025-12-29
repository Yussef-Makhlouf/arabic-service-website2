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
                  src="/professional-roof-insulation-work-in-saudi-arabia.jpg"
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
            {/* القصة السردية الشاملة */}
            <div className="space-y-5 text-foreground/90 leading-relaxed text-right">
              <p className="text-lg">
                <strong className="text-primary">العزل المتقدم</strong> هي شركة سعودية متخصصة في مجال <strong>عزل الأسطح</strong> و<strong>عزل الفوم</strong> و<strong>العزل المائي والحراري</strong> و<strong>عزل خزانات المياه</strong>. تأسست الشركة منذ أكثر من 15 عاماً برؤية واضحة: تقديم أفضل حلول العزل باستخدام أحدث التقنيات والمواد المعتمدة عالمياً التي تتحمل الظروف المناخية القاسية في المملكة.
              </p>

              <p className="text-lg">
                نخدم <strong>منطقة الرياض والخرج</strong> بكل أحيائها ونواحيها، ونقدّم حلولًا فعّالة لحماية المباني السكنية والتجارية والصناعية من <strong>تسربات المياه</strong>، الرطوبة، ودرجات الحرارة المرتفعة التي تتجاوز 50 درجة مئوية صيفاً. نحن نفهم تحديات المناخ السعودي ونصمم حلول عزل مخصصة لمواجهة هذه الظروف.
              </p>

              <p className="text-lg">
                نحن معتمدون من <strong>الهيئة السعودية للمهندسين</strong> ونستخدم فقط <strong>مواد عزل معتمدة</strong> من هيئة المواصفات والمقاييس السعودية والمنظمات الدولية. جميع مواد عزل الخزانات لدينا آمنة ومعتمدة من هيئة الغذاء والدواء ولا تؤثر على خواص المياه أو صحة المستخدمين.
              </p>

              <p className="text-lg">
                فريق عملنا يتكون من <strong>مهندسين وفنيين متخصصين</strong> حاصلين على تدريبات معتمدة في أحدث تقنيات العزل المائي والحراري وعزل الفوم. خلال مسيرتنا، قمنا بتنفيذ <strong>أكثر من 5000 مشروع</strong> سكني وتجاري وصناعي بنجاح تام، وحظينا بثقة آلاف العملاء الذين يشهدون على جودة أعمالنا والتزامنا الكامل بالمواعيد والضمانات.
              </p>

              <p className="text-lg">
                نقدم <strong>ضمان شامل يصل إلى 15 سنه</strong> على جميع أعمال العزل، مع خدمة فحص دوري مجانية خلال فترة الضمان للتأكد من كفاءة العزل. نوفر أيضاً <strong>استشارة مجانية</strong> وكشف على الموقع لتقييم الحالة وتقديم أفضل الحلول المناسبة لاحتياجاتك.
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
