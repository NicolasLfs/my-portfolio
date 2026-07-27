import type { ContactContent } from "@/types/portfolio";

export const contactContent: ContactContent = {
  headline: "Vamos conversar?",
  intro:
    "Aberto a oportunidades em engenharia de software, arquitetura de sistemas e infraestrutura de produção.",
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
      value: "linkedin.com/in/nicolaslopes-eng",
      href: "https://www.linkedin.com/in/nicolaslopes-eng",
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
