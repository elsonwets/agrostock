"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe2, Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Lang, useLanguage } from "@/components/language-provider";

const whatsappPublish = "https://wa.me/245957783202?text=Bonjour%2C%20je%20veux%20publier%20un%20warehouse%20sur%20AgroStock";
const labels = {
  fr: { about: "À propos", how: "Comment ça marche", publish: "Publier un warehouse", language: "Changer la langue" },
  pt: { about: "Sobre nós", how: "Como funciona", publish: "Publicar um warehouse", language: "Mudar idioma" },
  en: { about: "About", how: "How it works", publish: "List a warehouse", language: "Change language" },
};

export function SiteHeader() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const tr = labels[lang];
  return <header className="site-header"><div className="shell nav-wrap shared-nav">
    <Link className="brand-logo" href="/" aria-label="AgroStock"><Image src="/agrostock-logo-v2.png" alt="AgroStock Guinée-Bissau" width={300} height={100} priority/></Link>
    <nav className={open ? "nav-links open" : "nav-links"} aria-label="Navigation principale"><Link href="/a-propos" onClick={()=>setOpen(false)}>{tr.about}</Link><Link href="/comment-ca-marche" onClick={()=>setOpen(false)}>{tr.how}</Link><a className="publish-mobile" href={whatsappPublish} target="_blank" rel="noreferrer">{tr.publish}</a></nav>
    <div className="header-actions">
      <Select value={lang} onValueChange={(value)=>setLang(value as Lang)}><SelectTrigger className="language-control" aria-label={tr.language}><Globe2 size={17}/><SelectValue>{lang.toUpperCase()}</SelectValue></SelectTrigger><SelectContent className="language-dropdown" position="popper" align="end" sideOffset={10}><SelectItem value="fr"><span>FR</span><small>Français</small></SelectItem><SelectItem value="pt"><span>PT</span><small>Português</small></SelectItem><SelectItem value="en"><span>EN</span><small>English</small></SelectItem></SelectContent></Select>
      <a className="publish-btn" href={whatsappPublish} target="_blank" rel="noreferrer">{tr.publish}<MessageCircle size={17}/></a>
      <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label="Menu">{open?<X/>:<Menu/>}</button>
    </div>
  </div></header>;
}
