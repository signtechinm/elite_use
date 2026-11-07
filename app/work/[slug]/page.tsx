import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/navigation/site-header";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/projects";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main><SiteHeader /><section className="relative flex min-h-[70vh] items-end overflow-hidden bg-ink px-6 py-16 text-ivory md:px-12 md:py-24"><Image src={project.image} alt={project.title} fill priority className="object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" /><div className="relative"><p className="eyebrow">{project.category} / {project.year}</p><h1 className="mt-6 max-w-5xl font-display text-7xl leading-none md:text-[10rem]">{project.title}</h1></div></section><section className="grid gap-12 px-6 py-24 md:grid-cols-[1fr_2fr] md:px-12 md:py-36"><div><p className="eyebrow">The story</p></div><div className="grid gap-16 md:grid-cols-2"><div><p className="text-xs uppercase tracking-[.18em] text-gold">The challenge</p><p className="mt-5 text-sm leading-7 text-ink/65">{project.challenge}</p></div><div><p className="text-xs uppercase tracking-[.18em] text-gold">The result</p><p className="mt-5 text-sm leading-7 text-ink/65">{project.result}</p></div></div></section><section className="bg-[#ded6ca] px-6 py-24 md:px-12 md:py-36"><p className="eyebrow">The thinking</p><p className="mt-12 max-w-5xl font-display text-5xl leading-tight md:text-7xl">{project.solution}</p><div className="relative mt-20 aspect-[16/8] overflow-hidden"><Image src={project.image} alt={`${project.title} project detail`} fill className="object-cover" /></div></section><section className="px-6 py-24 text-center md:px-12 md:py-36"><p className="eyebrow">Next chapter</p><h2 className="mx-auto mt-8 max-w-3xl font-display text-5xl md:text-7xl">Have a story worth <em className="text-gold">shaping?</em></h2><Button asChild className="mt-12"><Link href="/contact">Start a conversation ↗</Link></Button></section></main>;
}
