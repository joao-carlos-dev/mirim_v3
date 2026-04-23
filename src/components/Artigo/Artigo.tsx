import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Corrigido: Caminho padrão do Swiper nas versões atuais
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { mockNews } from "../../Data/types/Mock";
import "./Artigo.css";
import { Helmet } from "react-helmet-async";

const Artigo: React.FC = () => {
  const { id } = useParams();

  const noticia = mockNews.find((item) => item.id === Number(id));

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
      <Helmet>
      <title>{noticia.title} | Freguesia de Mirim</title>
      <meta name="description" content={noticia.summary} />
      
    </Helmet>
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
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
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
          <figure className="artigo-banner-unico">
            <img src={noticia.imageUrl} alt={noticia.title} />
          </figure>
        )}
      </div>

      <div className="artigo-content">
        {/* Renderiza o texto principal da matéria */}
        <p className="texto-principal">
          {noticia.content?.text}
        </p>

        {/* Renderiza a Agenda/Cronograma apenas se ela existir no Mock */}
        {noticia.content?.agenda && (
          <div className="agenda-secao">
            <h3>Cronograma do Evento</h3>
            <div className="agenda-timeline">
              {noticia.content?.agenda.map((item, index) => (
                <div key={index} className="agenda-card">
                  <div className="agenda-hora">{item.hora}</div>
                  <div className="agenda-info">{item.atividade}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default Artigo;