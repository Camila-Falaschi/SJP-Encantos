import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

import culturaImg from "@/assets/cultura-igreja.jpg";
import turismoImg from "@/assets/turismo-vinho.jpg";
import naturezaImg from "@/assets/natureza-parque.jpg";
import eventosImg from "@/assets/eventos-feira.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />

      <CategorySection
        id="cultura"
        eyebrow="🎭 Cultura e História"
        title="A alma da nossa cidade"
        description="Tradições que atravessam gerações — das igrejas centenárias às colônias dos imigrantes que construíram São José dos Pinhais."
        icon="🎭"
        image={culturaImg}
        imageAlt="Igreja Ucraniana com cúpulas douradas na Colônia Marcelino"
        places={[
          { name: "Igreja Ucraniana", tag: "Colônia Marcelino", description: "Cúpulas douradas e arquitetura bizantina marcam um dos maiores símbolos da imigração ucraniana no Paraná." },
          { name: "Museu Atílio Rocco", tag: "Memória local", description: "Acervo que preserva objetos, fotografias e histórias dos pioneiros que formaram a cidade." },
          { name: "Igreja Matriz São José", tag: "Centro histórico", description: "Marco religioso e arquitetônico do município, ponto de encontro da fé e da comunidade." },
          { name: "Colônia Murici", tag: "Tradição rural", description: "Comunidade rural com forte herança polonesa, festas típicas e culinária preservada há gerações." },
        ]}
      />

      <CategorySection
        id="turismo"
        eyebrow="🍇 Turismo Cultural e Gastronômico"
        title="Sabores que contam histórias"
        description="Vinhos artesanais, cafés coloniais e paisagens dignas de cartão-postal: o roteiro que une cultura e bons momentos à mesa."
        icon="🍇"
        image={turismoImg}
        imageAlt="Adega rústica com barris de carvalho e mesa com vinho e queijos"
        reverse
        background="muted"
        places={[
          { name: "Caminho do Vinho", tag: "Roteiro turístico", description: "Mais de 40 propriedades familiares oferecem vinhos, suco de uva, doces e cafés em um passeio por colinas verdes." },
          { name: "Quinta do Sabor", tag: "Vinícola", description: "Vinícola tradicional do Caminho do Vinho, com degustação, gastronomia colonial e vista deslumbrante." },
          { name: "Cafés Coloniais", tag: "Gastronomia", description: "Mesa farta com pães caseiros, geleias, queijos, embutidos e doces preparados por famílias locais." },
          { name: "Campo de Girassol", tag: "Paisagem", description: "Hectares de girassóis floridos que viram cenário e símbolo do turismo rural sjpense em determinada época do ano." },
        ]}
      />

      <CategorySection
        id="natureza"
        eyebrow="🌳 Natureza e Lazer"
        title="Respire o verde da Mata Atlântica"
        description="Trilhas, parques e cachoeiras a poucos minutos da cidade — espaços para se reconectar com o que importa."
        icon="🌳"
        image={naturezaImg}
        imageAlt="Trilha em parque com araucárias e cachoeira ao fundo"
        places={[
          { name: "Parque São José dos Pinhais", tag: "Lazer urbano", description: "Área verde com pista de caminhada, lago e estrutura ideal para o lazer da família em pleno coração da cidade." },
          { name: "Parque da Fonte", tag: "Recanto natural", description: "Trilhas, fonte de água mineral e mata nativa preservada — um clássico de domingo dos sjpenses." },
          { name: "Cachoeira do Panagro", tag: "Aventura", description: "Queda d'água em meio à mata para quem busca contato direto com a natureza e fotos memoráveis." },
          { name: "Colônia Murici", tag: "Trilhas", description: "Além da cultura, a região oferece trilhas e mirantes com vistas amplas dos Mananciais da Serra." },
        ]}
      />

      <CategorySection
        id="eventos"
        eyebrow="🎪 Eventos e Experiências"
        title="A cidade que se encontra na rua"
        description="O calendário cultural reúne moradores e visitantes em celebrações que mantêm viva a identidade da cidade."
        icon="🎪"
        image={eventosImg}
        imageAlt="Feira noturna com luzes amarelas, barracas e movimento de pessoas"
        reverse
        background="muted"
        places={[
          { name: "Feiras Livres", tag: "Toda semana", description: "Produtores locais levam frutas, verduras, queijos e quitutes às praças e bairros da cidade." },
          { name: "Feira de Inverno", tag: "Sazonal", description: "Ambiente acolhedor com vinho quente, fondue, artesanato e shows típicos durante os meses frios." },
          { name: "Casa do Papai Noel", tag: "Dezembro", description: "Atração natalina que encanta crianças e famílias, transformando o centro em um cenário mágico." },
          { name: "Aniversário da Cidade", tag: "8 de março", description: "Programação especial com shows, exposições e homenagens à história sjpense." },
        ]}
      />

      <MapSection />

      <Footer />
    </main>
  );
};

export default Index;
