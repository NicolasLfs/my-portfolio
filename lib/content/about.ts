import type { AboutContent } from "@/types/portfolio";

export const aboutContent: AboutContent = {
  image: "/nick.jpeg",
  paragraphs: [
    "Atuo como CTO e Engenheiro de Software na Teorize, onde lidero a definição de arquitetura e o desenvolvimento de soluções tecnológicas robustas. Com base em 6+ anos de experiência em desenvolvimento full-stack — incluindo passagem sólida por agências de marketing e mais de 100 lojas virtuais entregues —, hoje concentro meu trabalho em construir sistemas escaláveis, seguros e de alto desempenho.",
    "Minha atuação combina interfaces responsivas otimizadas para SEO, arquitetura de microserviços com RabbitMQ e Redis, back-end robusto com NestJS, Go e Python, ORMs modernos no ecossistema Node.js (Drizzle, Prisma, TypeORM) e Sqlc para Go, deploy em VPS com storage S3 (AWS, MinIO, Backblaze), integrações de pagamento via Stripe e outros gateways, além de práticas de CI/CD em ambientes cloud.",
    "Movido pela curiosidade e pelo aprendizado constante, sigo explorando novas tecnologias para elevar a qualidade e a performance dos projetos que lidero. Aberto a trocas e conexões com outros profissionais da área.",
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
      title: "CTO na Teorize",
      description: "Liderança técnica, arquitetura e ecossistema (Teorize, Coreli, MeulinkPRO)",
    },
  ],
  stats: [
    { value: "6+", label: "Anos de experiência" },
    { value: "CTO", label: "Na Teorize" },
  ],
};
