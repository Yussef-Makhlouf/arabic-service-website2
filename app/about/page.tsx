import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Award, Timer, Users, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

export const metadata = {
    title: "من نحن | شركة النخبة لعزل الفوم",
    description: "تعرف على شركة النخبة لعزل الفوم بالرياض، خبرة سنوات في مجالات العزل المائي والحراري وكشف التسربات برؤية عصرية وتقنيات متطورة.",
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
                                    نحن شركة النخبة، رواد خدمات العزل بالرياض والمملكة. نجمع بين الخبرة العريقة والتقنيات الحديثة لنقدم حلولاً جذرية لمشاكل التسربات والعزل، نحمي منزلك ونوفر طاقتك.
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
                                        alt="فريق عمل شركة النخبة"
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
                                            alt="تنفيذ عزل الأسطح"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                                        <Image
                                            src="/polyurethane-foam-insulation-application.jpg"
                                            alt="رش الفوم العازل"
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
                                        تأسست شركة النخبة في قلب الرياض، بهدف سد الفجوة في سوق خدمات العزل من خلال تقديم جودة لا تضاهى واحترافية عالية. بدأنا بمشروع صغير، واليوم نفخر بكوننا الخيار الأول لألاف العملاء في المملكة.
                                    </p>
                                    <p>
                                        نحن لا نقدم مجرد خدمة عزل، بل نقدم راحة بال. نستخدم أفضل المواد المعتمدة عالمياً (مثل الفوم بولي يوريثان) ونوظف أحدث تقنيات كشف التسربات لضمان نتائج تدوم طويلاً.
                                    </p>
                                </div>
                                <ul className="grid sm:grid-cols-2 gap-4 pt-4">
                                    {[
                                        "فريق فني معتمد وذو خبرة",
                                        "عزل مطابق للمواصفات",
                                        "ضمان شامل يصل إلى 15 عاماً",
                                        "سرعة وتنظيم في العمل"
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
                            <p className="text-muted-foreground text-lg">الأسس التي نبني عليها نجاحنا وثقتكم بنا</p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <div className="bg-background rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Award className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-heading text-primary">رؤيتنا</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    أن نكون النموذج الرائد في مجال العزل وحلول المباني في المملكة، ونساهم في تحقيق كفاءة الطاقة واستدامة المباني وفق رؤية 2030.
                                </p>
                            </div>
                            <div className="bg-background rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Users className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-heading text-primary">رسالتنا</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    تقديم خدمات عزل وكشف تسربات بمستوى عالمي، مع التركيز على رضا العميل، الجودة المتناهية، والتطوير المستمر لكوادرنا وتقنياتنا.
                                </p>
                            </div>
                            <div className="bg-background rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-1">
                                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                                    <Timer className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 font-heading text-primary">قيمنا</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    الشفافية في التعامل، الأمانة في التنفيذ، والالتزام بالمواعيد هي الركائز الأساسية التي نبني عليها علاقتنا مع كل عميل.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Visual Break - Banner */}
                <section className="relative py-32 bg-primary overflow-hidden">
                    <Image
                        src="/roof6.png"
                        alt="خلفية عزل"
                        fill
                        className="object-cover opacity-10 mix-blend-overlay"
                    />
                    <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center text-primary-foreground max-w-4xl">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8 font-heading leading-tight">
                            هل تبحث عن حل نهائي لمشاكل العزل؟
                        </h2>
                        <p className="mx-auto max-w-2xl text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                            دعنا نتولى الأمر. فريقنا جاهز لتقديم استشارة مجانية وفحص شامل لعقارك بأحدث الأجهزة.
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
                                لماذا يختار العملاء شركة النخبة؟
                            </h2>
                            <p className="max-w-[800px] text-muted-foreground text-lg">
                                نحن نقدم أكثر من مجرد خدمة، نحن نقدم شراكة طويلة الأمد لحماية ممتلكاتك.
                            </p>
                        </div>

                        <div className="grid gap-16 lg:grid-cols-2 items-center">
                            <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border">
                                <Image
                                    src="/roof7.png"
                                    alt="جودة التنفيذ"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-10">
                                    <p className="text-white font-bold text-2xl">دقة متناهية في كل تفصيل</p>
                                </div>
                            </div>

                            <div className="grid gap-8 sm:grid-cols-2">
                                {[
                                    { title: "سرعة الاستجابة", desc: "نصلك في أسرع وقت ممكن لحل مشكلتك الطارئة." },
                                    { title: "أحدث المعدات", desc: "نستخدم سيارات مجهزة ومكائن رش فوم أمريكية حديثة." },
                                    { title: "أسعار تنافسية", desc: "نقدم أفضل قيمة مقابل سعر مع عروض وخصومات مستمرة." },
                                    { title: "دعم فني مستمر", desc: "فريقنا معك حتى بعد انتهاء الخدمة لضمان رضاك التام." }
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
            </main>
            <Footer />
            <FloatingActions />
        </>
    )
}
