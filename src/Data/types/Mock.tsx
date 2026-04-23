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
    title: "O Porto do Progresso: A Epopeia da Navegação na Freguesia de Mirim",
    summary: "No século passado, o Distrito de Mirim não era apenas um local de moradia, mas um importante polo comercial que irradiava desenvolvimento para toda a região banhada pela Lagoa do Mirim e o Rio D’uma",
    category: "Mirim",
    date: "22/09/2025",
    imageUrl: "https://res.cloudinary.com/dcz03mmti/image/upload/v1776635532/foto_materia_04_iowttq.jpg",
    images: ["https://res.cloudinary.com/dcz03mmti/image/upload/v1776636051/foto_lagoa_mirim_02_vcxww6.jpg"],
    link: "/noticia/3",
    isArchived: true,
    content: {
      text: "A Rota Comercial com o Rio de Janeiro. A força econômica da Freguesia era impulsionada por duas grandes empresas de navegação. Elas estabeleceram uma ponte marítima vital entre o Mirim e o Rio de Janeiro (então capital federal). O fluxo era constante e estratégico Exportação: Os barcos saíam do Mirim carregados com o melhor da produção agrícola local, atravessavam a barra da Laguna e seguiam rumo ao norte. Importação: No retorno, traziam artigos manufaturados indispensáveis, que garantiam o consumo e a modernização da população local. As Gigantes da Navegação Duas firmas dominavam as águas da região Clemente José da Silva Pacheco: Operava com uma frota composta pelos barcos Clemente I e Clemente II. Guimarães & Filhos Proprietária do imponente navio São João Del Rei. O Folclore das Águas O Pouca Roupa Toda grande história tem seus personagens icônicos. O navio São João Del Rei acabou ganhando fama na boca do povo por um detalhe curioso: suas velas eram constantemente remendadas, o que lhe rendeu o apelido de Pouca Roupa. O Desabafo de um Português Conta a tradição oral que as pessoas se dirigiam ao Sr Bernardo José de Souza Guimarães, o chefe luso da firma, perguntando: — Quando o Pouca Roupa vai viajar? Irritado com o apelido e com seu sotaque carregado de Portugal, ele respondia prontamente: — Pouca Roupa, não! São João Del Rei! "
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
      text: "O Centro de Tudo: A Capela e a Lagoa O vilarejo cresceu em torno da fé. As famílias vinham do interior e construíam casas para permanecer no Mirim durante as festividades, especialmente a Festa do Divino Espírito Santo. Além da religião, a localização era estratégica: o acesso facilitado pelo transporte marítimo na lagoa e a abundância da pesca garantiam o sustento e o desenvolvimento da comunidade açoriana. A Grande Reforma do Cônego César Rossi A Igreja que vemos hoje começou a ganhar sua forma atual em 1928, sob a liderança do Cônego César Rossi. O desafio era imenso. Inicialmente, Rossi tentou fabricar os próprios tijolos em uma olaria rústica perto da ladeira de Mirim, mas a falta de mão de obra qualificada frustrou o plano. Sem desistir, o Cônego buscou recursos no sul do estado. Curiosidade Logística: Os tijolos vinham por trem (Estrada de Ferro Dona Teresa Cristina) até Vila Nova. De lá, o povo do Mirim — lavradores, pescadores e até crianças — carregava os tijolos em carros de bois por um trajeto de 6 km até a obra. O chiar característico dos eixos dos carros era ouvido de longe em longas filas pela estrada. Paredes de Pedra e Mãos de Mestre No dia 21 de fevereiro de 1929, a antiga fachada de pedras foi demolida para dar lugar à nova nave e à torre. O trabalho pesado exigiu o uso de talhas e dormentes para pôr abaixo as sólidas paredes antigas. Mestres pedreiros de Laguna, como José Alano e Egídio Pegorara, foram os responsáveis por erguer o corpo da igreja que hoje é o símbolo do distrito. O Sino de 500kg e a Generosidade de Sambaqui. A torre precisava de um som à altura de sua imponência. Os sinos antigos estavam rachados, e o conserto era caro. O Cônego Rossi contou então com a ajuda de Irineu Capanema, um comerciante de Sambaqui. O gesto: Capanema doou toda a renda das vendas de um domingo de seu armazém para a igreja. O resultado: Com esse valor, fundiu-se em Blumenau o novo sino de 500 quilos, feito com o bronze dos sinos antigos. Ele foi içado para a torre em 1935, após ajustes precisos no piso da torre para que pudesse passar. Detalhes que Eternizam a Fé. A beleza final da Igreja veio com acabamentos cheios de significado: A Fachada: Recebeu a frase em latim 'Deo In Hon Sae Annae' (A Deus em Honra a Sant’Ana). O Batistério: Ganhou azulejos decorados retratando o Batismo de Jesus. A Sacristia: Anos depois, foi ampliada com pedras trazidas do morro, consolidando o complexo que hoje admiramos."
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
      text: "A trajetória do ensino no Distrito de Mirim é profunda e remonta aos tempos do Brasil Império. Registros históricos e pesquisas na comunidade confirmam que, já nos idos de 1800, a então Freguesia de Sant’Ana do Merim já irradiava conhecimento através de suas primeiras escolas públicas. Os Primeiros Mestres e a Transição para a República. Antes mesmo da virada do século XX, nomes como o Mestre Simplício José dos Reis e o Professor Leopoldo de Souza Guimarães já formavam as primeiras gerações. Curiosamente, a escola era o centro da vida civil: era nas salas de aula do 'sexo masculino' que transcorriam as eleições para Deputados e Senadores nos primeiros anos da República (1890-1891). O Jornal 'O Brasil' e a Era de Ouro (1930 - 1940) Um dos maiores marcos pedagógicos ocorreu sob a regência da Professora Argentina Cardoso de Oliveira (1932-1943). Naquela época, a então Escola Mista de Mirim inovou ao criar o Jornal O Brasil, um órgão mensal da escola. Relíquias Históricas: Até hoje, exemplares originais dos anos de 1937 e 1939 estão preservados nos arquivos da Escola Marcílio Dias S. Thiago, testemunhando o protagonismo dos 45 alunos daquela época. A Escola Paroquial e o Reforço Escolar Entre 1933 e 1937, o Cônego César Rossi liderou a criação da Escola Paroquial do Distrito de Mirim. Com o auxílio da professora Betina Ferreira de Souza, essa instituição funcionava de forma inovadora: oferecia aulas paralelas para as crianças da Escola Estadual, funcionando como o que hoje conhecemos por 'aulas de reforço'. Havia inclusive aulas noturnas patrocinadas pelo Clube Recreativo e Esportivo Cruzeiro do Sul. O Marco de 1950: O Primeiro Prédio Próprio Até a metade do século XX, as aulas aconteciam de forma improvisada na casa dos professores ou em residências alugadas. O cenário mudou drasticamente em 20 de agosto de 1950, com a inauguração do primeiro prédio escolar dedicado: a Escola Mista Sant’Ana. Estrutura: Localizada na Praça Sant’Ana, a escola contava com duas salas de aula, homenageando o Presidente Eurico Gaspar Dutra e o Prefeito Alberto Crippa. Vida Escolar Ativa: Associações e Clubes A educação em Mirim sempre foi além das salas de aula. Ao longo das décadas de 40 e 50, as escolas mantiveram vivas diversas associações que integravam a comunidade: Pelotão de Saúde e Clube Agrícola. Círculo de Pais e Professores. Liga Pró-Língua Nacional. Rumo ao Presente: Do Sant’Ana ao Marcílio Dias Na década de 60, a instituição evoluiu para 'Escola Reunida Sant’Ana'. Sob a direção de nomes dedicados como Josina Teixeira Pacheco, Hildebrandina Rodrigues Rocha e Izeni Cardoso de Oliveira, a escola preparava os alunos para o rigoroso exame de admissão ao ginásio. Em dezembro de 1969, a Escola Reunida encerrou suas atividades para dar lugar a uma nova era: a abertura do Grupo Escolar Professor Marcílio Dias S. Thiago em 1970, instituição que até hoje carrega o legado secular da educação em nosso distrito."
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
    ],
    link: "/noticia/6",
    isArchived: true,
    content: {
      text: "A comunidade secular de Mirim preserva em seus ritos uma das tradições mais belas de Santa Catarina. Assim como em outros núcleos de colonização açoriana (como Vila Nova e Sambaqui), a devoção ao Divino Espírito Santo e à Padroeira Sant’Ana é o que define o espírito do povo mirinense — uma união de humildade, louvação e profunda devoção. O Peditório e a Chegada da Bandeira Os preparativos começam muito antes do dia festivo. A Bandeira do Divino sai em 'peditório', percorrendo diversas comunidades para arrecadar ofertas, sempre acompanhada pelos foliões e seus cânticos tradicionais. O ciclo de orações oficial, as novenas, tem início apenas quando a Bandeira retorna triunfante à Igreja Matriz. A Corte Imperial e o Ritual de Sábado O ponto alto da tradição ocorre no final de semana da festa com a apresentação da Corte Imperial. No sábado, a Bandeira e a banda musical buscam os integrantes da Corte na casa do casal festeiro. O momento é marcado por um encontro emocionante com a imagem de Sant’Ana na casa de devotos, seguido por uma procissão em direção à lagoa, onde a queima de fogos e o repicar dos sinos anunciam a chegada do cortejo à Igreja. O Domingo de Festa e a Coroação O domingo é o dia de gala da Freguesia. Durante a Missa Festiva, acontece o momento mais solene: a Coroação do Imperador. Ao som do Hino Nacional Brasileiro executado pela banda, o rito simboliza a soberania do Divino sobre a comunidade.Ao final da tarde, a festa se encerra com uma nova procissão, onde o compromisso é renovado: o casal festeiro do ano seguinte recebe a Coroa do Divino, garantindo a continuidade da tradição para o próximo ciclo. A 'Farinhada' e a Mudança no Calendário Diferente de outras regiões que celebram o Divino em maio ou junho (Pentecostes), em Mirim a festa acontece em novembro. Essa escolha histórica demonstra a ligação profunda da Igreja com a terra: o mês foi escolhido para não coincidir com o período da farinhada (colheita e produção de farinha de mandioca). Como a maioria dos moradores vivia da roça e da lagoa, a festa só poderia acontecer após o trabalho duro no campo, permitindo que a comunidade oferecesse o fruto do seu suor como doação à Igreja. A Celebração Social Além do rito religioso, a parte social no salão paroquial fortalece os laços comunitários. Quermesses, danças e atrações culturais garantem a arrecadação de fundos para a manutenção da paróquia, celebrando a alegria de ser parte da Freguesia de Mirim."
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
