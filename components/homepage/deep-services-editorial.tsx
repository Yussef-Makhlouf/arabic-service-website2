import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DeepServicesEditorial() {
  const services = [
    {
      title: "عزل الأسطح بالفوم",
      problem: "ارتفاع فواتير الكهرباء بسبب ضعف العزل الحراري وتسرب الحرارة",
      solution: "تطبيق طبقة فوم بولي يوريثان عالية الكثافة تعمل كحاجز حراري ومائي مزدوج",
      result: "تقليل استهلاك الكهرباء بنسبة 40-50% وحماية كاملة من التسربات",
      details: [
        "يتم رش الفوم بسماكة 3-5 سم على كامل مساحة السطح",
        "يتصلب الفوم خلال دقائق ويشكل طبقة واحدة متماسكة بدون فواصل",
        "يعكس أشعة الشمس ويمنع امتصاص الحرارة",
        "مقاوم للماء والرطوبة والعوامل الجوية",
      ],
      quote: "أفضل استثمار طويل الأمد لراحة منزلك وتوفير فواتيرك",
      link: "/services/foam-insulation",
    },
    {
      title: "كشف تسربات المياه",
      problem: "ارتفاع فاتورة المياه بشكل غير مبرر أو ظهور رطوبة وتصدعات",
      solution: "استخدام أجهزة كشف إلكترونية دقيقة لتحديد مصدر التسريب بدون تكسير",
      result: "معرفة مكان التسريب بدقة 100% وإصلاح نهائياً مع ضمان مكتوب",
      details: [
        "فحص شامل لجميع نقاط التوصيلات والأنابيب",
        "استخدام أجهزة الموجات فوق الصوتية والحرارية",
        "تقرير مفصل بمواقع التسريب مع التوصيات",
        "إصلاح فوري أو جدولة أعمال الصيانة",
      ],
      quote: "الكشف المبكر يوفر آلاف الريالات من تكاليف الإصلاح لاحقاً",
      link: "/services/leak-detection",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            حلول شاملة ومتكاملة
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            خدماتنا: من المشكلة إلى الحل
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            نفهم مشكلتك، نقدم الحل المناسب، ونضمن النتائج المثالية
          </p>
        </div>

        {/* Services Editorial */}
        <div className="max-w-5xl mx-auto space-y-16">
          {services.map((service, index) => (
            <article key={index} className="relative">
              {/* Service Number */}
              <div className="absolute -right-4 top-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-primary">{(index + 1).toString().padStart(2, "0")}</span>
              </div>

              <div className="pr-20">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{service.title}</h3>

                {/* Problem → Solution → Result Flow */}
                <div className="space-y-6 mb-8">
                  {/* Problem */}
                  <div className="p-6 bg-destructive/5 border-r-4 border-destructive rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="inline-block px-3 py-1 bg-destructive/20 text-destructive text-sm font-bold rounded-full">
                        المشكلة
                      </span>
                    </div>
                    <p className="text-foreground mt-3 text-lg leading-relaxed">{service.problem}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-primary transform rotate-90" />
                  </div>

                  {/* Solution */}
                  <div className="p-6 bg-primary/5 border-r-4 border-primary rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full">
                        الحل
                      </span>
                    </div>
                    <p className="text-foreground mt-3 text-lg leading-relaxed">{service.solution}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-success transform rotate-90" />
                  </div>

                  {/* Result */}
                  <div className="p-6 bg-success/5 border-r-4 border-success rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="inline-block px-3 py-1 bg-success/20 text-success text-sm font-bold rounded-full">
                        النتيجة
                      </span>
                    </div>
                    <p className="text-foreground mt-3 text-lg leading-relaxed font-semibold">{service.result}</p>
                  </div>
                </div>

                {/* Details List */}
                <div className="mb-6">
                  <h4 className="font-bold text-foreground mb-4 text-lg">كيف يتم التنفيذ؟</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pull Quote */}
                <blockquote className="p-6 bg-muted/50 border-r-4 border-accent rounded-lg mb-6">
                  <p className="text-lg italic text-foreground leading-relaxed">"{service.quote}"</p>
                </blockquote>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" asChild>
                    <a href={service.link}>
                      اقرأ المزيد عن الخدمة
                      <ArrowRight className="w-5 h-5 mr-2" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline">
                    احصل على استشارة مجانية
                  </Button>
                </div>
              </div>

              {/* Divider */}
              {index < services.length - 1 && <div className="mt-16 border-t border-border" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
