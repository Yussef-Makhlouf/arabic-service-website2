import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/ui/section-header"
import { ArrowLeft, Check, Wind, Droplets, Search, Database } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  longDescription: string
  href: string
  image: string
  icon: LucideIcon
  features: string[]
  keywords: string[]
}

const services: Service[] = [
  {
    id: "foam-insulation",
    title: "عزل فوم للأسطح",
    subtitle: "العزل الحراري والمائي المتكامل",
    description: "أحدث تقنيات العزل التي تجمع بين العزل المائي والحراري في طبقة واحدة.",
    longDescription: "عزل الفوم (البولي يوريثان) هو الحل الأمثل لمناخ الرياض الحار. يوفر حتى 40% من فاتورة الكهرباء ويحمي من تسرب المياه في آن واحد. مثالي للفلل والمباني التجارية والمستودعات.",
    href: "/services/foam-insulation",
    image: "/cover1.png",
    icon: Wind,
    features: ["توفير 40% من الكهرباء", "عزل مائي وحراري معاً", "بدون فواصل أو نقاط ضعف", "ضمان 15 سنة"],
    keywords: ["عزل فوم", "عزل حراري", "توفير الكهرباء", "بولي يوريثان"]
  },
  {
    id: "waterproofing",
    title: "عزل مائي للأسطح",
    subtitle: "الحماية الشاملة من تسرب المياه",
    description: "نظام عزل مائي متكامل باستخدام أفضل المواد العالمية.",
    longDescription: "العزل المائي ضروري لحماية مبناك من أضرار تسرب مياه الأمطار والرطوبة. نستخدم مواد بيتومينية وأغشية بلاستيكية معتمدة توفر حماية تدوم عقوداً طويلة.",
    href: "/services/waterproofing",
    image: "/cover.png",
    icon: Droplets,
    features: ["حماية 100% من التسرب", "مواد معتمدة عالمياً", "مقاومة للحرارة والبرودة", "ضمان 15 سنة"],
    keywords: ["عزل مائي", "منع التسرب", "بيتومين", "حماية من الأمطار"]
  },
  {
    id: "leak-detection",
    title: "كشف تسربات المياه",
    subtitle: "تقنيات حديثة بدون تكسير",
    description: "نستخدم أحدث التقنيات لكشف التسربات بدقة سنتيمترات دون الحاجة للتكسير.",
    longDescription: "خدمة كشف التسربات بأجهزة إلكترونية وكاميرات حرارية متطورة. نحدد موقع التسرب بدقة عالية دون تكسير، مع تقرير مفصل وإصلاح فوري. خدمة 24 ساعة للطوارئ.",
    href: "/services/leak-detection",
    image: "/leak-detection-thermal-camera.jpg",
    icon: Search,
    features: ["بدون تكسير", "دقة 99%", "تقرير مفصل بالصور", "إصلاح فوري"],
    keywords: ["كشف تسربات", "تسرب مياه", "فاتورة مياه مرتفعة", "أجهزة كشف"]
  },
  {
    id: "tank-insulation",
    title: "عزل خزانات المياه",
    subtitle: "حماية صحية بمواد آمنة",
    description: "عزل داخلي وخارجي للخزانات بمواد إيبوكسي آمنة صحياً ومعتمدة.",
    longDescription: "عزل الخزانات ضروري لضمان نظافة مياه الشرب. نستخدم مواد إيبوكسي Food Grade معتمدة من وزارة الصحة، مع تنظيف وتعقيم شامل قبل العزل.",
    href: "/services/tank-insulation",
    image: "/cover4.png",
    icon: Database,
    features: ["مواد آمنة صحياً", "تنظيف وتعقيم شامل", "عزل داخلي وخارجي", "ضمان 15 سنة"],
    keywords: ["عزل خزانات", "تنظيف خزانات", "إيبوكسي", "مياه نظيفة"]
  },
]

export function ServicesGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <SectionHeader
          title="اختر الخدمة المناسبة لاحتياجاتك"
          subtitle="نقدم 4 خدمات متخصصة تغطي جميع احتياجات العزل وكشف التسربات في الرياض والخرج. اضغط على أي خدمة للتفاصيل الكاملة."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 group flex flex-col border-2 border-transparent hover:border-primary/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} في الرياض - ${service.subtitle}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />

                  {/* أيقونة الخدمة */}
                  <div className="absolute top-4 right-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* العنوان على الصورة */}
                  <div className="absolute bottom-4 right-4 left-4">
                    <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-bold inline-block mb-2">
                      {service.subtitle}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6 flex-1 flex flex-col">
                  {/* الوصف الطويل */}
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {service.longDescription}
                  </p>

                  {/* المميزات */}
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* الكلمات المفتاحية */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.keywords.slice(0, 3).map((keyword, idx) => (
                      <span key={idx} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="w-full gap-2 group/btn h-12 text-base font-bold">
                    <Link href={service.href}>
                      عرض تفاصيل الخدمة
                      <ArrowLeft className="w-4 h-4 group-hover/btn:-translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
