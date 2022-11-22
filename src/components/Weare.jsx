import "../styles/stylesaboutus.css";
import Weare from "../img/weare.png";
import Wayang1 from "../img/wayang2.png";

const Wearecomp = () => {
  return (
    <section style={{ display: "flex" }}>
      <div className="weare">
        <img src={Weare} alt="Who We Are" className="auimgweare"></img>
        <div
          className="autextweare"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "right",
            alignContent: "flex-end",
          }}
        >
          <section style={{ textAlign: "right" }}>
            <h1>Who We Are</h1>
            <div className="underline" />
          </section>
          <p className="par-weare">
            Kami hadir untuk kamu para wisatawan yang menginginkan tur budaya
            Indonesia. Lewat platform yang akan terus dikembangkan sesuai dengan
            riset budaya Indonesia, NusaTur akan selalu berusaha menjadi jawaban
            kamu sebagai pecinta tur sekaligus wisata budaya.
          </p>
        </div>
      </div>
      <img src={Wayang1} alt="Wayang 2" className="wayang-position" />
    </section>
  );
};

export default Wearecomp;
