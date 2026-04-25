import { ExternalLink } from "lucide-react";

export interface MapPoint {
  name: string;
  category: "cultura" | "turismo" | "natureza" | "eventos";
  query: string;
}

const points: MapPoint[] = [
  { name: "Igreja Ucraniana — Colônia Marcelino", category: "cultura", query: "Igreja Ucraniana Colônia Marcelino São José dos Pinhais" },
  { name: "Museu Atílio Rocco", category: "cultura", query: "Museu Atílio Rocco São José dos Pinhais" },
  { name: "Igreja Matriz São José", category: "cultura", query: "Igreja Matriz São José dos Pinhais" },
  { name: "Colônia Murici", category: "cultura", query: "Colônia Murici São José dos Pinhais" },
  { name: "Caminho do Vinho", category: "turismo", query: "Caminho do Vinho São José dos Pinhais" },
  { name: "Quinta do Sabor", category: "turismo", query: "Quinta do Sabor São José dos Pinhais" },
  { name: "Campo de Girassol", category: "turismo", query: "Campo de Girassol São José dos Pinhais" },
  { name: "Parque São José dos Pinhais", category: "natureza", query: "Parque São José dos Pinhais" },
  { name: "Parque da Fonte", category: "natureza", query: "Parque da Fonte São José dos Pinhais" },
  { name: "Cachoeira do Panagro", category: "natureza", query: "Cachoeira do Panagro São José dos Pinhais" },
];

const categoryColors: Record<MapPoint["category"], string> = {
  cultura: "bg-primary/10 text-primary border-primary/30",
  turismo: "bg-accent/15 text-accent-deep border-accent/40",
  natureza: "bg-primary-glow/15 text-primary border-primary-glow/30",
  eventos: "bg-secondary text-secondary-foreground border-border",
};

export const MapSection = () => {
  return (
    <section id="mapa" className="py-20 md:py-28 bg-gradient-forest text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, hsl(var(--accent)) 0%, transparent 40%), radial-gradient(circle at 80% 80%, hsl(var(--primary-glow)) 0%, transparent 40%)"
      }} />

      <div className="container relative">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            📍 Mapa interativo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Encontre cada cantinho
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Localize os pontos culturais, gastronômicos e naturais de São José dos Pinhais.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-deep border-4 border-accent/20 h-[500px] bg-background">
            <iframe
              title="Mapa de São José dos Pinhais"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-49.35%2C-25.65%2C-49.05%2C-25.45&amp;layer=mapnik&amp;marker=-25.5347%2C-49.2061"
              className="w-full h-full"
              loading="lazy"
            />
          </div>

          <div className="bg-background/10 backdrop-blur-md rounded-2xl border border-primary-foreground/10 p-6 max-h-[500px] overflow-y-auto">
            <h3 className="font-display text-xl font-bold mb-4 text-accent">Pontos em destaque</h3>
            <ul className="space-y-2">
              {points.map((p) => (
                <li key={p.name}>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 p-3 rounded-lg hover:bg-background/10 transition-smooth"
                  >
                    <div className="min-w-0">
                      <span className={`inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded border mb-1 ${categoryColors[p.category]}`}>
                        {p.category}
                      </span>
                      <p className="text-sm font-medium text-primary-foreground group-hover:text-accent transition-smooth">
                        {p.name}
                      </p>
                    </div>
                    <ExternalLink size={14} className="text-primary-foreground/50 group-hover:text-accent shrink-0 mt-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
