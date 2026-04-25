import { MapPin } from "lucide-react";

export interface Place {
  name: string;
  description: string;
  tag?: string;
}

interface PlaceCardProps {
  place: Place;
  index: number;
}

export const PlaceCard = ({ place, index }: PlaceCardProps) => (
  <article
    className="group relative bg-card rounded-2xl p-6 border border-border/60 shadow-soft hover:shadow-deep transition-smooth hover:-translate-y-1 overflow-hidden"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-sun opacity-0 group-hover:opacity-100 transition-smooth" />
    <div className="flex items-start justify-between mb-3 gap-3">
      <h3 className="font-display text-xl font-bold text-primary leading-tight group-hover:text-primary-glow transition-smooth">
        {place.name}
      </h3>
      <MapPin className="text-accent shrink-0 mt-1" size={18} />
    </div>
    {place.tag && (
      <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-accent-deep mb-2">
        {place.tag}
      </span>
    )}
    <p className="text-sm text-muted-foreground leading-relaxed">{place.description}</p>
  </article>
);
