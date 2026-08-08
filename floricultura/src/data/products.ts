/**
 * TODO(cliente): substituir por fotos e preços reais do catálogo.
 * A estrutura já está pronta — basta trocar os campos abaixo.
 */
export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  description: string;
};

export const featuredProducts: Product[] = [
  {
    slug: "orquidea-phalaenopsis",
    name: "Orquídea Phalaenopsis",
    category: "Flores & Orquídeas",
    price: "a partir de R$ 129",
    description: "Elegante e duradoura, perfeita para presentear ou decorar ambientes.",
  },
  {
    slug: "vaso-concreto-artesanal",
    name: "Vaso de Concreto Artesanal",
    category: "Vasos de Concreto",
    price: "a partir de R$ 189",
    description: "Design atemporal com acabamento fosco, feito para durar.",
  },
  {
    slug: "buque-flores-do-campo",
    name: "Buquê Flores do Campo",
    category: "Flores & Orquídeas",
    price: "a partir de R$ 159",
    description: "Composição delicada com flores frescas selecionadas do dia.",
  },
  {
    slug: "vaso-ceramica-esmaltado",
    name: "Vaso de Cerâmica Esmaltado",
    category: "Vasos de Cerâmica",
    price: "a partir de R$ 99",
    description: "Efeito esmaltado exclusivo, ótima drenagem para suas plantas.",
  },
  {
    slug: "jardim-suculentas",
    name: "Jardim de Suculentas",
    category: "Plantas",
    price: "a partir de R$ 119",
    description: "Arranjo de baixa manutenção, ideal para mesas e varandas.",
  },
  {
    slug: "cesta-presente-verde",
    name: "Cesta Presente Verde",
    category: "Presentes",
    price: "a partir de R$ 179",
    description: "Seleção de plantas e mimos para presentear com sofisticação.",
  },
];
