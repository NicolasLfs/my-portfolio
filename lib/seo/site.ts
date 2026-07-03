import { contactContent } from "@/lib/content/contact";
import { heroContent } from "@/lib/content/hero";

const github = contactContent.channels.find((c) => c.id === "github");
const linkedin = contactContent.channels.find((c) => c.id === "linkedin");
const email = contactContent.channels.find((c) => c.id === "email");

export const siteConfig = {
  url: "http://ec2-18-119-99-178.us-east-2.compute.amazonaws.com:3000",
  name: heroContent.name,
  fullName: "Nicolas Lopes",
  title: "Nicolas Lopes — CTO & Engenheiro de Software | Portfolio",
  description:
    "CTO na Teorize. Arquitetura, integrações e escalabilidade — sistemas robustos com Next.js, NestJS, Go, RabbitMQ, Redis e Stripe.",
  locale: "pt_BR" as const,
  language: "pt-BR",
  jobTitle: "CTO & Engenheiro de Software",
  organization: "Teorize",
  keywords: [
    "Nicolas Lopes",
    "CTO",
    "Engenheiro de Software",
    "Teorize",
    "Next.js",
    "NestJS",
    "Go",
    "arquitetura de software",
    "microserviços",
    "full-stack",
    "portfolio",
    "desenvolvedor",
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
