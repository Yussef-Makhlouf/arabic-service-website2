import { Phone, MessageCircle, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
    return (
        <section className="relative py-16 md:py-20 bg-primary overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                        جاهز لحماية منزلك من الحرارة والتسربات؟
                    </h2>
                    <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                        احصل على معاينة مجانية وعرض سعر تفصيلي اليوم. فريقنا جاهز لخدمتك في الرياض والخرج
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <Button
                            size="lg"
                            className="h-14 px-8 text-lg font-bold rounded-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg cta-glow w-full sm:w-auto transition-transform hover:scale-105"
                            asChild
                        >
                            <a href="tel:+966507067378" className="flex items-center justify-center gap-2">
                                <Phone className="h-5 w-5" />
                                <span>اتصل الآن - 0507067378</span>
                            </a>
                        </Button>

                        <Button
                            size="lg"
                            className="h-14 px-8 text-lg font-bold rounded-lg bg-green-500 hover:bg-green-600 text-white shadow-lg w-full sm:w-auto transition-transform hover:scale-105"
                            asChild
                        >
                            <a
                                href="https://wa.me/966507067378"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                            >
                                <MessageCircle className="h-5 w-5" />
                                <span>واتساب</span>
                            </a>
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/70">
                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5" />
                            <span className="text-sm">متاحون 24/7</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            <span className="text-sm">الرياض والخرج</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">معاينة مجانية</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
