import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Place {
  name: string;
  description: string;
  tag?: string;
  image?: string;
}

interface PlaceCardProps {
  place: Place;
  index: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export const PlaceCard = ({ place, index, isSelected, onClick }: PlaceCardProps) => (
  <article
    onClick={onClick}
    className={cn(
      "group relative bg-card rounded-2xl p-6 border transition-smooth overflow-hidden animate-fade-up cursor-pointer select-none",
      isSelected
        ? "border-accent shadow-warm ring-2 ring-accent/30 -translate-y-1"
        : "border-border/60 shadow-soft hover:shadow-deep hover:-translate-y-1"
    )}
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-1 bg-gradient-sun transition-smooth",
        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}
    />

    <div className="flex items-start justify-between mb-3 gap-3">
      <h3
        className={cn(
          "font-display text-xl font-bold leading-tight transition-smooth",
          isSelected
            ? "text-primary-glow"
            : "text-primary group-hover:text-primary-glow"
        )}
      >
        {place.name}
      </h3>
      <MapPin
        className={cn("shrink-0 mt-1 transition-smooth", isSelected ? "text-accent" : "text-accent")}
        size={18}
      />
    </div>

    {place.tag && (
      <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-accent-deep mb-2">
        {place.tag}
      </span>
    )}

    <p className="text-sm text-muted-foreground leading-relaxed">{place.description}</p>
  </article>
);
