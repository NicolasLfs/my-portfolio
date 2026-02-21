import type { AboutContent } from "@/types/portfolio";

export const aboutContent: AboutContent = {
  image: "/placeholder-about.jpg",
  paragraphs: [
    "Sou apaixonado por criar interfaces web elegantes, interativas e de alto desempenho. Com 5 anos de experiência em agências de marketing, desenvolvi e otimizei lojas virtuais para mais de 100 clientes, usando Loja Integrada, Tray Commerce e NuvemShop.",
    "Profissional pleno, movido pela curiosidade e pelo desejo constante de aprender. Sempre explorando novas tecnologias para elevar a qualidade dos projetos: interfaces responsivas e SEO, integração de APIs e microserviços com RabbitMQ e Redis, back-end robusto com NestJS e práticas de CI/CD em AWS.",
    "Atualmente sou CTO na Teorize, onde lidero a construção da plataforma de gestão de projetos e dos produtos do ecossistema: Coreli (CRM com IA para WhatsApp e redes sociais) e MeulinkPRO (cartão de visita digital e links).",
  ],
  timeline: [
    { year: "~2020", title: "Início em agências de marketing", description: "Desenvolvimento e otimização de e-commerce" },
    { year: "2022", title: "Stack moderna", description: "Next.js, NestJS e ferramentas cloud" },
    { year: "2024", title: "Escala e integrações", description: "RabbitMQ, Redis, APIs e microserviços" },
    { year: "2024", title: "CTO na Teorize", description: "Liderança técnica, Teorize, Coreli e MeulinkPRO" },
  ],
  stats: [
    { value: "5+", label: "Anos de experiência" },
    { value: "100+", label: "Lojas/clientes" },
    { value: "—", label: "Foco em performance" },
  ],
};
