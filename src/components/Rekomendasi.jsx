import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Garismerah from "./Garismerah"
import "../styles/rekomendasi.css"
import Cardrekomendasi from "./Cardrekomendasi"
import imgbali1 from "../img/imgbali1.png"
import imgbali2 from "../img/imgbali2.png"
import imgbali3 from "../img/imgbali3.png"
import {DETAIL} from "../routes"

const Rekomendasi = () => {
  return (
    <div>
        <div className="cardbg" style={{marginTop:"150px"}}>
            <h1 className='text-center'>Rekomendasi Paket Tur</h1>     
            <Garismerah />
            <Container>
              <Row>
                <Col>
                  <Cardrekomendasi img={imgbali1} title="Paket Bali A 1 Hari" price="Start from Rp245.000" subtitle="Paket ini merupakan paket satu tempat di tempat tanah lot, wisatawan akan berkeliling menjumpai pura-pura yang ada di sana..." to={DETAIL} 
                  list={["Tanah Lot", "Pura Penyawang", "Pura Baru Mejan", "Batu Bolong", "lain-lainnya"]}
                  />
                </Col> 
                <Col>
                  <Cardrekomendasi img={imgbali2} title="Paket Bali B 1 Hari" price="Start from Rp475.000" subtitle="Paket ini merupakan paket budaya 1 hari yang memberikan kesan kepada wisatawan dengan adanya tarian kecak di uluwatu..." to={DETAIL} list={["Tanah Lot", "Pura Penyawang", "Pura Baru Mejan", "Batu Bolong", "lain-lainnya"]}/>
                </Col>
                <Col>
                  <Cardrekomendasi img={imgbali3} title="Paket Bali C 3 Hari" price="Start from Rp475.000" subtitle="Paket ini merupakan paket wisata budaya 2 hari, dimana wisatawan akan menikmati keindahan tanah lot dan juga penampilan  dari tari kecak" to={DETAIL} list={["Tanah Lot", "Pura Penyawang", "Pura Baru Mejan", "Batu Bolong", "lain-lainnya"]} />
                </Col>
              </Row>
            </Container>
            
        </div>
    </div>
  )
}

export default Rekomendasi
