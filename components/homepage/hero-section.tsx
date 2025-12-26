import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Shield, Clock, CheckCircle, Award, ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center py-20 px-4 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card/20 pointer-events-none" />

      <div className="container mx-auto z-10 text-center space-y-12">
        {/* Main Headings */}
        <div className="space-y-6 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-foreground">ثورة في عالم </span>
            <span className="text-primary block mt-2 md:inline md:mt-0">عزل الأسطح</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed font-light">
            نقدم تجربة عزل فريدة تجمع بين التكنولوجيا المتطورة والخبرة العميقة لحماية منزلك
          </p>
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
              <span>اتصل بنا للكشف المجاني - 0507067378</span>
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-16 px-8 text-lg rounded-full bg-card/50 hover:bg-card border-white/10 text-foreground w-full sm:w-auto backdrop-blur-sm transition-all duration-300 hover:border-primary/50"
            asChild
          >
            <Link href="/services" className="flex items-center gap-2">
              <ArrowDown className="h-5 w-5" />
              <span>خدمات العزل في الرياض</span>
            </Link>
          </Button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-backwards">
          <FeatureCard
            icon={<Shield className="h-6 w-6 text-primary" />}
            title="ضمان شامل 10 سنوات"
            subtitle="حماية مؤكدة"
            delay={0}
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6 text-primary" />}
            title="خدمة متاحة 24/7"
            subtitle="استجابة فورية"
            delay={100}

          />
          <FeatureCard
            icon={<CheckCircle className="h-6 w-6 text-primary" />}
            title="مواد عزل متطورة"
            subtitle="تقنيات حديثة"
            delay={200}
          />
          <FeatureCard
            icon={<Award className="h-6 w-6 text-primary" />}
            title="نقل آمن ونظيف"
            subtitle="عمالة محترفة"
            delay={300}
          />
        </div>
      </div>

      {/* Floating Action Buttons */}
      {/* <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 animate-in fade-in slide-in-from-left-8 duration-1000 delay-500">
        <a
          href="tel:+966507067378"
          className="bg-blue-600 p-3.5 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 ring-2 ring-white/20"
          aria-label="Call Us"
        >
          <Phone className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/966507067378"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] p-3.5 rounded-full text-white hover:scale-110 hover:shadow-lg transition-all duration-300 ring-2 ring-white/20"
          aria-label="WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div> */}

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
