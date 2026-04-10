// components/Layout/PaginaGenerica.tsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./PaginaBase.css";

interface PaginaProps {
  titulo: string;
  subtitulo?: string;
  children: React.ReactNode; // Aqui entra o conteúdo específico de cada página
}

const PaginaGenerica: React.FC<PaginaProps> = ({ titulo, subtitulo, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0); // Sempre abre no topo
  }, []);

  return (
    <main className="pagina-container">
      <header className="pagina-header">
        <Link to="/" className="btn-voltar">← Voltar ao Início</Link>
        <h1>{titulo}</h1>
        {subtitulo && <p className="subtitulo">{subtitulo}</p>}
      </header>
      
      <section className="pagina-conteudo">
        {children}
      </section>
    </main>
  );
};

export default PaginaGenerica;