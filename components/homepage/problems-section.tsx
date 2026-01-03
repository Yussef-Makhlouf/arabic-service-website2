import { Thermometer, Droplets, Wind, AlertTriangle } from "lucide-react"

export function ProblemsSection() {
    const problems = [
        {
            icon: Thermometer,
            title: "حرارة عالية",
            description: "ارتفاع درجات الحرارة داخل المبنى صيفاً وفواتير كهرباء مرتفعة للتكييف",
            color: "text-red-500",
            bgColor: "bg-red-50",
        },
        {
            icon: Droplets,
            title: "تسرب المياه",
            description: "تسربات الأمطار والرطوبة التي تسبب تلف الأسقف والجدران والأثاث",
            color: "text-blue-500",
            bgColor: "bg-blue-50",
        },
        {
            icon: Wind,
            title: "رطوبة وعفن",
            description: "ظهور العفن والرطوبة على الجدران مما يؤثر على صحة السكان",
            color: "text-teal-500",
            bgColor: "bg-teal-50",
        },
        {
            icon: AlertTriangle,
            title: "تشققات الأسطح",
            description: "تشققات وتصدعات في الأسطح بسبب التمدد والانكماش الحراري",
            color: "text-amber-500",
            bgColor: "bg-amber-50",
        },
    ]

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        المشاكل الشائعة
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        هل تعاني من هذه المشاكل في منزلك؟
                    </h2>
                    <p className="text-muted-foreground">
                        مناخ المملكة العربية السعودية القاسي يسبب مشاكل خطيرة للمباني.
                        نقدم لك الحل النهائي لجميع هذه التحديات.
                    </p>
                </div>

                {/* Problems Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {problems.map((problem, index) => {
                        const Icon = problem.icon
                        return (
                            <div
                                key={index}
                                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 card-hover"
                            >
                                <div className={`w-14 h-14 ${problem.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className={`h-7 w-7 ${problem.color}`} />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{problem.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Solution CTA */}
                <div className="text-center mt-10">
                    <p className="text-muted-foreground mb-4">
                        لا تقلق! لدينا الحل المناسب لكل مشكلة
                    </p>
                    <a
                        href="#services"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                        <span>تعرف على خدماتنا</span>
                        <span>←</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
