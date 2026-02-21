import type { ContactContent } from "@/types/portfolio";

export const contactContent: ContactContent = {
  channels: [
    {
      id: "email",
      label: "Email",
      value: "nicolas.lopes@agenciateorize.com.br",
      href: "mailto:nicolas.lopes@agenciateorize.com.br",
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
    }    
  ],
  footerText: "Respondo em até 24 horas • Disponível para trabalho remoto",
};
