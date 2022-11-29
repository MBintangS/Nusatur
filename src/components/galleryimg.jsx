import React, {useEffect} from "react";
import { Image } from "react-bootstrap";
import reogImage from "../img/gallery/Reog.png";
import adatImage from "../img/gallery/Adat.png";
import kuningImage from "../img/gallery/Kuning.png";
import samanImage from "../img/gallery/Saman.png";
import lompatImage from "../img/gallery/Lompat.png";
import kendangImage from "../img/gallery/Kendang.png";
import cantingImage from "../img/gallery/Canting.png";
import tenunImage from "../img/gallery/Tenun.png";
import sapiImage from "../img/gallery/Sapi.png";
import "../styles/styletableimg.css";
import AOS from "aos" //for animation
import 'aos/dist/aos.css' 

const Galleryimg = () => {
  useEffect(() => {
    AOS.init({duration: 1500});
  }, []);
  return (
    <section className="container gallery"  data-aos="fade-up">
      <section className="gallery-1">
        <div className="container-img">
          <Image src={reogImage} alt="img" className="images" />
          <div className="contentimg">
            <p>Reog Ponorogo</p>
          </div>
        </div>

        <div className="container-img" >
          <Image src={kuningImage} alt="img" className="images" />
          <div className="contentimg">
            <p>Desa Bersih</p>
          </div>
        </div>

        <div className="container-img">
          <Image src={adatImage} alt="img" className="images" />
          <div className="contentimg">
            <p>Upacara Adat</p>
          </div>
        </div>
      </section>
      <section className="gallery-2-container"  data-aos="fade-up">
        <section className="gallery-2">
          <div className="container-img">
            <Image src={samanImage} alt="img" className="images" />
            <div className="contentimg">
              <p>Tari Saman</p>
            </div>
          </div>

          <section className="gallery-2-bottom">
            <div className="container-img">
              <Image src={kendangImage} alt="img" className="images" />
              <div className="contentimg">
                <p>Gendang</p>
              </div>
            </div>
            <div className="container-img">
              <Image src={tenunImage} alt="img" className="images" />
              <div className="contentimg">
                <p>Menenun</p>
              </div>
            </div>
          </section>
        </section>
        <div className="container-img">
          <Image src={lompatImage} alt="img" className="images" />
          <div className="contentimg">
            <p>Lompat Batu Nias</p>
          </div>
        </div>
      </section>
      <section className="gallery-3"  data-aos="fade-up">
        <div className="container-img">
          <Image src={cantingImage} alt="img" className="images" />
          <div className="contentimg">
            <p>Mencanting</p>
          </div>
        </div>
        <div className="container-img">
          <Image src={sapiImage} alt="img" className="images" />
          <div className="contentimg">
            <p>Karakan Sapi</p>
          </div>
        </div>
      </section>
      <section className="gallery-1"  data-aos="fade-up">
        <div className="container-img">
          <Image src={reogImage} alt="img" className="images" />
          <div className="contentimg">
            <p>Reog Ponorogo</p>
          </div>
        </div>
        <div className="container-img">
          <Image src={kuningImage} alt="img" className="images" />
          <div className="contentimg">
            <p>Desa Bersih</p>
          </div>
        </div>
        <div className="container-img">
          <Image src={adatImage} alt="img" className="images" />
          <div className="contentimg">
            <p>Upacara Adat</p>
          </div>
        </div>
      </section>
    <div className="btn-gallery text-center">
      <button>Read More</button>
    </div>
    </section>
  );
};

export default Galleryimg;
