import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "We Elite", short_name: "We Elite", description: "Creative excellence, elevated.", start_url: "/", display: "standalone", background_color: "#f4f0e9", theme_color: "#171614", icons: [] };
}
