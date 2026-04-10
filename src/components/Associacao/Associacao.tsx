import React from "react";
import { Link } from "react-router-dom";

import "./Associacao.css";
import { mockNews } from "../../Data/types/Mock";



const AssociacaoSecao: React.FC = () => {
  // Filtro para Eventos Culturais da Associação
  const associacaoEvents = mockNews.filter((n) => n.category === "Eventos");

  return (
    <section className="associacao-container" id="associacao">
      <div className="associacao-intro">
        <div className="intro-text">
          <span>Nossa Comunidade</span>
          <h2>Associação da Freguesia de Mirim</h2>
          <p>
            Trabalhando juntos para preservar nossa cultura, apoiar nossos moradores 
            e fortalecer o desenvolvimento sustentável do nosso bairro.
          </p>
        </div>
      </div>

      <div className="associacao-grid">
        {/* Card Sobre */}
        <div className="info-card about">
          <div className="card-icon">🤝</div>
          <h3>Sobre a Associação</h3>
          <p>Conheça nossa missão, história e como trabalhamos pelo bairro desde a nossa fundação.</p>
          <Link to="/associacao/sobre" className="secondary-btn">Nossa História</Link>
        </div>

        {/* Card Membros */}
        <div className="info-card members">
          <div className="card-icon">👥</div>
          <h3>Membros e Diretoria</h3>
          <p>Conheça as pessoas que dedicam seu tempo para a gestão e melhoria da nossa Freguesia.</p>
          <Link to="/associacao/diretoria" className="secondary-btn">Ver Diretoria</Link>
        </div>

        {/* Card Mirim (O Território) */}
        <div className="info-card territory">
          <div className="card-icon">📍</div>
          <h3>Conheça Mirim</h3>
          <p>Informações geográficas, turísticas e curiosidades sobre o nosso pedaço de paraíso.</p>
          <Link to="/associacao/bairro" className="secondary-btn">Explorar Bairro</Link>
        </div>
      </div>

      {/* Seção de Eventos Culturais (Dinamismo vindo do Mock) */}
      <div className="cultural-events-feed">
        <div className="feed-header">
          <h3>Próximos Eventos Culturais</h3>
          <a href="/eventos">Calendário Completo</a>
        </div>
        
        <div className="events-list">
          {associacaoEvents.slice(0, 3).map((event) => (
            <div key={event.id} className="event-item-horizontal">
              <div className="event-date">
                <span className="day">{event.date.split('/')[0]}</span>
                <span className="month">ABR</span>
              </div>
              <div className="event-info">
                <h4>{event.title}</h4>
                <p>{event.summary}</p>
              </div>
              <button className="go-btn">→</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssociacaoSecao;