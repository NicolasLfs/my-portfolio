# Portfolio Pessoal

Portfolio em Next.js 16 com App Router, shadcn/ui e Tailwind CSS. Design system violet (#471bf6), suporte a tema claro/escuro.

## Stack

- **Next.js** 16.1.6 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** 4
- **shadcn/ui** (componentes)
- **pnpm** (gerenciador de pacotes)
- **Lucide React** (ícones)

## Estrutura

- `app/` — rotas, layout e página inicial
- `components/` — header, footer, seções (Hero, Projetos, Stack, About, Contact)
- `lib/content/` — conteúdo editável (hero, projects, stack, about, contact)
- `types/` — tipagens do portfolio

## Como rodar

```bash
pnpm install
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

```bash
pnpm run build
pnpm start
```

## Personalizar

- **Nome, headline e CTAs:** `lib/content/hero.ts`
- **Projetos:** `lib/content/projects.ts`
- **Tech stack e pilares:** `lib/content/stack.ts`
- **Sobre e timeline:** `lib/content/about.ts`
- **Contato (email, LinkedIn, GitHub, Calendly):** `lib/content/contact.ts`
- **SEO (title, description):** `app/layout.tsx` (metadata)

Coloque imagens em `public/` e atualize os paths nos arquivos de conteúdo. Placeholders usam div quando o path começa com `/placeholder`.

## Deploy

Compatível com [Vercel](https://vercel.com). Configure `metadataBase` em `app/layout.tsx` com a URL do seu domínio.
