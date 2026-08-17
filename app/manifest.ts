import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AgroStock Guinée-Bissau",
    short_name: "AgroStock",
    description: "Annuaire des warehouses à louer ou à vendre en Guinée-Bissau.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF5E7",
    theme_color: "#176B3A",
    lang: "fr",
    orientation: "portrait-primary",
    icons: [
      { src: "/pwa-icon-1024.png", sizes: "1024x1024", type: "image/png", purpose: "any" },
      { src: "/pwa-icon-1024.png", sizes: "1024x1024", type: "image/png", purpose: "maskable" },
    ],
  };
}
