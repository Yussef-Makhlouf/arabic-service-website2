import Link from "next/link"
import { Phone, MapPin, MessageCircle, Clock, Shield, ChevronDown } from "lucide-react"
import { FaInstagram, FaFacebook, FaYoutube, FaTiktok, FaSnapchat } from "react-icons/fa"

export function Footer() {
  const services = [
    { name: "عزل فوم للأسطح", href: "/services/foam-insulation" },
    { name: "عزل مائي للأسطح", href: "/services/waterproofing" },
    { name: "كشف تسربات المياه", href: "/services/leak-detection" },
  ]

  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
    { name: "جميع الخدمات", href: "/services" },
    { name: "المدونة", href: "/blog" },
    { name: "اتصل بنا", href: "/contact" },
    { name: "سياسة الخصوصية", href: "/privacy" },
  ]

  const partnerLinks = [
    { name: "شركة عزل فوم بالرياض", href: "https://awazel-alsafrrat.com.sa/" },
    { name: "شركة عزل اسطح بالرياض", href: "https://awazel-alsafrrat.sa/" },
  ]

  const socialMedia = [
    { name: "Instagram", href: "https://www.instagram.com/awazelalsafrrat/?hl=ar", icon: FaInstagram },
    { name: "Facebook", href: "https://www.facebook.com/Awazelalsafrat/", icon: FaFacebook },
    { name: "YouTube", href: "https://www.youtube.com/@awazel343", icon: FaYoutube },
    { name: "TikTok", href: "https://www.tiktok.com/@awazelalsafrrat", icon: FaTiktok },
    { name: "Snapchat", href: "https://www.snapchat.com/@awazelalsafrrat?locale=ar", icon: FaSnapchat },
  ]

  const serviceAreas = {
    main: ["الرياض", "الخرج", "شمال الرياض", "الدرعية", "الدوادمي", "المجمعة"],
    secondary: ["القويعية", "وادي الدواسر", "الأفلاج", "الزلفي", "شقراء", "حريملاء"],
    tertiary: ["المزاحمية", "رماح", "ثادق", "حوطة بني تميم", "عفيف", "السليل", "الغاط", "الحريق", "ضرماء"]
  }

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo.webp" alt="شركة العزل المتقدم" className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1" />
              <div>
                <h3 className="font-heading text-xl text-white font-bold">شركة العزل المتقدم</h3>
                <span className="text-sm text-white/70">الرياض والخرج</span>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              شركة متخصصة في عزل الأسطح والخزانات بالرياض والخرج. معتمدون من الهيئة السعودية للمهندسين مع خبرة تزيد عن 15 عامًا وضمان حقيقي يصل إلى 15 سنة.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+966507067378"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-secondary transition-colors group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span dir="ltr" className="font-medium">0507067378</span>
              </a>
              <a
                href="https://wa.me/966507067378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white/80 hover:text-green-400 transition-colors group"
              >
                <div className="p-2 bg-white/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span>واتساب</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <div className="p-2 bg-white/10 rounded-lg">
                  <MapPin className="h-4 w-4" />
                </div>
                <span>الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-secondary text-white rounded-full"></span>
              خدماتنا
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-white/80 hover:text-secondary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-secondary font-medium hover:underline">
                  عرض جميع الخدمات ←
                </Link>
              </li>
            </ul>

            {/* Partners */}
            <h4 className="font-heading text-base font-bold text-white mt-8 mb-4 text-white/90">شركاؤنا</h4>
            <ul className="flex flex-col gap-2">
              {partnerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-secondary text-white rounded-full"></span>
              روابط سريعة
            </h3>
            <ul className="flex flex-col gap-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-heading text-lg font-bold mb-5 text-white/90 flex items-center gap-2">
              <span className="w-1 h-5 bg-secondary text-white rounded-full"></span>
              مناطق الخدمة
            </h3>
            <p className="text-sm text-white/70 leading-relaxed mb-4">
              نقدم خدمات <span className="text-white font-medium">عزل اسطح بالرياض</span> و<span className="text-white font-medium">عزل اسطح بالخرج</span> وجميع محافظات منطقة الرياض.
            </p>

            <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
              {serviceAreas.main.map((city) => (
                <span key={city} className="text-sm text-white/80 hover:text-secondary transition-colors cursor-default">
                  {city}
                </span>
              ))}
            </div>

            <details className="group">
              <summary className="text-sm text-secondary cursor-pointer hover:underline flex items-center gap-1">
                <span>المزيد من المناطق</span>
                <ChevronDown className="h-4 w-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="mt-3 pt-3 border-t border-white/10">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-3">
                  {serviceAreas.secondary.map((city) => (
                    <span key={city} className="text-sm text-white/70">
                      {city}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-white/60">
                  {serviceAreas.tertiary.map((city) => (
                    <span key={city}>{city}</span>
                  ))}
                </div>
              </div>
            </details>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-10 border-t border-white/10">
          <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg text-center">
            <span className="text-2xl md:text-3xl font-bold text-secondary mb-1">15+</span>
            <span className="text-xs md:text-sm text-white/70">سنة خبرة</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg text-center">
            <span className="text-2xl md:text-3xl font-bold text-secondary mb-1">5000+</span>
            <span className="text-xs md:text-sm text-white/70">مشروع منجز</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg text-center">
            <span className="text-2xl md:text-3xl font-bold text-secondary mb-1">20+</span>
            <span className="text-xs md:text-sm text-white/70">منطقة خدمة</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/5 rounded-lg text-center">
            <span className="text-2xl md:text-3xl font-bold text-secondary mb-1">15 سنة</span>
            <span className="text-xs md:text-sm text-white/70">ضمان شامل</span>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/70">تابعنا على:</span>
              <div className="flex items-center gap-3">
                {socialMedia.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-secondary hover:text-primary rounded-lg transition-all duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <Shield className="h-3.5 w-3.5" />
                معتمدون من SASO
              </span>
              <span>•</span>
              <span>ضمان 15 سنة</span>
              <span>•</span>
              <span>خبرة 15+ عاماً</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary/80 border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-right">
            <p className="text-xs text-white/60">
              © {new Date().getFullYear()} شركة العزل المتقدم لعزل الاسطح - جميع الحقوق محفوظة
            </p>
            <p className="text-xs text-white/50">
              تصميم وتطوير بواسطة{" "}
              <a
                href="https://wa.me/201145607071"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary/80 hover:text-secondary transition-colors"
              >
                Ahmed Adham
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
