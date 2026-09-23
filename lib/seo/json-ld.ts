import { siteConfig } from "@/lib/seo/site";
import { projects } from "@/lib/content/projects";

const siteUrl = siteConfig.url;
const absoluteUrl = (path: string) =>
  new URL(path.replace(/^\/+/, ""), `${siteUrl}/`).toString();

const profileImageUrl = absoluteUrl(siteConfig.image);

export function getPortfolioJsonLd() {
  const sameAs = [siteConfig.social.github, siteConfig.social.linkedin].filter(
    (url): url is string => Boolean(url)
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: siteConfig.fullName,
        jobTitle: siteConfig.jobTitle,
        description: siteConfig.description,
        url: siteUrl,
        image: profileImageUrl,
        email: siteConfig.author.email,
        sameAs,
        knowsAbout: [
          "Go",
          "Next.js",
          "PostgreSQL",
          "Microserviços",
          "SaaS",
          "RabbitMQ",
          "Redis",
          "Stripe",
          "Terraform",
          "Arquitetura de Software",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: siteConfig.jobTitle,
          description: siteConfig.description,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,
        url: siteUrl,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: siteConfig.language,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#person` },
        mainEntity: { "@id": `${siteUrl}/#person` },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/#projects`,
        name: "Projetos de Nicolas Lopes",
        description:
          "Projetos SaaS e ecossistemas de software desenvolvidos por Nicolas Lopes.",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CreativeWork",
            "@id": `${siteUrl}/#project-${project.id}`,
            name: project.title,
            description: `${project.problem} ${project.solution}`,
            url:
              project.links?.production ??
              project.links?.github ??
              `${siteUrl}/#projetos`,
            image: absoluteUrl(project.image),
            keywords: project.techStack,
            creator: { "@id": `${siteUrl}/#person` },
          },
        })),
      },
    ],
  };
}
