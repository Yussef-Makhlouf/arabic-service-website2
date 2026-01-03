import Link from "next/link"
import Image from "next/image"
import { Thermometer, CheckCircle, ArrowLeft, Zap, Shield, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FoamInsulationPreview() {
    const benefits = [
        { icon: Zap, text: "توفير 40% من فاتورة الكهرباء" },
        { icon: Shield, text: "ضمان شامل 15 سنة" },
        { icon: Droplets, text: "عزل مائي وحراري معاً" },
    ]

    const features = [
        "طبقة متصلة بدون فواصل أو وصلات",
        "خفيف الوزن لا يثقل الأسطح",
        "مقاوم للحرارة حتى 50 درجة مئوية",
        "تنفيذ سريع في يوم واحد",
    ]

    return (
        <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-6">
                        <div>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-4">
                                <Thermometer className="h-4 w-4" />
                                خدمة مميزة
                            </span>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                                عزل فوم للأسطح بالرياض
                            </h2>
                            <p className="text-muted-foreground leading-relaxed">
                                عزل الفوم البولي يوريثان هو الحل الأمثل لمناخ السعودية الحار.
                                يوفر حماية مزدوجة من الحرارة والمياه في طبقة واحدة متصلة،
                                مما يضمن توفيراً ملموساً في فواتير الكهرباء وراحة دائمة.
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="grid sm:grid-cols-3 gap-4">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon
                                return (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                                        <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                                            <Icon className="h-5 w-5 text-secondary" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">{benefit.text}</span>
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
                            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold gap-2">
                                <a href="tel:+966507067378">
                                    احصل على عرض سعر
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="gap-2">
                                <Link href="/services/foam-insulation">
                                    تفاصيل الخدمة
                                    <ArrowLeft className="h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Visual Side */}
                    <div className="relative space-y-6">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-border">
                            <Image
                                src="/images/spray-foam-application-on-exterior-wall.webp"
                                alt="تنفيذ عزل الفوم"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                            <h3 className="font-bold text-lg mb-4 text-primary">مراحل تنفيذ عزل الفوم</h3>
                            <div className="space-y-4">
                                {[
                                    { step: "01", title: "تنظيف السطح", desc: "إزالة الأتربة والشوائب" },
                                    { step: "02", title: "رش البرايمر", desc: "طبقة تأسيسية لزيادة الالتصاق" },
                                    { step: "03", title: "رش الفوم", desc: "تطبيق الفوم بسماكة 3-5 سم" },
                                    { step: "04", title: "طبقة الحماية", desc: "دهان أكريليك عاكس للحرارة" },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                            <span className="text-sm font-bold text-primary">{item.step}</span>
                                        </div>
                                        <div>
                                            <div className="font-medium text-foreground">{item.title}</div>
                                            <div className="text-sm text-muted-foreground">{item.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
