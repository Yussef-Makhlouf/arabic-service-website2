import { ClipboardCheck, FileText, Hammer, Shield } from "lucide-react"

export function WorkProcessSection() {
    const steps = [
        {
            number: "01",
            icon: ClipboardCheck,
            title: "فحص مجاني",
            description: "فريق متخصص يزور موقعك لتقييم الحالة وتحديد المشكلات بدقة",
        },
        {
            number: "02",
            icon: FileText,
            title: "عرض سعر تفصيلي",
            description: "تقديم عرض سعر شفاف ومفصل بدون أي رسوم مخفية",
        },
        {
            number: "03",
            icon: Hammer,
            title: "تنفيذ احترافي",
            description: "تنفيذ العمل بأعلى معايير الجودة باستخدام مواد معتمدة",
        },
        {
            number: "04",
            icon: Shield,
            title: "ضمان شامل",
            description: "ضمان موثق يصل إلى 15 سنة مع متابعة دورية",
        },
    ]

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        كيف نعمل
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        خطوات بسيطة للحصول على عزل مثالي
                    </h2>
                    <p className="text-muted-foreground">
                        نتبع منهجية عمل واضحة تضمن لك أفضل النتائج
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            return (
                                <div key={index} className="relative flex flex-col items-center text-center group">
                                    {/* Step Number & Icon */}
                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 bg-card border-2 border-primary rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:border-secondary transition-all duration-300">
                                            <Icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
                                        </div>
                                        <span className="absolute -top-2 -right-2 w-8 h-8 bg-secondary text-secondary-foreground text-sm font-bold rounded-full flex items-center justify-center shadow">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                                        {step.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <a
                        href="tel:+966507067378"
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                    >
                        <span>ابدأ الآن - معاينة مجانية</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
