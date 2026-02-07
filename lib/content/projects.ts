import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "1",
    label: "CASE STUDY 01",
    title: "Plataforma de E-learning",
    problem:
      "Uma edtech em crescimento precisava reduzir o tempo de carregamento de aulas que chegava a 15 segundos, impactando a retenção de alunos.",
    solution:
      "Migrei a arquitetura para Next.js com ISR, implementei cache distribuído com Redis e otimizei queries do PostgreSQL. Reduzi o bundle em 60% com code-splitting estratégico.",
    metrics: [
      { value: "95%", label: "Redução no tempo de carregamento" },
      { value: "2x", label: "Aumento na retenção de usuários" },
      { value: "40%", label: "Menos custos de infraestrutura" },
    ],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "AWS", "Tailwind"],
    image: "/placeholder-project.jpg",
    links: {
      demo: "https://example.com",
      github: "https://github.com",
    },
  },
  {
    id: "2",
    label: "PROJETO DESTACADO",
    title: "Marketplace de Serviços",
    problem:
      "Plataforma B2B precisava de dashboard admin e integração de pagamento com SLA de 99,9%.",
    solution:
      "Arquitetura serverless com Next.js API routes, Stripe Connect e Prisma. Filas com Bull para jobs assíncronos.",
    metrics: [
      { value: "99,9%", label: "Uptime mensal" },
      { value: "5k", label: "Transações/mês" },
      { value: "3s", label: "Tempo médio de checkout" },
    ],
    techStack: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Vercel"],
    image: "/placeholder-project.jpg",
    links: { github: "https://github.com" },
  },
  {
    id: "3",
    label: "E-COMMERCE",
    title: "Loja com Dashboard Analytics",
    problem:
      "E-commerce precisava de relatórios em tempo real e experiência de compra otimizada para mobile.",
    solution:
      "Next.js App Router, TanStack Query para cache no cliente, Chart.js para dashboards. PWA com service worker para offline.",
    metrics: [
      { value: "70%", label: "Tráfego mobile" },
      { value: "50%", label: "Aumento em conversão" },
      { value: "<2s", label: "LCP em 3G" },
    ],
    techStack: ["Next.js", "TanStack Query", "Chart.js", "PWA"],
    image: "/placeholder-project.jpg",
    links: { demo: "https://example.com", github: "https://github.com" },
  },
];
