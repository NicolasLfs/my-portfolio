import type { ContactContent } from "@/types/portfolio";

export const contactContent: ContactContent = {
  headline: "Vamos conversar?",
  intro:
    "Aberto a novas oportunidades, contatos e conexões com profissionais da área.",
  channels: [
    {
      id: "email",
      label: "Email",
      value: "nicolaslopes03@hotmail.com",
      href: "mailto:nicolaslopes03@hotmail.com",
      icon: "mail",
      highlight: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/nicolas-lopes-4906b1108/",
      href: "https://www.linkedin.com/in/nicolas-lopes-4906b1108/",
      icon: "linkedin",
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/NicolasLfs",
      href: "https://github.com/NicolasLfs",
      icon: "github",
    },
  ],
  footerText:
    "Respondo em até 24 horas",
};
