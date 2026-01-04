"use client"

import { Droplets, Shield, CheckCircle, AlertTriangle, Wrench, Calculator, FileText } from "lucide-react"

export function WaterproofingGuideSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
                        <Shield className="w-4 h-4" />
                        الحماية من الرطوبة
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        منظومة العزل المائي الشاملة
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        كل ما تحتاج معرفته عن حماية مبناك من مخاطر التسربات والرطوبة
                    </p>
                </div>

                {/* Definition Block */}
                <div className="bg-card rounded-2xl border border-border p-8 mb-12 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <Droplets className="w-6 h-6 text-primary" />
                        <h3 className="text-xl font-bold">مفهوم العزل المائي والتقنيات المستخدمة</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-8">
                        يمثل <strong className="text-foreground">العزل المائي</strong> منظومة دفاعية تُطبق على الأسطح والقواعد والخزانات لصد المياه والرطوبة. تأتي أهميته من كون المياه المتسربة تُعد من أكثر العوامل تدميراً للهياكل الخرسانية والمعدنية.
                    </p>

                    {/* Materials Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Bitumen */}
                        <div className="bg-muted/50 rounded-xl p-6 border border-border">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 font-bold">1</div>
                            <h4 className="font-bold mb-3">مشتقات القار الإسفلتية</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                مركبات عزل راسخة تتميز بقدرتها على مقاومة الظروف الجوية القاسية، وتتوفر بعدة صيغ:
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>القار المعالج حرارياً</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>القار المعزز بالمطاط</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>لفات القار الملدنة</span>
                                </li>
                            </ul>
                        </div>

                        {/* PVC Membranes */}
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200/50">
                            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4 font-bold">2</div>
                            <h4 className="font-bold text-blue-900 mb-3">الأغشية البلاستيكية المتطورة</h4>
                            <p className="text-sm text-blue-800 leading-relaxed mb-4">
                                شرائح مرنة فائقة الكفاءة تُوصل حرارياً لتكوين حاجز مانع للمياه بدون نقاط ضعف.
                            </p>
                            <ul className="space-y-2 text-sm text-blue-800">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                    <span>مرونة عالية تتحمل الحركة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                    <span>عمر خدمة يتجاوز 25 عاماً</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                    <span>مقاومة للأشعة والكيماويات</span>
                                </li>
                            </ul>
                        </div>

                        {/* Cement-based */}
                        <div className="bg-muted/50 rounded-xl p-6 border border-border">
                            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4 font-bold">3</div>
                            <h4 className="font-bold mb-3">المركبات الإسمنتية المحسنة</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                خلطات إسمنتية مدعمة بإضافات بوليمرية تمنحها خصائص طاردة للماء.
                            </p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>ملائمة لخزانات مياه الشرب</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>سهولة الترميم والإصلاح</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>آمنة صحياً ومعتمدة</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    {/* Cost vs Lifespan */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Calculator className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">موازنة الاستثمار والعائد</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            ننصح بالنظر للقيمة طويلة المدى عند المقارنة بين خيارات العزل المختلفة:
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                                <div>
                                    <div className="font-bold">القار التقليدي</div>
                                    <div className="text-sm text-muted-foreground">مدة الخدمة: 12-18 سنة</div>
                                </div>
                                <div className="text-lg font-bold text-primary">25-35 ريال/م²</div>
                            </div>
                            <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                                <div>
                                    <div className="font-bold">القار المرن</div>
                                    <div className="text-sm text-muted-foreground">مدة الخدمة: 18-22 سنة</div>
                                </div>
                                <div className="text-lg font-bold text-primary">40-55 ريال/م²</div>
                            </div>
                            <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                                <div>
                                    <div className="font-bold">الأغشية البلاستيكية</div>
                                    <div className="text-sm text-muted-foreground">مدة الخدمة: 25-35 سنة</div>
                                </div>
                                <div className="text-lg font-bold text-primary">65-95 ريال/م²</div>
                            </div>
                            <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                                <div>
                                    <div className="font-bold">المركبات الإسمنتية</div>
                                    <div className="text-sm text-muted-foreground">مدة الخدمة: 18-22 سنة</div>
                                </div>
                                <div className="text-lg font-bold text-primary">30-45 ريال/م²</div>
                            </div>
                        </div>
                    </div>

                    {/* When Do You Need It? */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <AlertTriangle className="w-6 h-6 text-amber-500" />
                            <h3 className="text-xl font-bold">مؤشرات الحاجة للعزل المائي</h3>
                        </div>

                        {/* Warning Signs */}
                        <div className="bg-amber-50 rounded-xl p-5 mb-6 border border-amber-200/50">
                            <h4 className="font-bold text-amber-900 mb-3">إشارات تستوجب التدخل الفوري</h4>
                            <ul className="space-y-2 text-sm text-amber-800">
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>ظهور هالات داكنة على السقف أو الحوائط</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>تفكك أو تورم طبقة الطلاء</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>انتشار الفطريات ورائحة العفونة</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>تسلل مياه أثناء هطول المطر</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                                    <span>قراءات استهلاك مياه غير مبررة</span>
                                </li>
                            </ul>
                        </div>

                        {/* Prevention */}
                        <div className="bg-green-50 rounded-xl p-5 mb-6 border border-green-200/50">
                            <h4 className="font-bold text-green-900 mb-3">الوقاية خير من العلاج</h4>
                            <p className="text-sm text-green-800 leading-relaxed">
                                تطبيق العزل الوقائي على المنشآت الجديدة يوفر حماية مسبقة ويجنبك تكاليف الإصلاح الباهظة لاحقاً.
                            </p>
                        </div>

                        {/* Legal */}
                        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200/50">
                            <h4 className="font-bold text-blue-900 mb-3">الالتزامات النظامية</h4>
                            <p className="text-sm text-blue-800 leading-relaxed">
                                تشترط أنظمة البناء الحالية تنفيذ عزل مائي معتمد للأسطح والأساسات مع توثيق ذلك بشهادات ضمان رسمية.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Maintenance Tips */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Maintenance */}
                    <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Wrench className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">برنامج الصيانة الوقائية</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            لإطالة عمر منظومة العزل والحفاظ على فعاليتها، ننصح بالآتي:
                        </p>
                        <div className="space-y-4">
                            {[
                                "معاينة السطح دورياً خاصة قبل وبعد موسم الهطول",
                                "ضمان تصريف المياه المتجمعة بشكل فوري",
                                "معالجة الشقوق الدقيقة فور رصدها",
                                "الحد من المرور فوق السطح قدر الإمكان",
                                "صيانة منظومة التصريف والبالوعات بانتظام",
                                "الاستعانة بالمختصين عند رصد أي خلل"
                            ].map((tip, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="w-6 h-6 bg-primary/10 text-black rounded-full flex items-center justify-center text-sm font-bold shrink-0">{index + 1}</span>
                                    <span className="text-muted-foreground">{tip}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Case Studies */}
                    <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-8 text-black">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText className="w-6 h-6 text-secondary" />
                            <h3 className="text-xl font-bold text-white">نماذج من أعمالنا المنجزة</h3>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                                <h4 className="font-bold text-secondary mb-2">مشروع سكني - شمال الرياض</h4>
                                <p className="text-sm text-white leading-relaxed">
                                    تنفيذ عزل شامل لـ 35 وحدة سكنية باستخدام تقنية القار المعزز، مع تحقيق نسبة رضا 100% وصفر شكاوى خلال 4 سنوات.
                                </p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-5 border border-white/20">
                                <h4 className="font-bold text-secondary mb-2">منشأة تجارية - محور رئيسي</h4>
                                <p className="text-sm text-white leading-relaxed">
                                    عزل سطح بمساحة 6000م² بنظام الأغشية المتطورة، مع ضمان 15 عاماً وانخفاض 25% في تكاليف التكييف.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
