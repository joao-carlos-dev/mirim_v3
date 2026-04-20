import React from "react";
import "./Museu.css";
import { Link } from 'react-router-dom';
import { mockNews } from "../../Data/types/Mock";

const MuseuSecao: React.FC = () => {
  // Buscamos os dados filtrando pela categoria "Museu" e palavras-chave no título
  const getMateria = (termo: string) => 
    mockNews.find(n => n.category === "Museu" && n.title.toLowerCase().includes(termo.toLowerCase()));

  const materiaAcervo = getMateria("Acervo");
  const materiaAmbientes = getMateria("Ambiente");
  const materiaHistoria = getMateria("História");

  const topicos = [
    { 
      title: "Acervo", 
      icon: "🖼️", 
      desc: materiaAcervo?.summary || "Conheça nossas peças.", 
      path: materiaAcervo ? `/noticia/${materiaAcervo.id}` : "#" 
    },
    { 
      title: "Agendamento", 
      icon: "📅", 
      desc: "Reserve sua visita por telefone ou e-mail.", 
      path: "/museu/agendamento" 
    },
    { 
      title: "Ambientes", 
      icon: "🏛️", 
      desc: materiaAmbientes?.summary || "Explore nossas salas.", 
      path: materiaAmbientes ? `/noticia/${materiaAmbientes.id}` : "#" 
    },
    { 
      title: "História", 
      icon: "📜", 
      desc: materiaHistoria?.summary || "Nossa trajetória.", 
      path: materiaHistoria ? `/noticia/${materiaHistoria.id}` : "#" 
    }
  ];

  return (
    <section className="museu-container" id="museu">
      <div className="museu-header">
        <span>Patrimônio Histórico</span>
        <h2>Museu da Freguesia</h2>
      </div>

      <div className="museu-topics-grid">
        {topicos.map((topico, index) => (
          <div key={index} className="topic-card">
            <span className="topic-icon">{topico.icon}</span>
            <h3>{topico.title}</h3>
            <p>{topico.desc}</p>
            <Link to={topico.path} className="topic-btn">Explorar</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MuseuSecao;