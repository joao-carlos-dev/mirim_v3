import React from "react";
import { Link } from "react-router-dom";
import { mockNews } from "../../Data/types/Mock";
import PaginaGenerica from "../../components/PaginaBase/PaginaBase";
import "./BairroHub.css";

const BairroHubPage: React.FC = () => {
  // Filtramos as matérias históricas (arquivadas)
  const historiasDoBairro = mockNews.filter(
    (n) => n.isArchived === true && n.category === "Mirim"
  );

  return (
    <PaginaGenerica 
      titulo="Conheça o Mirim" 
      subtitulo="Explore os registros, memórias e a cultura do nosso distrito."
    >
      <div className="bairro-grid">
        {historiasDoBairro.map((materia) => (
          <article key={materia.id} className="historia-card">
            <div className="card-thumb">
              <img src={materia.imageUrl} alt={materia.title} />
            </div>
            <div className="card-info">
              <h3>{materia.title}</h3>
              <p>{materia.summary}</p>
              <Link to={`/noticia/${materia.id}`} className="btn-ler">
                Ler História Completa
              </Link>
            </div>
          </article>
        ))}
      </div>
    </PaginaGenerica>
  );
};

export default BairroHubPage;