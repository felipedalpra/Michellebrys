"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildWhatsappLink } from "@/lib/site-config";

type Variant = "primary" | "outline" | "dark";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-whatsapp text-white shadow-[0_8px_24px_-6px_rgba(37,211,102,0.55)] hover:bg-whatsapp-dark",
  outline:
    "border border-ivory/40 bg-transparent text-ivory hover:bg-ivory/10",
  dark: "bg-forest-950 text-ivory hover:bg-forest-900",
};

const sizeClasses: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  size = "md",
  className,
  eventLabel,
}: {
  message: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  eventLabel?: string;
}) {
  return (
    <Link
      href={buildWhatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="whatsapp"
      data-cta-label={eventLabel}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
    >
      <MessageCircle className="h-[1.15em] w-[1.15em] shrink-0 transition-transform duration-300 group-hover:rotate-6" />
      <span className="inline-flex items-center gap-1.5">{children}</span>
    </Link>
  );
}
