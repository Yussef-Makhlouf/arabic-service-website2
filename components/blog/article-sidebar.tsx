"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Phone,
    MessageCircle,
    Menu,
    ChevronLeft
} from "lucide-react"

interface Section {
    id: string
    title: string
}

interface ArticleSidebarProps {
    sections: Section[]
    relatedService?: {
        title: string
        slug: string
    }
}

export function ArticleSidebar({ sections, relatedService }: ArticleSidebarProps) {
    const [activeSection, setActiveSection] = useState<string>("")
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 400)

            // Update active section based on scroll position
            const sectionElements = sections.map(s => document.getElementById(s.id))
            const scrollPosition = window.scrollY + 150

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const element = sectionElements[i]
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id)
                    break
                }
            }
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [sections])

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        const target = document.getElementById(sectionId)
        if (target) {
            e.preventDefault()
            target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return (
        <aside className="hidden lg:block">
            <div className={`${isSticky ? 'sticky top-24' : ''} space-y-6`}>

                {/* Table of Contents */}
                {sections.length > 0 && (
                    <Card className="border-border/60 shadow-lg overflow-hidden">
                        <div className="bg-primary p-4">
                            <div className="flex items-center gap-2 text-white">
                                <Menu className="w-5 h-5" />
                                <h3 className="font-bold">محتويات المقال</h3>
                            </div>
                        </div>
                        <CardContent className="p-0">
                            <nav className="divide-y divide-border">
                                {sections.map((section, idx) => (
                                    <a
                                        key={idx}
                                        href={`#${section.id}`}
                                        onClick={(e) => handleClick(e, section.id)}
                                        className={`flex items-center justify-between p-4 text-sm transition-colors hover:bg-muted/50 ${activeSection === section.id
                                                ? 'bg-primary/5 text-primary border-r-4 border-primary'
                                                : 'text-muted-foreground hover:text-foreground'
                                            }`}
                                    >
                                        <span className="line-clamp-2 font-medium">{section.title}</span>
                                        <ChevronLeft className="w-4 h-4 flex-shrink-0 opacity-50" />
                                    </a>
                                ))}
                            </nav>
                        </CardContent>
                    </Card>
                )}

                {/* CTA Card */}
                <Card className="border-border/60 shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-br from-primary to-primary/80 p-6 text-white text-center">
                        <h3 className="font-bold text-lg text-white mb-2">هل تحتاج خدماتنا؟</h3>
                        <p className="text-sm text-white/80 mb-4">تواصل معنا للحصول على استشارة مجانية</p>

                        <div className="space-y-3">
                            <Button
                                size="lg"
                                className="w-full gap-2 h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold"
                                asChild
                            >
                                <a href="tel:+966507067378">
                                    <Phone className="h-5 w-5" />
                                    اتصل الآن
                                </a>
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full gap-2 h-12 border-white/30 text-white hover:bg-white/10 bg-white/5"
                                asChild
                            >
                                <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="h-5 w-5" />
                                    واتساب
                                </a>
                            </Button>
                        </div>
                    </div>
                </Card>

            </div>
        </aside>
    )
}
