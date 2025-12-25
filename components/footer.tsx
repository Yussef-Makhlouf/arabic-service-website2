import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function Footer() {
  const services = [
    { name: "عزل فوم للأسطح", href: "/services/foam-insulation" },
    { name: "عزل مائي للأسطح", href: "/services/waterproofing" },
    { name: "كشف تسربات المياه", href: "/services/leak-detection" },
  ]

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "جميع الخدمات", href: "/services" },
    { name: "من نحن", href: "/about" },
    { name: "المدونة", href: "/blog" },
    { name: "الأسئلة الشائعة", href: "/faq" },
  ]

  const areas = [
    "الرياض",
    "شمال الرياض",
    "جنوب الرياض",
    "شرق الرياض",
    "غرب الرياض",
    "الخرج",
    "النرجس",
    "الملقا",
    "حطين",
    "العليا",
  ]

  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">شركة العزل المتقدم</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              شركة متخصصة في عزل الأسطح والخزانات بالرياض والخرج. معتمدون من الهيئة السعودية للمهندسين مع خبرة تزيد عن
              15 عامًا وضمان حقيقي يصل إلى 10 سنوات.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+966507067378"
                className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <span dir="ltr">0507067378</span>
              </a>
              <a
                href="https://wa.me/966507067378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-primary transition-colors"
              >
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span>واتساب</span>
              </a>

              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                الرياض، المملكة العربية السعودية
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">خدماتنا</h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-primary font-medium hover:underline">
                  عرض جميع الخدمات ←
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              تغطية شاملة
            </h3>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed bg-primary/5 p-3 rounded-lg border border-primary/10">
                نغطي كافة أحياء الرياض والخرج والمناطق المجاورة. فريقنا جاهز لخدمتكم لتقديم أفضل حلول العزل المائي
                والحراري وكشف التسربات بأعلى معايير الجودة والضمان.
              </p>
              <ul className="grid grid-cols-2 gap-2">
                {areas.map((area) => (
                  <li
                    key={area}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-primary/40 rounded-full" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 md:mt-10 pt-6 md:pt-8">
          <div className="flex flex-col items-center gap-4 text-center md:text-right">
            <div className="flex flex-col gap-1">
              <p className="text-xs md:text-sm text-muted-foreground">
                © {new Date().getFullYear()} شركة النخبه لعزل الاسطح . جميع الحقوق محفوظة.
              </p>
              <p className="text-sm md:text-base font-medium text-muted-foreground/80">
                تصميم و تطوير بواسطة <span className="text-primary/80 font-medium">Ahmed Adham</span>
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-xs md:text-sm text-muted-foreground">
              <span>معتمدون من SASO</span>
              <span className="hidden sm:inline">•</span>
              <span>ضمان 10 سنوات</span>
              <span className="hidden sm:inline">•</span>
              <span>خبرة 15+ عاماً</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
