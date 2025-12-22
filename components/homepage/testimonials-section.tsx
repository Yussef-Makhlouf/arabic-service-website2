import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            name: "سعد القحطاني",
            location: "شمال الرياض",
            role: "مالك فيلا",
            content: "بصراحة كنت متردد في عزل الفوم، لكن بعد التعامل مع فريقكم تغيرت نظرتي. فواتير الكهرباء نزلت بشكل ملحوظ من أول شهر، والبيت صار أبرد بكثير في الظهر. شغل احترافي وسريع.",
            rating: 5,
        },
        {
            id: 2,
            name: "م. عبدالرحمن الزهراني",
            location: "الخرج",
            role: "استشاري هندسي",
            content: "كهمندس، أقيم العمل بناءً على المعايير الفنية. المواد المستخدمة عندكم ممتازة وسماكة الفوم مطابقة للمواصفات. سرعة التنفيذ كانت ممتازة وأعجبني حرص العمال على نظافة الموقع.",
            rating: 5,
        },
        {
            id: 3,
            name: "أبو محمد",
            location: "غرب الرياض",
            role: "صاحب عقار",
            content: "عانيت سنوات من تسربات الأمطار في الملحق. بعد العزل المائي والحراري بالفوم، اختفت المشكلة تماماً ولله الحمد. أنصح بالتعامل معكم لأمانتكم في الشغل.",
            rating: 5,
        },
        {
            id: 4,
            name: "فهد الدوسري",
            location: "شرق الرياض",
            role: "مدير مدرسة",
            content: "خدمة العملاء عندكم مميزة جداً. شرحولي كل التفاصيل قبل البدء، وعطوني ضمان 15 سنة مكتوب. هذا المستوى من الاحترافية نادر نلاقيه هالأيام. شكراً لكم.",
            rating: 5,
        },
        {
            id: 5,
            name: "شركة البنيان الحديثة",
            location: "الرياض",
            role: "شركة مقاولات",
            content: "نتعامل معكم في مشاريعنا بشكل دائم، ودائماً تبيضون الوجه. التزام بالمواعيد وجودة في التنفيذ وأسعار منافسة. شريك نجاح حقيقي.",
            rating: 5,
        },
    ]

    return (
        <section className="py-20 bg-muted/20 relative overflow-hidden" dir="rtl">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                        آراء العملاء
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">ماذا يقول عملاؤنا عنا؟</h2>
                    <p className="text-lg text-muted-foreground">
                        نفتخر بخدمة أكثر من 5000 عميل راضٍ في الرياض والمنطقة الوسطى. ثقتكم هي دافعنا للاستمرار بنفس الجودة.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                            direction: "rtl",
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {testimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                                    <div className="h-full p-1">
                                        <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg">
                                            <CardContent className="p-8 flex flex-col h-full">
                                                <Quote className="h-10 w-10 text-primary/20 mb-6" />

                                                <p className="text-lg leading-relaxed mb-6 flex-grow text-foreground/90">
                                                    "{testimonial.content}"
                                                </p>

                                                <div className="flex items-center gap-1 mb-6">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            className={`w-4 h-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                                                        />
                                                    ))}
                                                </div>

                                                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                                                    <Avatar className="h-12 w-12 border-2 border-primary/10">
                                                        <AvatarImage src={`/avatars/${testimonial.id}.png`} />
                                                        <AvatarFallback className="bg-primary/5 text-primary font-bold">
                                                            {testimonial.name.split(" ").map(n => n[0]).join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <h4 className="font-bold text-sm">{testimonial.name}</h4>
                                                        <p className="text-xs text-muted-foreground">{testimonial.role} - {testimonial.location}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="left-4 bg-background/80 backdrop-blur border-primary/20 hover:bg-primary hover:text-white" />
                            <CarouselNext className="right-4 bg-background/80 backdrop-blur border-primary/20 hover:bg-primary hover:text-white" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
