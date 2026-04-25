import { SectionHeader } from "./SectionHeader";
import { PlaceCard, type Place } from "./PlaceCard";

interface CategorySectionProps {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
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
  const bgClass = background === "muted" ? "bg-gradient-earth" : "bg-background";

  return (
    <section id={id} className={`${bgClass} py-20 md:py-28`}>
      <div className="container">
        <SectionHeader eyebrow={eyebrow} title={title} description={description} icon={icon} />

        <div className={`grid lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-12 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="lg:col-span-2 relative group">
            <div className="absolute -inset-2 bg-gradient-sun rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-smooth" />
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={1024}
              height={768}
              className="relative rounded-2xl shadow-warm w-full h-72 lg:h-96 object-cover"
            />
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {places.map((p, i) => (
              <PlaceCard key={p.name} place={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
