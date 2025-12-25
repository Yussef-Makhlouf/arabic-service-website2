"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Menu } from "lucide-react"

interface Section {
    id: string;
    title: string;
    type: "text" | "faq" | "pros_cons" | "cta" | "intro_cards" | "problems";
    content: string[];
}

export function MobileTableOfContents({ sections }: { sections: Section[] }) {
    if (sections.length === 0) return null;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        const target = document.getElementById(sectionId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className="lg:hidden mb-6">
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="toc" className="bg-white border border-[#F0F0F0] rounded-xl shadow-sm overflow-hidden">
                    <AccordionTrigger className="text-[#4B0082] font-bold font-tajawal hover:no-underline px-4 py-3">
                        <span className="flex items-center gap-2 text-sm">
                            <Menu className="w-4 h-4 text-[#3498DB]" />
                            فهرس المحتوى ({sections.length})
                        </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-2 pb-3">
                        <nav className="flex flex-col space-y-1 max-h-[40vh] overflow-y-auto">
                            {sections.map((section, idx) => (
                                <a
                                    key={idx}
                                    href={`#${section.id}`}
                                    onClick={(e) => handleClick(e, section.id)}
                                    className="text-sm font-medium text-[#666666] hover:text-[#4B0082] py-2 px-3 rounded-lg hover:bg-[#F0F0F0] transition-colors font-tajawal text-right active:bg-[#E0E0E0]"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
