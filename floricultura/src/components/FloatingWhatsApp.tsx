"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { buildWhatsappLink, whatsappMessages } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <Link
      href={buildWhatsappLink(whatsappMessages.order)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      data-cta-label="floating-button"
      aria-label="Peça pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-105 active:scale-95 sm:h-16 sm:w-16"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-40" />
      <MessageCircle className="relative h-7 w-7" />
    </Link>
  );
}
