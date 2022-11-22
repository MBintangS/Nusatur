<<<<<<< HEAD
import { Container } from "react-bootstrap";
import HOC from "../components/HOC";
import Hero from "../components/Hero";
import Layanan from "../components/Layanan"
import Caraousel from "../components/Caraosel"
import Panduan from "../components/Panduan"
import Rekomendasi from "../components/Rekomendasi"

const Home = () => {
    return (
        
        <HOC headerTitle = "Home">
            <Hero />
            <Layanan />
            <Caraousel />
            <Panduan />
            <Rekomendasi />
        </HOC>
        
=======
import HOC from "../components/HOC";
import "../styles/styles.css";

const Home = () => {
    return (
        <HOC>
            <h1 className="beranda">Halaman Home</h1>
        </HOC>
>>>>>>> 0d15e8b (rebuild UI)
    );
};

export default Home;
