import Link from "next/link"
import Image from "next/image"
import { Droplets, CheckCircle, ArrowLeft, Shield, Home, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WaterproofingPreview() {
    const applications = [
        { icon: Home, title: "الأسطح", desc: "حماية من الأمطار" },
        { icon: Building2, title: "الخزانات", desc: "عزل داخلي وخارجي" },
        { icon: Droplets, title: "الحمامات", desc: "منع الرطوبة" },
    ]

    const features = [
        "مواد عزل معتمدة من SASO",
        "حماية من تسرب الأمطار والرطوبة",
        "مناسب للأسطح المبلطة",
        "ضمان شامل 10-15 سنة",
    ]

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Side */}
                    <div className="order-2 lg:order-1 space-y-6">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-border">
                            <Image
                                src="/images/best-practices-spray-foam-installation-on-roof.webp"
                                alt="أنواع العزل المائي"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-6 md:p-8 border border-blue-200/50">
                            <h3 className="font-bold text-lg mb-6 text-primary">أنواع العزل المائي</h3>
                            <div className="grid gap-4">
                                {[
                                    { title: "عزل البيتومين", desc: "طبقات متعددة من الأغشية المقاومة للماء", suitable: "للأسطح والأساسات" },
                                    { title: "عزل الرولات (الممبرين)", desc: "أغشية مطاطية ملحومة بالحرارة", suitable: "للأسطح الكبيرة" },
                                    { title: "عزل الإيبوكسي", desc: "طلاء سائل مقاوم للماء والكيماويات", suitable: "للخزانات والحمامات" },
                                ].map((item, index) => (
                                    <div key={index} className="bg-white rounded-xl p-4 border border-border">
                                        <div className="font-medium text-foreground mb-1">{item.title}</div>
                                        <div className="text-sm text-muted-foreground mb-2">{item.desc}</div>
                                        <span className="inline-block text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                                            {item.suitable}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                                <Droplets className="h-4 w-4" />
                                حماية شاملة
                            </span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                عزل مائي للأسطح بالرياض
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                نقدم حلول عزل مائي احترافية تحمي مبناك من تسرب المياه والرطوبة.
                                نستخدم أفضل المواد المعتمدة ونضمن لك حماية طويلة الأمد
                                للأسطح والخزانات والحمامات.
                            </p>
                        </div>

                        {/* Applications */}
                        <div className="grid grid-cols-3 gap-4">
                            {applications.map((app, index) => {
                                const Icon = app.icon
                                return (
                                    <div key={index} className="text-center p-4 bg-muted/50 rounded-xl">
                                        <Icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                                        <div className="font-medium text-foreground text-sm">{app.title}</div>
                                        <div className="text-xs text-muted-foreground">{app.desc}</div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Features List */}
                        <ul className="grid sm:grid-cols-2 gap-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-success shrink-0" />
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 font-bold gap-2">
                                <a href="tel:+966507067378">
                                    طلب معاينة مجانية
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="gap-2">
                                <Link href="/services/waterproofing">
                                    تفاصيل العزل المائي
                                    <ArrowLeft className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
