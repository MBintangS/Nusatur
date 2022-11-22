import { Col, Container, Row, Button } from "react-bootstrap";
import "../styles/hero.css"
import img1 from "../img/hero-img1.png"
import img2 from "../img/hero-img2.png"
import img3 from "../img/hero-img3.png"

const Hero = () => {
    return (
        <div className="hero-section" >
        <Container style={{}}>
            <Row>
                <Col xs={5} className="" style={{marginTop:"300px"}}>
                    <h1 className="pb-3" style={{fontWeight:"500", fontSize:"42px"}}>Budaya baru, pengalaman baru.
                        Indonesia itu beragam!</h1>
                    <h4 className="pb-5">Ayo berlibur bersama NusaTur</h4>
                    <Button style={{width:"232px", height:"56px", borderRadius:"50px", background:"#D10000", border:"none", fontSize:"24px"}}>
                        Jelajahi
                        
                    </Button>{' '}
                </Col>
                <Col>
                    <img src={img1} alt="" style={{paddingTop:"250px", marginLeft:"40px"}} />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" style={{paddingTop:"150px"}}  />
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Hero;