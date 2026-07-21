import type { StackContent } from "@/types/portfolio";

export const stackContent: StackContent = {
  categories: [
    {
      name: "Front-End",
      items: [
        { name: "JavaScript", years: 6 },
        { name: "React.js", years: 3 },
        { name: "Next.js", years: 3 },
        { name: "Tailwind CSS", years: 3 },
        { name: "jQuery", years: 5 },
      ],
    },
    {
      name: "Back-End & Dados",
      items: [
        { name: "Node.js", years: 6 },
        { name: "NestJS", years: 2 },
        { name: "Python", years: 2 },
        { name: "Go", years: 1 },
        { name: "PostgreSQL", years: 5 },
        { name: "PgBouncer", years: 1 },
        { name: "Redis", years: 3 },
        { name: "TypeORM / Drizzle / Prisma", years: 3 },
        { name: "Sqlc", years: 1 },
      ],
    },
    {
      name: "Integração, Cloud & Pagamentos",
      items: [
        { name: "RabbitMQ", years: 2 },
        { name: "Amazon AWS / S3", years: 3 },
        { name: "Backblaze B2", years: 1 },
        { name: "MinIO", years: 1 },
        { name: "Google Cloud / VPS", years: 4 },
        { name: "EasyPanel", years: 1 },
        { name: "Cloudflare", years: 2 },
        { name: "OpenTelemetry / Grafana", years: 1 },
        { name: "Stripe / APIs de pagamento", years: 3 },
        { name: "Git", years: 6 },
        { name: "Docker", years: 3 },
        { name: "Google Workspace", years: 4 },
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
      title: "PostgreSQL em produção",
      description:
        "Réplicas de leitura/escrita, connection pooling com PgBouncer e tuning de índices SQL para alta carga.",
      icon: "server",
    },
    {
      title: "Microserviços e cache",
      description:
        "Arquitetura com comunicação assíncrona via RabbitMQ e cache/sessões com Redis.",
      icon: "layers",
    },
    {
      title: "Back-end NestJS, Go e Python",
      description:
        "Construção de aplicações robustas e escaláveis com stacks adequadas a cada contexto.",
      icon: "code",
    },
    {
      title: "Type-safety por stack",
      description:
        "ORMs modernos no Node.js (Drizzle, Prisma, TypeORM) e Sqlc para Go, priorizando SQL gerada e performance.",
      icon: "code",
    },
    {
      title: "VPS e storage S3",
      description:
        "Deploy em VPS com EasyPanel e Docker. Experiência com storages S3-compatible (AWS, Backblaze, MinIO).",
      icon: "server",
    },
    {
      title: "Observabilidade em produção",
      description:
        "Rastreamento distribuído com OpenTelemetry, dashboards em Grafana e CDN/proxy via Cloudflare.",
      icon: "workflow",
    },
    {
      title: "Integrações de pagamento",
      description:
        "Stripe e outros gateways implementados diretamente via documentação oficial e APIs.",
      icon: "layers",
    },
    {
      title: "CI/CD e deploy em cloud",
      description:
        "Práticas de pipeline e deploy em ambientes cloud e VPS.",
      icon: "workflow",
    },
  ],
};
