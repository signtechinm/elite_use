"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { SiteHeader } from "@/components/navigation/site-header";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))) });
    const result = await response.json();
    if (!response.ok) { setError(result.error || "Something went wrong."); return; }
    setSent(true);
  }
  return <main><SiteHeader /><section className="bg-ink px-6 py-28 text-ivory md:px-12 md:py-40"><p className="eyebrow">Start a conversation</p><h1 className="mt-8 max-w-5xl font-display text-6xl leading-none md:text-9xl">Tell us what<br /><em className="text-gold">you’re building.</em></h1></section><section className="grid gap-16 px-6 py-24 md:grid-cols-[1fr_1.5fr] md:px-12 md:py-36"><div><p className="eyebrow">Get in touch</p><p className="mt-8 max-w-sm text-sm leading-7 text-ink/65">Have a new idea, a brand that needs a new perspective, or simply a good feeling? We would love to hear about it.</p><div className="mt-12 space-y-3 text-sm"><a href="mailto:hello@weelitead.com" className="block hover:text-gold">hello@weelitead.com</a><span className="block text-ink/55">Available worldwide</span></div></div><div>{sent ? <div className="border-t border-line py-12"><p className="eyebrow">Message received</p><h2 className="mt-6 font-display text-5xl">Thank you.<br /><em className="text-gold">We’ll be in touch.</em></h2><Button asChild variant="link" className="mt-10"><Link href="/">Return home ↗</Link></Button></div> : <form onSubmit={submit} className="border-t border-line"><label className="block border-b border-line py-5"><span className="eyebrow">Your name</span><input required name="name" type="text" placeholder="Name" className="mt-4 block w-full bg-transparent font-display text-3xl outline-none placeholder:text-ink/25" /></label><label className="block border-b border-line py-5"><span className="eyebrow">Email address</span><input required name="email" type="email" placeholder="you@company.com" className="mt-4 block w-full bg-transparent font-display text-3xl outline-none placeholder:text-ink/25" /></label><label className="block border-b border-line py-5"><span className="eyebrow">What can we help with?</span><select name="service" defaultValue="" className="mt-4 block w-full bg-transparent font-display text-3xl outline-none"><option value="" disabled>Select a service</option><option>Brand strategy</option><option>Creative direction</option><option>Digital experience</option><option>Something else</option></select></label><label className="block border-b border-line py-5"><span className="eyebrow">Your message</span><textarea required name="message" rows={4} placeholder="Tell us a little about the opportunity..." className="mt-4 block w-full resize-none bg-transparent font-display text-3xl outline-none placeholder:text-ink/25" /></label><Button type="submit" className="mt-10">Send enquiry ↗</Button></form>}</div></section></main>;
}
