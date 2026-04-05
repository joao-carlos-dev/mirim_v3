import AssociacaoSecao from "./components/Associacao/Associacao";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MuseuSecao from "./components/Museu/Museu";
import NewsSection from "./components/Noticias/NoticiasSecao";

function App() {
  return (
    <>
      <Header />
      <NewsSection />
      <MuseuSecao />
      <AssociacaoSecao />
      <Footer />
    </>
  );
}

export default App;
