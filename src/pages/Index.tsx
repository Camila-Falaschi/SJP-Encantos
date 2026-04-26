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
import cachoeiraPanagroImg from "@/assets/cachoeira-panagro.jpg";
import parqueLinearImg     from "@/assets/parque-linear.png";
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
            name: "Igreja Ucraniana",
            tag: "Colônia Marcelino",
            description: "Com arquitetura bizantino-ucraniana, a igreja é uma réplica de um templo na Ucrânia e símbolo da imigração no Paraná.",
            image: igrejaUcranianaImg,
          },
          {
            name: "Museu Atílio Rocco",
            tag: "Memória local",
            description: "Acervo que preserva objetos, fotografias e histórias dos pioneiros que formaram a cidade.",
            image: museuImg,
          },
          {
            name: "Igreja Matriz São José",
            tag: "Centro histórico",
            description: "Marco religioso e arquitetônico do município, ponto de encontro da fé e da comunidade.",
            image: igrejaMatrizImg,
          },
          {
            name: "Colônias",
            tag: "Tradição rural",
            description: "Comunidade rural com forte herança polonesa, festas típicas e culinária preservada há gerações.",
            image: coloniaMuriciImg,
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
            tag: "Roteiro turístico",
            description: "Mais de 40 propriedades familiares oferecem vinhos, suco de uva, doces e cafés em um passeio por colinas verdes.",
            image: caminhoVinhoImg,
          },
          {
            name: "Quinta do Sabor",
            tag: "Vinícola",
            description: "Vinícola tradicional do Caminho do Vinho, com degustação, gastronomia colonial e vista deslumbrante.",
            image: quintaSaborImg,
          },
          {
            name: "Cafés Coloniais",
            tag: "Gastronomia",
            description: "Mesa farta com pães caseiros, geleias, queijos, embutidos e doces preparados por famílias locais.",
            image: cafeColonialImg,
          },
          {
            name: "Campo de Girassol",
            tag: "Paisagem",
            description: "Hectares de girassóis floridos que viram cenário e símbolo do turismo rural sjpense em determinada época do ano.",
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
            description: "Área verde com pista de caminhada, lago e estrutura ideal para o lazer da família em pleno coração da cidade.",
            image: parqueSjpImg,
          },
          {
            name: "Parque da Fonte",
            tag: "Recanto natural",
            description: "Trilhas sombreadas entre árvores centenárias, fonte de água mineral e mata nativa preservada — um clássico de domingo dos sjpenses.",
            image: parqueFonteImg,
          },
          {
            name: "Cachoeira do Panagro",
            tag: "Aventura",
            description: "Queda d'água em meio à mata para quem busca contato direto com a natureza e fotos memoráveis.",
            image: cachoeiraPanagroImg,
          },
          {
            name: "Parque Linear do Rio Itaqui",
            tag: "Área verde",
            description: "Amplo parque às margens do Rio Itaqui com jardins desenhados, pistas de caminhada e espaços de convivência visíveis até do alto — um novo pulmão verde da cidade.",
            image: parqueLinearImg,
          },
          {
            name: "Caminhadas na Natureza",
            tag: "Prefeitura de SJP",
            description: "A prefeitura organiza roteiros guiados gratuitos por trilhas e áreas verdes do município — perfeitos para famílias e grupos. Acompanhe a programação pelos canais oficiais da Secretaria de Meio Ambiente.",
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
            tag: "Toda semana",
            description: "Produtores locais levam frutas, verduras, queijos e quitutes às praças e bairros da cidade.",
            image: feirasImg,
          },
          {
            name: "Feira de Inverno",
            tag: "Sazonal",
            description: "Artesanato local, gorros, luvas e peças únicas feitas à mão ganham as barracas da feira — o programa perfeito para os dias frios de julho.",
            image: feiraInvernoImg,
          },
          {
            name: "Bosque do Coelho",
            tag: "Páscoa",
            description: "No período da Páscoa, o bosque se transforma em um espetáculo de luz com esculturas iluminadas, coelhos coloridos e decorações encantadoras que emocionam crianças e adultos.",
            image: bosqueCoelhoImg,
          },
          {
            name: "Casa do Papai Noel",
            tag: "Dezembro",
            description: "Entre araucárias e neve artificial, a casinha natalina recebe famílias para uma experiência mágica de Natal — com decoração temática, trilha sonora e a visita ao bom velhinho.",
            image: casaPapaiNoelImg,
          },
          {
            name: "Aniversário da Cidade",
            tag: "19 de março",
            description: "Fundada em 19 de março de 1690, SJP celebra seu aniversário com shows gratuitos para dezenas de milhares de pessoas, roda-gigante, exposições e homenagens que tomam o centro da cidade.",
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
