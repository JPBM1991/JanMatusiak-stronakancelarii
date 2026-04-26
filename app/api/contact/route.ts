import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const TO_EMAIL = "jpbmat91@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Wypełnij wymagane pola." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Podaj poprawny adres e-mail." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Formularz · matusiak.legal" <${process.env.GMAIL_USER}>`,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nowa wiadomość od ${name}${company ? ` (${company})` : ""}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #2B3A4A;">
          <div style="border-top: 3px solid #2B3A4A; padding: 32px 0 24px;">
            <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #888; margin: 0 0 16px;">
              Wiadomość z formularza kontaktowego · matusiak.legal
            </p>
            <h2 style="font-size: 20px; margin: 0 0 24px; font-weight: 700;">${name}</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            ${company ? `<tr><td style="padding: 8px 0; font-size: 12px; color: #888; width: 120px;">Firma</td><td style="padding: 8px 0; font-size: 14px;">${company}</td></tr>` : ""}
            <tr><td style="padding: 8px 0; font-size: 12px; color: #888; width: 120px;">E-mail</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #2B3A4A;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; font-size: 12px; color: #888;">Telefon</td><td style="padding: 8px 0; font-size: 14px;"><a href="tel:${phone}" style="color: #2B3A4A;">${phone}</a></td></tr>` : ""}
          </table>
          <div style="border-top: 1px solid #D4E2EA; padding-top: 20px;">
            <p style="font-size: 12px; color: #888; margin: 0 0 8px; letter-spacing: 0.1em; text-transform: uppercase;">Wiadomość</p>
            <p style="font-size: 15px; line-height: 1.75; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json(
      { error: "Wystąpił błąd podczas wysyłki. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}
