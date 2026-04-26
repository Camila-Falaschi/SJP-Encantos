import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategorySection } from "@/components/CategorySection";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

// Cultura
import igrejaUcranianaImg  from "@/assets/igreja-ucraniana.png";
import museuImg            from "@/assets/museu-atilio-rocco.jpg";
import igrejaMatrizImg     from "@/assets/igreja-matriz-sjp.png";
import coloniaMuriciImg    from "@/assets/Colonia-Murici-Igreja-da-Colonia.jpg";

// Turismo
import caminhoVinhoImg     from "@/assets/caminho-vinho.png";
import quintaSaborImg      from "@/assets/quinta-do-sabor.png";
import cafeColonialImg     from "@/assets/cafe-colonial.jpg";
import girassolImg         from "@/assets/girassol-sao-jose-dos-pinhais.png";

// Natureza
import parqueSjpImg        from "@/assets/parque-sjp.jpg";
import parqueFonteImg      from "@/assets/parque-da-fonte.png";
import parqueLinearImg     from "@/assets/parque-linear.png";
import cachoeiraPanagroImg from "@/assets/cachoeira-panagro.jpg";
import cachoeiraCiganosImg from "@/assets/cachoeira-dos-ciganos.jpg";
import caminhadadImg       from "@/assets/caminhada.jpg";

// Eventos
import feirasImg           from "@/assets/feiras.png";
import feiraInvernoImg     from "@/assets/feira-inverno.png";
import bosqueCoelhoImg     from "@/assets/bosque-do-coelho.jpg";
import casaPapaiNoelImg    from "@/assets/casa-papai-noel.jpg";
import festaCidadeImg      from "@/assets/festa-cidade.jpeg";

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
        image={igrejaUcranianaImg}
        imageAlt="Igreja Ucraniana com cúpulas douradas na Colônia Marcelino"
        places={[
          {
            name: "Colônias",
            tag: "Tradição rural",
            description: "Regiões rurais formadas por imigrantes europeus, com tradições, festas típicas e culinária preservadas ao longo das gerações.",
            image: coloniaMuriciImg,
          },
          {
            name: "Catedral São José",
            tag: "Centro histórico",
            description: "Um dos marcos mais antigos da cidade, tombado como patrimônio, teve papel central na formação do centro urbano e da identidade local.",
            image: igrejaMatrizImg,
          },
          {
            name: "Museu Atílio Rocco",
            tag: "História",
            description: "No histórico Palacete Ordine, o museu guarda objetos e registros que contam a trajetória dos pioneiros da cidade.",
            image: museuImg,
          },
          {
            name: "Igreja Ucraniana",
            tag: "Colônia Marcelino",
            description: "Com arquitetura bizantino-ucraniana, a igreja é uma réplica de um templo na Ucrânia e símbolo da imigração no Paraná.",
            image: igrejaUcranianaImg,
          },
        ]}
      />

      <CategorySection
        id="turismo"
        eyebrow="🍇 Turismo Cultural e Gastronômico"
        title="Sabores que contam histórias"
        description="Vinhos artesanais, cafés coloniais e paisagens dignas de cartão-postal: o roteiro que une cultura e bons momentos à mesa."
        icon="🍇"
        image={caminhoVinhoImg}
        imageAlt="Adega rústica com barris de carvalho e mesa com vinho e queijos"
        reverse
        background="muted"
        places={[
          {
            name: "Caminho do Vinho",
            tag: "Turismo",
            description: "Roteiro turístico com diversas propriedades familiares que oferecem vinhos, cafés coloniais e produtos típicos em meio à paisagem rural.",
            image: caminhoVinhoImg,
          },
          {
            name: "Cafés Coloniais",
            tag: "Caminho do Vinho",
            description: "Mesas fartas, cafés especiais, receitas de família e produtos coloniais fazem parte da experiência gastronômica da região.",
            image: cafeColonialImg,
          },
          {
            name: "Quinta do Sabor",
            tag: "Colheita de Morangos",
            description: "Um espaço encantador para colher morangos, fazer piqueniques e curtir momentos especiais em meio à natureza.",
            image: quintaSaborImg,
          },
          {
            name: "Campo de Girassol",
            tag: "Paisagem",
            description: "Um cenário encantador de girassóis que atrai visitantes em busca de fotos e contato com a natureza.",
            image: girassolImg,
          },
        ]}
      />

      <CategorySection
        id="natureza"
        eyebrow="🌳 Natureza e Lazer"
        title="Respire o verde da Mata Atlântica"
        description="Trilhas, parques e cachoeiras a poucos minutos da cidade — espaços para se reconectar com o que importa."
        icon="🌳"
        image={parqueSjpImg}
        imageAlt="Lago do Parque São José dos Pinhais com araucárias ao fundo"
        places={[
          {
            name: "Parque São José dos Pinhais",
            tag: "Lazer urbano",
            description: "Um dos principais parques da cidade, com ampla área verde, lago, pistas de caminhada, espaços para esporte, lazer, piqueniques, além de uma trilha que conecta ao Parque Náutico.",
            image: parqueSjpImg,
          },
          {
            name: "Parque Linear do Rio Itaqui",
            tag: "Lazer urbano",
            description: "Amplo parque às margens do Rio Itaqui, com ciclovia, pista de caminhada e espaços pensados para o lazer e convivência.",
            image: parqueLinearImg,
          },
          {
            name: "Parque da Fonte",
            tag: "Recanto natural",
            description: "Parque tradicional com trilhas entre araucárias, fonte de água mineral e áreas de lazer, ideal para momentos tranquilos em meio à natureza.",
            image: parqueFonteImg,
          },
          {
            name: "Cachoeira do Panagro",
            tag: "Ecoturismo",
            description: "Queda d’água em meio à mata, com trilha e ambiente natural preservado para quem busca contato com a natureza.",
            image: cachoeiraPanagroImg,
          },
          {
            name: "Cachoeira dos Ciganos",
            tag: "Ecoturismo",
            description: "Cachoeira em meio à natureza preservada, com trilhas curtas e cenário ideal para contemplação e conexão com o ambiente natural.",
            image: cachoeiraCiganosImg,
          },
          {
            name: "Caminhadas na Natureza",
            tag: "Evento",
            description: "Eventos organizados pela prefeitura com caminhadas guiadas em trilhas e áreas rurais, incluindo versões diurnas e noturnas para diferentes experiências na natureza.",
            image: caminhadadImg,
          },
        ]}
      />

      <CategorySection
        id="eventos"
        eyebrow="🎪 Eventos e Experiências"
        title="A cidade que se encontra na rua"
        description="O calendário cultural reúne moradores e visitantes em celebrações que mantêm viva a identidade da cidade."
        icon="🎪"
        image={festaCidadeImg}
        imageAlt="Vista aérea da festa de aniversário de São José dos Pinhais com multidão e palco iluminado"
        reverse
        background="muted"
        places={[
          {
            name: "Feiras Livres",
            tag: "Semanal",
            description: "Feiras semanais espalhadas pela cidade, com produtores locais oferecendo frutas, verduras, artesanato e comidas típicas.",
            image: feirasImg,
          },
          {
            name: "Festival de Inverno",
            tag: "Anual",
            description: "Evento tradicional com artesanato, gastronomia e atrações culturais que movimentam o centro da cidade durante o inverno.",
            image: feiraInvernoImg,
          },
          {
            name: "Bosque do Coelho",
            tag: "Páscoa",
            description: "Evento de Páscoa com decoração temática, luzes, atividades interativas e atrações culturais que encantam crianças e adultos.",
            image: bosqueCoelhoImg,
          },
          {
            name: "Casa do Papai Noel",
            tag: "Natal",
            description: "Evento natalino no Parque da Fonte com decoração temática, apresentações culturais e a tradicional visita ao Papai Noel.",
            image: casaPapaiNoelImg,
          },
          {
            name: "Aniversário da Cidade",
            tag: "19 de março",
            description: "O aniversário da cidade reúne grandes shows, atrações culturais e uma estrutura que atrai milhares de pessoas ao centro.",
            image: festaCidadeImg,
          },
        ]}
      />

      <MapSection />

      <Footer />
    </main>
  );
};

export default Index;
