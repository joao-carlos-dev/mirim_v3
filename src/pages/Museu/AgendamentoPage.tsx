import PaginaGenerica from "../../components/PaginaBase/PaginaBase";

const AgendamentoPage = () => (
  <PaginaGenerica 
    titulo="Agendamento de Visitas" 
    subtitulo="Traga sua escola ou grupo para conhecer o Museu."
  >
    <form className="form-agendamento">
      <p>Em breve, um formulário completo para reservas aqui.</p>
      <input type="text" placeholder="Seu nome" />
      <button type="submit">Enviar Solicitação</button>
    </form>
  </PaginaGenerica>
);

export default AgendamentoPage;