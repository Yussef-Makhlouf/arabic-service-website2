"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Phone,
    MessageCircle,
    CheckCircle,
    Clock,
    Shield,
    MapPin,
    Banknote,
    Star
} from "lucide-react"

export interface ServiceDetailsData {
    price?: string
    priceNote?: string
    warranty?: string
    duration?: string
    coverage?: string
}

export interface WhyChooseUsItem {
    text: string
}

interface EnhancedServiceSidebarProps {
    details: ServiceDetailsData
    whyChooseUs?: WhyChooseUsItem[]
    phoneNumber?: string
}

export function EnhancedServiceSidebar({
    details,
    whyChooseUs = [
        { text: "عمالة فنية مدربة ومحترفة" },
        { text: "مواد عزل عالية الجودة" },
        { text: "ضمان حقيقي موثق" },
        { text: "سرعة في الإنجاز والتسليم" },
    ],
    phoneNumber = "+966507067378"
}: EnhancedServiceSidebarProps) {
    const whatsappNumber = phoneNumber.replace("+", "")

    return (
        <div className="lg:sticky lg:top-24 space-y-6">
            {/* Service Details Card */}
            <Card className="border-border shadow-xl overflow-hidden">
                <div className="bg-primary p-5">
                    <h3 className="text-lg font-bold text-white text-center">تفاصيل الخدمة</h3>
                </div>
                <CardContent className="p-6 space-y-5">
                    <div className="space-y-4">
                        {/* Price */}
                        {details.price && (
                            <div className="flex items-center justify-between py-3 border-b border-border">
                                <div className="flex items-center gap-3">
                                    <Banknote className="w-5 h-5 text-primary" />
                                    <span className="text-muted-foreground">السعر التقريبي</span>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-foreground">{details.price}</div>
                                    {details.priceNote && (
                                        <div className="text-xs text-muted-foreground">{details.priceNote}</div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Warranty */}
                        {details.warranty && (
                            <div className="flex items-center justify-between py-3 border-b border-border">
                                <div className="flex items-center gap-3">
                                    <Shield className="w-5 h-5 text-primary" />
                                    <span className="text-muted-foreground">فترة الضمان</span>
                                </div>
                                <div className="font-bold text-foreground">{details.warranty}</div>
                            </div>
                        )}

                        {/* Duration */}
                        {details.duration && (
                            <div className="flex items-center justify-between py-3 border-b border-border">
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-primary" />
                                    <span className="text-muted-foreground">مدة التنفيذ</span>
                                </div>
                                <div className="font-bold text-foreground">{details.duration}</div>
                            </div>
                        )}

                        {/* Coverage */}
                        {details.coverage && (
                            <div className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    <span className="text-muted-foreground">نطاق الخدمة</span>
                                </div>
                                <div className="font-bold text-foreground">{details.coverage}</div>
                            </div>
                        )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="pt-4 border-t border-border space-y-3">
                        <Button
                            size="lg"
                            className="w-full gap-2 h-13 text-base font-bold bg-primary text-white hover:bg-primary/90 shadow-lg"
                            asChild
                        >
                            <a href={`tel:${phoneNumber}`}>
                                <Phone className="h-5 w-5" />
                                اتصل الآن
                            </a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full gap-2 h-13 text-base font-bold border-green-500 text-green-600 hover:bg-green-50 bg-green-500 text-white hover:bg-green-600"
                            asChild
                        >
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="h-5 w-5" />
                                واتساب
                            </a>
                        </Button>
                    </div>

                    {/* Quick Contact Link */}
                    <div className="text-center">
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            className="text-sm text-primary hover:underline flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4" />
                            استقبل الطلبات الآن
                        </a>
                    </div>
                </CardContent>
            </Card>

            {/* Why Choose Us Card */}
            <Card className="border-border shadow-lg">
                <CardContent className="p-6">
                    <h4 className="font-bold text-foreground mb-5 text-center">لماذا تختارنا؟</h4>
                    <div className="space-y-3">
                        {whyChooseUs.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-muted-foreground">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Service Areas Card */}
            <Card className="border-border shadow-lg">
                <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h4 className="font-bold text-foreground">مناطق الخدمة</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        نخدم جميع أحياء الرياض والخرج ومحيطها
                    </p>
                </CardContent>
            </Card>

            {/* Rating Card */}
            <Card className="border-border shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20">
                <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center gap-1 mb-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                        ))}
                    </div>
                    <div className="text-2xl font-bold text-foreground">4.9/5</div>
                    <div className="text-sm text-muted-foreground mt-1">من أكثر من 5000 عميل</div>
                </CardContent>
            </Card>
        </div>
    )
}
