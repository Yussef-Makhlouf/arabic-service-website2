import Link from "next/link"
import { Phone, MapPin, MessageCircle, ChevronLeft } from "lucide-react"
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaSnapchat } from "react-icons/fa"

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
    { name: "سياسة الخصوصية", href: "/privacy" },
  ]

  const partnerLinks = [
    { name: "الخليج لنقل العفش بالرياض", href: "https://alkhallij.com/" },
    { name: "الاطلال شركة شراء اثاث مستعمل بالرياض", href: "https://alatlaal.com/" },
  ]

  const socialMedia = [
    { name: "Instagram", href: "https://www.instagram.com/awazelalsafrrat/?hl=ar", icon: FaInstagram },
    { name: "Facebook", href: "https://www.facebook.com/Awazelalsafrat/", icon: FaFacebook },
    { name: "YouTube", href: "https://www.youtube.com/@awazel343", icon: FaYoutube },
    { name: "TikTok", href: "https://www.tiktok.com/@awazelalsafrrat", icon: FaTiktok },
    { name: "Snapchat", href: "https://www.snapchat.com/@awazelalsafrrat?locale=ar", icon: FaSnapchat },
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

            {/* Partner Links */}
            <h3 className="font-heading text-lg font-bold mb-4 mt-6">شركاؤنا</h3>
            <ul className="flex flex-col gap-3">
              {partnerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-lg font-bold mb-4 flex items-center gap-2 text-primary">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              تغطية شاملة
            </h3>
            <div className="space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                نقدم خدمات <span className="font-bold text-foreground">عزل اسطح بالرياض</span> و<span className="font-bold text-foreground">عزل اسطح بالخرج</span> وجميع محافظات ومدن منطقة الرياض بما فيها شمال الرياض من خلال أفضل <span className="font-bold text-foreground">شركات عزل خزانات شمال الرياض</span>.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                {[
                  "الرياض", "الخرج",
                  "شمال الرياض", "الدرعية",
                  "الدوادمي", "المجمعة",
                  "القويعية", "وادي الدواسر",
                  "الأفلاج", "الزلفي",
                  "شقراء", "حريملاء"
                ].map((city) => (
                  <div key={city} className="flex items-center justify-between text-sm group cursor-default">
                    <span className="text-muted-foreground group-hover:text-primary transition-colors">{city}</span>
                    <ChevronLeft className="w-4 h-4 text-primary/40 group-hover:text-primary transition-all ltr:rotate-180" />
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-muted-foreground/70 border-t border-border/50 pt-4">
                {["المزاحمية", "رماح", "ثادق", "حوطة بني تميم", "عفيف", "السليل", "الغاط", "الحريق", "ضرماء"].map((city) => (
                  <span key={city} className="hover:text-primary transition-colors">{city}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50">
          <div className="flex flex-col items-center p-6 bg-muted/30 rounded-2xl border border-border/50 text-center">
            <span className="text-2xl font-bold text-primary mb-1">20+</span>
            <span className="text-sm text-muted-foreground">محافظة ومدينة</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-muted/30 rounded-2xl border border-border/50 text-center">
            <span className="text-2xl font-bold text-primary mb-1">24/7</span>
            <span className="text-sm text-muted-foreground">خدمة على مدار الساعة</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-muted/30 rounded-2xl border border-border/50 text-center">
            <span className="text-2xl font-bold text-primary mb-1">100%</span>
            <span className="text-sm text-muted-foreground">تغطية شاملة</span>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col items-center gap-6">
            <h3 className="font-heading text-lg font-bold text-center">تابعنا على</h3>
            <div className="flex items-center gap-4">
              {socialMedia.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border mt-8 md:mt-10 pt-6 md:pt-8">
        <div className="flex flex-col items-center gap-4 text-center md:text-right">
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm text-muted-foreground">
              © {new Date().getFullYear()} شركة العزل المتقدم لعزل الاسطح . جميع الحقوق محفوظة.
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
    </footer>
  )
}
