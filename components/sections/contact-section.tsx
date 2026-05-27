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
        "flex w-full min-w-0 items-start gap-3 rounded-xl border p-4 transition-all duration-300 sm:gap-4 sm:p-6",
        "hover:border-primary/30 hover:shadow-[0_0_30px_var(--primary-glow)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        channel.highlight
          ? "border-primary/50 bg-primary/5"
          : "border-border bg-card"
      )}
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:size-10">
        <Icon className="size-4 sm:size-5" aria-hidden />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-medium text-muted-foreground sm:text-sm">
          {channel.label}
        </p>
        <p className="mt-1 break-all text-sm font-medium text-foreground sm:text-base">
          {channel.value}
        </p>
      </div>
    </a>
  );
}

export function ContactSection() {
  const { headline, intro, channels, footerText } = contactContent;

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
            {headline}
          </h2>
          <p className="mt-4 text-muted-foreground">{intro}</p>
        </div>
        <div className="mx-auto mt-16 grid w-full max-w-lg grid-cols-1 gap-4 sm:max-w-none sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
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
