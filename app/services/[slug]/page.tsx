import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/navigation/site-header";
import { Button } from "@/components/ui/button";
import { services } from "@/content/services";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  return <main><SiteHeader /><section className="bg-ink px-6 py-28 text-ivory md:px-12 md:py-40"><p className="eyebrow">Service / {service.number}</p><h1 className="mt-8 max-w-5xl font-display text-6xl leading-none md:text-9xl">{service.title}<br /><em className="text-gold">{service.intro}</em></h1></section><section className="grid gap-16 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-12 md:py-36"><p className="eyebrow">The opportunity</p><div><p className="max-w-3xl font-display text-4xl leading-tight md:text-6xl">{service.description}</p><div className="mt-20 grid border-t border-line md:grid-cols-2">{service.capabilities.map((capability, index) => <div key={capability} className="border-b border-line py-7"><span className="text-xs text-gold">0{index + 1}</span><h2 className="mt-4 font-display text-3xl">{capability}</h2></div>)}</div></div></section><section className="bg-[#ded6ca] px-6 py-24 md:px-12 md:py-36"><p className="eyebrow">The process</p><div className="mt-12 grid gap-10 md:grid-cols-3"><div><h3 className="font-display text-4xl">Discover</h3><p className="mt-4 text-sm leading-7 text-ink/60">We listen, ask better questions, and find the opportunity hiding in plain sight.</p></div><div><h3 className="font-display text-4xl">Define</h3><p className="mt-4 text-sm leading-7 text-ink/60">We turn insight into a clear direction everyone can believe in and build from.</p></div><div><h3 className="font-display text-4xl">Deliver</h3><p className="mt-4 text-sm leading-7 text-ink/60">We craft the details with care, bringing the idea to life across every touchpoint.</p></div></div><Button asChild className="mt-16"><Link href="/contact">Start a conversation ↗</Link></Button></section></main>;
}
