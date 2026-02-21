import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-6 md:px-12">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary-glow)_0%,transparent_50%)]"
        aria-hidden
      />
      <div className="relative flex max-w-[600px] flex-col items-center text-center">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary md:text-sm">
          Erro 404
        </p>
        <h1 className="mt-4 text-6xl font-bold tracking-tight text-foreground md:text-8xl">
          404
        </h1>
        <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
          A página que você procura não existe ou foi movida.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-[0_0_20px_var(--primary-glow)] transition-all duration-200 hover:bg-[#5a35f7] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(71,27,246,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Home className="size-4" aria-hidden />
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
