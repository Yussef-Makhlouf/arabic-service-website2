import { Wind, Droplets, Search, Database } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
    id: string
    slug?: string
    title: string
    subtitle: string
    description: string
    longDescription?: string
    href: string
    image: string
    icon: LucideIcon | string
    features: string[]
    keywords?: string[]
}

export const staticServices: Service[] = [
    {
        id: "foam-insulation",
        title: "عزل فوم للأسطح",
        subtitle: "العزل الحراري والمائي المتكامل",
        description: "أحدث تقنيات العزل التي تجمع بين العزل المائي والحراري في طبقة واحدة.",
        longDescription: "عزل الفوم (البولي يوريثان) هو الحل الأمثل لمناخ الرياض الحار. يوفر حتى 40% من فاتورة الكهرباء ويحمي من تسرب المياه في آن واحد. مثالي للفلل والمباني التجارية والمستودعات.",
        href: "/services/foam-insulation",
        image: "/cover1.webp",
        icon: Wind,
        features: ["توفير 40% من الكهرباء", "عزل مائي وحراري معاً", "بدون فواصل أو نقاط ضعف", "ضمان 15 سنة"],
        keywords: ["عزل فوم", "عزل حراري", "توفير الكهرباء", "بولي يوريثان"]
    },
    {
        id: "waterproofing",
        title: "عزل مائي للأسطح",
        subtitle: "الحماية الشاملة من تسرب المياه",
        description: "نظام عزل مائي متكامل باستخدام أفضل المواد العالمية.",
        longDescription: "العزل المائي ضروري لحماية مبناك من أضرار تسرب مياه الأمطار والرطوبة. نستخدم مواد بيتومينية وأغشية بلاستيكية معتمدة توفر حماية تدوم عقوداً طويلة.",
        href: "/services/waterproofing",
        image: "/cover.webp",
        icon: Droplets,
        features: ["حماية 100% من التسرب", "مواد معتمدة عالمياً", "مقاومة للحرارة والبرودة", "ضمان 15 سنة"],
        keywords: ["عزل مائي", "منع التسرب", "بيتومين", "حماية من الأمطار"]
    },
    {
        id: "leak-detection",
        title: "كشف تسربات المياه",
        subtitle: "تقنيات حديثة بدون تكسير",
        description: "نستخدم أحدث التقنيات لكشف التسربات بدقة سنتيمترات دون الحاجة للتكسير.",
        longDescription: "خدمة كشف التسربات بأجهزة إلكترونية وكاميرات حرارية متطورة. نحدد موقع التسرب بدقة عالية دون تكسير، مع تقرير مفصل وإصلاح فوري. خدمة 24 ساعة للطوارئ.",
        href: "/services/leak-detection",
        image: "/leak-detection-thermal-camera.webp",
        icon: Search,
        features: ["بدون تكسير", "دقة 99%", "تقرير مفصل بالصور", "إصلاح فوري"],
        keywords: ["كشف تسربات", "تسرب مياه", "فاتورة مياه مرتفعة", "أجهزة كشف"]
    },
    {
        id: "tank-insulation",
        title: "عزل خزانات المياه",
        subtitle: "حماية صحية بمواد آمنة",
        description: "عزل داخلي وخارجي للخزانات بمواد إيبوكسي آمنة صحياً ومعتمدة.",
        longDescription: "عزل الخزانات ضروري لضمان نظافة مياه الشرب. نستخدم مواد إيبوكسي Food Grade معتمدة من وزارة الصحة، مع تنظيف وتعقيم شامل قبل العزل.",
        href: "/services/tank-insulation",
        image: "/cover4.webp",
        icon: Database,
        features: ["مواد آمنة صحياً", "تنظيف وتعقيم شامل", "عزل داخلي وخارجي", "ضمان 15 سنة"],
        keywords: ["عزل خزانات", "تنظيف خزانات", "إيبوكسي", "مياه نظيفة"]
    },
]
