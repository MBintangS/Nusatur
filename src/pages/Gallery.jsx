import HOC from "../components/HOC";
<<<<<<< HEAD

const Gallery = () => {
    return (
        <>
            <HOC headerTitle="Gallery">
                <h1>Ini Gallery</h1>
            </HOC>
        </>
=======
import "../styles/styles.css";

const Gallery = () => {
    return (
        <HOC headerTitle="Gallery">
            <h1 className="beranda">Halaman Gallery</h1>
        </HOC>
>>>>>>> 0d15e8b (rebuild UI)
    );
};

export default Gallery;
