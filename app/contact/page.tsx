import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { FaqSection } from "@/components/homepage/faq-section"
import { ServiceAreas } from "@/components/services/service-areas"
import { Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "اتصل بنا | شركة العزل المتقدم بالرياض والخرج",
    description: "تواصل معنا للحصول على أفضل خدمات العزل وكشف التسربات بالرياض والخرج. فريقنا متاح على مدار الساعة للرد على استفساراتكم وتقديم المعاينة المجانية.",
}

export default function ContactPage() {
    const contactMethods = [
        {
            icon: Phone,
            title: "اتصال مباشر",
            value: "0507067378",
            description: "متاحون للرد على مكالماتكم على مدار الساعة",
            action: "tel:+966507067378",
            label: "اتصل الآن",
            color: "bg-blue-500",
        },
        {
            icon: MessageCircle,
            title: "واتساب",
            value: "966507067378",
            description: "تحدث معنا مباشرة للحصول على تسعير فوري",
            action: "https://wa.me/966507067378",
            label: "ابدأ المحادثة",
            color: "bg-green-500",
        },
        {
            icon: Clock,
            title: "ساعات العمل",
            value: "24 ساعة / 7 أيام",
            description: "نعمل طوال الأسبوع لخدمتكم وإصلاح التسربات الطارئة",
            color: "bg-purple-500",
        },
        {
            icon: ShieldCheck,
            title: "معاينة مجانية",
            value: "بدون أي رسوم",
            description: "اطلب معاينة مجانية لموقعك والحصول على تقرير فني",
            color: "bg-amber-500",
        },
    ]

    return (
        <main className="min-h-screen bg-background dir-rtl">
            <Header />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden bg-[#59478a]">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#59478a]/90 to-[#59478a]"></div>
                <div className="container relative mx-auto px-4 text-center">
                    <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
                        تواصل معنا
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                        نحن هنا لمساعدتكم في حماية منازلكم من خلال أفضل حلول العزل وكشف التسربات. لا تتردد في الاتصال بنا في أي وقت.
                    </p>
                </div>
            </section>

            {/* Contact Cards Section */}
            <section className="py-20 -mt-16 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethods.map((method, index) => (
                            <div
                                key={index}
                                className="bg-card p-8 rounded-3xl shadow-xl border border-border/50 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                    <method.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-foreground">{method.title}</h3>
                                <p className="text-2xl font-bold mb-3 text-primary" dir="ltr">{method.value}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                    {method.description}
                                </p>
                                {method.action && (
                                    <a
                                        href={method.action}
                                        className={`mt-auto px-8 py-3 rounded-full text-white font-bold transition-all ${method.color} hover:brightness-110 shadow-md`}
                                    >
                                        {method.label}
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Info Section */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4 text-right">
                    <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 md:p-12 shadow-sm border border-border">
                        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-primary rounded-full"></span>
                            لماذا تتواصل معنا؟
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">ضمان حقيقي</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        نقدم ضمانات تصل إلى 10 سنوات على جميع أعمال العزل التي نقوم بها.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">تغطية شاملة</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        نتواجد في جميع أحياء الرياض والخرج والمناطق المجاورة بأسرع وقت.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">سرعة التنفيذ</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        نلتزم بالمواعيد المحددة وننجز العمل بدقة عالية وفي أسرع وقت ممكن.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-2">أسعار تنافسية</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        نقدم أفضل جودة بأفضل الأسعار مع توفير عروض وخصومات دورية.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas Section */}
            <ServiceAreas serviceName="العزل والكشف" />

            {/* FAQ Section */}
            <FaqSection />

            <Footer />
            <FloatingActions />
        </main>
    )
}
