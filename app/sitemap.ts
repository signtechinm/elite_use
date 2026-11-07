import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://weelitead.com";
  const pages = ["", "/about", "/services", "/work", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 }));
  return [...pages, ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })), ...projects.map((p) => ({ url: `${base}/work/${p.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 }))];
}
