import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { occasions } from "@/data/occasions";
import { buildWhatsappLink, whatsappMessages } from "@/lib/site-config";

export function Occasions() {
  return (
    <section id="ocasioes" className="bg-forest-950 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Para cada momento"
          title="Uma lembrança para cada sentimento"
          description="Conte para a gente a ocasião e deixamos tudo pronto para você presentear com sofisticação."
          className="[&_h2]:text-ivory [&_p]:text-ivory/70 [&_span]:text-gold-400"
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {occasions.map((occasion, i) => (
            <Reveal as="li" key={occasion.slug} delay={i * 0.04}>
              <Link
                href={buildWhatsappLink(whatsappMessages.occasion(occasion.label))}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp"
                data-cta-label={`ocasiao-${occasion.slug}`}
                className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-ivory/10 bg-ivory/5 px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-ivory/10"
              >
                <span className="text-3xl transition-transform duration-300 group-hover:scale-110">
                  {occasion.emoji}
                </span>
                <span className="text-sm font-medium text-ivory">
                  {occasion.label}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
