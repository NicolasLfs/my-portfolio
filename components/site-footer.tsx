import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { contactContent } from "@/lib/content/contact";
import { heroContent } from "@/lib/content/hero";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const github = contactContent.channels.find((c) => c.id === "github");
  const linkedin = contactContent.channels.find((c) => c.id === "linkedin");
  const siteName = heroContent.name;

  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <nav aria-label="Links rápidos">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  href="#projetos"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Projetos
                </Link>
              </li>
              <li aria-hidden>•</li>
              <li>
                <Link
                  href="#sobre"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Sobre
                </Link>
              </li>
              <li aria-hidden>•</li>
              <li>
                <Link
                  href="#contato"
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Contato
                </Link>
              </li>
              {github && (
                <>
                  <li aria-hidden>•</li>
                  <li>
                    <a
                      href={github.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      GitHub
                    </a>
                  </li>
                </>
              )}
              {linkedin && (
                <>
                  <li aria-hidden>•</li>
                  <li>
                    <a
                      href={linkedin.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      LinkedIn
                    </a>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <p className="text-sm italic text-muted-foreground">
            Construindo o futuro, um commit de cada vez.
          </p>
          <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © {year} {siteName}. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              Feito com Next.js, shadcn/ui e ☕
            </p>
          </div>
          <a
            href="#top"
            className={cn(
              "inline-flex items-center gap-2 text-sm text-muted-foreground",
              "transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="size-4" aria-hidden />
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
