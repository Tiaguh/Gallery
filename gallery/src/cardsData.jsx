import Starry_Night from './Assets/Starry_Night.jpg';
import The_Storm_on_the_Lake_of_Galilee from './Assets/The_Storm_on_the_Lake_of_Galilee.jpg';
import Lady_with_an_Ermine from './Assets/Lady_with_an_Ermine.jpg';
import Le_Garçon_au_gilet_rouge from './Assets/Le_Garçon_au_gilet_rouge.jpg';
import Girl_with_a_Pearl_Earring from './Assets/Girl_with_a_Pearl_Earring.jpg';
import The_Great_Wave_off_Kanagawa from './Assets/The_Great_Wave_off_Kanagawa.jpg';
import The_Night_Cafe from './Assets/The_Night_Cafe.jpg';
import The_Arnolfini_portrait from './Assets/The_Arnolfini_portrait.jpg';
import Van_Gogh_Self_Portrait from './Assets/Vincent_van_Gogh_-_Self-Portrait.jpg';
import Monalisa from './Assets/Mona_Lisa,_by_Leonardo_da_Vinci.jpg';
import Maria_Maddalena_Penitente from './Assets/Maria_Maddalena_Penitente.jpg';
import The_Sleeping_Gypsy from './Assets/The Sleeping Gypsy.jpg';
import The_Basket_of_Apples from './Assets/The_Basket_of_Apples.jpg';
import The_Swing from './Assets/The_Swing.jpg';
import Girrasois from './Assets/Os Girassóis_Van_Gogh.jpg'
import A_Criação_de_Adão from './Assets/A-Criação-de-Adão.png'

const cardsData = [
  {
    "id": 1,
    "painting": Starry_Night,
    "painting_name": "Noite estrelada",
    "artist_name": "Van Gogh",
    "description": "A Noite Estrelada é uma pintura a óleo sobre tela dopintor pós-impressionista holandês Vincent van Gogh pintada em junho de 1889. Ela retrata a vista da janela voltada para o leste de seu quarto de asilo em Saint-Rémy -de-Provence, pouco antes do nascer do sol, com a adição de uma aldeia imaginária. Está na coleção permanente do Museu de Arte Moderna da cidade de Nova York desde 1941, adquirido através do legado de Lillie P. Bliss . Amplamente considerada a obra-prima de Van Gogh , A Noite Estrelada é uma das pinturas mais reconhecidas da arte ocidental."
  },

  {
    "id": 2,
    "painting": The_Storm_on_the_Lake_of_Galilee,
    "painting_name": "A Tempestade no Mar da Galileia",
    "artist_name": "Rembrandt",
    "description": "Cristo na Tempestade no Mar da Galiléia é uma pintura a óleo sobre tela de 1633 dopintor holandês da Idade de Ouro Rembrandt van Rijn . É classificada como uma pintura histórica e está entre as maiores e mais antigas obras de Rembrandt. Foi comprado por Bernard Berenson para Isabella Stewart Gardner em 1869 e foi exibido no Museu Isabella Stewart Gardner em Boston antes de seu roubo em 1990 ; continua faltando. A pintura retrata o acontecimento bíblico em que Jesus acalmou a tempestade no Mar da Galiléia , conforme descrito no quarto capítulo do Evangelho de Marcos . É a única paisagem marítima de Rembrandt ."
  },

  {
    "id": 3,
    "painting": Lady_with_an_Ermine,
    "painting_name": "Dama com Arminho",
    "artist_name": "Leonardo da Vinci",
    "description": "A Dama com Arminho é um retrato amplamente atribuído ao artista renascentista italiano Leonardo da Vinci . Datado de c.  1489–1491 , a obra é pintada a óleo sobre um painel de madeira de nogueira . Seu tema é Cecilia Gallerani , amante de Ludovico Sforza, duque de Milão ; Leonardo era pintor da corte Sforza em Milão na época de sua execução. É o segundo de apenas quatro retratos de mulheres pintados por Leonardo, sendo os outros Ginevra de' Benci , La Belle Ferronnière e a Mona Lisa."
  },

  {
    "id": 4,
    "painting": Le_Garçon_au_gilet_rouge,
    "painting_name": "O Menino de Colete Vermelho",
    "artist_name": "Paul Cézanne",
    "description": "Cézanne pintou quatro retratos a óleo deste menino italiano de colete vermelho, todos em poses diferentes, o que lhe permitiu estudar a relação entre a figura e o espaço. O mais famoso dos quatro, e comumente referido por este título, é aquele que retrata o menino em uma pose melancólica sentada, com o cotovelo apoiado na mesa e a cabeça apoiada na mão. Atualmente é realizado em Zurique, Suíça. Os outros três retratos, de poses diferentes, estão em museus dos EUA"
  },

  {
    "id": 5,
    "painting": Girl_with_a_Pearl_Earring,
    "painting_name": "Garota com Brinco de Pérola",
    "artist_name": "Johannes Vermeer",
    "description": "Menina com Brinco de Pérola é uma pintura a óleo do pintor holandês da Idade de Ouro Johannes Vermeer, datada de c. 1665. Recebendo vários nomes ao longo dos séculos, tornou-se conhecido pelo título atual no final do século XX, após o brinco usado pela menina ali retratada. A obra está na coleção do Mauritshuis de Haia desde 1902 e tem sido objeto de diversos tratamentos literários e cinematográficos."
  },

  {
    "id": 6,
    "painting": The_Great_Wave_off_Kanagawa,
    "painting_name": "A Grande Onda de Kanagawa",
    "artist_name": "Katsushika Hokusai",
    "description": "A Grande Onda de Kanagawa é uma xilogravura do artista japonês ukiyo-e Hokusai, criada no final de 1831 durante o período Edo da história japonesa. A impressão retrata três barcos movendo-se em um mar tempestuoso, com uma grande onda formando uma espiral no centro e o Monte Fuji visível ao fundo."
  },

  {
    "id": 7,
    "painting": The_Night_Cafe,
    "painting_name": "O Café Noturno",
    "artist_name": "Van Gogh",
    "description": "The Night Café (francês: Le Café de nuit) é uma pintura a óleo criada pelo artista holandês Vincent van Gogh em setembro de 1888 em Arles. Seu título está inscrito no canto inferior direito, abaixo da assinatura. A pintura é propriedade da Universidade de Yale e atualmente está exposta na Galeria de Arte da Universidade de Yale em New Haven, Connecticut."
  },

  {
    "id": 8,
    "painting": The_Arnolfini_portrait,
    "painting_name": "O Casal Arnolfini",
    "artist_name": "Jan van Eyck",
    "description": "O Casal Arnolfini é o mais famoso quadro do pintor flamengo Jan van Eyck, pintado em 1434. A obra exibe o então rico comerciante Giovanni Arnolfini e sua esposa Giovanna Cenami, que se estabeleceram e prosperaram na cidade de Bruges (hoje Bélgica), entre 1420 e 1472. Nos dias de hoje, os historiadores da arte discutem a imagem que o quadro representa exatamente; a tese dominante durante muito tempo, introduzida por Erwin Panofsky em um ensaio de 1934, assegura que a imagem corresponde ao matrimónio de ambos, celebrado em segredo e testemunhado pelo pintor. Contudo, muitas outras interpretações têm sido propostas acerca da obra, e o consenso atual é que a teoria de Panofsky é dificilmente sustentável. Especula-se sobre a presença efetiva do pintor no casamento dos Arnolfini, que explicaria a razão de o pintor neerlandês ter escrito no quadro, em latim, Johannes de Eyck fuit hic (Jan van Eyck esteve aqui)."
  },

  {
    "id": 10,
    "painting": Van_Gogh_Self_Portrait,
    "painting_name": "Autorretrato de Van Gogh",
    "artist_name": "Vincent Van Gogh",
    "description": "O pintor pós-impressionista holandês Vincent van Gogh pintou um autorretrato em óleo sobre tela em setembro de 1889. A obra, que pode ter sido o último autorretrato de Van Gogh, foi pintada pouco antes de ele deixar Saint-Rémy-de-Provence, no sul. França. A pintura está agora no Musée d'Orsay em Paris."
  },

  {
    "id": 11,
    "painting": Monalisa,
    "painting_name": "Mona Lisa",
    "artist_name": "Leonardo da Vinci",
    "description": "A Mona Lisa é um retrato de meio corpo do artista italiano Leonardo da Vinci. Considerada uma obra-prima arquetípica da Renascença italiana, foi descrita como a mais conhecida, a mais visitada, a mais escrita, a mais cantada,a obra de arte mais parodiada do mundo. mundo As qualidades inovadoras da pintura incluem a expressão enigmática do tema, monumentalidade da composição, a modelagem sutil das formas e o ilusionismo atmosférico."
  },

  {
    "id": 12,
    "painting": Maria_Maddalena_Penitente,
    "painting_name": "Maria Maddalena Penitente",
    "artist_name": "Artemisia Gentileschi",
    "description": "Madalena Penitente é uma pintura da artista italiana Artemisia Gentileschi. Está pendurado na Catedral de Sevilha. Provavelmente está na catedral desde o final do século XVII. O primeiro lar da pintura foi a coleção de Fernando Enriquez Afan de Ribera, de 1626 a 1637. Ela voltou ao assunto no final da década de 1620 em Maria Madalena como Melancolia."
  },

  {
    "id": 13,
    "painting": The_Sleeping_Gypsy,
    "painting_name": "A cigana adormecida",
    "artist_name": "Henri Rousseau",
    "description": "A Cigana Adormecida (francês: La Bohémienne endormie) é um óleo sobre tela de 1897 do artista francês Naïf Henri Rousseau (1844–1910). É uma representação fantástica de um leão meditando sobre uma mulher adormecida em uma noite de luar. É propriedade do Museu de Arte Moderna da cidade de Nova York, ao qual foi doado pela Sra. Simon Guggenheim em 1939."
  },

  {
    "id": 14,
    "painting": The_Basket_of_Apples,
    "painting_name": "A cesta de maçãs",
    "artist_name": "Paul Cézanne",
    "description": "A Cesta de Maçãs (francês: Le panier de pommes) é uma pintura a óleo de natureza morta do artista francês Paul Cézanne, que ele criou c. 1893. A pintura rejeitou a representação naturalista em favor da distorção dos objetos para criar múltiplas perspectivas. Esta abordagem acabou por influenciar outros movimentos artísticos, incluindo o Fauvismo e o Cubismo. Pertence à Coleção Memorial Helen Birch Bartlett do Art Institute of Chicago."
  },

  {
    "id": 15,
    "painting": The_Swing,
    "painting_name": "O Balanço",
    "artist_name": "Jean-Honoré Fragonard",
    "description": "O Baloiço (em francês: L'Escarpolette; 1766), também conhecido por Os Acidentes Felizes do Baloiço (em francês: Les Hasards Heureux de l'Escarpolette; título original), é uma pintura do século XVIII a óleo sobre tela do pintor francês Jean-Honoré Fragonard. Encontra-se exposta no museu Coleção Wallace, em Londres. É considerada uma das obras-primas do rococó, e trata-se da pintura mais conhecida de Fragonard."
  },

  {
    "id": 16,
    "painting": Girrasois,
    "painting_name": "Doze Girassóis numa Jarra",
    "artist_name": "Vincent van Gogh",
    "description": "Os Doze girassóis numa jarra é uma pintura do pintor holandês Vincent van Gogh. Após a chegada do pintor ao sul da França, estabelecendo-se em Arles, Van Gogh passou a utilizar efeitos de cores e de luz com mais intensidade. Doze Girassóis numa Jarra pode ser considerado o culminar de todo este efeito em na obra do artista. Finalizado em agosto de 1888, o quadro está hoje exposto na Neue Pinakothek, em Munique. Atualmente, esta é uma das telas mais famosas do mundo. Tal sucesso e reconhecimento contrastam com a vida do seu autor, que sempre viveu à margem da sociedade. Ao longo de toda a trajetória de Van Gogh, o artista vendeu somente um quadro. Ele só foi reconhecido mundialmente depois de sua morte."
  },

  {
    "id": 17,
    "painting": A_Criação_de_Adão,
    "painting_name": "A Criação de Adão",
    "artist_name": "Michelangelo",
    "description": "A Criação de Adão é um afresco de 280 cm x 570 cm, pintado por Michelangelo Buonarroti por volta de 1511, que fica no teto da Capela Sistina. A cena representa um episódio do Livro do Gênesis no qual Deus cria o primeiro homem a partir do pó da terra: Adão."
  }

];

export default cardsData;
