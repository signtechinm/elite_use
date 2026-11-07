import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const name = body?.name?.trim(); const email = body?.email?.trim(); const message = body?.message?.trim(); const service = body?.service?.trim() || "Not specified";
  if (!name || !message || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Please complete the required fields." }, { status: 400 });
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) return NextResponse.json({ error: "Contact delivery is not configured yet." }, { status: 503 });
  const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, "Content-Type": "application/json" }, body: JSON.stringify({ from: "We Elite Website <onboarding@resend.dev>", to: [process.env.CONTACT_TO_EMAIL], reply_to: email, subject: `New enquiry from ${name}`, text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}` }) });
  if (!response.ok) return NextResponse.json({ error: "Unable to send your enquiry right now." }, { status: 502 });
  return NextResponse.json({ success: true });
}
