"use client"

import Link from "next/link"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, ChevronDown, X, MessageCircle } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navigation = [
    { name: "الرئيسية", href: "/" },
    { name: "من نحن", href: "/about" },
  ]

  const services = [
    { name: "عزل فوم للأسطح", href: "/services/foam-insulation" },
    { name: "عزل مائي للأسطح", href: "/services/waterproofing" },
    { name: "كشف تسربات المياه", href: "/services/leak-detection" },
  ]

  const secondaryNav = [
    { name: "المدونة", href: "/blog" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "اتصل بنا", href: "/contact" },
    {name: "سياسة الخصوصية", href: "/privacy"}
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/logo.webp"
                alt="شركة العزل المتقدم"
                className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg bg-white/10 p-1"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base md:text-lg font-bold text-white leading-tight group-hover:text-secondary transition-colors">
                شركة العزل المتقدم
              </span>
              <span className="text-xs text-white/70">الرياض والخرج</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current)
                  closeTimeoutRef.current = null
                }
                setIsServicesOpen(true)
              }}
              onMouseLeave={() => {
                closeTimeoutRef.current = setTimeout(() => {
                  setIsServicesOpen(false)
                }, 200)
              }}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                الخدمات
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full right-0 w-56 bg-white border border-border rounded-lg shadow-xl mt-1 py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2.5 text-sm font-bold text-primary hover:bg-muted border-b border-border"
                  >
                    جميع الخدمات
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {secondaryNav.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white hover:text-white hover:bg-white/10 gap-2"
            >
              <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden xl:inline">واتساب</span>
              </a>
            </Button>
            <Button
              asChild
              size="default"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold gap-2 shadow-md cta-glow"
            >
              <a href="tel:+966507067378">
                <Phone className="h-4 w-4" />
                <span>اتصل الآن</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Call Button */}
            <Button
              asChild
              size="sm"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold gap-1.5 cta-glow"
            >
              <a href="tel:+966507067378">
                <Phone className="h-4 w-4" />
                <span className="text-sm">اتصل</span>
              </a>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 bg-white">
                <div className="flex flex-col h-full">
                  {/* Sheet Header */}
                  <div className="flex items-center justify-between p-4 border-b bg-primary">
                    <span className="font-heading font-bold text-lg text-white">القائمة</span>
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Sheet Navigation */}
                  <div className="flex-1 overflow-y-auto py-4">
                    <div className="flex flex-col">
                      {navigation.map((item) => (
                        <SheetClose asChild key={item.name}>
                          <Link
                            href={item.href}
                            className="px-6 py-4 text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border/50"
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      ))}

                      {/* Mobile Services Accordion */}
                      <div className="border-b border-border/50">
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="flex items-center justify-between w-full px-6 py-4 text-base font-medium text-foreground hover:bg-muted transition-colors"
                        >
                          الخدمات
                          <ChevronDown
                            className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {isMobileServicesOpen && (
                          <div className="bg-muted/50 border-t border-border/50">
                            <SheetClose asChild>
                              <Link
                                href="/services"
                                className="block px-8 py-3 text-sm font-bold text-primary border-b border-border/50"
                              >
                                جميع الخدمات
                              </Link>
                            </SheetClose>
                            {services.map((service) => (
                              <SheetClose asChild key={service.name}>
                                <Link
                                  href={service.href}
                                  className="block px-8 py-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                  {service.name}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        )}
                      </div>

                      {secondaryNav.map((item) => (
                        <SheetClose asChild key={item.name}>
                          <Link
                            href={item.href}
                            className="px-6 py-4 text-base font-medium text-foreground hover:bg-muted hover:text-primary transition-colors border-b border-border/50"
                          >
                            {item.name}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>

                  {/* Sheet Footer CTAs */}
                  <div className="p-4 border-t bg-muted/30 space-y-3">
                    <Button asChild size="lg" className="gap-2 w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold cta-glow">
                      <a href="tel:+966507067378">
                        <Phone className="h-5 w-5" />
                        اتصل الآن - 0507067378
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="gap-2 w-full border-green-500 text-green-600 hover:bg-green-50">
                      <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5" />
                        تواصل عبر واتساب
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
