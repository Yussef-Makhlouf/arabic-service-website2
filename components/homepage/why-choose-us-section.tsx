import { Shield, BadgeCheck, Users, Award, Leaf, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhyChooseUsSection() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                        لماذا تختار العزل المتقدم؟
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-6" />
                    <p className="text-foreground/70 text-lg max-w-3xl mx-auto leading-relaxed">
                        نحن لسنا مجرد شركة عزل عادية - نحن شريكك الموثوق في حماية منزلك واستثمارك العقاري
                    </p>
                </div>

                {/* Main Content - سردي ومقالي */}
                <div className="max-w-5xl mx-auto space-y-12">

                    {/* التخصص الكامل في العزل */}
                    <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">شركة متخصصة في العزل فقط</h3>
                                <p className="text-muted-foreground">نركز كل خبرتنا وإمكانياتنا على تقديم أفضل حلول العزل</p>
                            </div>
                        </div>
                        <div className="text-foreground/90 leading-relaxed space-y-4 text-right">
                            <p>
                                على عكس الشركات التي تقدم خدمات متعددة ومتنوعة، نحن في <strong className="text-primary">العزل المتقدم</strong> متخصصون حصرياً في مجال <strong>العزل</strong>. هذا التخصص الدقيق يعني أننا نستثمر كل مواردنا في تطوير خبراتنا في هذا المجال الحيوي، ونتابع أحدث التقنيات والمواد العالمية المستخدمة في صناعة العزل.
                            </p>
                        </div>
                    </div>

                    {/* المواد المعتمدة */}
                    <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                                <BadgeCheck className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">استخدام مواد عزل معتمدة عالمياً</h3>
                                <p className="text-muted-foreground">جودة المواد هي أساس عزل ناجح يدوم لسنوات طويلة</p>
                            </div>
                        </div>
                        <div className="text-foreground/90 leading-relaxed space-y-4 text-right">
                            <p>
                                لا نتنازل أبداً عن <strong>جودة المواد</strong> المستخدمة في أعمالنا. جميع مواد العزل التي نستخدمها معتمدة من <strong>هيئة المواصفات والمقاييس السعودية</strong> والجهات الدولية المعترف بها.
                            </p>
                        </div>
                    </div>

                    {/* الفريق المحترف */}
                    <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">فريق عمل فني محترف ومدرب</h3>
                                <p className="text-muted-foreground">الكفاءة البشرية هي العنصر الحاسم في نجاح أي مشروع عزل</p>
                            </div>
                        </div>
                        <div className="text-foreground/90 leading-relaxed space-y-4 text-right">
                            <p>
                                فريقنا يتكون من <strong>مهندسين وفنيين متخصصين</strong> حاصلين على شهادات تدريبية معتمدة. الإشراف الهندسي المباشر على جميع الأعمال يضمن تنفيذاً دقيقاً ومطابقاً للمواصفات.
                            </p>
                        </div>
                    </div>

                    {/* الضمان الشامل */}
                    <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">ضمان شامل على جميع أعمال العزل</h3>
                                <p className="text-muted-foreground">ثقتنا في جودة عملنا تنعكس في الضمانات التي نقدمها</p>
                            </div>
                        </div>
                        <div className="text-foreground/90 leading-relaxed space-y-4 text-right">
                            <p>
                                نقدم <strong>ضمان شامل يصل إلى 15 سنه</strong> على جميع أعمال العزل التي ننفذها. هذا الضمان يشمل جودة المواد المستخدمة وجودة التنفيذ معاً.
                            </p>
                        </div>
                    </div>

                    {/* عائد استثماري وتوفير طاقة */}
                    <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                                <Leaf className="w-8 h-8 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">عائد استثماري وتوفير طاقة</h3>
                                <p className="text-muted-foreground">خدماتنا استثمار يسترد قيمته خلال 3 سنوات عبر توفير 40% من الكهرباء</p>
                            </div>
                        </div>
                        <div className="text-foreground/90 leading-relaxed space-y-4 text-right">
                            <p>
                                نؤمن بأن <strong>الجودة العالية</strong> هي التوفير الحقيقي. العزل الجيد يوفر عليك تكاليف الصيانة المستقبلية وفواتير الكهرباء المرتفعة، مما يجعل ما تدفعه اليوم عائداً مضموناً لسنوات قادمة مع حماية تامة للهيكل الإنشائي.
                            </p>
                        </div>
                    </div>

                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <p className="text-lg text-muted-foreground mb-6">
                        لو عندك مشكلة تسرب مياه أو ارتفاع حرارة السطح، تواصل معنا الآن واحصل على استشارة مجانية
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2" asChild>
                            <a href="tel:+966507067378">
                                <Phone className="w-5 h-5" />
                                اتصل بنا: 0507067378
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="gap-2" asChild>
                            <a href="https://wa.me/966507067378" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="w-5 h-5" />
                                تواصل واتساب
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
