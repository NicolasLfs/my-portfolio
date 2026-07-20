import { contactContent } from "@/lib/content/contact";
import { heroContent } from "@/lib/content/hero";

const github = contactContent.channels.find((c) => c.id === "github");
const linkedin = contactContent.channels.find((c) => c.id === "linkedin");
const email = contactContent.channels.find((c) => c.id === "email");

export const siteConfig = {
  url: "http://ec2-18-119-99-178.us-east-2.compute.amazonaws.com:3000",
  name: heroContent.name,
  fullName: "Nicolas Lopes",
  title: "Nicolas Lopes — Engenheiro de Software | Portfolio",
  description:
    "Engenheiro de Software full-stack com 6+ anos de experiência. Arquitetura de sistemas, microserviços, PostgreSQL, infraestrutura em produção e integrações com Next.js, Go, RabbitMQ, Redis e Stripe. Disponível para oportunidades.",
  locale: "pt_BR" as const,
  language: "pt-BR",
  jobTitle: "Engenheiro de Software",
  tagline: "Disponível para oportunidades",
  keywords: [
    "Nicolas Lopes",
    "Engenheiro de Software",
    "desenvolvedor full-stack",
    "Next.js",
    "NestJS",
    "Go",
    "arquitetura de software",
    "microserviços",
    "infraestrutura",
    "full-stack",
    "portfolio",
    "disponível",
  ],
  author: {
    name: "Nicolas Lopes",
    email: email?.value,
    url: linkedin?.href,
  },
  social: {
    github: github?.href,
    linkedin: linkedin?.href,
  },
  image: "/nick.jpeg",
} as const;
