"use client"

import { Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button size="icon" className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg" asChild>
        <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب">
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>

      {/* Call Button */}
      <Button size="icon" className="h-14 w-14 rounded-full shadow-lg " asChild>
        <a href="tel:+966507067378" aria-label="اتصل الآن">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </div>
  )
}
