"use client"

import { useState, useEffect } from "react"
import { Droplets, Flame, Building, Search, Container } from "lucide-react"

const services = [
  { id: "waterproofing", name: "العزل المائي", icon: Droplets },
  { id: "foam-insulation", name: "عزل الفوم", icon: Flame },

  { id: "leak-detection", name: "كشف التسربات", icon: Search },
  { id: "tank-insulation", name: "عزل الخزانات", icon: Container },
]

export function ServicesTableOfContents() {
  const [activeSection, setActiveSection] = useState("")
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if should be sticky
      const tocElement = document.getElementById("services-toc")
      if (tocElement) {
        const rect = tocElement.getBoundingClientRect()
        setIsSticky(rect.top <= 80)
      }

      // Find active section
      const sections = services.map((s) => document.getElementById(s.id))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(services[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav id="services-toc" className="sticky top-16 z-40 bg-muted border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap hidden md:block">
            انتقل إلى:
          </span>
          <div className="flex items-center gap-2">
            {services.map((service) => {
              const Icon = service.icon
              const isActive = activeSection === service.id
              return (
                <button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${isActive
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-primary/10"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{service.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
