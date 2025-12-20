import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Wind, Hammer, Search, Database, ArrowLeft, Phone, Star, Building2 } from "lucide-react"
import Image from "next/image"

export function ServicesOverview() {
  const services = [
    {
      id: "waterproofing",
      image: "/best-season-roof-insulation.jpg",
      icon: Droplets,
      title: "عزل مائي للأسطح",
      slug: "/services/waterproofing",
      description: "حماية شاملة ضد تسرب المياه والرطوبة",
      content: `يعد العزل المائي للأسطح من أهم الحلول الوقائية للمباني في المملكة العربية السعودية، حيث يوفر حماية فعالة ضد تسرب مياه الأمطار والرطوبة التي قد تتسبب في تلف المبنى وتشققات الجدران. تقدم شركتنا خدمات عزل مائي احترافية باستخدام أحدث المواد العازلة المعتمدة عالمياً والتي تتميز بمقاومتها العالية للعوامل الجوية القاسية.

نستخدم في عزل الأسطح المائي مواد عالية الجودة مثل البيتومين المعدل، والأغشية البلاستيكية المرنة، والعوازل الإسمنتية المقاومة للماء. كل هذه المواد يتم اختيارها بعناية فائقة لتناسب نوع السطح ودرجة التعرض للعوامل الجوية، مما يضمن عمراً افتراضياً طويلاً للعزل يصل إلى 15-20 عاماً.

تشمل خدماتنا في العزل المائي معالجة جميع أنواع الأسطح سواء كانت خرسانية، معدنية، أو مائلة. نقوم بإجراء فحص شامل للسطح قبل البدء بعملية العزل لتحديد أي تشققات أو نقاط ضعف يجب معالجتها أولاً. بعد ذلك، نقوم بتنظيف السطح بشكل كامل وتطبيق طبقة تمهيدية (Primer) لضمان التصاق قوي للمادة العازلة.

من أهم فوائد العزل المائي الذي نقدمه: الحماية الكاملة من تسرب المياه، منع تآكل حديد التسليح في الخرسانة، الحفاظ على سلامة المبنى الإنشائية، تقليل تكاليف الصيانة المستقبلية، ومنع نمو العفن والفطريات الضارة بالصحة.

نحن نقدم ضماناً شاملاً على جميع أعمال العزل المائي يصل إلى 10 سنوات، مع توفير خدمة فحص دوري مجانية خلال فترة الضمان. فريق عملنا المكون من مهندسين وفنيين مدربين تدريباً عالياً يضمن تنفيذ العمل وفق أعلى معايير الجودة والسلامة المهنية.

نخدم جميع مناطق الرياض بما في ذلك شمال الرياض، جنوب الرياض، شرق وغرب الرياض، بالإضافة إلى مدينة الخرج والمناطق المحيطة بها. نوفر خدمة استشارة مجانية وكشف على الموقع لتقييم الحالة وتقديم أفضل الحلول المناسبة لاحتياجاتك.`,
      features: [
        "مواد عازلة معتمدة عالمياً",
        "ضمان حتى 10 سنوات",
        "مقاومة عالية للعوامل الجوية",
        "فحص دوري مجاني",
        "تنفيذ سريع واحترافي",
      ],
      useCases: ["المباني السكنية", "العمائر التجارية", "الفلل", "المساجد", "المستودعات"],
    },
    {
      id: "foam-insulation",
      image: "/polyurethane-foam-insulation-application.jpg",
      icon: Wind,
      title: "عزل فوم للأسطح",
      slug: "/services/foam-insulation",
      description: "عزل حراري ومائي متطور بتقنية البولي يوريثان",
      content: `عزل الفوم أو البولي يوريثان يعتبر من أحدث وأفضل تقنيات العزل المستخدمة في المملكة العربية السعودية، حيث يجمع بين العزل الحراري والمائي في آن واحد. هذه التقنية المتقدمة توفر حلاً مثالياً لمواجهة درجات الحرارة المرتفعة صيفاً والأمطار الموسمية، مما يساعد في الحفاظ على المبنى وتوفير استهلاك الطاقة الكهربائية بنسبة تصل إلى 40%.

يتميز عزل الفوم بقدرته الفائقة على عكس أشعة الشمس وتقليل امتصاص الحرارة، مما يحافظ على برودة المبنى من الداخل ويقلل الحمل على أجهزة التكييف. المادة المستخدمة عبارة عن رغوة بولي يوريثان يتم رشها مباشرة على السطح حيث تتمدد وتتصلب لتشكل طبقة عازلة متجانسة بدون أي فواصل أو وصلات قد تسمح بتسرب الماء أو الحرارة.

من أهم مميزات عزل الفوم أنه خفيف الوزن ولا يشكل حملاً إضافياً على السقف، كما أنه مرن ويتكيف مع حركة المبنى الطبيعية دون أن يتشقق أو يتضرر. المادة مقاومة للرطوبة، العفن، الحشرات، والقوارض، وتتحمل جميع الظروف الجوية القاسية من حرارة شديدة إلى أمطار غزيرة.

تتم عملية عزل الفوم بواسطة فريق متخصص يستخدم معدات رش احترافية تضمن توزيع المادة بشكل متساوٍ وبالسماكة المطلوبة (عادة من 3 إلى 5 سم حسب نوع المبنى). قبل الرش، نقوم بتنظيف السطح بشكل كامل وإصلاح أي تشققات أو عيوب. بعد الرش، تجف المادة خلال ساعات قليلة ويصبح السطح جاهزاً للاستخدام.

نستخدم نوعين من عزل الفوم: الفوم المفتوح (Open Cell) المناسب للعزل الحراري الداخلي، والفوم المغلق (Closed Cell) الذي يوفر عزلاً حرارياً ومائياً ممتازاً ويستخدم للأسطح الخارجية. كلا النوعين معتمد من هيئة المواصفات السعودية ويتم استيراده من شركات عالمية موثوقة.

من الفوائد الاقتصادية لعزل الفوم: تقليل فواتير الكهرباء بنسبة 30-40%، زيادة قيمة العقار، عمر افتراضي يتجاوز 20 عاماً، وتقليل الحاجة للصيانة. نقدم ضماناً يصل إلى 15 عاماً على جودة المادة والتنفيذ، مع خدمة فحص دوري للتأكد من كفاءة العزل.`,
      features: [
        "عزل حراري ومائي معاً",
        "توفير 40% من فاتورة الكهرباء",
        "عمر افتراضي +20 عام",
        "خفيف الوزن ومرن",
        "تطبيق سريع وفعال",
      ],
      useCases: ["الأسطح المعرضة للشمس المباشرة", "المباني التجارية", "المنازل الحديثة", "المستشفيات", "المدارس"],
    },
    {
      id: "leak-detection",
      image: "/leak-detection-thermal-camera.jpg",
      icon: Search,
      title: "كشف تسربات المياه",
      slug: "/services/leak-detection",
      description: "تقنيات حديثة للكشف الدقيق عن التسربات",
      content: `خدمة كشف تسربات المياه من أهم الخدمات التي نقدمها لحماية المباني من الأضرار الجسيمة التي قد تنتج عن التسربات الخفية. تسربات المياه تعتبر من المشاكل الشائعة في المباني السكنية والتجارية، وقد تتسبب في أضرار بالغة للبنية التحتية، ارتفاع فواتير المياه، نمو العفن والرطوبة، وتآكل حديد التسليح في الخرسانة.

نستخدم في شركتنا أحدث التقنيات العالمية للكشف عن تسربات المياه دون الحاجة للتكسير أو الحفر، مما يوفر الوقت والتكلفة ويحافظ على جمالية المبنى. من أهم الأجهزة التي نستخدمها: جهاز الاستشعار الإلكتروني الذي يحدد موقع التسرب بدقة عالية، كاميرات التصوير الحراري التي تكشف الفروقات في درجات الحرارة الناتجة عن التسرب، وأجهزة الموجات فوق الصوتية التي تلتقط أصوات المياه المتسربة داخل الجدران والأرضيات.

عملية كشف التسربات لدينا تتم على عدة مراحل: أولاً، نقوم بإجراء فحص شامل للمبنى وتحديد المناطق المشتبه بها. ثانياً، نستخدم الأجهزة المتخصصة لتحديد الموقع الدقيق للتسرب. ثالثاً، نقدم تقريراً مفصلاً يوضح موقع التسرب، سببه، ودرجة خطورته. وأخيراً، نقدم الحلول المناسبة لإصلاح التسرب ومنع تكراره.

من أنواع التسربات التي نكشف عنها: تسربات الأسطح والأسقف، تسربات الجدران الخارجية والداخلية، تسربات خزانات المياه العلوية والأرضية، تسربات شبكات المياه والصرف الصحي، تسربات حمامات السباحة، وتسربات المطابخ والحمامات.

خدمتنا شاملة ولا تتوقف عند الكشف فقط، بل نوفر أيضاً خدمة الإصلاح الفوري للتسربات باستخدام أحدث المواد والتقنيات. نستخدم مواد حقن متخصصة للتسربات الدقيقة، عوازل مرنة للشقوق، ومواد إصلاح إنشائية للتشققات الكبيرة.

من فوائد الكشف المبكر عن التسربات: توفير تكاليف الإصلاح الباهظة، منع الأضرار الإنشائية الخطيرة، تقليل فواتير المياه، الحفاظ على صحة السكان بمنع نمو العفن، والحفاظ على قيمة العقار.

نقدم خدمة كشف تسربات المياه على مدار الساعة لجميع مناطق الرياض والخرج، مع ضمان دقة النتائج وسرعة الاستجابة. فريق عملنا مكون من فنيين متخصصين حاصلين على تدريبات معتمدة في استخدام أجهزة الكشف الحديثة. نوفر استشارة مجانية وكشف أولي لتقييم الحالة وتحديد أفضل الحلول.`,
      features: [
        "أجهزة كشف إلكترونية متطورة",
        "كشف دقيق بدون تكسير",
        "تقارير مفصلة وموثقة",
        "خدمة 24 ساعة",
        "إصلاح فوري للتسربات",
      ],
      useCases: [
        "ارتفاع فواتير المياه",
        "ظهور رطوبة على الجدران",
        "تشققات في الأسقف",
        "رائحة عفن أو فطريات",
        "صوت مياه جارية",
      ],
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">خدماتنا المتخصصة</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات العزل الاحترافية باستخدام أحدث التقنيات والمواد المعتمدة عالمياً
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className="scroll-mt-24" id={service.id}>
              <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                {/* Image Section */}
                <div className="w-full lg:w-2/5 relative group">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[500px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-primary w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                        <service.icon className="text-white w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="text-white/80 line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                  {/* Decorative */}
                  <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full border-2 border-primary/20 rounded-2xl hidden lg:block" />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-3/5 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        خدمة احترافية
                      </span>
                      {index % 2 === 0 && <div className="h-px bg-border flex-1" />}
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-4 leading-tight">{service.content.split('\n')[0].substring(0, 100)}...</h3>
                  </div>

                  {/* Extract */}
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {service.content.split('\n\n')[0]}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary" />
                        أبرز المميزات
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-primary" />
                        تطبيقات الخدمة
                      </h4>
                      <ul className="space-y-2">
                        {service.useCases.slice(0, 3).map((useCase) => (
                          <li key={useCase} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2 flex-1 md:flex-none">
                      <Link href="https://wa.me/966507067378" target="_blank">
                        <Phone className="w-5 h-5" />
                        تواصل واتساب
                      </Link>
                    </Button>

                    <Button asChild variant="outline" size="lg" className="gap-2 flex-1 md:flex-none">
                      <Link href={service.slug}>
                        تفاصيل الخدمة
                        <ArrowLeft className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mt-16 bg-card border-2 border-border rounded-2xl p-8 text-center">
          <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">نخدم جميع مناطق الرياض والخرج</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            فريقنا المتخصص جاهز لتقديم خدمات العزل الاحترافية في جميع أنحاء المنطقة
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["الرياض", "شمال الرياض", "جنوب الرياض", "شرق الرياض", "غرب الرياض", "الخرج", "الدرعية", "العليا"].map(
              (area) => (
                <span key={area} className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium">
                  {area}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
