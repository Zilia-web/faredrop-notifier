import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="bg-gradient-card shadow-card group relative h-full overflow-hidden rounded-2xl border border-border p-6 transition-colors hover:border-primary/40 sm:p-7">
      <div className="bg-gradient-primary pointer-events-none absolute -top-16 -right-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
      <span className="flex size-11 items-center justify-center rounded-xl border border-primary/30 bg-accent text-primary-glow">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
