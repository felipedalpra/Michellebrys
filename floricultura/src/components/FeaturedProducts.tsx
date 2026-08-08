import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/BotanicalArt";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { whatsappMessages } from "@/lib/site-config";
import { featuredProducts } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section id="produtos" className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Destaques"
          title="Escolhidos a dedo, prontos para presentear"
          description="Uma amostra do nosso catálogo — fale conosco pelo WhatsApp para ver fotos atualizadas e disponibilidade do dia."
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-ivory shadow-sm ring-1 ring-forest-950/5 transition-shadow duration-300 hover:shadow-xl">
                <div className="overflow-hidden">
                  <MediaFrame
                    variant={i}
                    label={product.category}
                    className="aspect-square w-full transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg text-forest-950">
                    {product.name}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink/65">
                    {product.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-forest-700">
                    {product.price}
                  </p>
                  <WhatsAppButton
                    message={whatsappMessages.product(product.name)}
                    size="md"
                    eventLabel={`produto-${product.slug}`}
                    className="mt-4 w-full"
                  >
                    Pedir pelo WhatsApp
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
