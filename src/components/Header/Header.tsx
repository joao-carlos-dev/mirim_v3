import { useState, useEffect } from "react";

import "./header.css";
import logo from "../../assets/icon/logo_freguesia.png";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false); // Estado para o menu mobile

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
        setMenuOpen(false); // Fecha o menu se o usuário rolar para baixo
      } else {
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`cabecalho ${!visible ? "hidden" : ""} ${menuOpen ? "open" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Botão Hambúrguer (Só aparece no Mobile) */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`navegacao ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#noticia" onClick={() => setMenuOpen(false)}>Notícias</a></li>
          <li><a href="#museu" onClick={() => setMenuOpen(false)}>Museu da Freguesia</a></li>
          <li><a href="#associacao" onClick={() => setMenuOpen(false)}>Assoc. de Mirim</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;