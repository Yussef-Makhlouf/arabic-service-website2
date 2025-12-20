import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, MapPin, Clock, Shield, Award } from "lucide-react"

export function ServicesPageCTA() {
  return (
    <section className="py-16 md:py-24  bg-[#59478a] text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">جاهز لحماية مبناك؟</h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            فريقنا المتخصص جاهز لزيارة موقعك وتقديم استشارة مجانية شاملة. احصل على تقييم دقيق وعرض سعر مفصل خلال 24
            ساعة.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 py-8 border-y border-primary-foreground/20">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-amber-400" />
              <span>ضمان 10-15 سنة</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-400" />
              <span>معتمد من SASO</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-400" />
              <span>استجابة خلال 24 ساعة</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-amber-400" />
              <span>نغطي جميع أحياء الرياض</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2 text-lg h-16 px-10" asChild>
              <a href="tel:+966507067378" className="text-white">
                <Phone className="h-6 w-6" />
                اتصل الآن: 0507067378
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 text-lg h-16 px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              asChild
            >
              <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                واتساب للاستشارة المجانية
              </a>
            </Button>
          </div>

     
        </div>
      </div>
    </section>
  )
}
