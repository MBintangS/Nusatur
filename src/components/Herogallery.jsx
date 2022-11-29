import "../styles/Herogallery.css";
import Galleryhero from "../img/bg-gallery.png";

const Herogallery = () => {
  return (
    <>
      <img src={Galleryhero} alt="About Us" className="heroimg" />
      <h1 className="herotext">Gallery</h1>
    </>
  );
};

export default Herogallery;
