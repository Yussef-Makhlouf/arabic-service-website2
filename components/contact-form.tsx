"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const phoneRegex = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/

const formSchema = z.object({
    email: z.string().email({
        message: "يرجى إدخال بريد إلكتروني صحيح",
    }),
    phone: z.string().regex(phoneRegex, {
        message: "يرجى إدخال رقم جوال سعودي صحيح (يبدأ بـ 05)",
    }),
    message: z.string().min(10, {
        message: "الرسالة يجب أن تكون 10 أحرف على الأقل",
    }),
})

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            phone: "",
            message: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })

            if (!response.ok) {
                throw new Error("فشل إرسال الرسالة")
            }

            toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.")
            form.reset()
        } catch (error) {
            toast.error("حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
            <div className="mb-6">
                <h3 className="text-2xl font-bold">أرسل لنا رسالة</h3>
                <p className="text-muted-foreground mt-2">
                    املأ النموذج أدناه وسيتم الرد عليك في أقرب وقت ممكن
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>البريد الإلكتروني</FormLabel>
                                <FormControl>
                                    <Input placeholder="name@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>رقم الجوال</FormLabel>
                                <FormControl>
                                    <Input placeholder="05xxxxxxxx" dir="ltr" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>الرسالة</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="تفاصيل طلبك..."
                                        className="min-h-[120px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                جاري الإرسال...
                            </>
                        ) : (
                            <>
                                إرسال الرسالة
                                <Send className="mr-2 h-4 w-4" />
                            </>
                        )}
                    </Button>
                </form>
            </Form>
        </div>
    )
}
