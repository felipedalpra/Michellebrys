import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

const highlights = [
  "Curadoria de plantas e vasos",
  "Tradição de mais de 20 anos",
  "Atendimento pelo WhatsApp",
];

export function Testimonials() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Reputação"
          title="A confiança de quem já visitou"
        />

        <Reveal className="mx-auto mt-12 flex max-w-3xl flex-col items-center rounded-[2rem] bg-forest-950 px-8 py-14 text-center sm:px-16">
          <div className="flex items-center gap-1 text-gold-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <p className="mt-6 font-display text-5xl text-ivory sm:text-6xl">
            {siteConfig.rating.value}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ivory/60">
            {siteConfig.rating.count} avaliações no Google
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-ivory/10 pt-8">
            {highlights.map((item) => (
              <span
                key={item}
                className="text-sm font-medium text-ivory/75"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
