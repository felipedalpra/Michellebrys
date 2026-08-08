import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { MediaFrame } from "@/components/ui/BotanicalArt";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig, whatsappMessages } from "@/lib/site-config";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-24 sm:py-32">
      <MediaFrame
        variant={1}
        icon={false}
        className="absolute inset-0 opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/85 to-forest-950/60" />

      <Container className="relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-balance font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl">
            Deixe a natureza fazer bem a alguém hoje
          </h2>
          <p className="mt-5 text-balance text-base text-ivory/70 sm:text-lg">
            Fale agora com a equipe da {siteConfig.name} pelo WhatsApp e
            garanta flores, plantas ou o presente perfeito para a ocasião.
          </p>
          <WhatsAppButton
            message={whatsappMessages.order}
            size="lg"
            eventLabel="final-cta"
            className="mt-10"
          >
            Peça pelo WhatsApp agora
          </WhatsAppButton>
        </Reveal>
      </Container>
    </section>
  );
}
