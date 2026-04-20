import React from "react";
import { Link } from "react-router-dom";
import "./Associacao.css";
import { mockNews } from "../../Data/types/Mock";

const AssociacaoSecao: React.FC = () => {
  // 1. Buscamos a matéria específica sobre a História da Educação (ID 5)
  const materiaEducacao = mockNews.find((n) => n.id === 5);

  // 2. Filtro para Eventos Culturais que NÃO estão arquivados
  const associacaoEvents = mockNews.filter(
    (n) => n.category === "Eventos" && !n.isArchived
  );

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
          {/* Link atualizado para bater com a MembrosPage criada anteriormente */}
          <Link to="/associacao/membros" className="secondary-btn">Ver Diretoria</Link>
        </div>

        {/* Card Mirim (O Território) - AGORA DINÂMICO COM A MATÉRIA ID 5 */}
        <div className="info-card territory">
          <div className="card-icon">📍</div>
          <h3>Conheça Mirim</h3>
          <p>
            {materiaEducacao 
              ? materiaEducacao.summary 
              : "Informações geográficas, turísticas e curiosidades sobre o nosso pedaço de paraíso."}
          </p>
          {/* O link agora leva direto para a matéria completa de história */}
          <Link to="/conheca-mirim" className="secondary-btn">Explorar Bairro</Link>
        </div>
      </div>

      {/* Seção de Eventos Culturais (Mostra apenas se houver eventos novos) */}
      {associacaoEvents.length > 0 && (
        <div className="cultural-events-feed">
          <div className="feed-header">
            <h3>Próximos Eventos Culturais</h3>
            {/* <Link to="/eventos">Calendário Completo</Link> */}
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
                <Link to={`/noticia/${event.id}`} className="go-btn">→</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default AssociacaoSecao;