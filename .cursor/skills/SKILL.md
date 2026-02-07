---
name: portfolio-standards
description: Define boas práticas e padrões de qualidade para o projeto de portfolio pessoal em Next.js 16 e shadcn. Use ao desenvolver features, revisar código ou quando o usuário pedir para seguir as regras do projeto.
---

# Padrões do Portfolio

## Stack e versões

- **Next.js**: 16.1.6 (App Router)
- **shadcn**: 3.8.4 (componentização)
- **pnpm** como gerenciador de pacotes
- **TypeScript** estrito

## Estrutura do projeto

- `app/` — rotas, layouts e páginas (App Router)
- `components/` — componentes reutilizáveis e componentes do shadcn
- `lib/` — utilitários, helpers, configurações compartilhadas
- `types/` — Tipagens de interfaces ou types

## Boas práticas

### Componentes

- Preferir componentes pequenos e com responsabilidade única.
- Novos componentes de UI: usar shadcn quando existir primitivo adequado, caso o precise instalar algo, passe ao usuario para fazer manualmente.
- Componentes em `components/`; páginas e layouts em `app/`.
- Nomes em PascalCase; arquivos de componente em kebab-case ou PascalCase conforme já usado no projeto.
- Ícones: usar sempre **lucide-react**.

### Next.js (App Router)

- Usar Server Components por padrão; Client Components apenas quando precisar de `"use client"` (eventos, estado, hooks, browser APIs).
- Colocar Client Components o mais próximo das folhas da árvore que precisem de interatividade.
- Dados: fetch em Server Components; para cache/configuração usar as opções do `fetch` ou React cache quando fizer sentido.
- Rotas dinâmicas e layouts conforme documentação do App Router (pastas com `[param]`, `layout.tsx`, `page.tsx`).

### TypeScript

- Nunca tipar como `any`; usar tipos explícitos ou inferidos.
- Tipar props de componentes (interfaces ou types).
- Garantir que `pnpm run build` e o TypeScript não acusem erros antes de considerar concluído.

### Estilo e acessibilidade

- Estilização com Tailwind; classes compartilhadas ou variantes com `cn()` (lib/utils).
- Manter contraste e marcação semântica (headings, landmarks, botões/links).
- Componentes shadcn já seguem acessibilidade; ao customizar, preservar atributos ARIA e foco.

### Código e qualidade

- Funções e arquivos curtos; extrair lógica repetida para `lib/` ou hooks.
- Nomes descritivos (variáveis, funções, componentes).
- Comentários apenas onde a intenção não for óbvia.
- Manter o projeto sem erros de ESLint; corrigir avisos relevantes.

