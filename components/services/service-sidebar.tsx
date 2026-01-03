"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Phone,
    MessageCircle,
    Shield,
    Award,
    Clock,
    MapPin,
    CheckCircle,
    Star
} from "lucide-react"

interface ServiceSidebarProps {
    serviceName: string
    phoneNumber?: string
    whatsappNumber?: string
}

export function ServiceSidebar({
    serviceName,
    phoneNumber = "0507067378",
    whatsappNumber = "966507067378"
}: ServiceSidebarProps) {
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 300)
        }
        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <aside className="hidden lg:block">
            <div className={`${isSticky ? 'sticky top-24' : ''} space-y-6`}>
                {/* Service Info Card */}
                <Card className="border-border/60 shadow-lg overflow-hidden">
                    <div className="bg-primary p-4">
                        <h3 className="text-lg font-bold text-white text-center">معلومات الخدمة</h3>
                    </div>
                    <CardContent className="p-5 space-y-4">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Clock className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <span className="text-muted-foreground">مدة التنفيذ</span>
                                    <p className="font-bold text-foreground">1-3 أيام</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Shield className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <span className="text-muted-foreground">الضمان</span>
                                    <p className="font-bold text-foreground">15 سنة</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                    <MapPin className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <span className="text-muted-foreground">نطاق الخدمة</span>
                                    <p className="font-bold text-foreground">الرياض والخرج</p>
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-border pt-4 space-y-3">
                            {/* Call CTA */}
                            <Button
                                size="lg"
                                className="w-full gap-2 h-12 text-base font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md"
                                asChild
                            >
                                <a href={`tel:+${whatsappNumber}`}>
                                    <Phone className="h-5 w-5" />
                                    اتصل الآن
                                </a>
                            </Button>

                            {/* WhatsApp CTA */}
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full gap-2 h-12 text-base font-bold border-green-500 text-green-600 hover:bg-green-50"
                                asChild
                            >
                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                    واتساب
                                </a>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Trust Indicators */}
                <Card className="border-border/60 shadow-sm">
                    <CardContent className="p-5">
                        <h4 className="font-bold text-foreground mb-4 text-center">لماذا تختارنا؟</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>خبرة أكثر من 15 عاماً</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>مواد معتمدة عالمياً</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>فريق فني متخصص</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span>ضمان مكتوب 15 سنة</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Rating Badge */}
                <Card className="border-border/60 shadow-sm bg-muted/30">
                    <CardContent className="p-4 text-center">
                        <div className="flex items-center justify-center gap-1 mb-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                        </div>
                        <div className="font-bold text-foreground">4.9/5</div>
                        <div className="text-sm text-muted-foreground">من أكثر من 5000 عميل</div>
                    </CardContent>
                </Card>
            </div>
        </aside>
    )
}
