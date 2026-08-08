export type Category = {
  slug: string;
  name: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "plantas",
    name: "Plantas",
    description: "Espécies para casa, apartamento e jardim, com curadoria própria.",
  },
  {
    slug: "vasos-ceramica",
    name: "Vasos de Cerâmica",
    description: "Clássicos, resistentes e com ótima drenagem para suas plantas.",
  },
  {
    slug: "vasos-concreto",
    name: "Vasos de Concreto",
    description: "Acabamento elegante e extrema durabilidade para qualquer ambiente.",
  },
  {
    slug: "flores-orquideas",
    name: "Flores & Orquídeas",
    description: "Buquês e orquídeas frescas para presentear ou renovar a casa.",
  },
  {
    slug: "jardim-paisagismo",
    name: "Jardim & Paisagismo",
    description: "Projeto completo para transformar seu espaço em um refúgio verde.",
  },
  {
    slug: "presentes",
    name: "Presentes",
    description: "Composições e mimos para presentear em qualquer ocasião.",
  },
];
