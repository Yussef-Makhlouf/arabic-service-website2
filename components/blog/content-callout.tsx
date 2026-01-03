"use client"

import { Lightbulb, AlertTriangle, Info } from "lucide-react"

type CalloutType = "tip" | "warning" | "important"

interface ContentCalloutProps {
    type: CalloutType
    title?: string
    children: React.ReactNode
}

const calloutConfig: Record<CalloutType, {
    icon: React.ElementType
    defaultTitle: string
    className: string
    iconClassName: string
}> = {
    tip: {
        icon: Lightbulb,
        defaultTitle: "نصيحة",
        className: "callout callout-tip",
        iconClassName: "text-green-600"
    },
    warning: {
        icon: AlertTriangle,
        defaultTitle: "تحذير",
        className: "callout callout-warning",
        iconClassName: "text-amber-600"
    },
    important: {
        icon: Info,
        defaultTitle: "مهم",
        className: "callout callout-important",
        iconClassName: "text-primary"
    }
}

export function ContentCallout({ type, title, children }: ContentCalloutProps) {
    const config = calloutConfig[type]
    const Icon = config.icon

    return (
        <div className={config.className}>
            <div className="flex items-start gap-3">
                <div className={`flex-shrink-0 mt-0.5 ${config.iconClassName}`}>
                    <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                    {(title || config.defaultTitle) && (
                        <p className="font-bold text-foreground mb-1">
                            {title || config.defaultTitle}
                        </p>
                    )}
                    <div className="text-muted-foreground text-sm leading-relaxed">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

// Simple components for direct use in content
export function Tip({ title, children }: { title?: string; children: React.ReactNode }) {
    return <ContentCallout type="tip" title={title}>{children}</ContentCallout>
}

export function Warning({ title, children }: { title?: string; children: React.ReactNode }) {
    return <ContentCallout type="warning" title={title}>{children}</ContentCallout>
}

export function Important({ title, children }: { title?: string; children: React.ReactNode }) {
    return <ContentCallout type="important" title={title}>{children}</ContentCallout>
}
