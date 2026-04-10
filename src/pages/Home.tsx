import AssociacaoSecao from "../components/Associacao/Associacao";
import MuseuSecao from "../components/Museu/Museu";
import NewsSection from "../components/Noticias/NoticiasSecao";


const Home = () => {
  return (
    <>
      <NewsSection />
      <MuseuSecao />
      <AssociacaoSecao />
    </>
  );
};

export default Home;