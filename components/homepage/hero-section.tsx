import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Shield, Clock, CheckCircle, Award, ArrowDown, Droplets, Thermometer, Building2 } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-16 px-4 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card/20 pointer-events-none" />

      <div className="container mx-auto z-10 text-center space-y-10">
        {/* Trust Badge */}
        <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/10 text-primary backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          شركة معتمدة في المملكة العربية السعودية
        </div>

        {/* Main Headings - H1 محسّن لـ SEO */}
        <div className="space-y-6 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="text-foreground">شركة عزل أسطح بالرياض و الخرج</span>
            <span className="text-primary block mt-3">معتمدة في السعودية</span>
          </h1>

          {/* فقرة تعريفية شاملة - مهمة جداً للـ SEO */}
          <div className="text-lg md:text-xl text-muted-foreground/90 max-w-4xl mx-auto leading-relaxed space-y-4 text-right">
            <p>
              نحن في <strong className="text-primary">شركة العزل المتقدم</strong> شركة متخصصة في <strong>عزل الأسطح</strong>، <strong>عزل الفوم</strong>، <strong>العزل المائي والحراري</strong>، و<strong>عزل خزانات المياه</strong> باستخدام أفضل المواد المعتمدة التي تتحمل الظروف المناخية القاسية في المملكة العربية السعودية.
            </p>
            <p>
              نعمل بخبرة تزيد عن <strong>15 عاماً</strong> في مجال العزل ونقدّم حلولًا فعّالة لحماية المباني من <strong>تسربات المياه</strong>، الرطوبة، ودرجات الحرارة المرتفعة. نلتزم بأعلى معايير الجودة ونوفر <strong>ضمان يصل إلى 15 سنه</strong> على جميع أعمالنا.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-backwards">
          <Button
            size="lg"
            className="h-16 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white w-full sm:w-auto shadow-[0_0_20px_rgba(210,106,209,0.3)] hover:shadow-[0_0_30px_rgba(210,106,209,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            asChild
          >
            <a href="tel:+966507067378" className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span>اتصل للاستشارة المجانية - 0507067378</span>
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-16 px-8 text-lg rounded-full bg-card/50 hover:bg-card border-white/10 text-foreground w-full sm:w-auto backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
            asChild
          >
            <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-black">
              <MessageCircle className="h-5 w-5" />
              <span>تواصل عبر واتساب</span>
            </a>
          </Button>
        </div>

        {/* Feature Cards Grid - خدمات رئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-backwards">
          <FeatureCard
            icon={<Droplets className="h-6 w-6 text-primary" />}
            title="عزل مائي للأسطح"
            subtitle="حماية من تسرب المياه والأمطار"
            delay={0}
          />
          <FeatureCard
            icon={<Thermometer className="h-6 w-6 text-primary" />}
            title="عزل الفوم الحراري"
            subtitle="توفير 40% من فاتورة الكهرباء"
            delay={100}
          />
          <FeatureCard
            icon={<Building2 className="h-6 w-6 text-primary" />}
            title="عزل خزانات المياه"
            subtitle="حماية نقاء المياه ومنع التلوث"
            delay={200}
          />
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-primary" />}
            title="ضمان شامل 15 سنه"
            subtitle="جودة مضمونة واعتماد رسمي"
            delay={300}
          />
        </div>

        {/* إحصائيات سريعة */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8 border-t border-border/30 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-backwards">
          <StatItem value="+15" label="سنة خبرة" />
          <StatItem value="+5000" label="مشروع منجز" />
          <StatItem value="24/7" label="دعم فني متواصل" />
          <StatItem value="10" label="سنوات ضمان" />
        </div> */}

        {/* رابط للخدمات */}
        <div className="pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700 fill-mode-backwards">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span>استكشف خدماتنا في عزل الأسطح</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground/50 hidden md:block">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, subtitle, delay }: { icon: React.ReactNode, title: string, subtitle: string, delay?: number }) {
  return (
    <div
      className="bg-card backdrop-blur-sm border border-border p-6 rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group cursor-default hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
        {icon}
      </div>
      <div className="text-center">
        <h3 className="text-lg font-bold text-secondary group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  )
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  )
}
