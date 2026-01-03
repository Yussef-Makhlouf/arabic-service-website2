import Link from "next/link"
import { Thermometer, Droplets, Search, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesOverview() {
  const services = [
    {
      icon: Thermometer,
      title: "عزل فوم للأسطح",
      slug: "foam-insulation",
      description: "عزل حراري ومائي متكامل بتقنية الفوم البولي يوريثان. يوفر حماية مزدوجة ويقلل فواتير الكهرباء بنسبة تصل إلى 40%.",
      benefits: ["توفير الطاقة", "عزل مائي وحراري", "ضمان 15 سنة"],
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      icon: Droplets,
      title: "عزل مائي للأسطح",
      slug: "waterproofing",
      description: "حماية شاملة من تسرب المياه والرطوبة باستخدام مواد عزل عالمية معتمدة. مناسب للأسطح والحمامات والخزانات.",
      benefits: ["منع التسربات", "حماية من الرطوبة", "مواد معتمدة"],
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Search,
      title: "كشف تسربات المياه",
      slug: "leak-detection",
      description: "كشف دقيق للتسربات باستخدام أحدث الأجهزة الإلكترونية بدون تكسير. نحدد موقع التسرب بدقة متناهية.",
      benefits: ["بدون تكسير", "أجهزة حديثة", "دقة عالية"],
      color: "text-teal-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
  ]

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            خدماتنا الرئيسية
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            حلول عزل متكاملة تناسب احتياجاتك
          </h2>
          <p className="text-muted-foreground">
            نقدم مجموعة شاملة من خدمات العزل وكشف التسربات باستخدام أحدث التقنيات والمواد المعتمدة
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className={`group bg-card rounded-xl border ${service.borderColor} hover:border-primary/50 p-6 lg:p-8 transition-all duration-300 card-hover`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-8 w-8 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="flex flex-wrap gap-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="text-xs bg-muted text-muted-foreground px-2.5 py-1 rounded-full"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all group-hover:text-primary"
                >
                  <span>اعرف المزيد</span>
                  <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* View All Services */}
        <div className="text-center mt-10">
          <Button asChild variant="outline" size="lg" className="font-medium">
            <Link href="/services" className="gap-2">
              <span>عرض جميع الخدمات</span>
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
