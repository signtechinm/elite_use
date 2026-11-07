import Link from "next/link";

export default function NotFound() { return <main className="flex min-h-screen items-center justify-center bg-ink px-6 text-center text-ivory"><div><p className="eyebrow">404 / Page not found</p><h1 className="mt-6 font-display text-7xl">This page took<br /><em className="text-gold">a different route.</em></h1><Link href="/" className="mt-10 inline-block border-b border-gold pb-2 text-xs uppercase tracking-[.18em] text-gold">Return home ↗</Link></div></main>; }
