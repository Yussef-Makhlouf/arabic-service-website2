"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TableRenderer } from "@/components/blog/table-renderer"
import {
    Menu,
    ChevronLeft,
    ShieldCheck,
    Star,
    Phone,
    MessageCircle,
    Lightbulb,
    CheckCircle2,
    AlertTriangle,
    ThermometerSun,
    Layers
} from "lucide-react"

export interface Section {
    id: string;
    title: string;
    type: "text" | "faq" | "pros_cons" | "cta" | "intro_cards" | "problems";
    content: string[];
}

export function TableOfContents({ sections }: { sections: Section[] }) {
    if (sections.length === 0) return null;
    return (
        <aside className="sticky top-24 z-10 hidden lg:block space-y-6">
            <nav className="bg-white rounded-2xl border border-[#F0F0F0] shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="bg-[#F0F0F0] rounded-t-2xl p-4">
                    <h3 className="font-bold text-[#4B0082] flex items-center gap-2 font-tajawal text-base">
                        <Menu className="w-5 h-5 text-[#3498DB]" />
                        فهرس المحتوى
                    </h3>
                </div>
                <div className="p-2 space-y-1 max-h-[50vh] overflow-y-auto custom-scrollbar">
                    {sections.map((section, idx) => (
                        <a
                            key={idx}
                            href={`#${section.id}`}
                            className="group flex items-center justify-between px-3 py-2.5 text-sm font-medium text-[#666666] hover:text-[#4B0082] hover:bg-[#F0F0F0] rounded-lg transition-all font-tajawal"
                        >
                            <span className="line-clamp-2">{section.title}</span>
                            <ChevronLeft className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        </a>
                    ))}
                </div>
            </nav>

            {/* Trust Badge Widget */}
            <div className="bg-gradient-to-br from-[#2C3E50] to-[#1a252f] rounded-2xl p-6 text-white text-center shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl transition-transform group-hover:scale-150 duration-700" />
                <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-[#1ABC9C]" />
                <h4 className="font-bold text-lg mb-2 font-amiri">ضمان ذهبي شامل</h4>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed font-tajawal">نضمن لك جودة العمل والمواد المستخدمة لمدة تصل إلى 15 عاماً.</p>
                <Button size="default" className="w-full bg-[#1ABC9C] hover:bg-[#16a085] text-white border-none font-bold rounded-xl h-10 shadow-lg font-tajawal text-sm">
                    اطلب الضمان الآن
                </Button>
            </div>
        </aside>
    )
}

export function BubbleSection({ number, title, children, isCompany = false }: { number: string, title: string, children: React.ReactNode, isCompany?: boolean }) {
    return (
        <section className="scroll-mt-24 group mb-6 md:mb-10 last:mb-0">
            <div className="bg-white md:bg-[#FDFDFD] rounded-2xl md:rounded-3xl p-5 md:p-8 lg:p-10 shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-[#F0F0F0] relative transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] duration-300">

                {/* Company Badge */}
                {isCompany && (
                    <div className="absolute top-4 left-4 md:top-8 md:left-8 flex items-center gap-2">
                        <div className="bg-amber-50 p-2 rounded-full shadow-sm text-amber-500">
                            <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                        </div>
                    </div>
                )}

                {/* Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#2C3E50] mb-6 md:mb-8 font-noto-kufi border-b border-[#F0F0F0] pb-4 md:pb-6 flex items-start gap-3 md:gap-4">
                    <span className="text-[#3498DB] font-tajawal text-sm md:text-base bg-[#F0F9FF] w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-sm shrink-0 mt-1">
                        {number}
                    </span>
                    <span className="flex-1 leading-tight pt-1 md:pt-0">{title}</span>
                </h2>

                {/* Content */}
                <div className="text-[#444444] font-tajawal text-sm md:text-base lg:text-lg leading-[1.8] md:leading-[2] space-y-5 md:space-y-7">
                    {children}
                </div>

                {/* Company CTA Button */}
                {isCompany && (
                    <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-[#F0F0F0] flex flex-col sm:flex-row gap-3 md:gap-4">
                        <Button className="bg-[#3498DB] hover:bg-[#2980b9] text-white font-bold h-12 md:h-14 px-8 rounded-2xl font-tajawal w-full sm:w-auto text-base shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
                            <Phone className="w-5 h-5 ml-2" />
                            اتصل الآن
                        </Button>
                        <Button variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5 font-bold h-12 md:h-14 px-8 rounded-2xl font-tajawal w-full sm:w-auto text-base active:scale-95 transition-all">
                            <MessageCircle className="w-5 h-5 ml-2" />
                            واتساب
                        </Button>
                    </div>
                )}
            </div>
        </section>
    )
}

export function CTABlock({ variant = "primary" }: { variant?: "primary" | "secondary" | "inline" }) {
    if (variant === "secondary") {
        return (
            <div className="my-12 md:my-20 bg-gradient-to-br from-[#2C3E50] to-[#1a252f] rounded-[24px] md:rounded-[40px] p-8 md:p-16 lg:p-20 text-white text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#3498DB]/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1ABC9C]/10 rounded-full -ml-32 -mb-32 blur-3xl opacity-50" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <Badge className="mb-6 bg-[#3498DB]/20 hover:bg-[#3498DB]/30 text-[#3498DB] border-none px-4 py-2 font-tajawal text-sm md:text-base rounded-full">خيارك الأمثل</Badge>
                    <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight font-amiri">جاهز لتحويل منزلك لمكان أكثر راحة؟</h3>
                    <p className="text-gray-300 mb-10 md:mb-12 text-base md:text-xl lg:text-2xl leading-relaxed font-tajawal opacity-90">لا تتردد في طلب استشارة مجانية. فريقنا الهندسي بانتظارك.</p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                        <Button size="lg" className="bg-[#3498DB] text-white hover:bg-[#2980b9] font-bold h-14 md:h-18 px-8 md:px-12 text-lg md:text-2xl rounded-2xl shadow-xl shadow-blue-500/20 font-tajawal active:scale-95 transition-all">
                            <Phone className="w-6 h-6 ml-3" />
                            اتصل الآن
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 md:h-18 px-8 md:px-12 text-lg md:text-xl rounded-2xl font-tajawal backdrop-blur-sm active:scale-95 transition-all">
                            <MessageCircle className="w-6 h-6 ml-3" />
                            واتساب
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    if (variant === "inline") {
        return (
            <div className="my-10 md:my-16 bg-[#FDF7E6] rounded-3xl p-6 md:p-10 border border-[#F9E79F] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 transition-transform hover:scale-[1.01] duration-300">
                <div className="flex items-center gap-5 md:gap-8">
                    <div className="bg-white p-4 md:p-5 rounded-2xl text-[#F39C12] shadow-sm">
                        <Lightbulb className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <div className="text-center md:text-right">
                        <h4 className="text-lg md:text-2xl font-bold text-[#2C3E50] mb-1 font-tajawal">هل تحتاج مساعدة فنية؟</h4>
                        <p className="text-[#666666] font-tajawal text-sm md:text-base">يمكنك استشارة مهندس مختص الآن مجاناً</p>
                    </div>
                </div>
                <Button className="w-full md:w-auto bg-[#2C3E50] text-white hover:bg-[#1a252f] h-12 md:h-16 px-8 md:px-10 rounded-2xl font-bold shadow-lg font-tajawal text-base md:text-lg active:scale-95 transition-all">
                    أطلب استشارة
                </Button>
            </div>
        )
    }

    return null;
}

export function FeatureList({ title, items, color = "blue" }: { title: string, items: string[], color?: "blue" | "green" | "red" }) {
    const iconColor = color === "blue" ? "text-[#3498DB]" : color === "green" ? "text-[#1ABC9C]" : "text-[#E74C3C]";
    const bgColor = color === "blue" ? "bg-blue-50" : color === "green" ? "bg-emerald-50" : "bg-red-50";
    const Icon = color === "green" ? CheckCircle2 : color === "red" ? AlertTriangle : Star;

    return (
        <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F0F0F0] hover:shadow-xl transition-all duration-300 h-full">
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#2C3E50] flex items-center gap-4 font-noto-kufi">
                <span className={`w-10 h-10 md:w-12 md:h-12 rounded-2xl ${bgColor} flex items-center justify-center shadow-sm ${iconColor}`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                </span>
                {title}
            </h3>
            <ul className="space-y-4 md:space-y-5">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-[#444444] group">
                        <div className={`mt-2.5 w-2 h-2 rounded-full ${color === 'green' ? 'bg-[#1ABC9C]' : 'bg-[#E74C3C]'} shrink-0 group-hover:scale-125 transition-transform`} />
                        <span className="font-medium leading-relaxed md:leading-loose text-sm md:text-base lg:text-lg font-tajawal">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export function IntroCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {[
                { title: "توفير الطاقة", desc: "خفض فاتورة الكهرباء 40%", icon: ThermometerSun, color: "text-[#F39C12]", bg: "bg-[#FEF5E7]" },
                { title: "ضمان 15 سنة", desc: "ضمان معتمد وشامل", icon: ShieldCheck, color: "text-[#1ABC9C]", bg: "bg-[#E8F6F3]" },
                { title: "تنفيذ هندسي", desc: "مطابق للكود السعودي", icon: Layers, color: "text-[#3498DB]", bg: "bg-[#EBF5FB]" },
            ].map((card, i) => (
                <div key={i} className="group bg-white p-6 md:p-8 lg:p-10 rounded-[24px] border border-[#F0F0F0] shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:border-[#3498DB]/30 transition-all duration-500">
                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${card.bg} flex items-center justify-center ${card.color} mb-6 md:mb-8 group-hover:rotate-6 transition-transform duration-300`}>
                        <card.icon className="w-7 h-7 md:w-8 md:h-8" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#2C3E50] mb-3 font-noto-kufi">{card.title}</h3>
                    <p className="text-[#666666] font-medium font-tajawal text-sm md:text-lg leading-relaxed">{card.desc}</p>
                </div>
            ))}
        </div>
    )
}

export function SectionRenderer({ section, index }: { section: Section, index: number }) {
    const sectionNumber = (index + 1).toString();
    const isCompany = section.title.includes("شركة") || /^\d+\./.test(section.title);

    // 1. FAQ & Problems
    if (section.type === "faq" || section.type === "problems") {
        const items: { q: string, a: string }[] = [];
        let currentQ = "";
        let currentA = "";
        section.content.forEach(line => {
            if (line.startsWith("### ") || line.startsWith("**")) {
                if (currentQ) items.push({ q: currentQ, a: currentA });
                currentQ = line.replace(/### |\*\*/g, "").trim();
                currentA = "";
            } else if (line.trim()) {
                currentA += line + "\n";
            }
        });
        if (currentQ) items.push({ q: currentQ, a: currentA });

        return (
            <section id={section.id} className="mb-16 md:mb-24 scroll-mt-32">
                <div className="text-center mb-10 md:mb-16">
                    <Badge className="mb-4 bg-[#E8F6F3] text-[#1ABC9C] hover:bg-[#D1F2EB] border-none px-6 py-2 rounded-full font-bold">
                        {section.type === "faq" ? "الأسئلة الشائعة" : "مشاكل وحلول"}
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#2C3E50] font-amiri leading-tight">{section.title}</h2>
                </div>

                <Accordion type="single" collapsible className="w-full grid gap-4 md:gap-6 max-w-4xl mx-auto font-tajawal">
                    {items.map((item, i) => (
                        <AccordionItem key={i} value={`val-${i}`} className="bg-white border border-[#F0F0F0] rounded-2xl px-2 shadow-[0_4px_12px_rgba(0,0,0,0.02)] data-[state=open]:ring-2 data-[state=open]:ring-[#3498DB]/10 data-[state=open]:border-[#3498DB]/30 transition-all overflow-hidden">
                            <AccordionTrigger className="text-base md:text-xl font-bold text-[#2C3E50] py-5 md:py-8 px-5 md:px-8 hover:no-underline hover:text-[#3498DB] text-right leading-tight">
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#555555] text-sm md:text-lg leading-relaxed md:leading-loose pb-6 md:pb-10 px-6 md:px-10 text-justify">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        )
    }

    // 2. Pros & Cons
    if (section.type === "pros_cons") {
        const pros: string[] = [];
        const cons: string[] = [];
        let currentList = "none";
        section.content.forEach(line => {
            if (line.includes("ميزات") || line.includes("جابيات")) currentList = "pros";
            else if (line.includes("عيوب") || line.includes("سلبيات")) currentList = "cons";
            else if (line.startsWith("- ")) currentList === "pros" ? pros.push(line.replace("- ", "")) : currentList === "cons" ? cons.push(line.replace("- ", "")) : null;
        });

        if (pros.length > 0 || cons.length > 0) {
            return (
                <div id={section.id} className="scroll-mt-32 mb-16 md:mb-24">
                    <h2 className="text-2xl md:text-4xl font-bold mb-10 md:mb-16 text-center text-[#2C3E50] font-amiri leading-tight">{section.title}</h2>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-10">
                        {pros.length > 0 && <FeatureList title="المميزات" items={pros} color="green" />}
                        {cons.length > 0 && <FeatureList title="العيوب" items={cons} color="red" />}
                    </div>
                </div>
            );
        }
    }

    // 3. CTA Block
    if (section.type === "cta") {
        const variant = section.content[0]?.includes("secondary") ? "secondary" : section.content[0]?.includes("inline") ? "inline" : "primary";
        return <CTABlock variant={variant as "primary" | "secondary" | "inline"} />;
    }

    // 4. Intro Cards
    if (section.type === "intro_cards") {
        return <IntroCards />;
    }

    // 5. Standard Bubble Section
    return (
        <div id={section.id} className="scroll-mt-32">
            <BubbleSection number={sectionNumber} title={section.title} isCompany={isCompany}>
                <div className="space-y-6 md:space-y-10">
                    {(() => {
                        const elements: React.ReactNode[] = [];
                        for (let i = 0; i < section.content.length; i++) {
                            const line = section.content[i];

                            if (line.trim().startsWith("|")) {
                                const tableRows: string[] = [];
                                while (i < section.content.length && section.content[i].trim().startsWith("|")) {
                                    tableRows.push(section.content[i]);
                                    i++;
                                }
                                i--;
                                elements.push(<TableRenderer key={`table-${i}`} rows={tableRows} />);
                                continue;
                            }

                            if (line.startsWith("### ")) {
                                elements.push(
                                    <h3 key={i} className="text-xl md:text-2xl font-bold text-[#2C3E50] pt-6 md:pt-10 font-tajawal flex items-center gap-3">
                                        <div className="w-1.5 h-8 bg-[#3498DB] rounded-full" />
                                        {line.replace("### ", "")}
                                    </h3>
                                );
                                continue;
                            }

                            if (line.startsWith("> ")) {
                                const tip = line.replace(/^> \[\!TIP\]/, "").replace(/^> /, "").trim();
                                elements.push(
                                    <div key={i} className="bg-[#F0F9FF] rounded-2xl md:rounded-3xl p-6 md:p-10 border-r-8 border-[#3498DB] shadow-sm my-8 md:my-12 flex gap-5 md:gap-8 items-start">
                                        <div className="bg-white p-3 md:p-4 rounded-2xl text-[#3498DB] shadow-sm shrink-0">
                                            <Lightbulb className="w-7 h-7 md:w-9 md:h-9" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#2C3E50] mb-2 text-lg md:text-xl font-tajawal">نصيحة الخبراء</h4>
                                            <p className="text-[#555555] text-sm md:text-lg leading-relaxed">{tip}</p>
                                        </div>
                                    </div>
                                );
                                continue;
                            }

                            if (line.startsWith("- ")) {
                                elements.push(
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="w-2.5 h-2.5 rounded-full bg-[#3498DB]/30 mt-2.5 md:mt-3 shrink-0 group-hover:bg-[#3498DB] transition-colors" />
                                        <span className="text-[#333333] font-medium leading-[1.8] md:leading-[2] text-sm md:text-lg">{line.replace("- ", "")}</span>
                                    </div>
                                );
                                continue;
                            }

                            if (!line.trim()) continue;

                            elements.push(
                                <p key={i} className="text-justify leading-[1.8] md:leading-[2] text-sm md:text-lg text-[#444444] font-tajawal">
                                    {line}
                                </p>
                            );
                        }
                        return elements;
                    })()}
                </div>
            </BubbleSection>
        </div>
    )
}
