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
    title: "MeulinkPRO — Cartão de visita digital",
    problem:
      "Profissionais e negócios precisavam de uma presença digital simples: uma página e links curtos em um só lugar.",
    solution:
      "Plataforma para criar páginas e gerenciar links curtos de forma simples e eficiente. Cartão de visita digital, dashboard e documentação para o usuário.",
    metrics: [
      { value: "1 lugar", label: "Página + links" },
      { value: "Simples", label: "Criação e gestão" },
      { value: "Pro", label: "Recursos avançados" },
    ],
    techStack: ["Next.js", "React", "Tailwind", "APIs"],
    image: "/placeholder-project.jpg",
    links: { demo: "https://meulinkpro.com.br" },
  },
];
