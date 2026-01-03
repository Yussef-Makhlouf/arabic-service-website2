"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

interface StickyMobileCTAProps {
    phoneNumber?: string
    whatsappNumber?: string
    showAfterScroll?: number
}

export function StickyMobileCTA({
    phoneNumber = "+966507067378",
    whatsappNumber = "966507067378",
    showAfterScroll = 500
}: StickyMobileCTAProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsVisible(scrollPosition > showAfterScroll)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        handleScroll()

        return () => window.removeEventListener("scroll", handleScroll)
    }, [showAfterScroll])

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
            {/* Gradient fade */}
            <div className="absolute inset-0 -top-8 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none" />

            <div className="relative bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_30px_rgba(0,0,0,0.1)]">
                <div className="container mx-auto px-4 py-3 pb-safe">
                    <div className="flex gap-3">
                        {/* Call Button */}
                        <Button
                            size="lg"
                            className="flex-1 gap-2 h-13 text-base font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg rounded-xl"
                            asChild
                        >
                            <a href={`tel:${phoneNumber}`}>
                                <Phone className="h-5 w-5" />
                                <span>اتصل الآن</span>
                            </a>
                        </Button>

                        {/* WhatsApp Button */}
                        <Button
                            size="lg"
                            variant="outline"
                            className="flex-1 gap-2 h-13 text-base font-bold border-green-500 text-green-600 hover:bg-green-50 rounded-xl"
                            asChild
                        >
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <MessageCircle className="h-5 w-5" />
                                <span>واتساب</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
