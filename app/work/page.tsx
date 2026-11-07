import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/navigation/site-header";
import { projects } from "@/content/projects";
import { Stagger, StaggerItem } from "@/components/motion/stagger";

export const metadata = { title: "Work — We Elite", description: "Selected brand, campaign, and digital work by We Elite." };

export default function WorkPage() {
  return <main><SiteHeader /><section className="bg-ink px-6 py-28 text-ivory md:px-12 md:py-40"><p className="eyebrow">Selected work</p><h1 className="mt-8 max-w-5xl font-display text-6xl leading-none md:text-9xl">Built to leave<br /><em className="text-gold">an impression.</em></h1></section><section className="px-6 py-24 md:px-12 md:py-36"><Stagger className="grid gap-x-8 gap-y-20 md:grid-cols-2">{projects.map((project, index) => <StaggerItem key={project.slug} className={index === 0 ? "md:col-span-2" : ""}><Link href={`/work/${project.slug}`}><article><div className={`relative overflow-hidden bg-[#8d8477] ${index === 0 ? "aspect-[2/1]" : "aspect-[4/3]"}`}><Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" /><div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-ivory"><div><p className="text-xs uppercase tracking-[.18em] text-gold">{project.category} / {project.year}</p><h2 className="mt-3 font-display text-4xl md:text-6xl">{project.title}</h2></div><ArrowUpRight size={26} /></div></div><p className="mt-5 max-w-md font-display text-2xl">{project.summary}</p></article></Link></StaggerItem>)}</Stagger></section></main>;
}
