import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export const metadata = { title: "Services — We Elite", description: "Strategy, creative direction, and digital experiences for ambitious brands." };

export default function ServicesPage() {
  return <main><SiteHeader /><section className="bg-ink px-6 py-28 text-ivory md:px-12 md:py-40"><p className="eyebrow">Capabilities</p><h1 className="mt-8 max-w-5xl font-display text-6xl leading-[.92] md:text-9xl">Make your next move <em className="text-gold">matter.</em></h1><p className="mt-12 max-w-xl text-sm leading-7 text-ivory/60">We bring strategy, creative direction, and digital craft together to help ambitious brands become more themselves.</p></section><section className="px-6 py-24 md:px-12 md:py-36"><Stagger>{services.map((service) => <StaggerItem key={service.slug}><article className="grid gap-8 border-t border-line py-12 md:grid-cols-[100px_1.2fr_1fr_40px] md:items-start"><span className="text-xs text-gold">{service.number}</span><div><h2 className="font-display text-5xl md:text-6xl">{service.title}</h2><p className="mt-5 font-display text-2xl text-ink/60">{service.intro}</p></div><div><p className="text-sm leading-7 text-ink/65">{service.description}</p><div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">{service.capabilities.map((capability) => <span key={capability} className="text-xs uppercase tracking-[.14em] text-gold">{capability}</span>)}</div></div><Link href={`/services/${service.slug}`} aria-label={`View ${service.title}`} className="text-gold transition-transform hover:translate-x-1"><ArrowUpRight size={25} /></Link></article></StaggerItem>)}</Stagger></section><section className="bg-[#ded6ca] px-6 py-24 md:px-12 md:py-32"><p className="eyebrow">Let’s talk</p><h2 className="mt-8 max-w-3xl font-display text-5xl md:text-7xl">Have a challenge worth <em className="text-gold">solving?</em></h2><Button asChild variant="outline" className="mt-12"><Link href="/contact">Start a conversation ↗</Link></Button></section></main>;
}
