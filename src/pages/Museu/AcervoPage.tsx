import PaginaGenerica from "../../components/PaginaBase/PaginaBase";

const AcervoPage = () => (
  <PaginaGenerica 
    titulo="Nosso Acervo" 
    subtitulo="Peças que contam a história da nossa Freguesia."
  >
    <div className="galeria-simples">
      <p>Aqui você poderá listar as fotos das peças do museu.</p>
      {/* Futuramente você pode mapear um array de fotos aqui */}
    </div>
  </PaginaGenerica>
);

export default AcervoPage;