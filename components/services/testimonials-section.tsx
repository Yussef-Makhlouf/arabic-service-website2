"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export interface Testimonial {
    name: string
    location: string
    rating: number
    comment: string
    service: string
    date?: string
    image?: string
}

interface TestimonialsProps {
    testimonials: Testimonial[]
    title?: string
    subtitle?: string
}

export function TestimonialsSection({
    testimonials,
    title = "آراء عملائنا",
    subtitle = "تجارب حقيقية من عملاء استفادوا من خدماتنا المتميزة"
}: TestimonialsProps) {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                            <Quote className="w-8 h-8 text-primary" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-heading">
                            {title}
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    </div>

                    {/* Testimonials Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <Card
                                key={index}
                                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                            >
                                <CardContent className="p-6">
                                    {/* Rating */}
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonial.rating
                                                        ? "fill-yellow-400 text-yellow-400"
                                                        : "fill-gray-200 text-gray-200"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Comment */}
                                    <div className="relative mb-6">
                                        <Quote className="absolute -top-2 -right-2 w-8 h-8 text-primary/10 transform rotate-180" />
                                        <p className="text-muted-foreground leading-relaxed text-sm relative z-10">
                                            {testimonial.comment}
                                        </p>
                                    </div>

                                    {/* Customer Info */}
                                    <div className="flex items-center gap-3 pt-4 border-t border-border">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                            <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                                        </div>
                                    </div>

                                    {/* Service Badge */}
                                    <div className="mt-4">
                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                            {testimonial.service}
                                        </span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Trust Badge */}
                    <div className="mt-12 text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-background rounded-full border border-border shadow-sm">
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                            <span className="font-bold text-foreground">4.9/5</span>
                            <span className="text-muted-foreground">من أكثر من 5000 عميل راضٍ</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
