import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Award, Timer, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

export const metadata = {
    title: "من نحن | شركة العزل المتقدم لعزل الفوم | 0507067378",
    description: "تعرف على شركة العزل المتقدم لعزل الفوم بالرياض، خبرة سنوات في مجالات العزل المائي والحراري وكشف التسربات برؤية عصرية وتقنيات متطورة.",
}

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="flex flex-col min-h-screen">
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-primary/5 py-20 lg:py-28">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
                            <div className="space-y-8">
                                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-primary font-heading leading-tight">
                                    من نحن
                                </h1>
                                <p className="text-xl text-muted-foreground leading-loose max-w-[600px] text-justify">
                                    شركة العزل المتقدم لعزل الفوم بالرياض هي وجهتك الأولى لحلول العزل المائي والحراري المتكاملة، كشف التسربات، ورش الفوم البولي يوريثان عالي الكثافة. نمتلك خبرة تمتد لأكثر من 10 سنوات في السوق السعودي، ونقدم خدماتنا للمباني السكنية، التجارية، والصناعية بجودة لا تُضاهى وضمان يصل إلى 15 عامًا.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <Button size="lg" asChild className="font-bold text-lg px-8 py-6 h-auto">
                                        <Link href="/#contact">تواصل معنا</Link>
                                    </Button>
                                    <Button size="lg" variant="outline" asChild className="font-bold text-lg px-8 py-6 h-auto">
                                        <Link href="/services">خدماتنا</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
                                <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl border-4 border-background transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <Image
                                        src="/cover1.png"
                                        alt="فريق عمل شركة العزل المتقدم لعزل الفوم في الرياض"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                                <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                                    <ShieldCheck className="w-14 h-14 text-primary-foreground" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Story Section */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                        <div className="grid gap-16 lg:grid-cols-2 items-center">
                            <div className="order-2 lg:order-1 relative px-4 lg:px-0">
                                <div className="relative grid grid-cols-2 gap-6">
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl mt-12 transform hover:-translate-y-2 transition-transform duration-300">
                                        <Image
                                            src="/professional-roof-insulation-work-in-saudi-arabia.jpg"
                                            alt="عزل أسطح مائي وحراري في الرياض باستخدام فوم البولي يوريثان"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                                        <Image
                                            src="/polyurethane-foam-insulation-application.jpg"
                                            alt="رش فوم عازل على الأسطح في السعودية"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-8 order-1 lg:order-2">
                                <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide">
                                    قصتنا
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl font-heading leading-tight">
                                    سنوات من التميز في <span className="text-primary">حماية المباني</span>
                                </h2>
                                <div className="space-y-6 text-lg text-muted-foreground leading-loose text-justify">
                                    <p>
                                        تأسست شركة العزل المتقدم في الرياض عام 2014 بهدف تقديم حلول عزل متقدمة تُواكب التحديات المناخية في المملكة العربية السعودية، حيث ترتفع درجات الحرارة صيفًا وتتعرض الأسطح والخزانات للمشاكل الناتجة عن الرطوبة والتسربات. بدأنا كفريق صغير من الفنيين المتخصصين، وسرعان ما تطورنا لنصبح واحدة من أبرز شركات العزل المعتمدة في الرياض والمنطقة الوسطى، بفضل التزامنا بمعايير الجودة العالمية ورضا عملائنا.
                                    </p>
                                    <p>
                                        اليوم، نُجري مئات المشاريع سنويًا، من عزل الأسطح والخزانات إلى عزل الحمامات والمطابخ، باستخدام أحدث تقنيات رش الفوم البولي يوريثان (Polyurethane Foam) الذي يُعد الأفضل عالميًا في العزل الحراري والمائي. كما نُجهّز فرقنا بأجهزة كشف تسربات حديثة تعمل بتقنية الأشعة تحت الحمراء والضغط الهوائي، مما يضمن تحديد نقطة التسرب بدقة دون تكسير أو أضرار.
                                    </p>
                                </div>
                                <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                                    {[
                                        "فريق فني معتمد وذو خبرة تزيد عن 10 سنوات",
                                        "عزل مطابق للمواصفات السعودية والدولية (SASO، ASTM)",
                                        "ضمان شامل يصل إلى 15 عاماً ضد التشقق والانفصال",
                                        "سرعة تنفيذ مع التزام تام بالمواعيد"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 bg-muted/50 p-3 rounded-lg">
                                            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                            <span className="font-medium text-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="py-24 bg-muted/30">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">مبادئنا الراسخة</h2>
                            <p className="text-muted-foreground text-lg">الأسس التي نبني عليها نجاحنا وثقتكم بنا في مجال العزل وكشف التسربات</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-background rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Award className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-heading text-primary">رؤيتنا</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    أن نكون الشركة الرائدة في مجال العزل وحلول الحماية البنائية في المملكة العربية السعودية، ونسهم فعّالًا في دعم رؤية 2030 من خلال تعزيز كفاءة الطاقة، تقليل الاستهلاك، ورفع جودة الحياة عبر مبانٍ آمنة ومعزولة تحمي السكان من التحديات المناخية والبنائية.
                                </p>
                            </div>
                            <div className="bg-background rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Users className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-heading text-primary">رسالتنا</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    نلتزم بتقديم حلول عزل مائي وحراري متكاملة تلبي أعلى معايير الجودة، باستخدام مواد معتمدة وآمنة، وتقنيات حديثة، وفريق فني مؤهل. هدفنا ليس إنجاز المهمة فقط، بل بناء علاقة ثقة طويلة الأمد مع كل عميل من خلال الشفافية، الأمانة، والنتائج الملموسة التي تدوم لسنوات.
                                </p>
                            </div>
                            <div className="bg-background rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Timer className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-heading text-primary">قيمنا</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    في شركة العزل المتقدم، نؤمن أن النجاح لا يُقاس بالربح فقط، بل بمستوى رضا العميل. لذلك نعتمد على قيم الشفافية الكاملة في التسعير، الأمانة الفنية في التنفيذ، الالتزام الصارم بالمواعيد، والاحترافية في التعامل. هذه ليست مجرد شعارات، بل ممارسات يومية يراها العميل في كل مرحلة من مراحل الخدمة.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visual Break - Banner */}
                <section className="relative py-32 bg-primary overflow-hidden">
                    <Image
                        src="/roof6.png"
                        alt="عزل فوم احترافي على الأسطح في الرياض"
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                    />
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center text-primary-foreground max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 font-heading leading-tight">
                            هل تبحث عن حل نهائي لمشاكل العزل؟
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                            سواء كنت تعاني من تسربات في الخزان العلوي، ارتفاع فاتورة الكهرباء بسبب تسرب الحرارة، أو تشققات في السطح، فإن فريق شركة العزل المتقدم جاهز لتقديم استشارة مجانية، فحص شامل باستخدام أحدث الأجهزة، وعرض سعر دقيق دون مفاجآت.
                        </p>
                        <Button size="lg" variant="secondary" asChild className="font-bold text-xl px-10 py-6 h-auto shadow-2xl hover:scale-105 transition-transform">
                            <a href="tel:+966507067378">اتصل بنا الآن</a>
                        </Button>
                    </div>
                </section>

                {/* Why Choose Us - Detail with Image */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                        <div className="flex flex-col items-center justify-center text-center space-y-6 mb-20">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-heading">
                                لماذا يختار العملاء شركة العزل المتقدم لعزل الفوم؟
                            </h2>
                            <p className="max-w-[800px] text-muted-foreground text-lg">
                                لأننا لا نكتفي برش الفوم – نضمن لك نظام عزل متكامل يحمي ممتلكاتك من الداخل والخارج، ويتماشى مع أعلى معايير السلامة والكفاءة في المملكة.
                            </p>
                        </div>

                        <div className="grid gap-16 lg:grid-cols-2 items-center">
                            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border">
                                <Image
                                    src="/roof7.png"
                                    alt="فريق العزل المتقدم أثناء تنفيذ عزل فوم احترافي على سطح منزل في الرياض"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                                    <p className="text-white font-bold text-2xl">دقة متناهية في كل تفصيل</p>
                                </div>
                            </div>

                            <div className="grid gap-8 sm:grid-cols-2">
                                {[
                                    {
                                        title: "سرعة الاستجابة",
                                        desc: "نصل إليك في نفس اليوم في معظم مناطق الرياض، مع فريق جاهز لفحص المشكلة وتقديم حل فوري، خاصة في حالات الطوارئ مثل التسربات المفاجئة."
                                    },
                                    {
                                        title: "أحدث المعدات",
                                        desc: "نستخدم معدات رش فوم أمريكية من نوع Graco، وأجهزة كشف تسربات حرارية (Thermal Imaging) لتحديد المشكلات دون تكسير الجدران أو الأسطح."
                                    },
                                    {
                                        title: "أسعار تنافسية",
                                        desc: "نقدم عروضًا مميزة للمشاريع السكنية والتجارية، مع خصومات تصل إلى 20% للعملاء الجدد، وبدون أي رسوم مخفية."
                                    },
                                    {
                                        title: "دعم فني مستمر",
                                        desc: "لا تنتهي علاقتنا بعد انتهاء المشروع. فريق الدعم الفني متاح طوال أيام الأسبوع للرد على أي استفسار أو متابعة ما بعد الضمان."
                                    }
                                ].map((feature, i) => (
                                    <div key={i} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors shadow-sm">
                                        <h4 className="font-bold text-xl mb-3 text-primary">{feature.title}</h4>
                                        <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional SEO-Rich Section: Services Overview */}
                <section className="py-24 bg-background">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading text-primary mb-4">
                                خدماتنا الأساسية
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                                نقدم حلولًا شاملة تغطي جميع احتياجات العزل في المملكة، من الأسطح إلى الخزانات، باستخدام مواد معتمدة وفقًا لمعايير SASO.
                            </p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {[
                                {
                                    title: "عزل الأسطح بالفوم",
                                    desc: "نستخدم رغوة البولي يوريثان العازلة التي تُشكل طبقة متجانسة بدون فواصل، تحمي من الحرارة بنسبة تصل إلى 80% وتمنع تسرب المياه تمامًا."
                                },
                                {
                                    title: "عزل الخزانات",
                                    desc: "عزل خزانات المياه العلوية والسفلى بمادة فوم مقاومة للبكتيريا، آمنة للصحة، وتدوم لأكثر من 15 سنة دون صيانة."
                                },
                                {
                                    title: "كشف التسربات بدون تكسير",
                                    desc: "باستخدام أجهزة الكشف بالأشعة تحت الحمراء والضغط الهوائي، نحدد مكان التسرب بدقة مطلقة دون إتلاف الأرضيات أو الجدران."
                                },
                                {
                                    title: "عزل الحمامات والمطابخ",
                                    desc: "حماية جدران وأرضيات الحمامات من الرطوبة والتسربات باستخدام طبقات عازلة مرنة ومقاومة للعفن."
                                },
                                {
                                    title: "التشطيبات العلوية (الكواتر)",
                                    desc: "نضيف طبقة واقية فوق الفوم بدرجة حرارة منخفضة الانعكاس (Cool Roof) لزيادة كفاءة العزل وحماية الفوم من الأشعة فوق البنفسجية."
                                },
                                {
                                    title: "الصيانة الدورية",
                                    desc: "خدمات فحص وصيانة سنوية لضمان استمرارية كفاءة نظام العزل وتجنب المشكلات المستقبلية."
                                }
                            ].map((service, i) => (
                                <div key={i} className="p-6 bg-card rounded-xl border border-border hover:shadow-md transition-shadow">
                                    <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                                    <p className="text-muted-foreground">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">استعد لتجربة عزل لا تُضاهى</h2>
                        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                            اختر شركة العزل المتقدم لعزل الفوم في الرياض لتستمتع بمنزل بارد صيفًا، دافئ شتاءً، وخالٍ من التسربات – مع ضمان قانوني موثق.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" variant="secondary" asChild className="font-bold text-lg px-8 py-6 h-auto">
                                <a href="tel:+966507067378">اتصل الآن: 050 706 7378</a>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="font-bold text-lg px-8 py-6 h-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                                <Link href="/services">عرض جميع الخدمات</Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingActions />
        </>
    )
}
