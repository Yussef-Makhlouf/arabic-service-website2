import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ChevronLeft, ArrowRight, Menu, ShieldCheck, Lightbulb, CheckCircle2, AlertTriangle, Star, Phone, MessageCircle, ThermometerSun, Layers } from "lucide-react"
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TableRenderer } from "@/components/blog/table-renderer"
import { Rating } from "@/components/ui/rating"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// --- Types ---
interface Section {
  id: string;
  title: string;
  type: "text" | "faq" | "pros_cons" | "cta" | "intro_cards" | "problems";
  content: string[];
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return { title: "المقال غير موجود" }
  }

  return {
    title: `${post.title} | المدونة`,
    description: post.excerpt,
  }
}

// --- Components ---

function TableOfContents({ sections }: { sections: Section[] }) {
  return (
    <div className="sticky top-24 z-10 hidden lg:block space-y-8">
      <div className="bg-white rounded-[2rem] border border-[#F0F0F0] shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden p-2">
        <div className="bg-[#F0F0F0] rounded-2xl p-4 mb-2">
          <h3 className="font-bold text-[#4B0082] flex items-center gap-2 font-tajawal text-lg">
            <Menu className="w-5 h-5 text-[#3498DB]" />
            فهرس المحتوى
          </h3>
        </div>
        <nav className="p-1 space-y-1">
          {sections.map((section, idx) => (
            <a
              key={idx}
              href={`#${section.id}`}
              className="group flex items-center justify-between px-4 py-3 text-sm font-bold text-[#666666] hover:text-[#4B0082] hover:bg-[#F0F0F0] rounded-xl transition-all font-tajawal"
            >
              <span>{section.title}</span>
              <ChevronLeft className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>
      </div>

      {/* Trust Badge Widget */}
      <div className="bg-gradient-to-br from-[#2C3E50] to-[#1a252f] rounded-[2.5rem] p-8 text-white text-center shadow-xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-3xl transition-transform group-hover:scale-150 duration-700" />
        <ShieldCheck className="w-14 h-14 mx-auto mb-6 text-[#1ABC9C]" />
        <h4 className="font-bold text-xl mb-3 font-amiri">ضمان ذهبي شامل</h4>
        <p className="text-sm text-slate-300 mb-8 leading-relaxed font-tajawal">نضمن لك جودة العمل والمواد المستخدمة لمدة تصل إلى 15 عاماً مع شهادة معتمدة.</p>
        <Button size="lg" className="w-full bg-[#1ABC9C] hover:bg-[#16a085] text-white border-none font-bold rounded-xl h-12 shadow-lg font-tajawal">
          اطلب الضمان الآن
        </Button>
      </div>
    </div>
  )
}

function BubbleSection({ number, title, children, isCompany = false }: { number: string, title: string, children: React.ReactNode, isCompany?: boolean }) {
  return (
    <section className="scroll-mt-32 group mb-12">
      {/* 
        Layout:
        1. Rounded Rectangle Container (bg-[#F0F0F0])
        2. Title inside the container (Dark Purple)
        3. Content inside
      */}
      <div className="bg-[#F0F0F0] rounded-[16px] p-8 md:p-10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#E0E0E0] relative transition-transform hover:-translate-y-1 duration-300">

        {/* Company Badge / Icon if needed */}
        {isCompany && (
          <div className="absolute top-8 left-8 hidden md:flex items-center gap-2">
            <div className="bg-white p-2 rounded-full shadow-sm text-[#F1C40F]"><Star className="w-5 h-5 fill-current" /></div>
          </div>
        )}

        {/* Title */}
        <h2 className="text-2xl md:text-[22pt] font-bold text-[#4B0082] mb-6 font-noto-kufi border-b border-[#E0E0E0] pb-4 flex items-center gap-3">
          <span className="text-[#3498DB] font-tajawal text-xl bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm">{number}</span>
          {title}
        </h2>

        {/* Content */}
        <div className="text-[#333333] font-tajawal text-[16pt] leading-[1.6] space-y-6">
          {children}
        </div>

        {/* Company CTA Button */}
        {isCompany && (
          <div className="mt-8 pt-6 border-t border-[#E0E0E0] flex flex-wrap gap-4">
            <Button className="bg-[#3498DB] hover:bg-[#2980b9] text-white font-bold h-12 px-8 rounded-xl font-tajawal flex-1 md:flex-none">
              <Phone className="w-4 h-4 ml-2" />
              اتصل الآن
            </Button>
            <Button variant="outline" className="border-[#3498DB] text-[#3498DB] hover:bg-[#3498DB]/5 font-bold h-12 px-8 rounded-xl font-tajawal flex-1 md:flex-none">
              <MessageCircle className="w-4 h-4 ml-2" />
              واتساب
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

function CTABlock({ variant = "primary" }: { variant?: "primary" | "secondary" | "inline" }) {
  if (variant === "secondary") {
    return (
      <div className="my-16 bg-[#2C3E50] rounded-[16px] p-10 md:p-16 text-white text-center shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto">
          <Badge className="mb-6 bg-[#3498DB]/20 hover:bg-[#3498DB]/30 text-[#3498DB] border-none px-4 py-2 font-tajawal">خيارك الأمثل</Badge>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-amiri">جاهز لتحويل منزلك لمكان أكثر راحة؟</h3>
          <p className="text-gray-300 mb-10 text-xl leading-relaxed font-tajawal">لا تتردد في طلب استشارة مجانية. فريقنا الهندسي بانتظارك.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button size="lg" className="bg-[#3498DB] text-white hover:bg-[#2980b9] font-bold h-16 px-10 text-xl rounded-xl shadow-xl font-tajawal">
              <Phone className="w-6 h-6 ml-3" />
              اتصل الآن
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <div className="my-12 bg-amber-50 rounded-[16px] p-8 border border-amber-100 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="bg-amber-100 p-4 rounded-xl text-amber-600 shadow-sm">
            <Lightbulb className="w-8 h-8" />
          </div>
          <div>
            <h4 className="text-xl font-bold text-[#4B0082] mb-1 font-tajawal">هل تحتاج مساعدة فنية؟</h4>
            <p className="text-[#666666] font-tajawal">يمكنك استشارة مهندس مختص الآن مجاناً</p>
          </div>
        </div>
        <Button className="w-full md:w-auto bg-[#2C3E50] text-white hover:bg-[#1a252f] h-14 px-8 rounded-xl font-bold shadow-lg font-tajawal">
          أطلب استشارة
        </Button>
      </div>
    )
  }

  return null;
}

function SectionRenderer({ section, index }: { section: Section, index: number }) {
  const sectionNumber = (index + 1).toString();

  // Detect if this is a company section (title starts with "1.", "2.", etc or contains "شركة")
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
      <section id={section.id} className="mb-20 scroll-mt-32">
        <div className="text-center mb-12">
          <span className="inline-block py-2 px-6 rounded-full bg-[#E8F6F3] text-[#1ABC9C] font-bold text-sm mb-4 font-tajawal">
            {section.type === "faq" ? "الأسئلة الشائعة" : "مشاكل وحلول"}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B0082] font-amiri">{section.title}</h2>
        </div>

        <Accordion type="single" collapsible className="w-full grid gap-4 max-w-4xl mx-auto font-tajawal">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`val-${i}`} className="bg-[#F0F0F0] border-none rounded-[16px] px-2 shadow-[0_4px_12px_rgba(0,0,0,0.05)] data-[state=open]:ring-2 data-[state=open]:ring-[#3498DB] transition-all">
              <AccordionTrigger className="text-lg font-bold text-[#2C3E50] py-6 px-6 hover:no-underline hover:text-[#3498DB] text-right">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#333333] text-lg leading-loose pb-6 px-6 text-justify">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    )
  }

  // 2. Pros & Cons -> Bubble style but split
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
        <div id={section.id} className="scroll-mt-32 mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center text-[#4B0082] font-amiri">{section.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
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

  // 5. Standard Bubble Section (with Company Logic)
  return (
    <BubbleSection number={sectionNumber} title={section.title} isCompany={isCompany}>
      <div className="space-y-4">
        {(() => {
          const elements: React.ReactNode[] = [];
          for (let i = 0; i < section.content.length; i++) {
            const line = section.content[i];

            // Table Detection Loop
            if (line.trim().startsWith("|")) {
              const tableRows: string[] = [];
              // Collect all consecutive lines that start with |
              while (i < section.content.length && section.content[i].trim().startsWith("|")) {
                tableRows.push(section.content[i]);
                i++;
              }
              i--; // Step back one since the loop overshot
              elements.push(<TableRenderer key={`table-${i}`} rows={tableRows} />);
              continue;
            }

            // Headlines inside bubble
            if (line.startsWith("### ")) {
              elements.push(<h3 key={i} className="text-xl font-bold text-[#2C3E50] pt-4 font-tajawal flex items-center gap-2"><div className="w-2 h-6 bg-[#3498DB] rounded-full" />{line.replace("### ", "")}</h3>);
              continue;
            }

            // Tips
            if (line.startsWith("> ")) {
              const tip = line.replace(/^> \[\!TIP\]/, "").replace(/^> /, "").trim();
              elements.push(
                <div key={i} className="bg-white rounded-xl p-6 border-r-4 border-[#F1C40F] shadow-sm my-6 flex gap-4 items-start">
                  <div className="bg-[#FEF9E7] p-2 rounded-lg text-[#F1C40F] shrink-0"><Lightbulb className="w-6 h-6" /></div>
                  <div><h4 className="font-bold text-[#2C3E50] mb-1 font-tajawal">نصيحة هامة</h4><p className="text-[#666666] text-base">{tip}</p></div>
                </div>
              );
              continue;
            }

            // Lists
            if (line.startsWith("- ")) {
              elements.push(
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#3498DB] mt-3 shrink-0" />
                  <span className="text-[#333333] font-medium">{line.replace("- ", "")}</span>
                </div>
              );
              continue;
            }

            if (!line.trim()) continue;

            elements.push(<p key={i} className="text-justify">{line}</p>);
          }
          return elements;
        })()}
      </div>
    </BubbleSection>
  )
}

function FeatureList({ title, items, color = "blue" }: { title: string, items: string[], color?: "blue" | "green" | "red" }) {
  // Utilizing the same Bubble Style but for Pros/Cons
  const iconColor = color === "blue" ? "text-[#3498DB]" : color === "green" ? "text-[#1ABC9C]" : "text-[#E74C3C]";
  const Icon = color === "green" ? CheckCircle2 : color === "red" ? AlertTriangle : Star;

  return (
    <div className="bg-[#F0F0F0] rounded-[16px] p-8 md:p-10 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-[#E0E0E0] hover:shadow-lg transition-all">
      <h3 className="text-2xl font-bold mb-6 text-[#4B0082] flex items-center gap-3 font-noto-kufi">
        <span className={`w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm ${iconColor}`}>
          <Icon className="w-5 h-5" />
        </span>
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-[#333333]">
            <div className={`mt-2.5 w-1.5 h-1.5 rounded-full ${color === 'green' ? 'bg-[#1ABC9C]' : 'bg-[#E74C3C]'} shrink-0`} />
            <span className="font-medium leading-loose text-lg font-tajawal">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function IntroCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {[
        { title: "توفير الطاقة", desc: "خفض فاتورة الكهرباء 40%", icon: ThermometerSun, color: "text-[#F39C12]", bg: "bg-[#FEF5E7]" },
        { title: "ضمان 15 سنة", desc: "ضمان معتمد وشامل", icon: ShieldCheck, color: "text-[#1ABC9C]", bg: "bg-[#E8F6F3]" },
        { title: "تنفيذ هندسي", desc: "مطابق للكود السعودي", icon: Layers, color: "text-[#3498DB]", bg: "bg-[#EBF5FB]" },
      ].map((card, i) => (
        <div key={i} className="group bg-white p-8 rounded-[16px] border border-[#E0E0E0] shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-xl hover:border-[#3498DB] transition-all duration-300">
          <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center ${card.color} mb-6 group-hover:scale-110 transition-transform`}>
            <card.icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-[#2C3E50] mb-2 font-noto-kufi">{card.title}</h3>
          <p className="text-[#666666] font-medium font-tajawal">{card.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  // Parse post content into sections
  const lines = post.content.split("\n");
  const sections: Section[] = [];
  let currentSection: Section | null = null;

  lines.forEach(line => {
    if (line.startsWith("## ")) {
      if (currentSection) {
        sections.push(currentSection);
      }
      const title = line.replace("## ", "").trim();
      const id = title.replace(/\s+/g, '-').toLowerCase();
      let type: Section['type'] = "text";
      if (title.includes("الأسئلة الشائعة")) type = "faq";
      else if (title.includes("مشاكل وحلول")) type = "problems";
      else if (title.includes("مقارنة") || title.includes("مميزات وعيوب")) type = "pros_cons";
      else if (title.includes("دعوة للعمل") || title.includes("اتصل بنا")) type = "cta";
      else if (title.includes("بطاقات تعريفية")) type = "intro_cards";

      currentSection = { id, title, type, content: [] };
    } else if (currentSection) {
      currentSection.content.push(line);
    }
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pb-20">

        {/* Article Header */}
        <header className="py-20 md:py-32 bg-background relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

          <div className="container px-4 max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="flex items-center justify-center gap-2">
              <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors flex items-center text-sm gap-1 bg-muted/50 px-3 py-1 rounded-full">
                المدونة
                <ChevronLeft className="w-3 h-3" />
              </Link>
              <span className="text-muted-foreground text-sm">/</span>
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.2] tracking-tight text-balance text-foreground">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm md:text-base border-t border-dashed border-border/60 py-8 w-full max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{new Date(post.date).toLocaleDateString("ar-SA", { dateStyle: "long" })}</span>
              </div>
              <span className="text-border hidden sm:block">•</span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container px-4 max-w-5xl mx-auto mb-20">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container px-4 max-w-7xl mx-auto grid lg:grid-cols-[1fr_280px] gap-12">
          <article className="max-w-3xl mx-auto lg:max-w-none">
            {/* Excerpt */}
            <div className="mb-16">
              <p className="text-2xl md:text-3xl font-medium leading-relaxed text-foreground/90 text-center text-balance">
                {post.excerpt}
              </p>
              <div className="h-1 w-24 bg-primary/20 mx-auto mt-8 rounded-full" />
            </div>

            {/* Main Content */}
            {sections.map((section, index) => (
              <SectionRenderer key={section.id} section={section} index={index} />
            ))}

            {/* Rating Component */}
            <div className="mt-16 mb-8 flex justify-center">
              <Rating
                rating={4.8}
                totalReviews={850}
                className="w-full max-w-md bg-muted/10 border-border/60"
              />
            </div>
          </article>

          {/* Table of Contents */}
          <TableOfContents sections={sections.filter(s => s.type === "text" || s.type === "pros_cons" || s.type === "faq" || s.type === "problems")} />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 pt-24 border-t container px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">اقرأ أيضاً</h2>
              <Button variant="ghost" asChild className="gap-2">
                <Link href="/blog">
                  عرض جميع المقالات
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}

      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}