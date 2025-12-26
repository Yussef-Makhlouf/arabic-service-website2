"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Menu, ChevronDown, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

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
    { name: "الأحياء والمناطق", href: "/#cities" },
    { name: "المدونة", href: "/blog" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: " أتصل بنا", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="شركة العزل المتقدم" className="h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 object-contain" />
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-foreground leading-tight">شركة النخبه لعزل الفوم بالرياض</span>
              <span className="text-xs text-muted-foreground">الرياض</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
                الخدمات
                <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full right-0 mt-1 w-64 bg-background border border-border rounded-xl shadow-lg py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-3 text-sm font-bold text-primary hover:bg-primary/5 border-b border-border"
                  >
                    جميع الخدمات
                  </Link>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
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
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild size="lg" className="gap-2 shadow-md">
              <a href="tel:+966507067378">
                <Phone className="h-4 w-4" />
                اتصل الآن
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-heading font-bold text-lg">القائمة</span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex-1 overflow-y-auto py-4">
                  <div className="flex flex-col">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className="px-6 py-4 text-lg font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}

                    <div className="border-t border-border">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="flex items-center justify-between w-full px-6 py-4 text-lg font-medium text-foreground hover:bg-primary/5"
                      >
                        الخدمات
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isMobileServicesOpen && (
                        <div className="bg-muted/50">
                          <SheetClose asChild>
                            <Link
                              href="/services"
                              className="block px-8 py-3 text-base font-bold text-primary border-b border-border"
                            >
                              جميع الخدمات
                            </Link>
                          </SheetClose>
                          {services.map((service) => (
                            <SheetClose asChild key={service.name}>
                              <Link
                                href={service.href}
                                className="block px-8 py-3 text-base text-foreground/80 hover:text-primary transition-colors"
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
                          className="px-6 py-4 text-lg font-medium text-foreground hover:bg-primary/5 hover:text-primary transition-colors border-t border-border"
                        >
                          {item.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t">
                  <Button asChild size="lg" className="gap-2 w-full">
                    <a href="tel:+966507067378">
                      <Phone className="h-4 w-4" />
                      اتصل الآن
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
