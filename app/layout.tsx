import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nicolas Lopes — CTO & Engenheiro de Software | Portfolio",
  description:
    "CTO na Teorize. Arquitetura, integrações e escalabilidade — sistemas robustos com Next.js, NestJS, Go, RabbitMQ, Redis e Stripe.",
  openGraph: {
    title: "Nicolas Lopes — CTO & Engenheiro de Software | Portfolio",
    description:
      "CTO na Teorize. Arquitetura, integrações e escalabilidade — sistemas robustos com Next.js, NestJS, Go, RabbitMQ, Redis e Stripe.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicolas Lopes — CTO & Engenheiro de Software | Portfolio",
    description:
      "CTO na Teorize. Arquitetura, integrações e escalabilidade — sistemas robustos com Next.js, NestJS, Go, RabbitMQ, Redis e Stripe.",
  },
  metadataBase: new URL("https://seusite.com"),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
