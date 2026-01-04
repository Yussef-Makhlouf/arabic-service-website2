"use client"

import { Sun, Shield, Award } from "lucide-react"

export function InsulationNecessitySection() {
    return (
        <section className="py-20 bg-gradient-to-b from-primary to-primary/90 text-primary-foreground overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Hero Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold mb-6 leading-tight">
                        خدمات عزل الأسطح المتميزة بالرياض والخرج
                        <span className="block text-secondary mt-2">حلول هندسية احترافية بضمان مكتوب 15 سنة</span>
                    </h2>
                </div>

                {/* Main Content Block */}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-12 border border-white/20">
                    <h3 className="text-xl md:text-2xl font-bold mb-6 text-secondary">
                        أهمية العزل الحراري والمائي في مواجهة ظروف الطقس القاسية
                    </h3>
                    <p className="text-lg leading-relaxed text-white/90 mb-8">
                        تتطلب الظروف المناخية الصعبة في منطقة الرياض والخرج اهتماماً خاصاً بحماية المباني من تأثيرات الحرارة المرتفعة والأمطار الغزيرة. نوفر في <strong className="text-secondary">شركتنا المتخصصة</strong> حلول عزل متكاملة تجمع بين الكفاءة العالية والمتانة طويلة الأمد.
                    </p>
                    <p className="text-lg leading-relaxed text-white/90">
                        نعتمد على أحدث التقنيات في مجال <strong className="text-secondary">العزل الحراري والمائي للأسطح</strong>، مع التركيز على استخدام مواد عالية الجودة تضمن أداءً متميزاً على مدار سنوات طويلة وتوفيراً ملموساً في استهلاك الطاقة.
                    </p>
                </div>

                {/* Section Title */}
                <div className="text-center mb-12">
                    <h3 className="text-2xl md:text-3xl text-white font-bold">
                        العزل كقرار استراتيجي لحماية استثمارك العقاري
                    </h3>
                </div>

                {/* Expanded Introduction */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10">
                    <p className="text-lg leading-loose text-white/90 mb-6">
                        يمثل تطبيق <strong className="text-secondary">نظام عزل فعال</strong> خطوة جوهرية نحو الحفاظ على قيمة العقار وتحسين جودة الحياة داخله. تتميز خدماتنا بالدقة في التنفيذ والالتزام بأعلى معايير الجودة المعتمدة محلياً ودولياً، مما يضمن لك راحة البال وحماية شاملة لمنزلك أو منشأتك التجارية.
                    </p>
                </div>

                {/* Three Feature Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors">
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Sun className="w-8 h-8 text-secondary" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white">حماية من الحرارة الشديدة</h4>
                        <p className="text-white/80 leading-relaxed text-sm">
                            تقنيات عزل متطورة تعكس أشعة الشمس وتمنع انتقال الحرارة للداخل بنسبة تصل إلى 70%.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors">
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-8 h-8 text-secondary" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white">مواد معتمدة ومضمونة</h4>
                        <p className="text-white/80 leading-relaxed text-sm">
                            نستخدم حصرياً مواد حاصلة على شهادات الجودة السعودية والعالمية لضمان الأداء الأمثل.
                        </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-colors">
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Award className="w-8 h-8 text-secondary" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 text-white">ضمان شامل ومتابعة</h4>
                        <p className="text-white/80 leading-relaxed text-sm">
                            نقدم ضماناً مكتوباً يمتد حتى 15 عاماً مع برنامج متابعة دورية لضمان استمرارية الأداء.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
