import { Award, Shield, Clock, Users, CheckCircle, Zap, Wrench, HeadphonesIcon } from "lucide-react"

export function WhyChooseUsSection() {
    const advantages = [
        {
            icon: Award,
            title: "خبرة 15+ عام",
            description: "أكثر من 5000 مشروع ناجح في الرياض والخرج",
        },
        {
            icon: Shield,
            title: "ضمان 15 سنة",
            description: "ضمان موثق وشامل على جميع أعمال العزل",
        },
        {
            icon: CheckCircle,
            title: "مواد معتمدة",
            description: "نستخدم مواد معتمدة من SASO ومطابقة للمواصفات",
        },
        {
            icon: Zap,
            title: "توفير الطاقة",
            description: "تقليل فواتير الكهرباء بنسبة تصل إلى 40%",
        },
        {
            icon: Clock,
            title: "سرعة التنفيذ",
            description: "التزام تام بالمواعيد وإنجاز العمل في أسرع وقت",
        },
        {
            icon: Wrench,
            title: "أحدث المعدات",
            description: "معدات رش فوم أمريكية وأجهزة كشف حديثة",
        },
        {
            icon: Users,
            title: "فريق محترف",
            description: "فنيون مدربون ومعتمدون بخبرة عالية",
        },
        {
            icon: HeadphonesIcon,
            title: "دعم مستمر",
            description: "خدمة عملاء متاحة 24/7 للرد على استفساراتكم",
        },
    ]

    return (
        <section className="section-padding bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        لماذا نحن
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        لماذا يختارنا عملاؤنا في الرياض والخرج؟
                    </h2>
                    <p className="text-muted-foreground">
                        نتميز بالجودة والموثوقية والالتزام بأعلى معايير السلامة
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {advantages.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div
                                key={index}
                                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-hover"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                </div>
                                <h3 className="text-base font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
