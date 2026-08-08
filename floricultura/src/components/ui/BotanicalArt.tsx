import { cn } from "@/lib/utils";

/**
 * Ilustrações vetoriais originais, inspiradas no próprio símbolo da marca
 * (girassol). Servem como identidade visual leve enquanto fotos reais da
 * loja não são inseridas — ver MediaFrame abaixo para os locais exatos
 * onde uma foto (next/image) deve substituir o placeholder.
 */
export function SunflowerMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={cn("h-8 w-8", className)}
      aria-hidden="true"
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse
          key={i}
          cx="32"
          cy="14"
          rx="4.2"
          ry="10"
          fill="currentColor"
          opacity={0.85}
          transform={`rotate(${i * 30} 32 32)`}
        />
      ))}
      <circle cx="32" cy="32" r="8.5" className="fill-forest-950" />
    </svg>
  );
}

export function LeafSprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      className={cn("h-6 w-32 text-forest-500", className)}
      aria-hidden="true"
    >
      <path
        d="M2 30C40 5 70 5 100 30C130 55 160 55 198 30"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {[20, 55, 90, 125, 160].map((x, i) => (
        <ellipse
          key={x}
          cx={x}
          cy={i % 2 === 0 ? 20 : 42}
          rx="9"
          ry="4"
          fill="currentColor"
          opacity="0.7"
          transform={`rotate(${i % 2 === 0 ? -20 : 20} ${x} ${i % 2 === 0 ? 20 : 42})`}
        />
      ))}
    </svg>
  );
}

const gradients = [
  "from-forest-800 via-forest-700 to-forest-950",
  "from-gold-500 via-gold-600 to-clay",
  "from-sage via-cream to-gold-400",
  "from-clay via-forest-700 to-forest-950",
];

/**
 * Bloco de mídia com proporção fixa, usado como stand-in elegante para
 * fotos reais (hero, produtos, galeria, sobre). Ao receber as fotos da
 * loja, trocar por <Image> mantendo a mesma aspect-ratio.
 */
export function MediaFrame({
  className,
  variant = 0,
  label,
  icon = true,
}: {
  className?: string;
  variant?: number;
  label?: string;
  icon?: boolean;
}) {
  const gradient = gradients[variant % gradients.length];
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
        gradient,
        className
      )}
      role="img"
      aria-label={label ?? "Imagem ilustrativa — foto real a ser adicionada"}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
      {icon ? (
        <SunflowerMark className="h-12 w-12 text-ivory/70 sm:h-16 sm:w-16" />
      ) : null}
      {label ? (
        <span className="absolute bottom-3 left-3 rounded-full bg-forest-950/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-ivory/80 backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}
