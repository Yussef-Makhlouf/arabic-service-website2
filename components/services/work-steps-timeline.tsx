"use client"

import { Settings } from "lucide-react"

export interface WorkStep {
    title: string
    description: string
}

interface WorkStepsTimelineProps {
    title?: string
    steps: WorkStep[]
}

export function WorkStepsTimeline({
    title = "خطوات تنفيذ العمل",
    steps
}: WorkStepsTimelineProps) {
    if (!steps || steps.length === 0) return null

    // Unified blue color to match the image exactly
    // Using bg-primary which is the main blue color of the site

    return (
 
        <section className="py-12" dir="rtl">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-card rounded-3xl shadow-sm border border-border/50 p-6 md:p-10">
                    {/* Section Header */}
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading">
                            {title}
                        </h2>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Settings className="w-6 h-6 text-primary" />
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="relative pr-4 md:pr-0">
                        {/* Vertical line connector */}
                        <div className="absolute right-[22px] md:right-[26px] top-4 bottom-4 w-[2px] bg-blue-100" />

                        <div className="space-y-8 relative">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-start gap-6 relative group">
                                    {/* Step Number */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-[46px] h-[46px] md:w-[54px] md:h-[54px] rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg md:text-xl shadow-md border-4 border-white ring-1 ring-blue-50">
                                            {index + 1}
                                        </div>
                                    </div>

                                    {/* Step Content */}
                                    <div className="flex-1 pt-2">
                                        <h3 className="font-bold text-foreground text-lg md:text-xl mb-2 group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
