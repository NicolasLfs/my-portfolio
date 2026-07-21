import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "1",
    label: "TEORIZE",
    title:
      "Dashboard profissional para análise de dados e crescimento corporativo no digital",
    problem:
      "Agências, gestores de tráfego e empresas com operação via WhatsApp trabalham com ferramentas fragmentadas — métricas de Meta e Google em painéis separados, leads em planilhas ou CRMs desconectados, projetos em outra ferramenta e relatórios remontados manualmente toda semana, gerando números diferentes entre time e cliente.",
    solution:
      "Plataforma SaaS brasileira que centraliza campanhas pagas, leads, vendas, projetos e equipes em um único hub — conectando Meta Ads, Google Ads/Analytics, Tintim (WhatsApp), Coreli CRM e MeulinkPRO. Hub operacional multi-organizacional com estrutura hierárquica (Organizações → Times → Workspaces → Projetos), painéis configuráveis cruzando investimento, leads e vendas, monetização freemium via Stripe e notificações em tempo real via WebSocket. Monorepo no GitHub com `/backend` (Go) e `/frontend` (Next.js). Infraestrutura em VPS (Hostinger + EasyPanel) com PostgreSQL com réplicas de leitura/escrita, connection pooling via PgBouncer, tuning de índices SQL, CDN e proxy Cloudflare, observabilidade com OpenTelemetry e Grafana, e storage de objetos via Backblaze B2.",
    metrics: [
      { value: "Hub unificado", label: "Ads, leads e vendas" },
      { value: "PgBouncer + réplicas", label: "PostgreSQL otimizado" },
      { value: "Freemium SaaS", label: "Monetização via Stripe" },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Go 1.24",
      "PostgreSQL",
      "PgBouncer",
      "sqlc",
      "Stripe",
      "WebSocket",
      "Cloudflare",
      "OpenTelemetry",
      "Grafana",
      "Backblaze B2",
      "Docker",
      "EasyPanel",
      "Monorepo",
    ],
    image: "/TZ.png",
    links: { production: "https://teorize.com.br" },
  },
  {
    id: "2",
    label: "ECOSYSTEM",
    title:
      "Coreli — CRM omnichannel com IA para WhatsApp, Instagram, Messenger e outros canais",
    problem:
      "Empresas que vendem e atendem por mensageria operam em silos — conversas espalhadas no WhatsApp, Instagram, Messenger, e-mail e no site, sem visão única do cliente. Isso gera respostas lentas, leads perdidos, pouca rastreabilidade de campanhas e dependência de processos manuais que não escalam.",
    solution:
      "CRM que centraliza o atendimento em um único dashboard: inbox unificada, pipeline de vendas (Kanban), workflows, calendário, catálogo, analytics e agentes de IA configuráveis (OpenAI, Claude, Gemini) para qualificar leads, responder e agendar 24/7. Integra WhatsApp Cloud API, Instagram, Messenger, UAZAPI, e-mail (IMAP), widget de chat e atualizações em tempo real via WebSocket, com rastreamento de conversões, assinaturas via Stripe, programa de afiliados (Stripe Connect) e API pública REST. Monorepo no GitHub com `/backend`, `/frontend`, extensão de browser e workflows de CI/CD. Infraestrutura em VPS (Hostinger + EasyPanel) com PostgreSQL com réplicas de leitura/escrita e PgBouncer, cache com Redis, filas de processamento com RabbitMQ, tuning de índices SQL, CDN e proxy Cloudflare, observabilidade com OpenTelemetry e Grafana, e storage de objetos via Backblaze B2.",
    metrics: [
      { value: "Omnichannel", label: "WhatsApp, Instagram, Messenger" },
      { value: "Redis + RabbitMQ", label: "Cache e filas assíncronas" },
      { value: "PgBouncer + réplicas", label: "PostgreSQL otimizado" },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Go 1.25",
      "PostgreSQL",
      "PgBouncer",
      "Redis",
      "RabbitMQ",
      "sqlc",
      "Stripe",
      "WebSocket",
      "Cloudflare",
      "OpenTelemetry",
      "Grafana",
      "Backblaze B2",
      "Docker",
      "EasyPanel",
      "Monorepo",
    ],
    image: "/CL.png",
    links: { production: "https://coreli.com.br" },
  },
  {
    id: "3",
    label: "ECOSYSTEM",
    title:
      "MeuLinkPro — Link-in-bio, encurtador de URLs e landing pages com analytics",
    problem:
      "Influenciadores, empresas e profissionais precisam centralizar links em um único lugar com aparência profissional e métricas de desempenho. Ferramentas genéricas oferecem URLs impessoais, funcionalidades limitadas e pouca integração com marketing digital — quem quer domínio próprio, captura de leads ou pixels de conversão acaba dependendo de várias ferramentas separadas.",
    solution:
      "Plataforma SaaS brasileira que reúne link-in-bio com editor visual, encurtador com redirect inteligente, dashboard de analytics em tempo real, domínios customizados, captura de leads e integrações de marketing (Meta Pixel, GTM, GA, TikTok, Google Ads). Organização em pastas com drag-and-drop e modelo freemium com plano Pro via Stripe (checkout, assinaturas, webhooks e trial de 3 dias). Monorepo no GitHub com `/backend` (Go) e `/frontend` (Next.js). Infraestrutura em VPS (Hostinger + EasyPanel) com PostgreSQL em réplicas de leitura/escrita, PgBouncer, cache com Redis, filas de processamento com RabbitMQ, tuning de índices SQL, CDN e proxy Cloudflare, observabilidade com OpenTelemetry e Grafana, e storage de objetos via Backblaze B2.",
    metrics: [
      { value: "Link-in-bio", label: "Editor visual e encurtador" },
      { value: "Redis + RabbitMQ", label: "Cache e filas assíncronas" },
      { value: "PgBouncer + réplicas", label: "PostgreSQL otimizado" },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Go 1.26",
      "PostgreSQL",
      "PgBouncer",
      "Redis",
      "RabbitMQ",
      "sqlc",
      "Stripe",
      "Cloudflare",
      "OpenTelemetry",
      "Grafana",
      "Backblaze B2",
      "Docker",
      "EasyPanel",
      "Monorepo",
    ],
    image: "/MLP.png",
    links: { production: "https://meulinkpro.com.br" },
  },
];
