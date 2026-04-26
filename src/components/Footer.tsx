export const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-xl mb-3">
            SJP Cultural
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Um portal feito para valorizar a cultura, a história e a beleza natural de
            São José dos Pinhais.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold mb-3 text-accent">Explore</h3>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><a href="#cultura" className="hover:text-accent transition-smooth">Cultura e História</a></li>
            <li><a href="#turismo" className="hover:text-accent transition-smooth">Turismo Gastronômico</a></li>
            <li><a href="#natureza" className="hover:text-accent transition-smooth">Natureza e Lazer</a></li>
            <li><a href="#eventos" className="hover:text-accent transition-smooth">Eventos Locais</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold mb-3 text-accent">Participe</h3>
          <p className="text-sm text-primary-foreground/80 leading-relaxed">
            Conhece um lugar que merece estar aqui? A cultura local é construída por todos —
            compartilhe nas redes com #SJPCultural.
          </p>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} SJP Cultural — Feito com 💛 para São José dos Pinhais.
      </div>
    </div>
  </footer>
);
