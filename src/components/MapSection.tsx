import { ExternalLink } from "lucide-react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export interface MapPoint {
  name: string;
  category: "cultura" | "turismo" | "natureza" | "eventos";
  query: string;
  url?: string;
  lat: number;
  lng: number;
}

const points: MapPoint[] = [
  { name: "Catedral São José",           category: "cultura",  lat: -25.53736810764847,  lng: -49.20499154417866,  query: "Diocese de São José dos Pinhais" },
  { name: "Museu Atílio Rocco",          category: "cultura",  lat: -25.537264649503793, lng: -49.202348099999995, query: "Museu Atílio Rocco São José dos Pinhais" },
  { name: "Colônia Murici",              category: "cultura",  lat: -25.58024309042357,  lng: -49.13342958465707,  query: "Colônia Murici São José dos Pinhais" },
  { name: "Colônia Mergulhão",           category: "cultura",  lat: -25.564974589983326, lng: -49.12499061823049,  query: "Colônia Mergulhão São José dos Pinhais" },
  { name: "Colônia Marcelino",           category: "cultura",  lat: -25.749473903225603, lng: -49.23956053558212,  query: "Colônia Marcelino São José dos Pinhais", url: "https://maps.app.goo.gl/TGthSATCdT8gatUc8" },
  { name: "Igreja Ucraniana",            category: "cultura",  lat: -25.739910581648342, lng: -49.239692697249396, query: "Paróquia Católica Ucraniana Santíssima Trindade", url: "https://maps.app.goo.gl/5pzEgqE3bq3zR5qc9" },
  { name: "Caminho do Vinho",            category: "turismo",  lat: -25.571330133262386, lng: -49.14670689421858,  query: "Caminho do Vinho São José dos Pinhais" },
  { name: "Quinta do Sabor",             category: "turismo",  lat: -25.77276866859947,  lng: -49.17427058465707,  query: "Quinta do Sabor São José dos Pinhais" },
  { name: "Campo de Girassol",           category: "turismo",  lat: -25.59444697322908,  lng: -49.09837114232853,  query: "Campo de Girassol São José dos Pinhais" },
  { name: "Parque São José dos Pinhais", category: "natureza", lat: -25.512406318154497, lng: -49.20286411859381,  query: "Parque São José dos Pinhais", url: "https://maps.app.goo.gl/MxgbVFpDLeNRknrJA" },
  { name: "Parque da Fonte",             category: "natureza", lat: -25.50463335218879,  lng: -49.18104126441787,  query: "Parque da Fonte São José dos Pinhais", url: "https://maps.app.goo.gl/y3hbV8FqjQvhdmPeA" },
  { name: "Parque Linear do Rio Itaqui", category: "natureza", lat: -25.49975196999488,  lng: -49.13056464232853,  query: "Parque Linear do Rio Itaqui São José dos Pinhais" },
  { name: "Cachoeira do Panagro",        category: "natureza", lat: -25.696932894372953, lng: -49.14457907547145,  query: "Cachoeira do Panagro São José dos Pinhais", url: "https://maps.app.goo.gl/KpzJwyfkVKFngez79" },
  { name: "Cachoeira dos Ciganos",       category: "natureza", lat: -25.730119751858894, lng: -49.01024760000001,  query: "Cachoeira dos Ciganos São José dos Pinhais" },
  { name: "Bosque da Usina",             category: "eventos",  lat: -25.532019718570144, lng: -49.20680749999999,  query: "Bosque da Usina São José dos Pinhais" },
];

const categoryColors: Record<MapPoint["category"], string> = {
  cultura:  "bg-rose-500/20 text-rose-300 border-rose-400/30",
  turismo:  "bg-amber-400/20 text-amber-300 border-amber-400/30",
  natureza: "bg-emerald-400/20 text-emerald-300 border-emerald-400/30",
  eventos:  "bg-sky-400/20 text-sky-300 border-sky-400/30",
};

const markerColors: Record<MapPoint["category"], string> = {
  cultura:  "#fb7185",
  turismo:  "#fbbf24",
  natureza: "#34d399",
  eventos:  "#38bdf8",
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
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-deep border-4 border-accent/20 h-[500px] bg-background z-0">
            <MapContainer
              center={[-25.62, -49.13]}
              zoom={11}
              className="w-full h-full"
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {points.map((p) => (
                <CircleMarker
                  key={p.name}
                  center={[p.lat, p.lng]}
                  radius={9}
                  pathOptions={{
                    color: markerColors[p.category],
                    fillColor: markerColors[p.category],
                    fillOpacity: 0.85,
                    weight: 2,
                  }}
                >
                  <Popup>
                    <div className="text-sm font-medium">{p.name}</div>
                    <a
                      href={p.url ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.query)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-600 underline"
                    >
                      Ver no Google Maps
                    </a>
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>

          <div className="bg-background/10 backdrop-blur-md rounded-2xl border border-primary-foreground/10 p-6 max-h-[500px] overflow-y-auto">
            <h3 className="font-display text-xl font-bold mb-4 text-accent">Pontos em destaque</h3>
            <ul className="space-y-2">
              {points.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.query)}`}
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
