import { Layers, Droplets, CheckCircle2, Hammer, ShieldCheck, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WaterproofingSection() {
    return (
        <section className="py-20 bg-background" dir="rtl">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-4">
                        المحور التقني الثاني
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        العزل المائي: حماية الهيكل الإنشائي من التآكل
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        لا يقل العزل المائي أهمية عن الحراري. نحن نستخدم أنظمة عزل متخصصة لحماية الخرسانة وحديد التسليح من التلف الناتج عن الرطوبة والأملاح.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Bituminous */}
                    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                            <Layers className="w-8 h-8 text-black" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">1. اللفائف البيتومينية (Bituminous Membranes)</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            الحل الكلاسيكي والقوي للأسطح والأساسات. نستخدم لفائف عالية الجودة (Modified Bitumen) لضمان أقصى حماية.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>سماكة قياسية <strong>4 ملم</strong> (المواصفات القياسية).</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>مسلحة بالبوليستر لمقاومة التمزيق.</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>لحام حراري كامل للفواصل (Overlap 10cm).</span>
                            </li>
                        </ul>
                    </div>

                    {/* Cementitious */}
                    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-6">
                            <Hammer className="w-8 h-8 text-gray-600" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">2. العزل الإسمنتي (Cementitious)</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            نظام عزل مرن ذو أساس إسمنتي، مثالي للأماكن الرطبة والمغمورة بالمياه بشكل دائم.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>مثالي لـ <strong>عزل الحمامات</strong> والمسابح والخزانات.</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>مقاوم لضغط المياه الهيدروستاتيكي الإيجابي والسلبي.</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>يتغلغل داخل مسام الخرسانة ويمنع "التعشيش".</span>
                            </li>
                        </ul>
                    </div>

                    {/* Acrylic */}
                    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                            <Droplets className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">3. العزل الأكريليكي (Acrylic Coatings)</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                            طبقة حماية نهائية سائلة تشكل غشاء مطاطي مقاوم للشمس والمياه.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>عالي المرونة ومقاوم للتشققات السطحية.</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>عاكس لأشعة الشمس (خاصة اللون الأبيض).</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                <span>حماية إضافية فوق عزل الفوم.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Execution Process */}
                <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
                    <h3 className="text-3xl font-bold mb-8 text-center">مراحل التنفيذ الفني الدقيق (Checklist)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                                <h4 className="text-xl font-bold">التحضير (Preparation)</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                تنظيف الخرسانة تماماً، معالجة التعشيش، وعمل "وزرة" (Ramp) إسمنتية عند التقاء الأرضية بالجدار لمنع تجمع المياه في الزوايا.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">2</div>
                                <h4 className="text-xl font-bold">البرايمر (Primer)</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                دهان طبقة أساس بيتوميني سائل لضمان التصاق اللفائف بالأسطح الخرسانية وإغلاق المسام الدقيقة.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">3</div>
                                <h4 className="text-xl font-bold">التركيب (Installation)</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                فرد اللفائف مع تسخين الظهر بالنار ولحام مناطق التداخل (10 سم) بعناية فائقة لضمان عدم وجود أي منفذ للمياه.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">4</div>
                                <h4 className="text-xl font-bold">اختبار الغمر (Flood Test)</h4>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                الخطوة الحاسمة: ملء السطح بالماء بالكامل وتركه لمدة <strong>48 ساعة</strong> للتأكد يقيناً من عدم وجود أي تسرب قبل التبليط.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
