import React from "react";
import { Container } from "react-bootstrap";
import "../styles/stylesdestinations.css";
import Popularplaces from "../img/popularplaces.png";
import Popularplacescard from "./Popularplacescard";
import jakarta from "../img/jakarta.png";
import bali from "../img/bali.png";
import aceh from "../img/aceh.png";
import pontianak from "../img/pontianak.png";
import medan from "../img/medan.png";
import palembang from "../img/palembang.png";
import semarang from "../img/semarang.png";
import surabaya from "../img/surabaya.png";
import ntt from "../img/ntt.png";
import gorontalo from "../img/gorontalo.png";
import makassar from "../img/makassar.png";
import yogyakarta from "../img/yogyakarta.png";
import jambi from "../img/jambi.png";
import solo from "../img/solo.png";
import samarinda from "../img/samarinda.png";
import madura from "../img/madura.png";
import {} from "react-bootstrap";
import {PACKAGE} from "../routes"

const Popularplacescomp = () => {

  return (
    <>
      <Container>
        <div className="popularplaces-title">
          <h1>Popular Places</h1>
          <div className="garis-bawah-popularplaces" />
        </div>
      </Container>
      <img
        src={Popularplaces}
        alt="Popular Places"
        className="imgpopularplaces"
      />
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="daftarkota-title">
            <h1>Pilih daerah yang ingin kamu kunjungi</h1>
            <div className="garis-bawah-daftarkota" />
          </div>
        </div>

        <div className="card-popularplaces">
          <div>
            <Popularplacescard kotapict={jakarta} kotaname="Jakarta" />
          </div>
          <div>
            <Popularplacescard kotapict={bali} kotaname="Bali" to={PACKAGE} />
          </div>
          <div>
            <Popularplacescard kotapict={aceh} kotaname="Aceh" />
          </div>
          <div>
            <Popularplacescard kotapict={pontianak} kotaname="Pontianak" />
          </div>
        </div>
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
        <div className="card-popularplaces mt-4">
          <div>
            <Popularplacescard kotapict={ntt} kotaname="Medan" />
          </div>
          <div>
            <Popularplacescard kotapict={gorontalo} kotaname="Gorontalo" />
          </div>
          <div>
            <Popularplacescard kotapict={makassar} kotaname="Makassar" />
          </div>
          <div>
            <Popularplacescard kotapict={yogyakarta} kotaname="Yogyakarta" />
          </div>
        </div>
        <div className="card-popularplaces mt-4">
          <div>
            <Popularplacescard kotapict={jambi} kotaname="Jambi" />
          </div>
          <div>
            <Popularplacescard kotapict={solo} kotaname="Solo" />
          </div>
          <div>
            <Popularplacescard kotapict={samarinda} kotaname="Samarinda" />
          </div>
          <div>
            <Popularplacescard kotapict={madura} kotaname="Madura" />
          </div>
        </div>

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
      </Container>
    </>
  );
};

export default Popularplacescomp;
