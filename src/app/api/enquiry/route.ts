import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM;
const RESEND_TO = process.env.RESEND_TO ?? "digimavenofficial@gmail.com";

export async function POST(request: Request) {
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { message: "Missing Resend API key." },
      { status: 500 },
    );
  }

  if (!RESEND_FROM) {
    return NextResponse.json(
      {
        message:
          "Missing RESEND_FROM. Use a verified sender address in your Resend account.",
      },
      { status: 500 },
    );
  }

  const body = await request.json();
  const { name, mobile, email, message } = body as {
    name?: string;
    mobile?: string;
    email?: string;
    message?: string;
  };

  if (!name || !mobile || !email || !message) {
    return NextResponse.json(
      { message: "Please fill in all fields." },
      { status: 400 },
    );
  }

  const mailBody = `Name: ${name}\nMobile: ${mobile}\nEmail: ${email}\n\nMessage:\n${message}`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: [RESEND_TO],
      subject: "New enquiry from SRIMATH Builders website",
      text: mailBody,
      reply_to: email,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      { message: `Failed to send enquiry. ${errorText}` },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: "Enquiry sent successfully." }, { status: 200 });
}
