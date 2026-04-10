import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import 'swiper/swiper.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { mockNews } from "../../Data/types/Mock";
import "./Artigo.css";

const Artigo: React.FC = () => {
  const { id } = useParams(); // Pega o ID da URL

  // Procura a notícia no Mock pelo ID
  const noticia = mockNews.find((item) => item.id === Number(id));

  // Scroll para o topo sempre que abrir uma matéria
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!noticia) {
    return <div className="error-page">Notícia não encontrada!</div>;
  }

  const todasAsFotos = noticia.images
    ? [noticia.imageUrl, ...noticia.images]
    : [noticia.imageUrl];

  const temVariasFotos = todasAsFotos.length > 1;

  return (
    <article className="artigo-container">
      <header className="artigo-header">
        <Link to="/" className="back-link">
          ← Voltar para o início
        </Link>
        <div className="meta-info">
          <span className="categoria">{noticia.category}</span>
          <time>{noticia.date}</time>
        </div>
        <h1>{noticia.title}</h1>
        <p className="resumo">{noticia.summary}</p>
      </header>

      <div className="artigo-media-wrapper">
        {temVariasFotos ? (
          // CENÁRIO A: MAIS DE UMA FOTO -> CARROSSEL
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true} // Setas
            pagination={{ clickable: true }} // Pontinhos
            autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-play opcional
            loop={true} // Infinito
            className="artigo-carousel"
          >
            {todasAsFotos.map((foto, index) => (
              <SwiperSlide key={index}>
                <img
                  src={foto}
                  alt={`Slide ${index + 1} de ${noticia.title}`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          // CENÁRIO B: APENAS UMA FOTO -> BANNER ESTÁTICO
          <figure className="artigo-banner-unico">
            <img src={noticia.imageUrl} alt={noticia.title} />
          </figure>
        )}
      </div>
      {/* <div className={`galeria-dinamica qtd-${todasAsFotos.length}`}>
        {todasAsFotos.map((foto, index) => (
          <div key={index} className="foto-item">
            <img src={foto} alt={`Imagem ${index + 1} da matéria`} loading="lazy" />
          </div>
        ))}
      </div> */}
      {/* <figure className="artigo-banner">
        <img src={noticia.imageUrl} alt={noticia.title} />
      </figure> */}

      <div className="artigo-content">
        {/* Aqui você pode simular o texto completo da matéria */}
        {noticia.content}.
      </div>
    </article>
  );
};

export default Artigo;
