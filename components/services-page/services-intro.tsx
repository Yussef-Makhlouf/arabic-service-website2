import { SectionHeader } from "@/components/ui/section-header"
import { Shield, Zap, Droplets, ThermometerSun, Home, BadgeCheck } from "lucide-react"

const benefits = [
    {
        icon: ThermometerSun,
        title: "مقاومة الحرارة الشديدة",
        description: "تصل درجات الحرارة في الرياض إلى 50 درجة مئوية صيفاً. العزل الحراري يقلل انتقال الحرارة بنسبة تصل إلى 70%، مما يوفر بيئة مريحة داخل المبنى."
    },
    {
        icon: Droplets,
        title: "الحماية من الأمطار والرطوبة",
        description: "الأمطار الموسمية قد تسبب تسربات خطيرة تؤدي لتآكل الخرسانة وحديد التسليح. العزل المائي يحمي مبناك من هذه الأضرار المكلفة."
    },
    {
        icon: Zap,
        title: "توفير فاتورة الكهرباء",
        description: "العزل الجيد يقلل استهلاك الكهرباء بنسبة 30-40% عن طريق تخفيف الحمل على أجهزة التكييف، مما يوفر آلاف الريالات سنوياً."
    },
    {
        icon: Home,
        title: "إطالة عمر المبنى",
        description: "حماية الأسطح والخزانات من العوامل الجوية تطيل العمر الافتراضي للمبنى وتحافظ على قيمته السوقية."
    },
    {
        icon: Shield,
        title: "ضمان طويل الأمد",
        description: "نقدم ضمان يصل إلى 15 عاماً على جميع أعمال العزل، مما يعني راحة بال حقيقية وحماية لاستثمارك."
    },
    {
        icon: BadgeCheck,
        title: "مواد معتمدة ومحترفين",
        description: "نستخدم فقط المواد المعتمدة من هيئة المواصفات السعودية والمنظمات الدولية، مع فريق فني مدرب على أعلى مستوى."
    }
]

export function ServicesIntro() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* المقدمة */}
                    <div className="text-center mb-16">
                        <SectionHeader
                            title="لماذا عزل الأسطح ضروري في الرياض؟"
                            subtitle="حماية متكاملة لمبناك من الحرارة الشديدة والأمطار الموسمية"
                            centered
                        />

                        <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground leading-relaxed">
                            <p className="text-lg md:text-xl mb-6">
                                تتعرض المباني في <strong className="text-foreground">الرياض والخرج</strong> لظروف مناخية قاسية تتراوح بين الحرارة الشديدة صيفاً التي تتجاوز 50 درجة مئوية، والأمطار الغزيرة شتاءً التي قد تسبب تسربات خطيرة.
                                <strong className="text-foreground"> العزل المائي والحراري للأسطح</strong> ليس رفاهية، بل ضرورة لحماية استثمارك العقاري وصحة عائلتك.
                            </p>

                            <p className="text-base md:text-lg">
                                بدون عزل مناسب، تتعرض المباني لمشاكل متعددة: ارتفاع فواتير الكهرباء بسبب الحمل الزائد على المكيفات، تسرب مياه الأمطار الذي يسبب تلف الدهانات والأثاث، نمو العفن والفطريات الضارة بالصحة، وتآكل الخرسانة وحديد التسليح مما يهدد سلامة المبنى على المدى الطويل.
                            </p>
                        </div>
                    </div>

                    {/* الفوائد */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <div
                                    key={index}
                                    className="group p-6 bg-muted/30 rounded-2xl border border-border hover:border-primary/30 hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-foreground">{benefit.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>
        </section>
    )
}
