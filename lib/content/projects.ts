import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "1",
    label: "TEORIZE",
    title: "Plataforma de gestão de projetos",
    problem:
      "Empresas precisavam controlar operações, projetos e oportunidades em um só lugar, com eficiência e segurança.",
    solution:
      "Plataforma all-in-one para gestão de projetos e operações. Controle centralizado, fluxos claros e experiência pensada para multiplicar resultados.",
    metrics: [
      { value: "All-in-one", label: "Gestão unificada" },
      { value: "Eficiência", label: "Operações sob controle" },
      { value: "Segurança", label: "Dados e processos" },
    ],
    techStack: ["Next.js", "Node/NestJS", "PostgreSQL", "Redis", "AWS"],
    image: "/placeholder-project.jpg",
    links: { demo: "https://teorize.com.br" },
  },
  {
    id: "2",
    label: "ECOSYSTEM",
    title: "Coreli — CRM com IA",
    problem:
      "Atendimento no WhatsApp, Instagram e Messenger em escala, com qualificação de leads e agendamento sem depender 100% de humanos.",
    solution:
      "Back-end em Python com Django; agentes de IA (GPT, Claude, Gemini) para automatizar atendimento 24/7, qualificar leads e agendar reuniões. Integração Meta Chat, transcrição de áudio e automações.",
    metrics: [
      { value: "24/7", label: "Atendimento com IA" },
      { value: "Multi-canal", label: "WhatsApp, Instagram, Messenger" },
      { value: "Leads", label: "Qualificação e agendamento" },
    ],
    techStack: ["Python", "Django", "IA (GPT, Claude, Gemini)", "APIs Meta"],
    image: "/placeholder-project.jpg",
    links: { demo: "https://coreli.com.br" },
  },
  {
    id: "3",
    label: "ECOSYSTEM",
    title: "MeulinkPRO — Cartão de visita digital e links encurtados",
    problem:
      "Profissionais e negócios precisavam de uma presença digital profissional: páginas de perfil, links curtos e métricas em um só lugar.",
    solution:
      "Plataforma SaaS para criar páginas de perfil e gerenciar links curtos. Ecossistema com backend em Go e frontend em Next.js, assinaturas via Stripe, domínios customizados com SSL automático e analytics integrado (Meta, GA, GTM, TikTok). API REST em Go com sqlc e pgx, domínios customizados com sync via SSH/Traefik, i18n em 5 idiomas e builder visual de páginas.",
    metrics: [
      { value: "Go + Next.js", label: "API REST e frontend" },
      { value: "Stripe", label: "Assinaturas e webhooks" },
      { value: "5 idiomas", label: "i18n completo" },
    ],
    techStack: [
      "Go",
      "Next.js 16",
      "React 19",
      "PostgreSQL",
      "Stripe",
      "AWS S3",
      "Docker",
      "Traefik",
    ],
    image: "/mlp.png",
    links: { demo: "https://meulinkpro.com.br" },
  },
];
