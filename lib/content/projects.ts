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
      "Plataforma SaaS brasileira que centraliza campanhas pagas, leads, vendas, projetos e equipes em um único hub — conectando Meta Ads, Google Ads/Analytics, Tintim (WhatsApp), Coreli CRM e MeulinkPRO. Hub operacional multi-organizacional com estrutura hierárquica (Organizações → Times → Workspaces → Projetos), painéis configuráveis cruzando investimento, leads e vendas, monetização freemium via Stripe e notificações em tempo real via WebSocket.",
    metrics: [
      { value: "Hub unificado", label: "Ads, leads e vendas" },
      { value: "Go + Next.js", label: "Arquitetura desacoplada" },
      { value: "Freemium SaaS", label: "Monetização via Stripe" },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Go 1.24",
      "PostgreSQL",
      "sqlc",
      "Stripe",
      "WebSocket",
      "Docker",
    ],
    image: "/TZ.png",
    links: { demo: "https://teorize.com.br" },
  },
  {
    id: "2",
    label: "ECOSYSTEM",
    title:
      "Coreli — CRM omnichannel com IA para WhatsApp, Instagram, Messenger e outros canais",
    problem:
      "Empresas que vendem e atendem por mensageria operam em silos — conversas espalhadas no WhatsApp, Instagram, Messenger, e-mail e no site, sem visão única do cliente. Isso gera respostas lentas, leads perdidos, pouca rastreabilidade de campanhas e dependência de processos manuais que não escalam.",
    solution:
      "CRM que centraliza o atendimento em um único dashboard: inbox unificada, pipeline de vendas (Kanban), workflows, calendário, catálogo, analytics e agentes de IA configuráveis (OpenAI, Claude, Gemini) para qualificar leads, responder e agendar 24/7. Integra WhatsApp Cloud API, Instagram, Messenger, UAZAPI, e-mail (IMAP), widget de chat e webhooks em tempo real (SSE), com rastreamento de conversões, assinaturas via Stripe, programa de afiliados (Stripe Connect) e API pública REST.",
    metrics: [
      { value: "Omnichannel", label: "WhatsApp, Instagram, Messenger" },
      { value: "Go + Next.js", label: "Monorepo desacoplado" },
      { value: "Stripe Connect", label: "Assinaturas e afiliados" },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Go 1.25",
      "PostgreSQL",
      "sqlc",
      "Redis",
      "Stripe",
      "SSE",
      "Docker",
    ],
    image: "/CL.png",
    links: { demo: "https://coreli.com.br" },
  },
  {
    id: "3",
    label: "ECOSYSTEM",
    title:
      "MeuLinkPro — Link-in-bio, encurtador de URLs e landing pages com analytics",
    problem:
      "Influenciadores, empresas e profissionais precisam centralizar links em um único lugar com aparência profissional e métricas de desempenho. Ferramentas genéricas oferecem URLs impessoais, funcionalidades limitadas e pouca integração com marketing digital — quem quer domínio próprio, captura de leads ou pixels de conversão acaba dependendo de várias ferramentas separadas.",
    solution:
      "Plataforma SaaS brasileira que reúne link-in-bio com editor visual, encurtador com redirect inteligente, dashboard de analytics em tempo real, domínios customizados, captura de leads e integrações de marketing (Meta Pixel, GTM, GA, TikTok, Google Ads). Organização em pastas com drag-and-drop, modelo freemium com plano Pro via Stripe (checkout, assinaturas, webhooks e trial de 3 dias), suporte multilíngue (PT, EN, ES, FR, JA) e monorepo com frontend Next.js consumindo API Go via BFF.",
    metrics: [
      { value: "Link-in-bio", label: "Editor visual e encurtador" },
      { value: "Freemium SaaS", label: "Stripe com trial de 3 dias" },
      { value: "5 idiomas", label: "PT, EN, ES, FR, JA" },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Go 1.26",
      "PostgreSQL",
      "sqlc",
      "Stripe",
      "MinIO",
      "Docker",
    ],
    image: "/MLP.png",
    links: { demo: "https://meulinkpro.com.br" },
  },
];
