import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Shield, Award, Clock } from "lucide-react"
import Image from "next/image"

export function ServicesPageHero() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center bg-[#59478a] text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cover.png"
          alt="Services Cover"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#59478a]/90 via-[#59478a]/80 to-[#59478a]/95"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
            <Shield className="h-5 w-5 text-amber-400" />
            <span className="text-sm md:text-base font-medium text-white/90">خبرة 15+ عاماً في عزل الأسطح</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-xl">
            خدماتنا في عزل الأسطح بالرياض
          </h1>

          <p className="text-xl md:text-3xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-md">
            دليلك الشامل لجميع خدمات العزل المائي والحراري. مواد معتمدة، فريق متخصص.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-8">
            <Button size="lg" variant="secondary" className="gap-3 text-lg h-16 px-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white text-[#59478a] hover:bg-gray-100" asChild>
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
                واتساب
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
