/**
 * Configuração central do negócio.
 *
 * TODO(cliente): substituir todos os valores abaixo pelos dados reais
 * assim que forem enviados (nome, endereço, telefone, horários, redes,
 * nota/quantidade de avaliações do Google).
 */

export const siteConfig = {
  name: "Flora & Bry",
  shortName: "Flora & Bry",
  tagline: "Flores para os momentos que ficam",
  description:
    "Floricultura premium com buquês, arranjos e presentes florais para todas as ocasiões. Flores frescas diariamente, entrega rápida e atendimento personalizado.",

  // TODO(cliente): telefone real em formato internacional, só dígitos (ex: 5527999999999)
  whatsappNumber: "5527999999999",

  // TODO(cliente): endereço real
  address: {
    street: "Rua das Flores, 123",
    neighborhood: "Centro",
    city: "Guarapari",
    state: "ES",
    zip: "29200-000",
    country: "BR",
    mapsUrl: "https://maps.google.com/?q=Flora+%26+Bry+Floricultura",
    // TODO(cliente): coordenadas reais para o Schema.org LocalBusiness
    lat: -20.6667,
    lng: -40.4986,
  },

  hours: [
    { day: "Segunda a Sexta", time: "08h30 às 18h30" },
    { day: "Sábado", time: "08h30 às 14h00" },
    { day: "Domingo", time: "Fechado" },
  ],

  social: {
    instagram: "https://instagram.com/floraebry",
    facebook: "https://facebook.com/floraebry",
  },

  // TODO(cliente): nota real e quantidade real de avaliações do Google
  rating: {
    value: 4.9,
    count: 187,
  },

  email: "contato@floraebry.com.br",
} as const;

export function buildWhatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`;
}

export const whatsappMessages = {
  general:
    "Olá! Vim pelo site da Flora & Bry e gostaria de saber mais sobre os arranjos. 🌸",
  product: (productName: string) =>
    `Olá! Vim pelo site e tenho interesse no(a) "${productName}". Poderiam me ajudar? 🌸`,
  occasion: (occasion: string) =>
    `Olá! Estou buscando flores para ${occasion.toLowerCase()}. Podem me ajudar a escolher? 🌸`,
  order: "Olá! Gostaria de fazer um pedido pela Flora & Bry. 🌸",
} as const;
