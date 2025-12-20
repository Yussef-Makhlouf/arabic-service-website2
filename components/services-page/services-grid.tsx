import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ArrowLeft, Check } from "lucide-react"

const services = [
  {
    id: "foam-insulation",
    title: "عزل فوم للأسطح",
    subtitle: "العزل الحراري والمائي المتكامل",
    description:
      "أحدث تقنيات العزل التي تجمع بين العزل المائي والحراري في طبقة واحدة. يوفر حتى 60% من فاتورة الكهرباء مع عمر افتراضي يتجاوز 25 عاماً.",
    href: "/services/foam-insulation",
    image: "/polyurethane-foam-insulation-application.jpg",
    features: ["توفير 40-60% من الكهرباء", "عزل مائي وحراري معاً", "بدون فواصل أو نقاط ضعف", "ضمان 10 سنوات"],
  },
  {
    id: "waterproofing",
    title: "عزل مائي للأسطح",
    subtitle: "الحماية الشاملة من تسرب المياه",
    description:
      "نظام عزل مائي متكامل باستخدام أفضل المواد العالمية. حماية مضمونة من تسرب مياه الأمطار والرطوبة لعقود طويلة.",
    href: "/services/waterproofing",
    image: "/positive-negative-waterproofing.jpg",
    features: ["حماية 100% من التسرب", "مواد معتمدة عالمياً", "مقاومة للحرارة والبرودة", "ضمان 10 سنوات"],
  },
  {
    id: "leak-detection",
    title: "كشف تسربات المياه",
    subtitle: "تقنيات حديثة بدون تكسير",
    description:
      "نستخدم أحدث التقنيات لكشف التسربات بدقة سنتيمترات دون الحاجة للتكسير. الكاميرا الحرارية والاستشعار الصوتي والنيتروجين.",
    href: "/services/leak-detection",
    image: "/leak-detection-thermal-camera.jpg",
    features: ["بدون تكسير", "دقة عالية جداً", "تقرير مفصل بالصور", "إصلاح فوري"],
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <SectionHeader
          title="اختر الخدمة المناسبة لاحتياجاتك"
          subtitle="نقدم 5 خدمات متخصصة تغطي جميع احتياجات العزل. اضغط على أي خدمة للتفاصيل الكاملة."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/10 transition-colors" />
                <div className="absolute bottom-4 right-4">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full gap-2 group/btn">
                  <Link href={service.href}>
                    عرض تفاصيل الخدمة
                    <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
