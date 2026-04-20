import React from "react";
import { HashLink } from "react-router-hash-link";

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
            <a href="https://www.instagram.com/museudafreguesiademirim" aria-label="Instagram" target="_blank">📸</a>
            <a href="https://www.facebook.com/museudafreguesiademirim/?_rdr" aria-label="Facebook" target="_blank">👥</a>
          </div>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="footer-section links">
          <h4>Navegação</h4>
          <ul>
            <li><HashLink smooth to="/#noticia" onClick={() => window.location.href}>Notícias</HashLink></li>
            <li><HashLink smooth to="/#museu" onClick={() => window.location.href}>Museu</HashLink></li>
            <li><HashLink smooth to="/#associacao" onClick={() => window.location.href}>Associação</HashLink></li>
            <li><a href="https://web.whatsapp.com/send?phone=5548996259998" target="_blank">Fale Conosco</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato e Localização */}
        <div className="footer-section contact">
          <h4>Onde Estamos</h4>
          <p>📍 Rua Centenário, 65</p>
          <p>Imbituba - SC, 88780-000</p>
          <p>📧 freguesiademirim@gmail.com</p>
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