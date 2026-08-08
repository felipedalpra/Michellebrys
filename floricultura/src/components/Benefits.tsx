import { Award, Leaf, MessageCircleHeart, Sprout, Palette, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site-config";

const benefits = [
  {
    icon: Award,
    title: `+${siteConfig.yearsOfTradition} anos de tradição`,
    description: "Duas décadas transformando jardins e casas em Porto Alegre.",
  },
  {
    icon: Leaf,
    title: "Curadoria própria",
    description: "Plantas, flores e vasos selecionados com critério e cuidado.",
  },
  {
    icon: Palette,
    title: "Vasos exclusivos",
    description: "Linhas em concreto e cerâmica, do rústico ao contemporâneo.",
  },
  {
    icon: Home,
    title: "Jardim completo",
    description: "Do primeiro vaso ao projeto de paisagismo, tudo em um só lugar.",
  },
  {
    icon: Sprout,
    title: "Presentes para toda ocasião",
    description: "Composições para presentear com sofisticação, na hora certa.",
  },
  {
    icon: MessageCircleHeart,
    title: "Atendimento pelo WhatsApp",
    description: "Fale direto com a equipe e receba orientação personalizada.",
  },
];

export function Benefits() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.06} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-950 text-gold-400">
                <benefit.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="font-display text-lg text-forest-950">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
