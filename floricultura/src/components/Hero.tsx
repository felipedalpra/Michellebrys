"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star } from "lucide-react";
import { siteConfig, whatsappMessages } from "@/lib/site-config";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MediaFrame } from "@/components/ui/BotanicalArt";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(232,169,58,0.18),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(205,217,143,0.14),transparent_50%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-ivory/15 bg-ivory/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-sage-light">
            +{siteConfig.yearsOfTradition} anos cuidando de jardins em Porto Alegre
          </span>

          <h1 className="max-w-xl text-balance font-display text-4xl leading-[1.08] text-ivory sm:text-5xl md:text-6xl">
            {siteConfig.tagline}.
          </h1>

          <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-ivory/70 sm:text-lg">
            Plantas, flores, vasos e projetos de jardim com curadoria própria da{" "}
            {siteConfig.name} — para transformar sua casa em um refúgio verde,
            do primeiro vaso ao paisagismo completo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton
              message={whatsappMessages.general}
              size="lg"
              eventLabel="hero-primary"
            >
              Peça pelo WhatsApp
            </WhatsAppButton>
            <Link
              href="#produtos"
              className="inline-flex items-center justify-center rounded-full border border-ivory/25 px-8 py-4 text-base font-semibold text-ivory transition-colors duration-300 hover:bg-ivory/10"
            >
              Conheça nossos arranjos
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3 text-sm text-ivory/70">
            <span className="flex items-center gap-1 text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span>
              <strong className="text-ivory">{siteConfig.rating.value}</strong> ·{" "}
              {siteConfig.rating.count} avaliações no Google
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative"
        >
          <MediaFrame
            variant={0}
            label="Boa Vista Garden Center"
            className="aspect-[4/5] w-full rounded-[2rem] shadow-2xl shadow-forest-950/40"
          />
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-ivory p-5 shadow-xl sm:block">
            <p className="font-display text-2xl text-forest-950">20+</p>
            <p className="text-xs font-medium uppercase tracking-wide text-ink/60">
              anos de tradição
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
