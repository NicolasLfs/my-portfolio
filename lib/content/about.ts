import type { AboutContent } from "@/types/portfolio";

export const aboutContent: AboutContent = {
  image: "/perfil.jpeg",
  paragraphs: [
    "Engenheiro de Software com 6+ anos de experiência construindo aplicações full-stack e ecossistemas SaaS escaláveis em produção. Especializado em arquitetura de microserviços com Go no back-end e Next.js no front-end, com PostgreSQL em produção — réplicas de leitura/escrita, tuning de índices SQL e connection pooling com PgBouncer.",
    "Infraestrutura completa em VPS com Docker, EasyPanel, CDN e proxy via Cloudflare. Storage híbrido S3-compatible (AWS, Backblaze B2, MinIO). Observabilidade com OpenTelemetry e Grafana. Integrações de pagamento via Stripe e APIs REST. Na Teorize, arquitetura e desenvolvimento do ecossistema SaaS — migrando de WordPress para microserviços em produção, incluindo Teorize, Coreli CRM e MeulinkPRO.",
    "Aprimorando conhecimentos em Terraform (Infrastructure as Code) e segurança de aplicações SaaS com Aikido Security. Aberto a oportunidades em engenharia de software, arquitetura de sistemas e infraestrutura de produção.",
  ],
  timeline: [
    {
      year: "Abr 2024 – Jul 2026",
      title: "Teorize — Engenheiro de Software",
      description:
        "Arquitetura e desenvolvimento do ecossistema SaaS, migrando de WordPress para microserviços em produção. Full-stack com Go, Next.js, PostgreSQL, Redis, RabbitMQ e infraestrutura em VPS.",
    },
    {
      year: "Nov 2022 – Mar 2024",
      title: "Fuilt — Desenvolvedor Web",
      description:
        "Desenvolvimento front-end para e-commerce e landing pages. WordPress, Elementor Pro, Tray Commerce, WooCommerce e otimização para conversão em campanhas de tráfego pago.",
    },
    {
      year: "Fev 2019 – Out 2022",
      title: "Globe Commerce — Desenvolvedor Web Front-End",
      description:
        "Temas e interfaces customizadas para Loja Integrada, Tray Commerce e NuvemShop. HTML, CSS, JavaScript, jQuery e otimização de performance em lojas virtuais.",
    },
    {
      year: "Out 2015 – Jul 2018",
      title: "OSM Group — Analista de Desenvolvimento de Sistemas",
      description:
        "Primeira experiência em TI. Administração de servidores Windows, firewall SonicWall, VPN, backups, virtualização e suporte a sistemas corporativos.",
    },
  ],
  stats: [
    { value: "6+", label: "Anos de experiência" },
    { value: "Aberto", label: "A oportunidades" },
  ],
};
