import { CheckCircle2, Shield, Award, Clock, Wrench, Users, Zap, BadgeCheck, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
                            <p>
                                فريقنا لا يتشتت بين خدمات متعددة، بل يركز بالكامل على إتقان فن العزل - من <strong>عزل الفوم</strong> (البولي يوريثان) إلى <strong>العزل المائي</strong> التقليدي، ومن <strong>عزل الأسطح</strong> إلى <strong>عزل خزانات المياه</strong>. هذا التركيز ينعكس مباشرة على جودة العمل والنتائج التي يحصل عليها عملاؤنا.
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
                                لا نتنازل أبداً عن <strong>جودة المواد</strong> المستخدمة في أعمالنا. جميع مواد العزل التي نستخدمها معتمدة من <strong>هيئة المواصفات والمقاييس السعودية</strong> والجهات الدولية المعترف بها. نستورد موادنا من أفضل الشركات العالمية المتخصصة في صناعة مواد العزل.
                            </p>
                            <p>
                                مواد <strong>عزل الفوم</strong> (البولي يوريثان) التي نستخدمها ذات كثافة عالية تتراوح بين 40-45 كجم/م3، مما يضمن عزلاً حرارياً ومائياً فائقاً. كما أن مواد <strong>عزل الخزانات</strong> لدينا آمنة 100% ومعتمدة من <strong>هيئة الغذاء والدواء السعودية</strong>، ولا تؤثر على خواص المياه أو طعمها أو صحة المستخدمين.
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
                                فريقنا يتكون من <strong>مهندسين وفنيين متخصصين</strong> حاصلين على شهادات تدريبية معتمدة من شركات العزل العالمية. كل فرد في فريقنا يمتلك خبرة لا تقل عن 5 سنوات في مجال تخصصه، ويخضع لتدريبات دورية على أحدث تقنيات ومعدات العزل.
                            </p>
                            <p>
                                نحن نؤمن بأن <strong>جودة التنفيذ</strong> لا تقل أهمية عن جودة المواد. لذلك نولي اهتماماً بالغاً باختيار وتأهيل فريق العمل، ونتابع أداءهم في كل مشروع لضمان الحفاظ على معاييرنا العالية. الإشراف الهندسي المباشر على جميع الأعمال يضمن تنفيذاً دقيقاً ومطابقاً للمواصفات.
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
                                نقدم <strong>ضمان شامل يصل إلى 15 سنه</strong> على جميع أعمال العزل التي ننفذها. هذا الضمان يشمل جودة المواد المستخدمة وجودة التنفيذ معاً. خلال فترة الضمان، نلتزم بإصلاح أي خلل أو تسرب قد يظهر دون أي تكلفة إضافية على العميل.
                            </p>
                            <p>
                                بالإضافة إلى ذلك، نقدم <strong>خدمة فحص دوري مجانية</strong> خلال فترة الضمان للتأكد من كفاءة العزل واكتشاف أي مشاكل محتملة في مراحلها المبكرة قبل أن تتفاقم. هذا الالتزام ما بعد البيع يعكس ثقتنا في جودة عملنا وحرصنا على رضا عملائنا الكامل.
                            </p>
                        </div>
                    </div>

                    {/* السعر والجودة */}
                    <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                                <Zap className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-foreground mb-2">أسعار مناسبة وجودة عالية</h3>
                                <p className="text-muted-foreground">نوازن بين التكلفة والقيمة لتقديم أفضل استثمار لعملائنا</p>
                            </div>
                        </div>
                        <div className="text-foreground/90 leading-relaxed space-y-4 text-right">
                            <p>
                                نؤمن بأن <strong>الجودة العالية</strong> لا يجب أن تأتي بأسعار خيالية. بفضل علاقاتنا المباشرة مع مصنّعي وموردي مواد العزل، وبفضل خبرتنا الطويلة التي تمكننا من العمل بكفاءة عالية، نستطيع تقديم أسعار تنافسية دون المساس بالجودة.
                            </p>
                            <p>
                                نقدم <strong>استشارة مجانية</strong> وكشف على الموقع لتقييم الحالة بدقة وتحديد الحل الأمثل قبل تقديم عرض السعر. نؤمن بالشفافية الكاملة في التسعير، ولا توجد أي رسوم خفية أو مفاجآت. العميل يعرف التكلفة الكاملة مقدماً ويحصل على قيمة حقيقية مقابل استثماره.
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
