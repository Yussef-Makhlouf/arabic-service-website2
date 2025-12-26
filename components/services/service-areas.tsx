import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceAreasProps {
    serviceName: string
}

const neighborhoods = [
    "حي النرجس",
    "حي الياسمين",
    "حي النخيل",
    "حي الملقا",
    "حي العليا",
    "حي الملك فهد",
    "حي الدرعية",
    "حي السليمانية",
    "حي الشميسي",
    "حي الورود",
    "حي الروضة",
    "حي الملز",
]

export function ServiceAreas({ serviceName }: ServiceAreasProps) {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto mb-12 flex items-start gap-4">
                    <div className="mt-1">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                            <MapPin className="w-6 h-6" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            مناطق خدمة {serviceName} في الرياض
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            نقدم خدمة <span className="font-bold text-foreground">{serviceName}</span> في جميع أحياء الرياض، مع ضمان الوصول في الموعد المحدد. خدمتنا تغطي جميع المناطق الرئيسية والفرعية في العاصمة.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {neighborhoods.map((name) => (
                        <Card key={name} className="border-none shadow-sm bg-muted/30 hover:bg-primary/5 transition-colors group">
                            <CardContent className="p-6 flex flex-col items-center justify-center text-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                    <MapPin className="w-5 h-5 text-primary" />
                                </div>
                                <span className="font-bold text-foreground">{name}</span>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
