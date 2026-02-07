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
  title: "Seu Nome — Desenvolvedor Fullstack | Portfolio",
  description:
    "Desenvolvedor especializado em Next.js, React e Node.js. Veja meus projetos e vamos conversar sobre sua próxima ideia.",
  openGraph: {
    title: "Seu Nome — Desenvolvedor Fullstack | Portfolio",
    description:
      "Desenvolvedor especializado em Next.js, React e Node.js. Veja meus projetos e vamos conversar sobre sua próxima ideia.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seu Nome — Desenvolvedor Fullstack | Portfolio",
    description:
      "Desenvolvedor especializado em Next.js, React e Node.js. Veja meus projetos e vamos conversar sobre sua próxima ideia.",
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
