import Link from "next/link";
import { ChevronDown, ArrowRight, Download } from "lucide-react";
import { heroContent } from "@/lib/content/hero";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { microLabel, name, headline, subheadline, ctas } = heroContent;

  return (
    <section
      className="relative flex min-h-[calc(100vh-3.5rem)] flex-col justify-center py-24 md:py-40"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,var(--primary-glow)_0%,transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-12">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary md:text-sm">
          {microLabel}
        </p>
        <h1
          id="hero-heading"
          className="mt-4 text-5xl font-bold tracking-tight leading-none text-foreground md:text-6xl lg:text-[96px]"
        >
          {name}
        </h1>
        <p className="mt-6 max-w-2xl text-2xl text-foreground md:text-4xl lg:text-5xl">
          {headline}
        </p>
        {subheadline && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {subheadline}
          </p>
        )}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href={ctas.primary.href}
            className={cn(
              "inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground",
              "shadow-[0_0_20px_var(--primary-glow)] transition-all duration-200",
              "hover:bg-[#5a35f7] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(71,27,246,0.4)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            )}
          >
            {ctas.primary.label}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          {ctas.secondary && (
            <a
              href={ctas.secondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex h-12 items-center rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary",
                "transition-colors hover:bg-primary-subtle hover:border-[#5a35f7]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              {ctas.secondary.label}
            </a>
          )}
          {ctas.ghost && (
            <Link
              href={ctas.ghost.href}
              className={cn(
                "inline-flex h-12 items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-muted-foreground",
                "transition-colors hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              )}
            >
              <Download className="size-4" aria-hidden />
              {ctas.ghost.label}
            </Link>
          )}
        </div>
      </div>
      <a
        href="#projetos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
        aria-label="Rolar para projetos"
      >
        <ChevronDown className="size-8 animate-bounce" aria-hidden />
      </a>
    </section>
  );
}
