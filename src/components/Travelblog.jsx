// import Card from "react-bootstrap/Card";
import "../styles/artikelblog.css"
import { Col, Container, Row } from "react-bootstrap";
import {} from "react-bootstrap";
import Travelblogcard from "./Travelblogcard";
import artikel1 from "../img/artikel1.png"
import artikel2 from "../img/artikel2.png"
import artikel3 from "../img/artikel3.png"
import artikel4 from "../img/artikel4.png"
import artikel5 from "../img/artikel5.png"
import artikel6 from "../img/artikel6.png"
import artikel7 from "../img/artikel7.png"
import artikel8 from "../img/artikel8.png"
import artikel9 from "../img/artikel9.png"

import {ARTICLE} from "../routes"

const artikelBlog = () => {

  return (
    <>
    <section className="cardblog"> 
        <div> 
          <div className="card-blog"> 
            <Container> 
              <Row className="justify-content-center"> 
                <Col className="mx-auto"> 
                  <Travelblogcard
                    artikelimage={artikel1} 
                    artikeljudul="Tips dan trik liburan sesuai budget dengan nusatur" 
                    artikeltanggal="Nov 10, 2022" 
                  /> 
                </Col> 
                <Col> 
                  <Travelblogcard
                    artikelimage={artikel2} 
                    artikeljudul="Bingung memilih makanan ringan indonesia? Cari tau disini " 
                    artikeltanggal="Nov 01, 2022" 
                  /> 
                </Col> 
                <Col> 
                  <Travelblogcard
                    artikelimage={artikel3} 
                    artikeljudul="Tarian kuda lumping, tarian khas ponorogo ini sedang ramai ......" 
                    artikeltanggal="Oct 19, 2022" 
                  /> 
                </Col> 
              </Row> 
            </Container> 
            <Container> 
              <Row> 
                <Col> 
                  <Travelblogcard
                    artikelimage={artikel4} 
                    artikeljudul="GARUDA WISNU KENCANA, Ikon Peradaban" 
                    artikeltanggal="Sep 29, 2022" 
                    to={ARTICLE}
                  /> 
                </Col> 
                <Col> 
                  <Travelblogcard
                    artikelimage={artikel5} 
                    artikeljudul="Papeda, bubur sagu yang berasal dari Maluku dan Papua" 
                    artikeltanggal="Aug 17, 2022" 
                  /> 
                </Col> 
                <Col> 
                  <Travelblogcard
                    artikelimage={artikel6} 
                    artikeljudul="Pertunjukan drama tradisional dengan wayang kulit" 
                    artikeltanggal="Aug 02, 2022" 
                  /> 
                </Col> 
              </Row> 
            </Container> 
            <Container> 
              <Row> 
                <Col> 
                  <Travelblogcard
                    artikelimage={artikel7} 
                    artikeljudul="Candi Borobudur yang merupakan Candi Buddha terbesar di dunia" 
                    artikeltanggal="Jul 10, 2022" 
                  /> 
                </Col> 
                <Col> 
                  <Travelblogcard
                    artikelimage={artikel8} 
                    artikeljudul="Tari Merak adalah tarian kreasi yang mengekspresikan binatang" 
                    artikeltanggal="Jun 21, 2022" 
                  /> 
                </Col> 
                <Col> 
                  <Travelblogcard
                    artikelimage={artikel9} 
                    artikeljudul="Dodol, pencuci mulut berbahan beras ketan dan pemanis" 
                    artikeltanggal="May 06, 2022" 
                  /> 
                </Col> 
              </Row> 
            </Container> 
          </div> 
        </div> 
      </section>
    <section>
      <div class="demo">
        <nav class="pagination-outer" aria-label="Page navigation">
          <ul class="pagination pagination-sm justify-content-center">
            <li class="page-item">
              <a href="#" class="page-link" aria-label="Previous">
                <span aria-hidden="true">&lt;</span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a href="#" class="page-link" aria-label="Next">
                <span aria-hidden="true">&gt;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
    </>
  );
};

export default artikelBlog;
