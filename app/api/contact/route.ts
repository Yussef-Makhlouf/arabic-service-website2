import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const phoneRegex = /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;

const formSchema = z.object({
    email: z.string().email(),
    phone: z.string().regex(phoneRegex),
    message: z.string().min(1),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = formSchema.parse(body);

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS?.replace(/\s+/g, ''), // Remove spaces if present in app password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'tebacomp1@gmail.com',
            subject: `طلب خدمة جديد: ${validatedData.phone}`,
            text: `
        طلب خدمة جديد من الموقع:
        
        البريد الإلكتروني: ${validatedData.email}
        رقم الجوال: ${validatedData.phone}
        الرسالة:
        ${validatedData.message}
      `,
            html: `
        <div dir="rtl" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #59478a; color: #ffffff; padding: 20px; text-align: center;">
            <h2 style="margin: 0; font-size: 24px;">طلب خدمة جديد</h2>
          </div>
          <div style="padding: 30px;">
            <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
              <strong style="color: #666; display: block; margin-bottom: 5px;">رقم الجوال:</strong>
              <div style="font-size: 18px; color: #000; font-weight: bold; direction: ltr; text-align: right;">${validatedData.phone}</div>
            </div>
            <div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 15px;">
              <strong style="color: #666; display: block; margin-bottom: 5px;">البريد الإلكتروني:</strong>
              <div style="font-size: 16px; color: #000;">${validatedData.email}</div>
            </div>
            <div>
              <strong style="color: #666; display: block; margin-bottom: 5px;">الرسالة:</strong>
              <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; border: 1px solid #eee; white-space: pre-wrap; color: #333;">${validatedData.message}</div>
            </div>
          </div>
          <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #888;">
            تم استلام هذا الطلب من خلال نموذج التواصل في الموقع
          </div>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Invalid input data', details: error.errors }, { status: 400 });
        }
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
