import {
  Code2,
  Zap,
  Layers,
  Users,
  type LucideIcon,
} from "lucide-react";
import { stackContent } from "@/lib/content/stack";
import type { Pillar } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const pillarIcons: Record<string, LucideIcon> = {
  code: Code2,
  zap: Zap,
  layers: Layers,
  users: Users,
};

function PillarCard({ pillar }: { pillar: Pillar }) {
  const Icon = pillarIcons[pillar.icon] ?? Code2;

  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-card p-6 transition-all duration-300",
        "hover:border-primary/30 hover:shadow-[0_0_30px_var(--primary-glow)]"
      )}
    >
      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </div>
      <h4 className="mt-4 text-lg font-semibold text-foreground">
        {pillar.title}
      </h4>
      <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
    </div>
  );
}

export function StackSection() {
  const { categories, pillars } = stackContent;

  return (
    <section
      id="stack"
      className="border-t border-border/40 py-24 md:py-40"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
          TECH STACK
        </p>
        <h2
          id="stack-heading"
          className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          Com o que eu trabalho
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Tecnologias que domino e utilizo para construir soluções robustas e
          escaláveis.
        </p>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {categories.map((cat) => (
            <div key={cat.name} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">
                {cat.name}
              </h3>
              <ul className="mt-4 space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center justify-between text-sm text-muted-foreground"
                  >
                    <span>{item.name}</span>
                    {item.years != null && (
                      <span className="font-mono text-primary">
                        {item.years} {item.years === 1 ? "ano" : "anos"}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-foreground">
            Como eu trabalho
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
