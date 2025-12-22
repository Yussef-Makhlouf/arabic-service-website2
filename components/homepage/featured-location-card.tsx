import { MapPin, ArrowLeft } from "lucide-react"

export function FeaturedLocationCard() {
    return (
        <div className="container px-4 mx-auto mb-10">
            <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden group">

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pattern-dots" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="h-16 w-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center shrink-0 border border-white/20">
                            <MapPin className="h-8 w-8 text-yellow-400" />
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="bg-green-500/20 text-green-300 text-xs px-2 py-0.5 rounded-full border border-green-500/30 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    متواجدون الآن
                                </span>
                                <span className="text-blue-200 text-sm">خدمة فورية</span>
                            </div>
                            <h3 className="text-2xl font-bold">ندعم "حي الزلفة" بالكامل</h3>
                            <p className="text-blue-100/90 mt-1 max-w-md">
                                فريقنا الفني متواجد حالياً بالقرب من حي الزلفة وشمال الرياض لتقديم خدمات الكشف والمعاينة الفورية.
                            </p>
                        </div>
                    </div>

                    <button className="w-full md:w-auto bg-white text-blue-900 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition-colors flex items-center justify-center gap-2 shadow-lg group-hover:translate-x-1 duration-300 rtl:group-hover:-translate-x-1">
                        احجز موعد في حي الزلفة
                        <ArrowLeft className="h-4 w-4" />
                    </button>

                </div>
            </div>
        </div>
    )
}
