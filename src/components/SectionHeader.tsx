interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  icon?: string;
}

export const SectionHeader = ({ eyebrow, title, description }: SectionHeaderProps) => (
  <div className="text-center max-w-3xl mx-auto mb-14">
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent-deep text-xs font-semibold uppercase tracking-wider mb-4">
      <span>{eyebrow}</span>
    </div>
    <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
      {title}
    </h2>
    <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
  </div>
);
