import HOC from "../components/HOC";
import Hero from "../components/Hero";
import Layanan from "../components/Layanan";
import Caraousel from "../components/Caraosel";
import Panduan from "../components/Panduan";
import Rekomendasi from "../components/Rekomendasi";
import Articlebloghome from "../components/Articlebloghome";
import Apakatamereka from "../components/Apakatamereka";
import Infotari from "../components/Infotari";
import Boxexplore from "../components/Boxexplore";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <HOC headerTitle="Home">
      <Hero />
      <Layanan />
      <Caraousel />
      <Infotari />
      <Panduan />
      <Rekomendasi />
      <Articlebloghome />
      <Apakatamereka />
      <Boxexplore />
      <Footer />
    </HOC>
  );
};

export default Home;
