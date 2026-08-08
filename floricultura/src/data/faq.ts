export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "Como faço um pedido?",
    answer:
      "É simples: escolha o que deseja no site (ou nos destaque a ocasião) e finalize direto pelo WhatsApp. Nossa equipe confirma disponibilidade, forma de pagamento e entrega na hora.",
  },
  {
    question: "Vocês fazem entrega?",
    answer:
      "Sim. Consulte pelo WhatsApp o prazo e a taxa para o seu endereço em Porto Alegre e região — a equipe confirma tudo antes de fechar o pedido.",
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "Aceitamos Pix, cartão de crédito/débito e dinheiro na loja. Para entregas, combinamos a forma de pagamento diretamente pelo WhatsApp.",
  },
  {
    question: "Posso personalizar um arranjo ou vaso?",
    answer:
      "Sim! Trabalhamos com curadoria própria de plantas, flores e vasos — conte pelo WhatsApp o estilo, cores e ocasião que você tem em mente e montamos algo exclusivo.",
  },
  {
    question: "Qual o horário de funcionamento da loja?",
    answer:
      "Atendemos de segunda a sexta das 08h30 às 18h00 e aos sábados das 08h30 às 13h00. Aos domingos permanecemos fechados.",
  },
  {
    question: "Fazem encomendas para datas especiais (Dia das Mães, Natal etc.)?",
    answer:
      "Sim, é uma das nossas especialidades. Para datas comemorativas recomendamos fazer contato com antecedência pelo WhatsApp para garantir seu pedido.",
  },
];
