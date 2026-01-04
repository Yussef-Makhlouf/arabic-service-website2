"use client"

import Image from "next/image"
import { Zap } from "lucide-react"

export interface WorkStep {
    title: string
    description: string
}

interface DetailedWorkStepsProps {
    title?: string
    description?: string
    steps: WorkStep[]
    image: string
}

export function DetailedWorkSteps({
    title = "خطوات تنفيذ العمل",
    description,
    steps,
    image
}: DetailedWorkStepsProps) {
    if (!steps || steps.length === 0) return null

    return (
        <section className="py-12 bg-background">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">
                    {title}
                </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Content Side */}
                <div className="space-y-6">
                    {description && (
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            {description}
                        </p>
                    )}

                    <div className="space-y-6">
                        {steps.map((step, index) => (
                            <div key={index} className="space-y-2">
                                <h3 className="font-bold text-foreground text-base md:text-lg">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-loose text-sm md:text-base">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Side */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-border/50 sticky top-24">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
