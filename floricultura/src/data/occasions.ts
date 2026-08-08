export type Occasion = {
  slug: string;
  label: string;
  emoji: string;
};

export const occasions: Occasion[] = [
  { slug: "amor", label: "Amor", emoji: "❤️" },
  { slug: "aniversario", label: "Aniversário", emoji: "🎂" },
  { slug: "formatura", label: "Formatura", emoji: "🎓" },
  { slug: "maternidade", label: "Maternidade", emoji: "👶" },
  { slug: "casamento", label: "Casamento", emoji: "💐" },
  { slug: "condolencias", label: "Condolências", emoji: "🕊️" },
  { slug: "datas-comemorativas", label: "Datas Comemorativas", emoji: "🎉" },
];
