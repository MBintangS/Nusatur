import "../styles/stylesaboutus.css";
import Wedo from "../img/wedo.png";

const Wedocomp = () => {
  return (
    <section>
      <div className="wedo">
        <div className="autextwedo">
          <h1>What We Do</h1>
          <div className="garis-bawah-wedo" />
          <p className="par-wedo">
            Kami menawarkan segala pelayanan Paket Wisata Budaya dari berbagai
            daerah di Indonesia. Team support kami yang sudah berpengalaman di
            bidang pariwisata akan berusaha membuat liburan anda di Bali menjadi
            berkesan dan tidak terlupakan.
          </p>
        </div>
        <img src={Wedo} alt="Who We Do" className="auimgwedo"></img>
      </div>
    </section>
  );
};

export default Wedocomp;
