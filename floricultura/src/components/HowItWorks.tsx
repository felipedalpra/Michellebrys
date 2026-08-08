import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { whatsappMessages } from "@/lib/site-config";

const steps = [
  {
    number: "01",
    title: "Escolha",
    description: "Navegue pelas categorias, produtos e ocasiões do site.",
  },
  {
    number: "02",
    title: "Fale no WhatsApp",
    description: "Confirme disponibilidade, personalização e forma de entrega.",
  },
  {
    number: "03",
    title: "Receba em casa",
    description: "Combine a entrega ou retire na loja, do jeito mais fácil para você.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-ivory py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Como funciona"
          title="Do clique à sua porta, em 3 passos"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 0.08} className="text-center">
              <span className="font-display text-5xl text-gold-500">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl text-forest-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex justify-center">
          <WhatsAppButton
            message={whatsappMessages.order}
            size="lg"
            eventLabel="how-it-works"
          >
            Começar meu pedido
          </WhatsAppButton>
        </Reveal>
      </Container>
    </section>
  );
}
