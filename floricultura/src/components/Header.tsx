"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig, whatsappMessages } from "@/lib/site-config";
import { SunflowerMark } from "@/components/ui/BotanicalArt";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#categorias", label: "Categorias" },
  { href: "#produtos", label: "Produtos" },
  { href: "#ocasioes", label: "Ocasiões" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ivory/90 shadow-[0_1px_0_0_rgba(16,25,15,0.06)] backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="#topo" className="flex items-center gap-2.5">
          <SunflowerMark className="h-7 w-7 text-gold-500" />
          <span className="font-display text-lg tracking-tight text-forest-950">
            {siteConfig.shortName}
            <span className="hidden text-forest-500 sm:inline"> Garden Center</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-forest-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton message={whatsappMessages.general} eventLabel="header">
            Peça pelo WhatsApp
          </WhatsAppButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-forest-950 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-forest-950/10 bg-ivory px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-ink/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <WhatsAppButton
            message={whatsappMessages.general}
            eventLabel="header-mobile"
            className="mt-6 w-full"
          >
            Peça pelo WhatsApp
          </WhatsAppButton>
        </div>
      ) : null}
    </header>
  );
}
