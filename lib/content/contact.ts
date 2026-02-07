import type { ContactContent } from "@/types/portfolio";

export const contactContent: ContactContent = {
  channels: [
    {
      id: "email",
      label: "Email direto",
      value: "seu@email.com",
      href: "mailto:seu@email.com",
      icon: "mail",
      highlight: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/seuperfil",
      href: "https://linkedin.com/in/seuperfil",
      icon: "linkedin",
    },
    {
      id: "github",
      label: "GitHub",
      value: "github.com/seuuser",
      href: "https://github.com/seuuser",
      icon: "github",
    },
    {
      id: "calendar",
      label: "Agendar call",
      value: "15 minutos",
      href: "https://calendly.com",
      icon: "calendar",
    },
  ],
  footerText: "Respondo em até 24 horas • Disponível para trabalho remoto",
};
