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
    "painting_name": "The Night Café",
    "artist_name": "Van Gogh"
  },

  {
    "id": 8,
    "painting": The_Arnolfini_portrait,
    "painting_name": "The Arnolfini portrait",
    "artist_name": ""
  },

  {
    "id": 10,
    "painting": Van_Gogh_Self_Portrait,
    "painting_name": "Van Gogh Self Portrait",
    "artist_name": "Vincent Van Gogh"
  },

  {
    "id": 11,
    "painting": Monalisa,
    "painting_name": "Mona Lisa",
    "artist_name": "Leonardo da Vinci"
  },

  {
    "id": 12,
    "painting": Maria_Maddalena_Penitente,
    "painting_name": "Maria Maddalena Penitente",
    "artist_name": "Artemisia Gentileschi"
  },

  {
    "id": 13,
    "painting": The_Sleeping_Gypsy,
    "painting_name": "The Sleeping Gypsy",
    "artist_name": "Henri Rousseau"
  },

  {
    "id": 14,
    "painting": The_Basket_of_Apples,
    "painting_name": "The Basket of Apples",
    "artist_name": "Paul Cézanne"
  },

  {
    "id": 15,
    "painting": The_Swing,
    "painting_name": "The Swing",
    "artist_name": "Jean-Honoré Fragonard"
  },

  {
    "id": 16,
    "painting": Girrasois,
    "painting_name": "Doze Girassóis numa Jarra",
    "artist_name": "Vincent van Gogh"
  },

  {
    "id": 17,
    "painting": A_Criação_de_Adão,
    "painting_name": "A Criação de Adão",
    "artist_name": "Michelangelo"
  }

];

export default cardsData;
