import { Star, Quote, MapPin } from "lucide-react"

export function TestimonialsSection() {
    const testimonials = [
        {
            name: "سعد القحطاني",
            location: "حي النرجس، الرياض",
            rating: 5,
            text: "بصراحة كنت متردد في عزل الفوم، لكن بعد التعامل مع فريقكم تغيرت نظرتي. فواتير الكهرباء نزلت بشكل ملحوظ من أول شهر. شغل نظيف وفريق محترم.",
        },
        {
            name: "م. عبدالرحمن الزهراني",
            location: "حي الياسمين، الرياض",
            rating: 5,
            text: "كمهندس، أقيم العمل بناءً على المعايير الفنية. المواد المستخدمة عندكم ممتازة وسماكة الفوم مطابقة للمواصفات. أنصح بهم بقوة.",
        },
        {
            name: "أبو محمد",
            location: "الخرج",
            rating: 5,
            text: "عانيت سنوات من تسربات الأمطار في الملحق. بعد العزل المائي والحراري بالفوم، اختفت المشكلة تماماً. الضمان 15 سنة أعطاني راحة بال.",
        },
        {
            name: "فهد العتيبي",
            location: "حي الملقا، الرياض",
            rating: 5,
            text: "الحمد لله اخترت الشركة الصح. الشباب جاهزين ومواعيدهم دقيقة، وسعرهم منافس مقارنة بالجودة. الآن البيت بارد بدون ما أشغل المكيفات كثير.",
        },
        {
            name: "خالد الشمري",
            location: "حي الرمال، الرياض",
            rating: 5,
            text: "عزلوا لي الخزان والسطح في نفس الوقت. الفريق محترف والتنفيذ سريع. أهم شيء إنهم نظفوا الموقع بعد ما خلصوا. ممتازين!",
        },
        {
            name: "عبدالله الحربي",
            location: "حي الصحافة، الرياض",
            rating: 5,
            text: "كان عندي مشكلة تسرب ما عرفت مصدرها. جوا وكشفوها بالجهاز بدون تكسير، وصلحوها في نفس اليوم. خدمة ممتازة وسريعة.",
        },
    ]

    return (
        <section className="section-padding bg-background">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                        آراء عملائنا
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        ماذا يقول عملاؤنا في الرياض والخرج
                    </h2>
                    <p className="text-muted-foreground">
                        أكثر من 5000 عميل سعيد بخدماتنا
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 card-hover"
                        >
                            {/* Quote Icon */}
                            <div className="mb-4">
                                <Quote className="h-8 w-8 text-secondary/30" />
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-foreground leading-relaxed mb-6 text-sm md:text-base">
                                "{testimonial.text}"
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                                ))}
                            </div>

                            {/* Author */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-bold text-foreground">{testimonial.name}</p>
                                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                        <MapPin className="h-3 w-3" />
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Footer */}
                <div className="text-center mt-10 p-6 bg-muted/50 rounded-xl">
                    <p className="text-muted-foreground text-sm">
                        تقييم متوسط <span className="font-bold text-foreground">4.9/5</span> من أكثر من <span className="font-bold text-foreground">5000</span> تقييم
                    </p>
                </div>
            </div>
        </section>
    )
}
