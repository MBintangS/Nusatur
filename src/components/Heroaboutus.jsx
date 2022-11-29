import "../styles/stylesaboutus.css";
import Aboutushero from "../img/aboutushero.png";

const Heroaboutuscomp = () => {
  return (
    <>
      <img src={Aboutushero} alt="About Us" className="auheropict" />
      <h1 className="auherotext">About Us</h1>
    </>
  );
};

export default Heroaboutuscomp;
