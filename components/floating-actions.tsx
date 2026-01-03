"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button - Primary floating action */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg shadow-green-500/30 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
        asChild
      >
        <a
          href="https://wa.me/966507067378"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </a>
      </Button>

      {/* Call Button - Secondary */}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/30 transition-all duration-300 hover:scale-110"
        asChild
      >
        <a href="tel:+966507067378" aria-label="اتصل الآن">
          <Phone className="h-5 w-5 text-secondary-foreground" />
        </a>
      </Button>
    </div>
  )
}
