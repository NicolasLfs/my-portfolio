import type { StackContent } from "@/types/portfolio";

export const stackContent: StackContent = {
  categories: [
    {
      name: "Front-End",
      items: [
        { name: "JavaScript", years: 6 },
        { name: "React.js / Next.js", years: 2 },
        { name: "Tailwind CSS", years: 2 },
        { name: "Shadcn/ui", years: 2 },
        { name: "jQuery", years: 3 },
      ],
    },
    {
      name: "Back-End & Dados",
      items: [
        { name: "Node.js", years: 6 },
        { name: "NestJS", years: 2 },
        { name: "Python / Django", years: 1 },
        { name: "PostgreSQL", years: 6 },
        { name: "TypeORM / Drizzle / Prisma", years: 3 },
        { name: "Redis", years: 2 },
      ],
    },
    {
      name: "Integração & Cloud",
      items: [
        { name: "RabbitMQ", years: 2 },
        { name: "Git", years: 6 },
        { name: "Docker", years: 2 },
        { name: "Kong", years: 2 },
        { name: "Amazon AWS", years: 2 },
        { name: "Google Cloud / Workspace", years: 2 },
      ],
    },
  ],
  pillars: [
    {
      title: "Interfaces responsivas e SEO",
      description:
        "Desenvolvimento de interfaces otimizadas para desempenho e busca, com foco em Core Web Vitals.",
      icon: "zap",
    },
    {
      title: "APIs e microserviços",
      description:
        "Integração de sistemas com RabbitMQ para comunicação assíncrona e Redis para cache e sessões.",
      icon: "layers",
    },
    {
      title: "Back-end robusto com NestJS",
      description:
        "Construção de aplicações escaláveis e bem estruturadas com NestJS.",
      icon: "code",
    },
    {
      title: "CI/CD e deploy em cloud",
      description:
        "Práticas de pipeline e deploy em AWS e ambientes cloud.",
      icon: "users",
    },
  ],
};
