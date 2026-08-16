import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/content/projects";
import type { Project } from "@/types/portfolio";
import { cn, withBasePath } from "@/lib/utils";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const isPlaceholder = src.startsWith("/placeholder");

  if (isPlaceholder) {
    return (
      <div
        className="aspect-video w-full rounded-lg bg-muted"
        aria-hidden
      />
    );
  }

  return (
    <Image
      src={withBasePath(src)}
      alt={alt}
      width={1920}
      height={914}
      className="h-auto w-full rounded-lg transition-transform duration-300 hover:scale-[1.02]"
    />
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <article
      className={cn(
        "flex flex-col gap-8 rounded-xl border border-border bg-card p-6 transition-all duration-300",
        "md:flex-row md:gap-12 md:p-8",
        "hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_var(--primary-glow)]",
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      )}
    >
      <div className="shrink-0 md:w-1/2">
        <ProjectImage src={project.image} alt={project.title} />
        <ul className="mt-6 flex flex-col gap-5">
          {project.metrics.map((m) => (
            <li
              key={m.label}
              className="border-l-2 border-primary/30 pl-4"
            >
              <p className="text-lg font-bold leading-snug text-primary md:text-xl">
                {m.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 flex-col md:w-1/2">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
          {project.label}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 text-muted-foreground">{project.problem}</p>
        <p className="mt-2 text-sm text-muted-foreground">{project.solution}</p>
        
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-muted px-3 py-1 font-mono text-xs transition-colors hover:border-primary/30"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          {project.links?.production && (
            <a
              href={project.links.production}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Ver em produção
              <ExternalLink className="size-4" aria-hidden />
            </a>
          )}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Código no GitHub
              <Github className="size-4" aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      className="border-t border-border/40 py-24 md:py-40"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
          TRABALHOS SELECIONADOS
        </p>
        <h2
          id="projects-heading"
          className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
        >
          O que eu construí
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Aplicações em produção que refletem minha expertise em
          desenvolvimento fullstack e arquitetura de software.
        </p>
        <div className="mt-24 flex flex-col gap-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
