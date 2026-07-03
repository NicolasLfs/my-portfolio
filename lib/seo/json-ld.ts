import { siteConfig } from "@/lib/seo/site";

export function getPortfolioJsonLd() {
  const sameAs = [siteConfig.social.github, siteConfig.social.linkedin].filter(
    (url): url is string => Boolean(url)
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${siteConfig.url}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.fullName,
        jobTitle: siteConfig.jobTitle,
        url: siteConfig.url,
        image: `${siteConfig.url}${siteConfig.image}`,
        email: siteConfig.author.email,
        worksFor: {
          "@type": "Organization",
          name: siteConfig.organization,
        },
        sameAs,
        knowsAbout: [
          "Next.js",
          "NestJS",
          "Go",
          "RabbitMQ",
          "Redis",
          "Stripe",
          "Arquitetura de Software",
        ],
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteConfig.url}/#profilepage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#person` },
        mainEntity: { "@id": `${siteConfig.url}/#person` },
      },
    ],
  };
}
