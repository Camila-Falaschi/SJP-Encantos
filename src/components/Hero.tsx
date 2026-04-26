import heroImg from "@/assets/portal-sjp.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Campo de girassóis ao pôr do sol nas colinas de São José dos Pinhais"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative container text-center text-primary-foreground py-32">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-up">
          São José dos Pinhais — Paraná
        </span>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Um portal para a<br />
          <span className="text-gradient-sun">nossa cultura</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.25s" }}>
          Um convite para descobrir a cultura, a natureza e os sabores que fazem de
          São José dos Pinhais um lugar único — e seu também.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button asChild size="lg" className="bg-gradient-sun text-accent-foreground hover:opacity-90 shadow-warm font-semibold h-12 px-8">
            <a href="#cultura">Explorar a cidade</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground h-12 px-8">
            <a href="#mapa">Ver no mapa</a>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};
