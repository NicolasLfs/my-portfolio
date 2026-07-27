import { contactContent } from "@/lib/content/contact";
import { heroContent } from "@/lib/content/hero";

const github = contactContent.channels.find((c) => c.id === "github");
const linkedin = contactContent.channels.find((c) => c.id === "linkedin");
const email = contactContent.channels.find((c) => c.id === "email");

export const siteConfig = {
  url: "http://ec2-18-119-99-178.us-east-2.compute.amazonaws.com:3000",
  name: heroContent.name,
  fullName: "Nicolas Lopes",
  title: "Nicolas Lopes — Engenheiro de Software | Go • Next.js • PostgreSQL • Microserviços",
  description:
    "Engenheiro de Software com 6+ anos de experiência construindo aplicações full-stack e ecossistemas SaaS escaláveis em produção. Microserviços com Go e Next.js, PostgreSQL, infraestrutura em VPS, observabilidade e integrações Stripe. Aberto a oportunidades.",
  locale: "pt_BR" as const,
  language: "pt-BR",
  jobTitle: "Engenheiro de Software",
  tagline: "Disponível para oportunidades",
  keywords: [
    "Nicolas Lopes",
    "Engenheiro de Software",
    "desenvolvedor full-stack",
    "Go",
    "Golang",
    "Next.js",
    "PostgreSQL",
    "microserviços",
    "SaaS",
    "arquitetura de software",
    "infraestrutura",
    "DevSecOps",
    "Terraform",
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
  image: "/perfil.jpeg",
} as const;
