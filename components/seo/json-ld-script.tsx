import { getPortfolioJsonLd } from "@/lib/seo/json-ld";

export function JsonLdScript() {
  const jsonLd = getPortfolioJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
