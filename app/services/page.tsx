import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Shield, CheckCircle, Clock, Thermometer, Droplets, Search, Building2, Home, Factory } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

export const metadata: Metadata = {
  title: "خدمات العزل وكشف التسربات | شركة العزل المتقدم",
  description: "تعرف على خدماتنا في عزل الفوم، العزل المائي والحراري، كشف تسربات المياه، وعزل الخزانات. حلول متكاملة لبيئة آمنة وموفرة للطاقة.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "عزل فوم للأسطح",
      description: "نظام عزل ثنائي (مائي وحراري) يوفر حماية كاملة للأسطح ويقلل فاتورة الكهرباء بنسبة 40%.",
      icon: Thermometer,
      slug: "foam-insulation",
      highlights: ["حماية مزدوجة", "تنفيذ سريع", "ضمان 15 سنة"],
    },
    {
      title: "عزل مائي للأسطح",
      description: "حماية تامة من تسربات المياه والأمطار للأسطح المبلطة والخرسانية بأفضل المواد المعتمدة.",
      icon: Droplets,
      slug: "waterproofing",
      highlights: ["منع التسربات", "مقاومة الرطوبة", "مواد آمنة"],
    },
    {
      title: "كشف تسربات المياه",
      description: "فحص دقيق لتسربات المياه باستخدام أحدث الأجهزة الإلكترونية دون الحاجة لتكسير الجدران.",
      icon: Search,
      slug: "leak-detection",
      highlights: ["بدون تكسير", "تقرير معتمد", "دقة عالية"],
    },
    {
      title: "عزل خزانات المياه",
      description: "تنظيف وتعقيم وعزل الخزانات الأرضية والعلوية بمواد صحية آمنة تمنع البكتيريا والطحالب.",
      icon: Building2,
      slug: "tank-insulation",
      highlights: ["مواد صحية", "تعقيم شامل", "ضمان التسرب"],
    },
    {
      title: "عزل المسابح",
      description: "عزل مائي متخصص للمسابح يمنع تسرب المياه ويحافظ على البنية الخرسانية من التآكل.",
      icon: Droplets,
      slug: "pool-insulation",
      highlights: ["حماية الخرسانة", "مواد مرنة", "ضمان طويل"],
    },
    {
      title: "عزل الأسطح الشينكو",
      description: "عزل خاص للأسطح المعدنية (الهناجر والمستودعات) يمنع الصدأ ويقلل الحرارة بشكل كبير.",
      icon: Factory,
      slug: "shinko-insulation",
      highlights: ["منع الصدأ", "عزل صوتي", "حماية الهناجر"],
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background font-sans">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary-foreground/80 text-sm mb-4">
                <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
                <span>/</span>
                <span className="text-white font-medium">خدماتنا</span>
              </div>
              <h1 className="text-4xl md:text-5xl text-white font-bold mb-6 font-heading">
                حلول عزل متكاملة لمنزلك
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-xl">
                نقدم مجموعة شاملة من خدمات العزل وكشف التسربات باستخدام أحدث التقنيات لضمان راحة بالك وحماية ممتلكاتك.
              </p>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "ضمان حقيقي يصل لـ 15 سنة", desc: "نضمن جودة أعمالنا وموادنا لفترات طويلة" },
                { icon: CheckCircle, title: "مواد معتمدة من SASO", desc: "نستخدم فقط المواد المطابقة للمواصفات السعودية" },
                { icon: Clock, title: "خبرة +15 عام في السوق", desc: "آلاف المشاريع الناجحة في الرياض والخرج" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold mb-3 font-heading group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <Button asChild variant="outline" className="w-full justify-between group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                        <Link href={`/services/${service.slug}`}>
                          <span>عرض التفاصيل</span>
                          <ArrowLeft className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
              <h2 className="text-3xl font-bold mb-4 font-heading">
                لم تجد الخدمة التي تبحث عنها؟
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                تواصل معنا مباشرة لنناقش احتياجاتك الخاصة. فريقنا جاهز لتقديم استشارات مجانية وحلول مخصصة لمشروعك.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold shadow-lg shadow-secondary/20">
                  <Link href="tel:+966507067378">
                    اتصل بنا الآن
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 border-2">
                  <Link href="/contact">
                    تواصل معنا
                  </Link>
                </Button>
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
