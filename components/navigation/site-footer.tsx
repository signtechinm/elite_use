import Link from "next/link";
import Image from "next/image";

const exploreLinks = [
  { label: "About Elite", href: "/about" },
  { label: "Our works", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact us", href: "/contact" },
];

export function SiteFooter() {
  return <footer className="bg-ink px-6 pb-8 pt-20 text-ivory md:px-12 md:pt-28">
    <div className="grid gap-16 md:grid-cols-[1.2fr_1fr_1fr]">
      <div>
        <Link href="/" className="inline-flex" aria-label="We Elite home">
          <Image src="/images/weelite-logo.png" alt="We Elite" width={220} height={78} className="h-auto w-40 object-contain md:w-52" />
        </Link>
        <h2 className="mt-7 max-w-lg font-display text-5xl leading-[.95] md:text-7xl">Let’s build something <em className="text-gold">remarkable.</em></h2>
        <Link href="/contact" className="mt-10 inline-flex border-b border-gold pb-2 text-xs uppercase tracking-[.18em] text-ivory transition-colors hover:text-gold">Start a conversation ↗</Link>
      </div>
      <div>
        <p className="eyebrow text-ivory/45">Explore</p>
        <nav className="mt-6 flex flex-col gap-3 text-sm text-ivory/75" aria-label="Footer navigation">
          {exploreLinks.map((link) => <Link key={link.href} href={link.href} className="transition-colors hover:text-gold">{link.label}</Link>)}
        </nav>
      </div>
      <div>
        <p className="eyebrow text-ivory/45">Get in touch</p>
        <div className="mt-6 space-y-3 text-sm leading-6 text-ivory/75">
          <a href="tel:+971505999760" className="block hover:text-gold">+971 50 599 9760</a>
          <a href="tel:+971502444549" className="block hover:text-gold">+971 50 244 4549</a>
          <a href="mailto:info@weelitead.com" className="block hover:text-gold">info@weelitead.com</a>
        </div>
        <p className="mt-8 text-sm leading-6 text-ivory/55">Office-08, Mubarak Bin Taen Building<br />Khalidiya, Abu Dhabi, UAE</p>
      </div>
    </div>
    <div className="mt-20 flex flex-col gap-3 border-t border-ivory/15 pt-6 text-xs text-ivory/40 md:flex-row md:items-center md:justify-between">
      <p>© 2022 Elite Constructions &amp; Maintenance</p>
      <p>Built with care in the UAE</p>
    </div>
  </footer>;
}
