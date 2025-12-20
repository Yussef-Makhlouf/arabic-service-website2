import { MapPin, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedLocationCard() {
    return (
        <div className="w-full py-6 md:py-12 bg-background flex justify-center" dir="rtl">
            <div className="container px-4 md:px-6">
                <Card className="max-w-3xl mx-auto overflow-hidden border-primary/20 shadow-lg relative">
                    <div className="absolute top-0 right-0 w-2 h-full bg-primary" />
                    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                        <div className="p-4 bg-primary/10 rounded-full shrink-0">
                            <MapPin className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1 text-center md:text-right space-y-2">
                            <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                                <h3 className="text-2xl font-bold text-foreground">حي الزلفة</h3>
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 gap-1 py-1 px-3">
                                    <CheckCircle className="h-3 w-3" />
                                    متاح الآن
                                </Badge>
                            </div>
                            <p className="text-muted-foreground">
                                نقدم خدماتنا المتكاملة في كشف التسربات والعزل في حي الزلفة. فريقنا جاهز لخدمتكم على مدار الساعة مع ضمان الجودة وسرعة الاستجابة.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <span className="inline-flex h-3 w-3 animate-ping rounded-full bg-green-400 opacity-75 absolute top-6 left-6 md:static md:hidden"></span>
                            <div className="hidden md:flex flex-col items-center gap-1">
                                <span className="text-sm font-medium text-green-600">خدمة فورية</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
