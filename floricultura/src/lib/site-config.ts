/**
 * Configuração central do negócio — Boa Vista Garden Center.
 *
 * Dados reais extraídos do Instagram (@boavistafloricultura) e do
 * perfil do Google (Floricultura e Paisagismo Boa Vista, Porto Alegre).
 *
 * TODO(cliente): horário completo por dia foi definido como horário
 * comercial padrão (a confirmar) — só o fechamento às 18h é confirmado.
 * Ajustar aqui se algum dia tiver horário diferente.
 */

export const siteConfig = {
  name: "Boa Vista Garden Center",
  shortName: "Boa Vista",
  legalName: "Floricultura e Paisagismo Boa Vista",
  tagline: "A Natureza te faz Bem",
  description:
    "Plantas, flores, vasos e jardim completo em Porto Alegre. Mais de 20 anos de tradição cuidando de quem ama transformar casa e jardim em um refúgio natural.",

  whatsappNumber: "555133280802",
  phoneDisplay: "(51) 3328-0802",

  address: {
    street: "Av. Eng. Alfredo Corrêa Daudt, 120",
    neighborhood: "Boa Vista",
    city: "Porto Alegre",
    state: "RS",
    zip: "90480-120",
    country: "BR",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Av.+Eng.+Alfredo+Corr%C3%AAa+Daudt%2C+120+Boa+Vista+Porto+Alegre",
  },

  hours: [
    { day: "Segunda a Sexta", time: "08h30 às 18h00" },
    { day: "Sábado", time: "08h30 às 13h00" },
    { day: "Domingo", time: "Fechado" },
  ],
  // Formato usado pelo Schema.org (openingHoursSpecification)
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "18:00" },
    { days: ["Saturday"], opens: "08:30", closes: "13:00" },
  ],

  social: {
    instagram: "https://instagram.com/boavistafloricultura",
    instagramHandle: "@boavistafloricultura",
    facebook: "https://facebook.com/BoaVistaFloricultura",
  },

  rating: {
    value: 4.7,
    count: 98,
  },

  yearsOfTradition: 20,
} as const;

export function buildWhatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const whatsappMessages = {
  general:
    "Olá! Vim pelo site da Boa Vista Garden Center e gostaria de saber mais. 🌻",
  product: (productName: string) =>
    `Olá! Vim pelo site e tenho interesse em "${productName}". Poderiam me ajudar?`,
  occasion: (occasion: string) =>
    `Olá! Estou buscando algo especial para ${occasion.toLowerCase()}. Podem me ajudar a escolher?`,
  order: "Olá! Gostaria de fazer um pedido na Boa Vista Garden Center. 🌻",
} as const;
