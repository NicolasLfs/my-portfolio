import Image from "next/image";
import { aboutContent } from "@/lib/content/about";
import { cn } from "@/lib/utils";

function AboutImage({ src }: { src: string }) {
  const isPlaceholder = src.startsWith("/placeholder");

  if (isPlaceholder) {
    return (
      <div
        className="aspect-[3/4] w-full rounded-xl bg-muted md:aspect-square"
        aria-hidden
      />
    );
  }

  return (
    <Image
      src={src}
      alt="Foto de perfil"
      width={400}
      height={533}
      className={cn(
        "aspect-[3/4] w-full rounded-xl object-cover transition-all duration-300 md:aspect-square",
        "hover:border-primary/30 border-2 border-transparent"
      )}
    />
  );
}

export function AboutSection() {
  const { image, paragraphs, timeline, stats } = aboutContent;

  return (
    <section
      id="sobre"
      className="border-t border-border/40 py-24 md:py-40"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-[0.4fr_0.6fr] md:gap-16">
          <div className="order-2 md:order-1">
            <AboutImage src={image} />
          </div>
          <div className="order-1 md:order-2">
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
            >
              Sobre mim
            </h2>
            <div className="mt-8 space-y-6">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
            {stats && stats.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-3xl font-bold text-primary">{s.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
            {timeline && timeline.length > 0 && (
              <div className="mt-12 border-l-2 border-primary/30 pl-6">
                {timeline.map((item) => (
                  <div key={item.year} className="relative pb-8 last:pb-0">
                    <span
                      className="absolute -left-[29px] size-3 rounded-full bg-primary"
                      aria-hidden
                    />
                    <p className="font-mono text-sm font-medium text-primary">
                      {item.year}
                    </p>
                    <p className="mt-1 font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
