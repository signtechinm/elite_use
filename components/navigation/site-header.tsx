"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Achievements", href: "/#approach" }, { label: "Our Works", href: "/work" }, { label: "Contact Us", href: "/contact" }];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="absolute inset-x-0 top-0 z-20 bg-transparent text-ivory">
    <nav className="flex items-center justify-between px-6 py-5 md:px-12" aria-label="Main navigation">
      <Link href="/" aria-label="We Elite home" className="relative block h-14 w-40"><Image src="/images/weelite-logo.png" alt="We Elite Construction and General Maintenance" fill sizes="160px" className="object-contain object-left" priority /></Link>
      <div className="hidden items-center gap-8 md:flex">{links.map((link) => <Link key={link.href} href={link.href} className="text-xs uppercase tracking-[.18em] hover:text-gold">{link.label}</Link>)}</div>
      <Button asChild variant="link" className="hidden md:inline-flex"><Link href="#contact">Start a conversation</Link></Button>
      <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="text-ivory md:hidden">{open ? <X size={22} /> : <Menu size={22} />}</button>
    </nav>
    {open && <div className="border-t border-ivory/15 bg-ink/90 px-6 py-8 backdrop-blur-md md:hidden"><div className="flex flex-col gap-6">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="font-display text-4xl">{link.label}</Link>)}<Button asChild className="mt-4 w-fit"><Link href="#contact" onClick={() => setOpen(false)}>Start a conversation</Link></Button></div></div>}
  </header>;
}
