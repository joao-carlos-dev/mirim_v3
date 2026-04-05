import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Coluna 1: Sobre breve */}
        <div className="footer-section about">
          <h3>Freguesia de Mirim</h3>
          <p>
            Preservando a história e fortalecendo a união dos moradores do nosso 
            querido bairro em Imbituba/SC.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Facebook">👥</a>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-section links">
          <h4>Navegação</h4>
          <ul>
            <li><a href="#noticia">Notícias</a></li>
            <li><a href="#museu">Museu</a></li>
            <li><a href="#associacao">Associação</a></li>
            <li><a href="#contato">Fale Conosco</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato e Localização */}
        <div className="footer-section contact">
          <h4>Onde Estamos</h4>
          <p>📍 Estrada Geral do Mirim, S/N</p>
          <p>Imbituba - SC, 88780-000</p>
          <p>📧 contato@freguesiademirim.org</p>
        </div>
      </div>

      {/* Barra Inferior: Legal e Créditos */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} Freguesia de Mirim. Todos os direitos reservados.</p>
        <div className="legal-links">
          <a href="/privacidade">Privacidade</a>
          <a href="/termos">Termos</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;