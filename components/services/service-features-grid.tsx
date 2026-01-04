"use client"

import { CheckCircle } from "lucide-react"

export interface ServiceFeature {
    title: string
    description: string
}

interface ServiceFeaturesGridProps {
    title?: string
    features: ServiceFeature[]
}

export function ServiceFeaturesGrid({
    title = "مميزات الخدمة",
    features
}: ServiceFeaturesGridProps) {
    if (!features || features.length === 0) return null

    return (
        <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">
                        {title}
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-4 p-5 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                        >
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                <CheckCircle className="w-5 h-5 text-primary group-hover:text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-foreground mb-1">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
