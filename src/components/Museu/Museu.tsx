import React from "react";
import "./Museu.css";
import { Link } from 'react-router-dom';
// import { mockNews } from "../../Data/types/Mock"; // Importando o mesmo array

const MuseuSecao: React.FC = () => {

  const topicos = [
    { id: 1, title: "Acervo", icon: "🖼️", desc: "Conheça nossas peças.", path: "/museu/acervo" },
    { id: 2, title: "Agendamento", icon: "📅", desc: "Reserve sua visita.", path: "/museu/agendamento" },
    { id: 3, title: "Ambientes", icon: "🏛️", desc: "Explore nossas salas.", path: "/museu/ambiente" },
    { id: 4, title: "História", icon: "📜", desc: "Nossa trajetória.", path: "/museu/historia" },
    { id: 5, title: "Eventos", icon: "📜", desc: "Nossos Eventos.", path: "/museu/eventos" },
  ];

  return (
    <section className="museu-container" id="museu">
      <div className="museu-header">
        <span>Patrimônio Histórico</span>
        <h2>Museu da Freguesia</h2>
      </div>

      {/* Grid de Tópicos - Navegação Fluida */}
      <div className="museu-topics-grid">
        {topicos.map((topico) => (
          <div key={topico.id} className="topic-card">
            <span className="topic-icon">{topico.icon}</span>
            <h3>{topico.title}</h3>
            <p>{topico.desc}</p>
            <Link to={topico.path} className="topic-btn">Explorar</Link>
          </div>
        ))}
      </div>

      {/* Notícias do Museu (Cross-posting automático)
      <div className="museu-related-news">
        <h3>Novidades do Museu</h3>
        <div className="mini-news-list">
          {museumNews.slice(0, 2).map((news) => (
            <div key={news.id} className="mini-news-item">
              <img src={news.imageUrl} alt={news.title} />
              <div>
                <h4>{news.title}</h4>
                <a href={news.link}>Ver detalhes</a>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default MuseuSecao;