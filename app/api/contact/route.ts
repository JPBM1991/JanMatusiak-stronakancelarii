import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "jan.matusiak@interia.pl";

const SPAM_KEYWORDS = [
  "casino", "crypto", "bitcoin", "forex", "loan", "mortgage", "seo ",
  "backlink", "viagra", "cialis", "pills", "pharmacy", "dating", "escort",
  "click here", "kliknij tutaj", "free money", "make money", "earn money",
  "work from home", "praca z domu", "kredyt bez", "chwilówka", "pożyczka bez",
  "http://", "https://t.me", "t.me/", "wa.me/", "whatsapp.com/",
];

const MIN_SUBMIT_SECONDS = 4;

function isSpam(message: string, name: string): boolean {
  const combined = `${name} ${message}`.toLowerCase();
  return SPAM_KEYWORDS.some((kw) => combined.includes(kw.toLowerCase()));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, email, phone, message, _honey, _loadedAt } = body;

    // Honeypot — boty wypełniają ukryte pole
    if (_honey) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Minimalny czas — boty wysyłają natychmiast
    const elapsed = _loadedAt ? (Date.now() - Number(_loadedAt)) / 1000 : 999;
    if (elapsed < MIN_SUBMIT_SECONDS) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

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

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Wiadomość jest zbyt długa." },
        { status: 400 }
      );
    }

    // Filtr słów kluczowych
    if (isSpam(message, name)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const { error } = await resend.emails.send({
      from: "Formularz · matusiak.legal <onboarding@resend.dev>",
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

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Wystąpił błąd podczas wysyłki. Spróbuj ponownie." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Wystąpił błąd. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}
