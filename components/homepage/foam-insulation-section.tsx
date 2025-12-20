import { Thermometer, Droplets, Timer, Coins } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FoamInsulationSection() {
    const features = [
        {
            title: "عزل حراري فائق",
            description: "يحافظ على برودة منزلك في الصيف ودفئه في الشتاء، مما يقلل استهلاك الطاقة.",
            icon: Thermometer,
        },
        {
            title: "حماية مائية متكاملة",
            description: "يمنع تسرب المياه والرطوبة، مما يحمي الهيكل الخرساني من التآكل والأضرار.",
            icon: Droplets,
        },
        {
            title: "سرعة في التنفيذ",
            description: "يمكن تطبيق عزل الفوم بسرعة كبيرة مقارنة بأنظمة العزل التقليدية الأخرى.",
            icon: Timer,
        },
        {
            title: "توفير في التكلفة",
            description: "حل اقتصادي يوفر في فواتير الكهرباء وصيانة المبنى على المدى الطويل.",
            icon: Coins,
        },
    ]

    return (
        <section className="w-full py-12 md:py-24 bg-muted/30" dir="rtl">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        عزل الفوم: الحل الأمثل لحماية منزلك
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        اكتشف مزايا عزل الفوم (البولي يوريثان) الذي يجمع بين العزل الحراري والمائي في طبقة واحدة.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader className="items-center pb-2">
                                <div className="p-4 rounded-full bg-primary/10 mb-2">
                                    <feature.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-xl font-bold text-center">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-center text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
