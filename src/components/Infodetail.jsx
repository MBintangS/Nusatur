import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import "../styles/infodetail.css";
import Cardrekomendasi from "./Cardrekomendasi";
import imgbali1 from "../img/imgbali1.png"
import imgbali2 from "../img/imgbali2.png"
import imgbali3 from "../img/imgbali3.png"
import {DETAIL} from "../routes"
import Boxhubungi from "./Boxhubungi";
import { NavLink } from "react-router-dom";


const Infodetail = () => {
  return (
    <Container style={{ marginTop: "50px" }}>
      <section className="container-grid">
        <section className="grid-line-1">
          <div className="container-info-1">
            <div className="content-info-title-1">
              <p>Daftar Wisata</p>
            </div>
            <div className="list-info-title-1">
              <ul>
                <li>Garuda Wisnu kencana</li>
                <li>Pertunjukan Tari Barong</li>
                <li>Pura Luhur Uluwatu</li>
                <li>Pentas Tari Kecak</li>
                <li>Seni Lukisan Batuan</li>
                <li>Pusat Oleh-oleh Bali</li>
              </ul>
            </div>
          </div>
          <section className="grid-line-2">
            <div className="container-info-1">
              <div className="content-info-title-1">
                <p>Harga</p>
              </div>
              <div className="list-info-title-1">
                <ul>
                  <li>1 - 3 Orang : Rp. 625.000/pax</li>
                  <li>4 - 6 Orang : Rp. 575.000/pax</li>
                  <li>7 - 9 Orang : Rp. 525.000/pax</li>
                  <li>lebih 9 Orang : Rp. 475.000/pax</li>
                  <li>*Di bawah 2 tahun GRATIS!!!</li>
                </ul>
              </div>
            </div>
          </section>
        </section>
        <div className="container-info-2">
          <div className="content-info-title-2">
            <p>Rencana Perjalanan</p>
          </div>
          <div className="itenerary-info">
            <ol>
              <li>
                Wisatawan akan dijemput di tempat penginapan untuk selanjutnya
                akan diantar menuju objek wisata pertama yaitu Garuda Wisnu
                Kencana.
              </li>
              <li>
                Kemudian masih di Garuda Wisnu Kencana wisatawan akan
                menyaksikan pertunjukan tari barong.
              </li>
              <li>
                Selanjutnya Wisatawan akan berpindah menuju objek wisata kedua
                yaitu Pura Luhur Uluwatu.
              </li>
              <li>
                Kemudian masih di Luhur Uluwatu wisatawan akan menyaksikan
                pertunjukan Tari Kecak.
              </li>
              <li>
                Setelah menyaksikan pertunjukan Tari Kecak, wisatawan akan
                dibawa ke tempat kesenian yaitu seni lukisan batuan.
              </li>
              <li>Terakhir wisatawan akan mengunjungi pusat oleh-oleh bali.</li>
              <li>
                Selanjutnya wisatawan akan diantar kembali ke tempat penginapan
                / menuju tempat perpulangan
              </li>
            </ol>
          </div>
        </div>
      </section>
      <div className="btn-infodetail text-center">
        <NavLink to={`${DETAIL}/form`}>
          <button>Pesan Sekarang</button>
        </NavLink>
      </div>

      <h1>Paket Bali Lainnya</h1>
      <div className="garismerahinfo"></div>

      {/* ini */}
      <Row>
        <Col>
          <Cardrekomendasi
            img={imgbali1}
            title="Paket Bali A 1 Hari"
            price="Start from Rp245.000"
            subtitle="Paket ini merupakan paket satu tempat di tempat tanah lot, wisatawan akan berkeliling menjumpai pura-pura yang ada di sana..."
            to={DETAIL}
            list={[
              "Tanah Lot",
              "Pura Penyawang",
              "Pura Baru Mejan",
              "Batu Bolong",
              "lain-lainnya",
            ]}
          />
        </Col>
        <Col>
          <Cardrekomendasi
            img={imgbali2}
            title="Paket Bali B 1 Hari"
            price="Start from Rp475.000"
            subtitle="Paket ini merupakan paket budaya 1 hari yang memberikan kesan kepada wisatawan dengan adanya tarian kecak di uluwatu..."
            to={DETAIL}
            list={[
              "Tanah Lot",
              "Pura Penyawang",
              "Pura Baru Mejan",
              "Batu Bolong",
              "lain-lainnya",
            ]}
          />
        </Col>
        <Col>
          <Cardrekomendasi
            img={imgbali3}
            title="Paket Bali C 3 Hari"
            price="Start from Rp475.000"
            subtitle="Paket ini merupakan paket wisata budaya 2 hari, dimana wisatawan akan menikmati keindahan tanah lot dan juga penampilan  dari tari kecak"
            to={DETAIL}
            list={[
              "Tanah Lot",
              "Pura Penyawang",
              "Pura Baru Mejan",
              "Batu Bolong",
              "lain-lainnya",
            ]}
          />
        </Col>
      </Row>

      <Boxhubungi />
    </Container>
  );
};

export default Infodetail;
