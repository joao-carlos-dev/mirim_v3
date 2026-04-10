import type { NewsItem } from "./Noticias";

export const mockNews: NewsItem[] = [
  {
      id: 1,
      title: "Exposição 'Memórias da Freguesia' inicia no Museu",
      summary: "Uma viagem no tempo através de fotos e artefatos doados pelos moradores mais antigos do bairro.",
      category: "Museu",
      date: "04/04/2026",
      imageUrl: "https://picsum.photos/id/1015/800/450",
      images:[ "https://picsum.photos/id/1015/800/450",
        "https://picsum.photos/id/1015/800/450",
        "https://picsum.photos/id/1015/800/450",
        "https://picsum.photos/id/1015/800/450"
      ],

      link: "/noticias/exposicao-museu",
      lenght: 0,
      content: `A exposição 'Memórias da Freguesia' abriu suas portas nesta manhã no Museu da Freguesia de Mirim. O acervo conta com mais de 200 fotografias restauradas que datam desde o início do século XX, mostrando a evolução das construções e o cotidiano dos primeiros moradores.
        Além das fotos, os visitantes podem conferir ferramentas de pesca artesanal e utensílios domésticos que foram doados por famílias tradicionais da região. Segundo o curador da exposição, o objetivo é fortalecer a identidade cultural dos jovens do bairro.
        A entrada é gratuita e a exposição permanecerá aberta de terça a domingo, das 09h às 17h. Esperamos por você para celebrar nossa história!`
  },
  {
      id: 2,
      title: "Nova iluminação na Praça Central",
      summary: "A prefeitura concluiu a instalação de lâmpadas LED, trazendo mais segurança para as caminhadas noturnas.",
      category: "Cultura",
      date: "02/04/2026",
      imageUrl: "https://picsum.photos/id/1015/800/450",
      images:[ "https://picsum.photos/id/1015/800/450",
        "https://picsum.photos/id/1015/800/450"
      ],
      link: "/noticias/obras-praca",
      lenght: 0,
      content: `Os moradores da Freguesia de Mirim já podem desfrutar de uma Praça Central muito mais iluminada. O projeto de modernização substituiu as antigas lâmpadas de vapor de sódio por tecnologia LED de alta eficiência.
        Essa mudança não só reduz o consumo de energia em 40%, como também melhora significativamente a visibilidade durante a noite. 'Agora me sinto muito mais segura para caminhar com meus filhos após o jantar', relatou a moradora Maria Silva. 
        O próximo passo do projeto de revitalização inclui a reforma dos bancos e a instalação de um novo playground para as crianças, previsto para o próximo mês.`
  },
  {
      id: 3,
      title: "Festa Comunitária de Verão",
      summary: "Evento com música ao vivo e comidas típicas para celebrar a integração do bairro.",
      category: "Eventos",
      date: "10/04/2026",
      imageUrl: "https://picsum.photos/id/1015/800/450",
      
      link: "/noticias/festa-comunidade",
      lenght: 0,
      content: `No próximo sábado, a Associação de Moradores realizará a tradicional Festa de Verão. O evento terá início às 14h com apresentações de grupos folclóricos locais e seguirá até a noite com shows de artistas da nossa região.
        A praça de alimentação contará com pratos típicos da Freguesia, como o famoso pirão de peixe e doces artesanais. Todo o valor arrecadado com as barracas será revertido para as melhorias na sede da associação e projetos sociais locais. 
        Traga sua família, sua cadeira de praia e venha participar desse momento de união e alegria!`
  },

    {
      id: 4,
      title: "Festa Comunitária de Verão",
      summary: "Evento com música ao vivo e comidas típicas para celebrar a integração do bairro.",
      category: "Eventos",
      date: "10/04/2026",
      imageUrl: "https://picsum.photos/id/1015/800/450",
      images:[ "https://picsum.photos/id/1015/800/450",
        "https://picsum.photos/id/1015/800/450",
        "https://picsum.photos/id/1015/800/450",
        "https://picsum.photos/id/1015/800/450"
      ],
      link: "/noticias/festa-comunidade",
      lenght: 0,
      content: `No próximo sábado, a Associação de Moradores realizará a tradicional Festa de Verão. O evento terá início às 14h com apresentações de grupos folclóricos locais e seguirá até a noite com shows de artistas da nossa região. A praça de alimentação contará com pratos típicos da Freguesia, como o famoso pirão de peixe e doces artesanais. Todo o valor arrecadado com as barracas será revertido para as melhorias na sede da associação e projetos sociais locais. 
      Traga sua família, sua cadeira de praia e venha participar desse momento de união e alegria!`
  },

];