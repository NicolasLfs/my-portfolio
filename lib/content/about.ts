import type { AboutContent } from "@/types/portfolio";

export const aboutContent: AboutContent = {
  image: "/placeholder-about.jpg",
  paragraphs: [
    "Comecei na programação aos 15 anos, criando mods de Minecraft para jogar com amigos. O que começou como curiosidade sobre 'como as coisas funcionam' se tornou obsessão por construir sistemas reais.",
    "Depois de 4 anos em vendas técnicas, decidi fazer a transição definitiva para tecnologia em 2022. Completei um bootcamp intensivo de desenvolvimento fullstack e, desde então, venho construindo aplicações que resolvem problemas reais.",
    "O que me move é a ideia de que código bom é código que outras pessoas podem entender e manter. Busco sempre o equilíbrio entre entrega rápida e arquitetura sólida. Fora do VS Code, você me encontra tocando guitarra em bandas de garagem ou explorando trilhas de mountain bike.",
  ],
  timeline: [
    { year: "2022", title: "Primeiro contato com programação", description: "Curso/bootcamp que iniciou tudo" },
    { year: "2023", title: "Primeiro projeto freelance", description: "Conquista específica, aprendizado chave" },
    { year: "2024", title: "Especialização em Next.js", description: "Projeto importante, promoção" },
    { year: "2025", title: "Atualmente", description: "Onde está agora, o que busca" },
  ],
  stats: [
    { value: "3+", label: "Anos de experiência" },
    { value: "15+", label: "Projetos entregues" },
    { value: "2", label: "Certificações" },
  ],
};
