import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Artigo from "./components/Artigo/Artigo";
import Home from "./pages/Home";
import AcervoPage from "./pages/Museu/AcervoPage";
import MuseuHistoriaPage from "./pages/Museu/MuseuHistoriaPage";
import AgendamentoPage from "./pages/Museu/AgendamentoPage";
import SobrePage from "./pages/Associacao/SobrePage";
import MembrosPage from "./pages/Associacao/MembrosPage";
import BairroHubPage from "./components/Associacao/BairroHubPage";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticia/:id" element={<Artigo />} />

        <Route path="/museu/acervo" element={<AcervoPage />} />
        <Route path="/museu/historia" element={<MuseuHistoriaPage />} />
        <Route path="/museu/agendameno" element={<AgendamentoPage />} />

        <Route path="/associacao/sobre" element={<SobrePage />} />
        <Route path="/associacao/membros" element={<MembrosPage />} />
        <Route path="/conheca-mirim" element={<BairroHubPage />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
