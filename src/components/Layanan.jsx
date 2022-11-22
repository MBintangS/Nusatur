import { Card, Col, Container, Row } from "react-bootstrap";
import "../styles/layanan.css";
import iconglobe from "../img/icon-globe.png";
import iconcs from "../img/icon-cs.png";
import iconprice from "../img/icon-price.png";
import iconsafety from "../img/icon-safety.png";
import Garismerah from "./Garismerah";

const Layanan = () => {
    return (
        <Container style={{paddingTop:"100px"}}>
            <Card style={{height:"410px", borderRadius:"50px", boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.15"}}>
                <Row>
                    <Col>
                        <h1 className="mt-4 text-center">Kenapa harus memesan di Nusatur?</h1>
                        <Garismerah />

                    </Col>
                </Row>
                <Row className="text-center mt-5">
                    <Col xs={3}>
                        <img src={iconglobe} alt=""></img>
                        <h3 style={{color:"#D10000", marginTop:"20px", fontSize:"20px", fontWeight:"600"}}>Wisata Budaya</h3>
                        <p style={{width:"233px", fontSize:"16px", fontWeight:"600", margin:"auto"}}>
                        NusaTur merupakan agen travel yang  mengkhususkan tur kepada wisata budaya lokal di indonesia
                        </p>
                    </Col>
                    <Col xs={3}>
                        <img src={iconcs} alt=""></img>
                        <h3 style={{color:"#D10000", marginTop:"20px", fontSize:"20px", fontWeight:"600"}}>Bantuan Pelayanan</h3>
                        <p style={{width:"233px", fontSize:"16px", fontWeight:"600", margin:"auto"}}>
                        NusaTur merupakan agen travel yang memberikan pelayanan terbaik kepada wisatawan dengan call service 24/7
                        </p>
                    </Col>
                    <Col xs={3}>
                        <img src={iconprice} alt=""></img>
                        <h3 style={{color:"#D10000", marginTop:"20px", fontSize:"20px", fontWeight:"600"}}>Penawaran Terbaik</h3>
                        <p style={{width:"233px", fontSize:"16px", fontWeight:"600", margin:"auto"}}>
                        NusaTur merupakan agen travel yang memberikan penawaran terbaik dengan berbagai pilihan harga paket tur yang beragam
                        </p>
                    </Col>
                    <Col xs={3}>
                        <img src={iconsafety} alt=""></img>
                        <h3 style={{color:"#D10000", marginTop:"20px", fontSize:"20px", fontWeight:"600"}}>Aman & Terpercaya</h3>
                        <p style={{width:"233px", fontSize:"16px", fontWeight:"600", margin:"auto"}}>
                        NusaTur merupakan agen travel budaya lokal yang bekerja sama langsung dengan mitra setempat yang ahli di bidangnya
                        </p>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default Layanan;