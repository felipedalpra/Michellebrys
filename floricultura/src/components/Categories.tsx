import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/BotanicalArt";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { whatsappMessages } from "@/lib/site-config";
import { categories } from "@/data/categories";
import { ArrowUpRight } from "lucide-react";

export function Categories() {
  return (
    <section id="categorias" className="bg-ivory py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Explore"
          title="Uma seleção para cada canto da sua casa"
          description="De plantas e vasos exclusivos a flores frescas e projetos de jardim — encontre o que combina com o seu espaço."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => (
            <Reveal key={category.slug} delay={i * 0.05}>
              <article className="group relative overflow-hidden rounded-3xl bg-forest-950">
                <MediaFrame
                  variant={i}
                  icon={false}
                  className="aspect-[5/4] w-full transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-xl text-ivory">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-ivory/70">
                    {category.description}
                  </p>
                  <WhatsAppButton
                    message={whatsappMessages.occasion(category.name)}
                    variant="outline"
                    size="md"
                    eventLabel={`categoria-${category.slug}`}
                    className="mt-4 w-fit !px-5 !py-2 text-xs"
                  >
                    Consultar
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </WhatsAppButton>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
