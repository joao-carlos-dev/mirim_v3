import React from "react";
import "./Agendamento.css";
import PaginaGenerica from "../../components/PaginaBase/PaginaBase";

const AgendamentoPage: React.FC = () => {

  const mensagemWhatsapp = encodeURIComponent("Olá! Gostaria de agendar uma visita ao Museu da Freguesia.");
  const numeroTelefone = "5548996259998";
  return (
    <PaginaGenerica 
      titulo="Agendamento de Visitas" 
      subtitulo="Organize sua visita guiada ou em grupo ao Museu da Freguesia."
    >
      <div className="agendamento-container">
        
        {/* Cards de Contato Rápido */}
        <div className="contato-grid">
          <div className="contato-card">
            <div className="contato-icon">📞</div>
            <h3>Telefone</h3>
            <p>(48) 3255-7006</p>
            <a href="tel:554832557006" className="btn-contato">Ligar agora</a>
          </div>

          <div className="contato-card">
            <div className="contato-icon">✉️</div>
            <h3>E-mail</h3>
            <p>freguesiademirim@gmail.com</p>
            <a href="mailto:freguesiademirim@gmail.com" className="btn-contato">Enviar E-mail</a>
          </div>

          <div className="contato-card">
            <div className="contato-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>Agendamento imediato</p>
            <a href={`https://wa.me/${numeroTelefone}?text=${mensagemWhatsapp}`}  target="_blank" rel="noopener noreferrer" className="btn-contato whatsapp">Chamar no Whats</a>
          </div>
        </div>

        {/* Informações de Apoio */}
        <div className="info-agendamento">
          <h2>O que você precisa saber:</h2>
          <div className="info-lista">
            <div className="info-item">
              <strong>🕒 Horários:</strong>
              <p>Quinta a Sexta, das 13:00 às 17:00.</p>
              <p>Sabádo, das 14:00 às 17:00.</p>
            </div>
            <div className="info-item">
              <strong>Atenção</strong>
              <p>Antes de acessar o local entre em contato, para consultar a disponibilidade</p>
            </div>
            <div className="info-item">
              <strong>📍 Localização:</strong>
              <p>Praça Sant'Ana, Distrito de Mirim, Imbituba - SC.</p>
            </div>
          </div>
        </div>
      </div>
    </PaginaGenerica>
  );
};

export default AgendamentoPage;