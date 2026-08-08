import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SunflowerMark } from "@/components/ui/BotanicalArt";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { siteConfig, whatsappMessages } from "@/lib/site-config";

const fullAddress = `${siteConfig.address.street} - ${siteConfig.address.neighborhood}, ${siteConfig.address.city} - ${siteConfig.address.state}, ${siteConfig.address.zip}`;

export function Footer() {
  return (
    <footer id="contato" className="bg-forest-950 pt-20 text-ivory/80">
      <Container className="grid grid-cols-1 gap-12 pb-16 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <SunflowerMark className="h-7 w-7 text-gold-500" />
            <span className="font-display text-lg text-ivory">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Boa Vista Garden Center"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 transition-colors hover:bg-ivory/10"
            >
              <InstagramIcon className="h-4 w-4" />
            </Link>
            <Link
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook da Boa Vista Garden Center"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/15 transition-colors hover:bg-ivory/10"
            >
              <FacebookIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base text-ivory">Contato</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{fullAddress}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-gold-400" />
              <span>{siteConfig.phoneDisplay}</span>
            </li>
          </ul>
          <WhatsAppButton
            message={whatsappMessages.general}
            eventLabel="footer"
            className="mt-6"
          >
            Chamar no WhatsApp
          </WhatsAppButton>
        </div>

        <div>
          <h3 className="font-display text-base text-ivory">Horário</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {siteConfig.hours.map((item) => (
              <li key={item.day} className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-ivory/70">
                  <Clock className="h-3.5 w-3.5 text-gold-400" />
                  {item.day}
                </span>
                <span>{item.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="aspect-[21/9] w-full py-0 sm:aspect-[3/1]">
          <iframe
            title={`Mapa — ${siteConfig.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`}
            className="h-full w-full grayscale-[0.3]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Container>
      </div>

      <div className="border-t border-ivory/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-ivory/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
          <p>{siteConfig.legalName}</p>
        </Container>
      </div>
    </footer>
  );
}
