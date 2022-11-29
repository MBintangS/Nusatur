import React, {useEffect} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import imgtestimoni from "../img/imgtestimoni.png"
import "../styles/apakatamereka.css"
import {Quote, ArrowLeftCircle, ArrowRightCircle} from 'react-bootstrap-icons'
import wayang2 from "../img/wayang2.png"
import AOS from "aos" //for animation
import 'aos/dist/aos.css' 

const Apakatamereka = () => {
    useEffect(() => {
        AOS.init({duration: 1500});
    }, []);

  return (
    <section data-aos="fade-left">
        <Container style={{marginTop:"150px"}}>
            <Row>
                <Col xs={5}>
                    <img src={wayang2} alt="" className="wayang-testimoni" />
                    <img src={imgtestimoni} alt="" />
                </Col>
                <Col xs={7}>
                    <div>
                        <h1 className='title-testimoni'>Apa kata mereka ?</h1>
                        <p className="konten-testimoni"><Quote size={30} /><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla enim, hendrerit non dolor nec, cursus porta lacus. Suspendisse tempus, mi aliquet maximus rhoncus, est lorem ornare augue, sit amet blandit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nulla enim.</p>
                    </div>
                    <div style={{position:"relative"}}>
                        <h5 style={{fontWeight:"bold"}}>Steve Jobs</h5>
                        <p>United States</p>
                        <ArrowLeftCircle size={40} /> <ArrowRightCircle size={40} />
                    </div>
                </Col>
            </Row>
            
        </Container>
    </section>
  )
}

export default Apakatamereka
