# SJP Encantos

Site de turismo cultural desenvolvido como Projeto de Extensão II, com o objetivo de divulgar os pontos turísticos, culturais, naturais e eventos de **São José dos Pinhais – PR**.

---

## Sobre o projeto

O **SJP Encantos** apresenta de forma visual e interativa os encantos da cidade: das colônias de imigrantes às cachoeiras, do Caminho do Vinho aos parques urbanos. O site conta com um mapa interativo com pins geolocalizados para cada ponto de interesse.

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| [React 18](https://react.dev/) | Interface |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem |
| [Vite](https://vitejs.dev/) | Bundler |
| [Tailwind CSS](https://tailwindcss.com/) | Estilização |
| [Radix UI](https://www.radix-ui.com/) | Componentes acessíveis |
| [react-leaflet](https://react-leaflet.js.org/) + [OpenStreetMap](https://www.openstreetmap.org/) | Mapa interativo |
| [React Router](https://reactrouter.com/) | Roteamento |
| [TanStack Query](https://tanstack.com/query) | Gerenciamento de estado assíncrono |
| [Lucide React](https://lucide.dev/) | Ícones |

---

## Estrutura do projeto

```
src/
├── assets/               # Imagens dos locais e eventos
├── components/
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── CategorySection.tsx   # Seção de cards por categoria
│   ├── PlaceCard.tsx         # Card individual de cada local
│   ├── MapSection.tsx        # Mapa interativo com pins
│   ├── SectionHeader.tsx
│   └── Footer.tsx
├── pages/
│   ├── Index.tsx         # Página principal
│   └── NotFound.tsx
└── hooks/
    └── use-mobile.tsx
```

---

## Seções do site

- **Cultura e História** — Catedral São José, Museu Atílio Rocco, Colônias (Murici, Mergulhão, Marcelino) e Igreja Ucraniana
- **Turismo Gastronômico** — Caminho do Vinho, Cafés Coloniais, Quinta do Sabor e Campo de Girassol
- **Natureza e Lazer** — Parques (SJP, da Fonte, Linear do Rio Itaqui), Cachoeiras (Panagro, dos Ciganos) e Caminhadas
- **Eventos** — Feiras Livres, Festival de Inverno, Bosque do Coelho, Casa do Papai Noel e Aniversário da Cidade
- **Mapa Interativo** — 15 pontos geolocalizados com pins coloridos por categoria

---

## Como rodar localmente

**Pré-requisitos:** Node.js 18+

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd SJP-Encantos

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site ficará disponível em `http://localhost:5173`.

---

## Scripts disponíveis

```bash
npm run dev       # Servidor de desenvolvimento
npm run build     # Build de produção
npm run preview   # Pré-visualização do build
npm run lint      # Verificação de lint
npm run test      # Executa os testes
```

