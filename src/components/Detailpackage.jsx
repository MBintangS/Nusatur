import React  from "react";
import { PACKAGE } from "../routes";

import { Col, Container, Row } from "react-bootstrap";
import Cardrekomendasi from "./Cardrekomendasi";
import imgbali1 from "../img/imgbali1.png";
import imgbali2 from "../img/imgbali2.png";
import imgbali3 from "../img/imgbali3.png";
import medan from "../img/medan.png";
import palembang from "../img/palembang.png";
import semarang from "../img/semarang.png";
import surabaya from "../img/surabaya.png";
import Popularplacescard from "../components/Popularplacescard"


const Detailpackage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Cardrekomendasi
            img={imgbali1}
            title="Paket Bali A 1 Hari"
            price="Start from Rp245.000"
            subtitle="Paket ini merupakan paket satu tempat di tempat tanah lot, wisatawan akan berkeliling menjumpai pura-pura yang ada di sana..."
            list={[
              "Tanah Lot",
              "Pura Penyawang",
              "Pura Baru Mejan",
              "Batu Bolong",
              "lain-lainnya",
            ]}
            to={`${PACKAGE}/detail`}
          />
        </Col>
        <Col>
          <Cardrekomendasi
            img={imgbali2}
            title="Paket Bali B 1 Hari"
            price="Start from Rp475.000"
            subtitle="Paket ini merupakan paket budaya 1 hari yang memberikan kesan kepada wisatawan dengan adanya tarian kecak di uluwatu..."
            list={[
              "Tanah Lot",
              "Pura Penyawang",
              "Pura Baru Mejan",
              "Batu Bolong",
              "lain-lainnya",
            ]}
            to={`${PACKAGE}/detail`}
          />
        </Col>
        <Col>
          <Cardrekomendasi
            img={imgbali3}
            title="Paket Bali C 2 Hari"
            price="Start from Rp475.000"
            subtitle="Paket ini merupakan paket wisata budaya 2 hari, dimana wisatawan akan menikmati keindahan tanah lot dan juga penampilan  dari tari kecak"
            list={[
              "Tanah Lot",
              "Pura Penyawang",
              "Pura Baru Mejan",
              "Batu Bolong",
              "lain-lainnya",
            ]}
            to={`${PACKAGE}/detail`}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Cardrekomendasi
            img={imgbali1}
            title="Paket Bali A 1 Hari"
            price="Start from Rp245.000"
            subtitle="Paket ini merupakan paket satu tempat di tempat tanah lot, wisatawan akan berkeliling menjumpai pura-pura yang ada di sana..."
            list={[
              "Tanah Lot",
              "Pura Penyawang",
              "Pura Baru Mejan",
              "Batu Bolong",
              "lain-lainnya",
            ]}
            to={`${PACKAGE}/detail`}
          />
        </Col>
        <Col xs={4}>
          <Cardrekomendasi
            img={imgbali2}
            title="Paket Bali B 1 Hari"
            price="Start from Rp475.000"
            subtitle="Paket ini merupakan paket budaya 1 hari yang memberikan kesan kepada wisatawan dengan adanya tarian kecak di uluwatu..."
            list={[
              "Tanah Lot",
              "Pura Penyawang",
              "Pura Baru Mejan",
              "Batu Bolong",
              "lain-lainnya",
            ]}
            to={`${PACKAGE}/detail`}
          />
        </Col>
      </Row>
      <h1 style={{ marginTop: "50px" }}>Wisata Kota Lainnya</h1>
      <div
        style={{
          width: "300px",
          height: "5px",
          background: "#D10000",
          borderRadius: "10px",
        }}
      />

      <div className="card-popularplaces mt-4">
        <div>
          <Popularplacescard kotapict={medan} kotaname="Medan" />
        </div>
        <div>
          <Popularplacescard kotapict={palembang} kotaname="Palembang" />
        </div>
        <div>
          <Popularplacescard kotapict={semarang} kotaname="Semarang" />
        </div>
        <div>
          <Popularplacescard kotapict={surabaya} kotaname="Surabaya" />
        </div>
      </div>
    </Container>
  );
};

export default Detailpackage;
