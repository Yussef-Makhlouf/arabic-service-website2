import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Shield, Clock, CheckCircle, Award, Thermometer, Droplets, Building2 } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary via-primary to-primary/95 py-16 md:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/technician-applying-spray-foam-in-attic.webp')] bg-cover bg-center bg-no-repeat mix-blend-overlay" />
        {/* <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} /> */}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white/90">
            <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span>شركة معتمدة · ضمان 15 سنة · خبرة +15 عام</span>
          </div>

          {/* Main Headline - City-based SEO */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              شركة عزل اسطح بالرياض والخرج
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-secondary leading-relaxed">
              الحل النهائي لمشاكل الحرارة وتسرب المياه
            </p>
          </div>

          {/* Supporting Text */}
          <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            حلول عزل احترافية للأسطح والخزانات مصممة خصيصاً لمناخ المملكة العربية السعودية.
            نوفر لك حماية شاملة من الحرارة العالية وتسرب المياه مع ضمان موثق يصل إلى 15 سنة.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-14 px-8 text-base md:text-lg font-bold rounded-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg cta-glow w-full sm:w-auto transition-transform hover:scale-105"
              asChild
            >
              <a href="tel:+966507067378" className="flex items-center justify-center gap-2">
                <Phone className="h-5 w-5" />
                <span>معاينة مجانية - 0507067378</span>
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base md:text-lg font-bold rounded-lg bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 w-full sm:w-auto transition-all"
              asChild
            >
              <a
                href="https://wa.me/966507067378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>تواصل عبر واتساب</span>
              </a>
            </Button>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 max-w-3xl mx-auto">
            <TrustStat icon={<Award className="h-6 w-6" />} value="15+" label="سنة خبرة" />
            <TrustStat icon={<Building2 className="h-6 w-6" />} value="5000+" label="مشروع منجز" />
            <TrustStat icon={<Shield className="h-6 w-6" />} value="15 سنة" label="ضمان شامل" />
            <TrustStat icon={<CheckCircle className="h-6 w-6" />} value="معتمد" label="من SASO" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
          <FeatureCard
            icon={<Thermometer className="h-6 w-6" />}
            title="عزل حراري"
            description="توفير 40% من فاتورة الكهرباء"
          />
          <FeatureCard
            icon={<Droplets className="h-6 w-6" />}
            title="عزل مائي"
            description="حماية كاملة من تسرب المياه"
          />
          <FeatureCard
            icon={<Building2 className="h-6 w-6" />}
            title="عزل خزانات"
            description="حفاظ على نقاء المياه"
          />
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12">
          <Link
            href="#services"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors"
          >
            <span className="text-sm">استكشف خدماتنا</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

function TrustStat({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
      <div className="text-secondary">{icon}</div>
      <div className="text-xl md:text-2xl font-bold text-white">{value}</div>
      <div className="text-xs md:text-sm text-white/70">{label}</div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/15 transition-colors">
      <div className="p-3 bg-secondary/20 rounded-lg text-secondary shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  )
}
