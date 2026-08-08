import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-forest-500">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-display text-3xl leading-tight text-forest-950 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-balance text-base leading-relaxed text-ink/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
