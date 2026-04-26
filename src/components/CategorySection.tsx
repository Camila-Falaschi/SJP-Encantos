import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { PlaceCard, type Place } from "./PlaceCard";

interface CategorySectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon?: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
  places: Place[];
  background?: "default" | "muted";
}

export const CategorySection = ({
  id,
  eyebrow,
  title,
  description,
  icon,
  image,
  imageAlt,
  reverse,
  places,
  background = "default",
}: CategorySectionProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const bgClass = background === "muted" ? "bg-gradient-earth" : "bg-background";

  const activeImage = places[selectedIndex]?.image ?? image;
  const activeAlt   = places[selectedIndex]?.name  ?? imageAlt;

  return (
    <section id={id} className={`${bgClass} py-20 md:py-28`}>
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} icon={icon} />

        <div
          className={`grid lg:grid-cols-5 gap-8 lg:gap-12 items-start ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="lg:col-span-2 relative group lg:sticky lg:top-24">
            <div className="absolute -inset-2 bg-gradient-sun rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-smooth" />
            <img
              key={activeImage}
              src={activeImage}
              alt={activeAlt}
              loading="lazy"
              width={1024}
              height={768}
              className="animate-fade-in relative rounded-2xl shadow-warm w-full h-72 lg:h-[420px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
              <p className="text-white font-display font-semibold text-lg leading-tight">
                {places[selectedIndex]?.name}
              </p>
              {places[selectedIndex]?.tag && (
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-0.5">
                  {places[selectedIndex].tag}
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {places.map((p, i) => (
              <PlaceCard
                key={p.name}
                place={p}
                index={i}
                isSelected={i === selectedIndex}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
