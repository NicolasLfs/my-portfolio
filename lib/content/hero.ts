import type { HeroContent } from "@/types/portfolio";

export const heroContent: HeroContent = {
  microLabel: "DESENVOLVEDOR FULLSTACK • 2026",
  name: "Seu Nome",
  headline:
    "Construo sistemas que escalam e interfaces que respiram",
  subheadline:
    "3 anos criando soluções para startups e empresas de tecnologia. Especialista em Next.js, Node.js e arquitetura cloud.",
  ctas: {
    primary: { label: "Ver projetos", href: "#projetos" },
    secondary: { label: "GitHub →", href: "https://github.com" },
    ghost: { label: "Baixar CV", href: "/cv.pdf" },
  },
};
