import type { StackContent } from "@/types/portfolio";

export const stackContent: StackContent = {
  categories: [
    {
      name: "Frontend & UI",
      items: [
        { name: "Next.js / React", years: 3 },
        { name: "TypeScript", years: 2 },
        { name: "Tailwind CSS", years: 2 },
        { name: "shadcn/ui", years: 1 },
      ],
    },
    {
      name: "Backend & API",
      items: [
        { name: "Node.js / Express", years: 2 },
        { name: "PostgreSQL", years: 2 },
        { name: "Redis", years: 1 },
        { name: "tRPC / GraphQL", years: 1 },
      ],
    },
    {
      name: "DevOps & Cloud",
      items: [
        { name: "Docker", years: 1 },
        { name: "AWS / Oracle Cloud", years: 1 },
        { name: "CI/CD (GitHub Actions)", years: 1 },
        { name: "Linux", years: 3 },
      ],
    },
  ],
  pillars: [
    {
      title: "Código limpo e testado",
      description:
        "Escrevo código modular, bem documentado e com cobertura de testes para garantir manutenibilidade.",
      icon: "code",
    },
    {
      title: "Performance first",
      description:
        "Otimizo desde o primeiro dia, medindo Core Web Vitals e buscando a melhor experiência do usuário.",
      icon: "zap",
    },
    {
      title: "Arquitetura escalável",
      description:
        "Desenho sistemas pensando no crescimento, com patterns que permitem evolução sem retrabalho.",
      icon: "layers",
    },
    {
      title: "Colaboração efetiva",
      description:
        "Trabalho bem em equipe, com code reviews construtivos e comunicação clara de decisões técnicas.",
      icon: "users",
    },
  ],
};
