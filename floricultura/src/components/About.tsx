import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame, LeafSprig } from "@/components/ui/BotanicalArt";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig, whatsappMessages } from "@/lib/site-config";

export function About() {
  return (
    <section id="sobre" className="bg-cream py-20 sm:py-28">
      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <MediaFrame
            variant={2}
            label={`${siteConfig.name} — ${siteConfig.address.neighborhood}, ${siteConfig.address.city}`}
            className="aspect-[4/5] w-full rounded-[2rem] shadow-xl"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-forest-500">
            Nossa história
          </span>
          <h2 className="font-display text-3xl leading-tight text-forest-950 sm:text-4xl">
            Mais de {siteConfig.yearsOfTradition} anos plantando cuidado no
            bairro Boa Vista
          </h2>
          <LeafSprig className="my-6" />
          <div className="space-y-4 text-base leading-relaxed text-ink/70">
            <p>
              Há mais de duas décadas, a {siteConfig.name} recebe quem busca
              plantas, flores, vasos e um pouco de natureza em Porto Alegre.
              O que começou como uma floricultura de bairro se tornou um
              verdadeiro garden center, com uma seleção que vai da orquídea
              delicada ao projeto de jardim completo.
            </p>
            <p>
              Acreditamos que <em>&ldquo;{siteConfig.tagline}&rdquo;</em> —
              por isso cada planta, vaso e arranjo que sai da nossa loja é
              escolhido com o mesmo cuidado que colocamos em cultivá-los.
              Nossa equipe está pronta para ajudar você a encontrar o que
              vai transformar a sua casa, seu jardim ou o seu presente em
              algo especial.
            </p>
          </div>
          <WhatsAppButton
            message={whatsappMessages.general}
            eventLabel="sobre"
            className="mt-8"
          >
            Fale com a nossa equipe
          </WhatsAppButton>
        </Reveal>
      </Container>
    </section>
  );
}
