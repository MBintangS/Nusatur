import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Garismerah from "./Garismerah"
import "../styles/rekomendasi.css"
import Cardrekomendasi from "./Cardrekomendasi"
import imgbali1 from "../img/imgbali1.png"
import imgbali2 from "../img/imgbali2.png"

const Rekomendasi = () => {
  return (
    <div>
        <div className="cardbg" style={{marginTop:"150px"}}>
            <h1 className='text-center'>Rekomendasi Paket Tur</h1>     
            <Garismerah />
            <Container>
              <Row>
                <Col>
                  <Cardrekomendasi img={imgbali1} title="Paket Bali A 1 Hari" price="Start from Rp245.000" subtitle="Paket ini merupakan paket satu tempat di tempat tanah lot, wisatawan akan berkeliling menjumpai pura-pura yang ada di sana..." list1="Tanah Lot" list2="Pura Penyawang" list3="Pura Baru Mejan" list4="Batu Bolong" list5="lain-lainnya" />
                </Col> 
                <Col>
                  <Cardrekomendasi img={imgbali2} title="Paket Bali B 1 Hari" price="Start from Rp475.000" subtitle="Paket ini merupakan paket budaya 1 hari yang memberikan kesan kepada wisatawan dengan adanya tarian kecak di uluwatu..." list1="Tanah Lot" list2="Pura Penyawang" list3="Pura Baru Mejan" list4="Batu Bolong" list5="lain-lainnya" />
                </Col>
                <Col>
                  <Cardrekomendasi />
                </Col>
              </Row>
            </Container>
            
        </div>
    </div>
  )
}

export default Rekomendasi
