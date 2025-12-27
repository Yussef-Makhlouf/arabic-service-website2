"use client"

import Image from "next/image"
import { FAQAccordion, type FAQItem } from "@/components/ui/faq-accordion"

interface FAQSectionProps {
    title: string
    image: string
    faqs: FAQItem[]
}

export function FAQSection({ title, image, faqs }: FAQSectionProps) {
    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Image Side */}
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    {/* FAQ Accordion Side */}
                    <div className="order-1 lg:order-2">
                        <FAQAccordion faqs={faqs} title={title} />
                    </div>
                </div>
            </div>
        </section>
    )
}
