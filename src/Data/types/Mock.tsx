import type { NewsItem } from "./Noticias";

// import cartaz01 from "../../img/cartaz01.jpeg";

export const mockNews: NewsItem[] = [
 {
   id: 1,
   title: "170 Anos do Mirim: Uma celebração de história, cultura e tradição",
   summary: "O distrito de Mirim comemora seu centésimo septuagésimo aniversário com uma programação especial na Praça Sant'Ana no dia 26 de abril.",
   category: "Eventos",
   date: "26/04/2026",
   imageUrl: "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635057/cartaz01_c1nkbx.jpg",
   images: [
     "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635445/cartaz02_rcer7g.jpg",
     "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635445/cartaz03_wzwgrg.jpg"
   ],
   link: "/noticia/1",
   content: {
     text: "O distrito de Mirim se prepara para um momento histórico. No próximo dia 26 de abril, a comunidade celebra 170 anos de fundação com um evento que promete reunir famílias na Praça Sant'Ana para exaltar as raízes e a identidade local. O presidente da Sociedade Cultural da Freguesia de Mirim, Renato, destaca que a celebração foi organizada com o esforço direto da associação e colaboradores. 'Estamos chegando aos 170 anos e, para não deixar passar em branco, faremos uma comemoração singela, mas de muito significado', afirmou Renato em comunicado à comunidade.",
     agenda: [
       { hora: "07:00h", atividade: "NASF em Movimento" },
       { hora: "09:00h", atividade: "Celebração na Igreja Sant'Ana" },
       { hora: "10:00h", atividade: "Projeto Escola Sonora" },
       { hora: "10:30h", atividade: "Boi de Mamão da ACORDI" },
       { hora: "11:00h", atividade: "Capoeira Rucungo" },
       { hora: "12:00h", atividade: "Parabéns ao Mirim" }
     ]
   },
   lenght: 0
 },
 {
   id: 2,
   title: "Abertura Oficial do Museu da Freguesia de Sant’Ana",
   summary: "Espaço reformado valoriza a história de Imbituba através de exposições artísticas e preservação da memória local.",
   category: "Museu",
   date: "14/10/2023",
   imageUrl: "/img/frente_museo.png",
   link: "/noticia/2",
   isArchived: true,
   content: {
     text: "O museu funciona no prédio que abrigou a primeira escola do município quando este ainda pertencia a Laguna. Segundo a Diretora de Cultura, Alessandra Santos, manter essas memórias vivas é uma forma de incentivar a população a valorizar a identidade cultural local. O espaço servirá para exposições que reavivam a história regional."
   },
   lenght: 0
 },
  {
    id: 3,
    title: "Memória das águas: a história da Lagoa do Mirim",
    summary: "Uma reflexão sobre a importância histórica e ambiental da Lagoa do Mirim na subsistência das comunidades.",
    category: "Mirim",
    date: "22/09/2025",
    imageUrl: "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635532/foto_materia_04_iowttq.jpg",
    images: ["https://res.cloudinary.com/dcz03mmti/image/upload/v1776636051/foto_lagoa_mirim_02_vcxww6.jpg"],
    link: "/noticia/3",
    isArchived: true,
    content: {
      text: "Historicamente, a Lagoa do Mirim garantiu o comércio, a alimentação e a vida das pessoas que dela dependiam, desde os povos sambaquieiros até os colonizadores. O texto destaca a resistência das comunidades e a relevância da Primavera dos Museus para debater mudanças climáticas e a preservação ambiental do ecossistema local."
    },
    lenght: 0
  },
  {
    id: 4,
    title: "Fundação da Freguesia de Sant’Ana de Mirim",
    summary: "Registros históricos apontam o desenvolvimento do distrito em torno da fé e da pesca artesanal.",
    category: "Mirim",
    date: "13/07/1852",
    imageUrl: "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635532/foto_materia_03_fywmx5.jpg",
    images: ["https://res.cloudinary.com/dcz03mmti/image/upload/v1776636219/fund_mirim_03_jad2mp.jpg",
      "https://res.cloudinary.com/dcz03mmti/image/upload/v1776636218/fund_mirim_02_vwyat9.jpg"
    ],
    link: "/noticia/4",
    isArchived: true,
    content: {
      text: "Embora a data exata da fundação seja incerta, documentos de 1852 mostram determinações da Câmara de Laguna para medição de terrenos. O vilarejo desenvolveu-se com base na cultura açoriana, tendo a Igreja Sant'Ana como centro geográfico e social das comunidades de lavradores e pescadores."
    },
    lenght: 0
  },
  {
    id: 5,
    title: "História da Educação no Distrito de Mirim",
    summary: "Um panorama do ensino desde os idos de 1800 até a criação do Grupo Escolar Marcílio Dias S. Thiago.",
    category: "Mirim",
    date: "20/08/1950",
    imageUrl: "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635531/foto_materia_02_p4v5nz.jpg",
    link: "/noticia/5",
    isArchived: true,
    content: {
      text: "O ensino na região remonta ao Período Imperial. Em 1950, foi inaugurado o prédio escolar na Praça Sant'Ana com as primeiras salas oficiais. A matéria detalha a trajetória de diversos professores, como Argentina Cardoso de Oliveira e Josina Teixeira Pacheco, que marcaram gerações no distrito."
    },
    lenght: 0
  },
  {
    id: 6,
    title: "Tradição: Festa do Divino Espírito Santo e Sant'Ana",
    summary: "A celebração secular luso-açoriana que une a comunidade em torno da fé e da tradição em Mirim.",
    category: "Mirim",
    date: "15/11/2024",
    imageUrl: "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635491/foto_1955_gwkoi4.jpg",
    images: ["https://res.cloudinary.com/dcz03mmti/image/upload/v1776635490/foto_1947_lmqaju.jpg",
      "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635491/foto_1964_hvxve7.jpg",
      "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635493/foto_1970_hqsxme.jpg",
      "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635496/foto_1980_jo2yjw.jpg",
      "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635499/foto_1988_nhghkd.jpg",
      "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635502/foto_1998_eikrag.jpg",
      ""
    ],
    link: "/noticia/6",
    isArchived: true,
    content: {
      text: "Presença marcante no calendário religioso desde 1856, a festa inclui a saída da bandeira para peditório e o cortejo da Corte Imperial. Domingo é o dia auge com a coroação do imperador, mantendo viva a louvação e devoção transmitida pelos antepassados luso-açorianos."
    },
    lenght: 0
  },

  {
    id: 7,
    title: "História do Museu",
    summary: "O edifício que abrigou a primeira escola de Mirim hoje preserva a nossa memória.",
    category: "Museu",
    isArchived: true,
    imageUrl: "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635531/foto_materia_02_p4v5nz.jpg",
    content: {
      text: "O Museu da Freguesia de Mirim está sediado num edifício de grande valor histórico, tendo abrigado a primeira escola do município na época em que o território ainda pertencia a Laguna. Este património foi revitalizado para servir como um espaço de memória dedicado a reavivar a história local e a incentivar a valorização da identidade cultural da comunidade."
    },
    lenght: 0,
    date: "",
    link: ""
  },

   {
    id: 8,
    title: "Acervo Histórico",
    summary: "História contada através dos objetos",
    category: "Museu",
    isArchived: true,
    imageUrl: "https://res.cloudinary.com/dcz03mmti/image/upload/v1776725595/museu.02_zim40l.jpg",
    images: ["https://res.cloudinary.com/dcz03mmti/image/upload/v1776725596/museu.04_yxe8xi.jpg",
      "https://res.cloudinary.com/dcz03mmti/image/upload/v1776725595/museu.01_yuyc3l.jpg",
      "https://res.cloudinary.com/dcz03mmti/image/upload/v1776725595/museu.03_xpar4l.jpg"
    ],
    content: {
      text: "O nosso acervo celebra a herança luso-açoriana, com foco especial nos elementos do Culto ao Divino Espírito Santo, como a Bandeira e a Coroa do Divino. A coleção inclui ainda trajes históricos da Corte Imperial, mobiliário típico, a reconstituição de um quarto açoriano, o tradicional fogão a lenha e diversos artesanatos confeccionados pela associação Assiart."
    },
    lenght: 0,
    date: "",
    link: ""
  },
  {
    id: 9,
    title: "Nosso ambiente",
    summary: "Cada espaço, uma história",
    category: "Museu",
    isArchived: true,
    imageUrl: "https://res.cloudinary.com/dcz03mmti/image/upload/v1776725795/frente_museo_jsauwl.png",
    content: {
      text: "O edifício foi totalmente reformado para oferecer salas adequadas a exposições artísticas e ações culturais voltadas para a comunidade. O complexo destaca-se por integrar a histórica sede dos Correios do bairro Mirim, funcionando como um ponto de encontro que une a preservação do passado à vida cultural ativa do distrito."
    },
    lenght: 0,
    date: "",
    link: ""
  },

];
