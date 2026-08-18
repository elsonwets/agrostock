"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Heart, Instagram } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

const labels = {
  fr: { about: "À propos", how: "Comment ça marche", publish: "Publier un warehouse", created: "Créé avec", description: <>L’annuaire des espaces de stockage<br/>en Guinée-Bissau.</> },
  pt: { about: "Sobre nós", how: "Como funciona", publish: "Publicar um warehouse", created: "Criado com", description: <>O diretório de espaços de armazenamento<br/>na Guiné-Bissau.</> },
  en: { about: "About", how: "How it works", publish: "List a warehouse", created: "Created with", description: <>The warehouse directory<br/>in Guinea-Bissau.</> },
};

export function SiteFooter() {
  const { lang } = useLanguage();
  const tr = labels[lang];
  return <footer className="site-footer"><div className="shell footer-top"><div><Link className="brand-logo footer-logo" href="/"><Image src="/agrostock-logo-v2.png" alt="AgroStock" width={300} height={100}/></Link><p>{tr.description}</p></div><div><strong>AgroStock</strong><Link href="/a-propos">{tr.about}</Link><Link href="/comment-ca-marche">{tr.how}</Link><a href="https://wa.me/245957783202?text=Bonjour%2C%20je%20veux%20publier%20un%20warehouse%20sur%20AgroStock" target="_blank" rel="noreferrer">{tr.publish}</a></div><div><strong>Social</strong><span className="socials"><a href="#" aria-label="Facebook"><Facebook/></a><a href="#" aria-label="Instagram"><Instagram/></a></span></div></div><div className="shell copyright"><span>© 2026 AgroStock.</span><span className="creator-credit">{tr.created} <Heart size={17} fill="currentColor" aria-hidden="true"/> <a href="https://wetsjunior.com" target="_blank" rel="noreferrer">wetsjunior.com</a></span></div></footer>;
}
