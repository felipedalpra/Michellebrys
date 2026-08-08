# Boa Vista Garden Center — site premium

Site institucional/conversão para a **Boa Vista Garden Center** (Porto Alegre,
RS), construído com Next.js 16 (App Router), TypeScript, Tailwind CSS v4 e
Framer Motion. Objetivo: transmitir sofisticação e confiança, e converter
visitantes em pedidos pelo WhatsApp.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # build de produção
npm run start   # roda o build de produção
npm run lint    # eslint
```

## O que ajustar antes de publicar

Tudo que é conteúdo real fica concentrado em poucos arquivos — não é
necessário mexer nos componentes visuais para atualizar textos, preços ou
contato.

| O que mudar | Onde |
| --- | --- |
| Nome, endereço, telefone/WhatsApp, horário, redes sociais, nota do Google | `src/lib/site-config.ts` |
| Categorias da loja | `src/data/categories.ts` |
| Produtos em destaque (nome, preço, descrição) | `src/data/products.ts` |
| Ocasiões (cards "Para cada momento") | `src/data/occasions.ts` |
| Perguntas frequentes | `src/data/faq.ts` |
| Itens da galeria | `src/data/gallery.ts` |

### Fotos reais da loja

Como não recebemos ainda fotos oficiais da loja, dos vasos e dos arranjos,
todas as imagens do site (`MediaFrame`, em
`src/components/ui/BotanicalArt.tsx`) são placeholders elegantes em
gradiente — não fotos de banco de imagens genéricas, para não passar uma
identidade visual que não é da loja.

Para trocar por fotos reais:

1. Adicione as fotos em `public/images/` (ex: `hero.jpg`, `produto-orquidea.jpg`).
2. No componente da seção (`Hero.tsx`, `FeaturedProducts.tsx`, `Gallery.tsx`,
   `About.tsx`, `Categories.tsx`), troque `<MediaFrame ... />` por
   `<Image src="/images/arquivo.jpg" alt="..." fill className="object-cover" />`
   (import `next/image`), mantendo a mesma `className` de proporção/raio já
   aplicada no elemento pai.
3. Descreva a imagem no `alt` (SEO e acessibilidade).

### Avaliações de clientes

A seção de depoimentos (`src/components/Testimonials.tsx`) hoje mostra
apenas a nota agregada real do Google (4.7, 98 avaliações), sem citar textos
de avaliações específicas — para não inventar depoimentos que não foram
confirmados. Se quiser citar avaliações reais, adicione um array com
`nome`/`texto`/`nota` e renderize os cards abaixo do bloco de nota.

### Horário de funcionamento

O fechamento às 18h (dias úteis) foi confirmado; os demais horários em
`site-config.ts` estão marcados como "a confirmar" — ajuste conforme o
horário oficial de cada dia.

## SEO

- Metadata completa (title, description, keywords, Open Graph, Twitter Card) em `src/app/layout.tsx`.
- Imagem Open Graph e ícone gerados dinamicamente (`src/app/opengraph-image.tsx`, `src/app/icon.tsx`) — sem depender de arquivos externos.
- Schema.org `Florist` + `GardenStore` (JSON-LD) com endereço, telefone, horários e nota agregada.
- `robots.ts` e `sitemap.ts` prontos — atualize a URL de produção (`siteUrl` em `layout.tsx`, `sitemap.ts`, `robots.ts`) quando o domínio final for definido.

## Deploy

Recomendado: [Vercel](https://vercel.com/new) — basta importar o repositório
apontando para a pasta `floricultura/` como raiz do projeto.
