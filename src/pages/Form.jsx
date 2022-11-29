import React from "react";
import {Container,} from 'react-bootstrap'
import formreservasi from "../img/formreservasi.png";
import "../styles/stylesformreservasi.css";
import Footer from "../components/Footer"

const Form = () => {
  return (
    <>
    <Container>
      <section style={{ display: "flex" }}>
        <div className="card-formreservasi">
          <h1 className="text-formreservasi">Formulir Reservasi</h1>
          <div className="garis-bawah-reservasi" />
          <div className="card-foto-formreservasi">
            <img
              src={formreservasi}
              alt="Paket Bali B (1 Hari)"
              className="img-formreservasi"
            />
            <div class="container">
              <h4 className="text-foto-formreservasi">PAKET BALI B (1 Hari)</h4>
            </div>
          </div>
          <form>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nama Pemesan</label>
              <div className="col-sm-9 m-auto">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Email</label>
              <div className="col-sm-9 m-auto">
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label mt-3 mb-3">
                No Telepon
              </label>
              <div className="col-sm-9 mt-3 mb-3">
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tanggal</label>
              <div className="col-sm-9 m-auto">
                <input type="date" className="form-control" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">
                Jumlah Orang Dewasa
              </label>
              <div className="col-sm-9 m-auto">
                <input type="number" className="form-control" />
              </div>
            </div>

            <div className="form-group row">
              <div>
                <button
                  type="submit"
                  style={{
                    background: "#D10000",
                    borderRadius: "10px",
                    padding: "7px",
                    color: "#F3F3F3",
                  }}
                >
                  Booking Sekarang
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

    </Container>
    <Footer/>
    </>
  );
};

export default Form;
