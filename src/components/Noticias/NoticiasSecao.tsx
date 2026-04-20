import { Link } from 'react-router-dom';
import React, { useState, useMemo } from "react";
import "./NoticiasSecao.css";
import { mockNews } from "../../Data/types/Mock";

const TABS_CONFIG = [
  { id: "Museu", label: "🏛️ No Museu" },
  { id: "Eventos", label: "🎉 Eventos" },
  { id: "Cultura", label: "🎭 Cultura" },
];

const NewsSection: React.FC = () => {
  // 2. TODOS os Hooks devem vir no topo, antes de qualquer 'if' ou 'return'.
  
  const availableTabs = useMemo(() => {
    return TABS_CONFIG.filter(tab => 
      mockNews.some(news => news.category === tab.id && !news.isArchived)
    );
  }, []); // Agora não depende de variáveis internas, então o array vazio [] está seguro.

  // 3. Inicializamos o estado. Se não houver abas, ele será 'undefined', 
  const [activeTab, setActiveTab] = useState(availableTabs[0]?.id);

  // 4. SÓ AGORA fazemos o early return.
  if (availableTabs.length === 0) {
    return null;
  }

  const filteredNews = mockNews.filter((item) => item.category === activeTab && !item.isArchived);

  return (
    <section className="news-tabs-section" id="noticia">
      <div className="news-main-header">
        <h2>Notícias</h2>
      </div>

      <nav className="tabs-navigation">
        {availableTabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            <span className="badge">
              {mockNews.filter(n => n.category === tab.id).length}
            </span>
          </button>
        ))}
      </nav>

      <div className="tab-content" key={activeTab}>
        <div className="horizontal-scroll-row">
          {filteredNews.map((item) => (
            <article key={item.id} className="news-card-horizontal">
              <div className="image-container">
                <img src={item.imageUrl} alt={item.title} loading="lazy" />
                <span className="date-tag">{item.date}</span>
              </div>
              <div className="content-container">
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
                <Link to={`/noticia/${item.id}`} className="link-action">
                  Ler mais →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;