# Landing Page — Mastopexia · Dra. Michelle Brys

## O que é esse projeto

Landing page de conversão para Google Ads focada em **mastopexia com e sem prótese**, da cirurgiã plástica **Dra. Michelle Brys**, com sede em Porto Alegre. O objetivo é gerar consultas via WhatsApp.

O arquivo principal é `index.html` — tudo (HTML, CSS e JS) está nele, sem frameworks nem build tools.

---

## Informações da clínica

- **Médica:** Dra. Michelle Brys — Cirurgiã Plástica, Membro Titular da SBCP
- **Endereço:** Av. Dr. Nilo Peçanha, 3245 — Sala 902, Bairro Boa Vista, Porto Alegre — RS, CEP 90470-000
- **WhatsApp:** +55 51 99928-3800 → link: `https://wa.me/5551999283800`
- **Site principal:** https://www.michellebrys.com.br/

---

## Estrutura da página (6 seções)

| # | ID | Conteúdo |
|---|-----|----------|
| 1 | `#hero` | Hero com foto da Dra., headline mastopexia, chips de credenciais, CTA |
| 2 | `#proc` | Pain points (4 cards) + cards comparativos Sem Prótese / Com Prótese + banner CTA |
| 3 | `#results` | Galeria antes & depois (6 fotos) + CTA |
| 4 | `#depoimento` | Vídeo depoimento (`Conteudo/Publi12.mov`) + frase + CTA |
| 5 | `#dra` | Split layout foto/bio da Dra. + stats + credenciais + CTA |
| 6 | `#faq-sec` | FAQ accordion (6 perguntas) + bloco final dourado com endereço + Google Maps + CTA |

Há também: **header fixo** com logo + CTA, **botão WhatsApp flutuante**, e **footer**.

---

## Assets disponíveis

```
Lp_masto/
├── index.html                          ← arquivo único da LP
├── CLAUDE.md                           ← este arquivo
├── Conteudo/
│   ├── Publi12.mov                     ← vídeo depoimento (usado no #depoimento)
│   ├── 5AA3384B-...JPG                 ← antes/depois mastopexia sem prótese (4 painéis, sticker MB)
│   ├── cd2ee851-...jpg                 ← antes/depois mastopexia sem prótese (4 painéis, sticker MB)
│   ├── e166b8c4-...jpg                 ← antes/depois mastopexia com prótese (2 painéis)
│   ├── 7fa94460-...jpg                 ← antes/depois mastopexia com prótese (2 painéis, ptose severa)
│   ├── dc87242f-...jpg                 ← antes/depois mastopexia sem prótese (4 painéis, biquíni preto)
│   └── 6cedd9a5-...jpg                 ← antes/depois mastopexia com prótese (4 painéis, biquíni preto)
└── Imagens Diversas/
    ├── WhatsApp Image 2026-04-07 at 21.15.34.jpeg  ← logo vertical (fundo preto, 3D dourado)
    ├── WhatsApp Image 2026-04-07 at 21.15.35.jpeg  ← logo horizontal (usado no header e footer)
    ├── WhatsApp Image 2026-04-07 at 21.27.00.jpeg  ← foto Dra. Michelle (perfil, vestido preto) — usada no hero
    └── logo-1776989941699.jpeg                      ← mesma foto Dra. Michelle — usada na seção #dra
```

---

## Brand Identity (Manual Michelle Brys Signature)

### Paleta de cores
| Nome | HEX | Uso |
|------|-----|-----|
| Noir | `#0A0A0A` | Fundo principal, texto escuro |
| Charcoal | `#1A1715` | Fundo seções alternadas |
| Signature Gold | `#C4963C` | Cor de destaque principal, CTAs, acentos |
| Gold Light | `#D4AA52` | Hover, gradientes |
| Ivory | `#EDE8E0` | Texto claro, fundos alternativos |
| White Sand | `#F7F4F0` | Pain cards, fundos claros |

### Tipografia
| Variável | Fonte | Uso |
|----------|-------|-----|
| `--font-id` | Tenor Sans | Identidade: labels, CTAs, overlines |
| `--font-disp` | Cormorant Garamond | Títulos, manifesto, citações |
| `--font-body` | Didact Gothic | Corpo de texto, informações |

### Posicionamento
- A marca se posiciona como **grife**, não como clínica médica
- Referências visuais: Chanel, La Mer, Cartier
- Tagline: *"Não é padrão. É assinatura."*
- Tom: sofisticado, preciso, feminino, atemporal

---

## CSS — convenções usadas no index.html

- **Classes utilitárias:** `.wrap` (container max 1200px), `.overline`, `.sec-title`, `.sec-intro`
- **Botões:** `.btn-gold`, `.btn-outline-ivory`, `.btn-outline-gold`, `.btn-noir`
- **Animação de scroll:** classe `.rev` + `.vis` (adicionada via IntersectionObserver no JS)
- **Delays:** `.d1`, `.d2`, `.d3`, `.d4` (transition-delay em cascade)
- **Responsivo:** breakpoints em 1024px, 900px, 700px, 600px, 560px

---

## WhatsApp — padrão de link

Sempre usar mensagem pré-preenchida contextual:
```
https://wa.me/5551999283800?text=Olá!%20[contexto%20da%20seção]
```

Exemplos já usados:
- Hero: `...Vi%20a%20página%20de%20mastopexia%20e%20gostaria%20de%20agendar%20uma%20consulta.`
- Sem Prótese: `...Tenho%20interesse%20na%20mastopexia%20sem%20prótese...`
- Com Prótese: `...Tenho%20interesse%20na%20mastopexia%20com%20prótese...`
- Depoimento: `...Vi%20o%20depoimento%20sobre%20a%20mastopexia...`

---

## Google Maps embed

Endereço embutido no `#faq-sec` via iframe:
```
https://maps.google.com/maps?q=Av.+Dr.+Nilo+Pe%C3%A7anha%2C+3245%2C+Boa+Vista%2C+Porto+Alegre%2C+RS%2C+90470-000&output=embed&z=16
```

---

## Observações técnicas

- O vídeo `Publi12.mov` funciona no Safari nativamente. Para melhor compatibilidade cross-browser, converter para `.mp4` com `ffmpeg -i Publi12.mov -c:v libx264 -c:a aac Publi12.mp4` e adicionar um segundo `<source>` apontando para o `.mp4`
- Não há dependências externas além do Google Fonts — a página funciona abrindo `index.html` diretamente no browser
- JS inline no final do `index.html`: scroll do header, accordion FAQ, IntersectionObserver para reveal
