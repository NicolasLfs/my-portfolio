import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(71,27,246,0.25) 0%, transparent 55%)",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#471bf6",
          }}
        >
          {siteConfig.jobTitle} • {siteConfig.organization}
        </p>
        <p
          style={{
            margin: "24px 0 0",
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#f8f8fc",
          }}
        >
          {siteConfig.fullName}
        </p>
        <p
          style={{
            margin: "32px 0 0",
            maxWidth: 900,
            fontSize: 32,
            lineHeight: 1.4,
            color: "#a0a0b0",
          }}
        >
          Arquitetura, integrações e escalabilidade
        </p>
      </div>
    ),
    { ...size }
  );
}
