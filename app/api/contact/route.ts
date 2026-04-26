import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please complete all fields before sending your message." },
      { status: 400 }
    );
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!resendApiKey || !contactEmail) {
    return NextResponse.json(
      {
        error:
          "Contact service is not configured yet. Add RESEND_API_KEY and CONTACT_EMAIL to enable live email delivery."
      },
      { status: 503 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`
    },
    body: JSON.stringify({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [contactEmail],
      subject: `New portfolio message from ${name}`,
      reply_to: email,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Message could not be delivered right now. Please try again shortly." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: "Message sent successfully. Jagadeesh will get back to you soon."
  });
}
