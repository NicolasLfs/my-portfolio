import { Mail, Linkedin, Github, Calendar } from "lucide-react";
import { contactContent } from "@/lib/content/contact";
import type { ContactChannel } from "@/types/portfolio";
import { cn } from "@/lib/utils";

const channelIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  calendar: Calendar,
};

function ContactCard({ channel }: { channel: ContactChannel }) {
  const Icon = channelIcons[channel.icon] ?? Mail;

  return (
    <a
      href={channel.href}
      target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
      rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className={cn(
        "flex items-start gap-4 rounded-xl border p-6 transition-all duration-300",
        "hover:border-primary/30 hover:shadow-[0_0_30px_var(--primary-glow)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        channel.highlight
          ? "border-primary/50 bg-primary/5"
          : "border-border bg-card"
      )}
    >
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </div>
      <div>
        <p className="text-sm font-medium text-muted-foreground">
          {channel.label}
        </p>
        <p className="mt-1 font-medium text-foreground">{channel.value}</p>
      </div>
    </a>
  );
}

export function ContactSection() {
  const { channels, footerText } = contactContent;

  return (
    <section
      id="contato"
      className="border-t border-border/40 py-24 md:py-40"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
            VAMOS CONVERSAR
          </p>
          <h2
            id="contact-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl"
          >
            Pronto para o próximo projeto?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estou aberto para oportunidades freelance, vagas full-time ou apenas
            um café virtual para trocar ideias.
          </p>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {channels.map((channel) => (
            <ContactCard key={channel.id} channel={channel} />
          ))}
        </div>
        {footerText && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            {footerText}
          </p>
        )}
      </div>
    </section>
  );
}
