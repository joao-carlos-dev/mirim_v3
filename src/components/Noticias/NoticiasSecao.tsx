import React, { useState } from "react";
import "./NoticiasSecao.css";
// import type { NewsItem } from "../../Data/types/Noticias";
import { mockNews } from "../../Data/types/Mock"


const NewsSection: React.FC = () => {
  const tabs = [
    { id: "Museu", label: "🏛️ No Museu" },
    { id: "Eventos", label: "🎉 Eventos" },
    { id: "Cultura", label: "🎭 Cultura" },
  ];

  const [activeTab, setActiveTab] = useState("Museu");

  // Filtramos as notícias baseadas na aba ativa
  const filteredNews = mockNews.filter((item) => item.category === activeTab);

  // O componente PRECISA retornar o JSX diretamente aqui
  return (
    <section className="news-tabs-section" id="noticia">
      <div className="news-main-header">
        <h2>Notícias</h2>
      </div>

      {/* Navegação por Abas */}
      <nav className="tabs-navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
            {/* Mostra a contagem apenas na aba ativa para um visual limpo */}
            {activeTab === tab.id && (
              <span className="badge">{filteredNews.length}</span>
            )}
          </button>
        ))}
      </nav>

      {/* Conteúdo da Aba Ativa */}
      <div className="tab-content" key={activeTab}>
        {" "}
        {/* O 'key' ajuda na animação de troca */}
        {filteredNews.length > 0 ? (
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
                  <a href={item.link} className="link-action">
                    Ler mais →
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>
              Nenhuma notícia encontrada em <strong>{activeTab}</strong> por
              enquanto.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
