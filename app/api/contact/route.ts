import { NextResponse } from "next/server";
import { site } from "@/data/site";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const body = (await request.json()) as ContactPayload;
  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: site.contact.messages.missingFields },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: site.contact.messages.invalidEmail },
      { status: 400 }
    );
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const subjectName = name.replace(/[\r\n]/g, " ");

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!resendApiKey || !contactEmail) {
    return NextResponse.json(
      {
        error: site.contact.messages.deliveryNotConfigured
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
      subject: `New portfolio message from ${subjectName}`,
      reply_to: email,
      html: `
        <h2>New Portfolio Message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: site.contact.messages.deliveryFailed },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: site.contact.messages.success
  });
}
