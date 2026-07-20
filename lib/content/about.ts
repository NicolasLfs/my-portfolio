import type { AboutContent } from "@/types/portfolio";

export const aboutContent: AboutContent = {
  image: "/nick.jpeg",
  paragraphs: [
    "Engenheiro de Software com 6+ anos de experiência em desenvolvimento full-stack, incluindo passagem por agências de marketing e liderança técnica em startup. Hoje busco aprofundar meu conhecimento em arquitetura de sistemas e infraestrutura de produção, colaborando em projetos desafiadores com profissionais experientes.",
    "Minha experiência inclui arquitetura e operação de microserviços em produção (Go, React/Next.js, RabbitMQ, Redis), otimização de PostgreSQL com réplicas de leitura/escrita e PgBouncer, infraestrutura completa em VPS com Docker, CDN via Cloudflare, storages S3 híbridos (AWS, Backblaze, MinIO), observabilidade com OpenTelemetry e Grafana, e integrações de pagamento via Stripe e outros gateways.",
    "Movido pela curiosidade e pelo aprendizado constante, sigo explorando novas tecnologias para elevar a qualidade dos projetos em que colaboro. Aberto a novas oportunidades e conexões com outros profissionais da área.",
  ],
  timeline: [
    {
      year: "2019",
      title: "Início em agências de marketing",
      description: "Desenvolvimento e otimização de e-commerce — 100+ lojas virtuais entregues",
    },
    {
      year: "2022",
      title: "Stack moderna",
      description: "Next.js, NestJS, PostgreSQL e ferramentas cloud",
    },
    {
      year: "2024",
      title: "Arquitetura e integrações",
      description: "Microserviços com RabbitMQ, Redis, Go, Stripe e APIs",
    },
    {
      year: "2025",
      title: "Liderança técnica em startup",
      description: "Arquitetura de microserviços, ecossistema SaaS e infraestrutura em produção",
    },
  ],
  stats: [
    { value: "6+", label: "Anos de experiência" },
    { value: "Aberto", label: "A oportunidades" },
  ],
};
