import { NextRequest, NextResponse } from "next/server";

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

    // TODO: podłącz wysyłkę e-mail (nodemailer / resend / emailjs)
    console.log("Nowa wiadomość z formularza:", {
      name,
      company,
      email,
      phone,
      message,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Wystąpił błąd. Spróbuj ponownie." },
      { status: 500 }
    );
  }
}
