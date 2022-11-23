import React from "react";
import {} from "@iconify/iconify";
import Container from "react-bootstrap/Container";
import {
  Whatsapp,
  Envelope,
  Calendar3,
  Twitter,
  Instagram,
  Tiktok,
} from "react-bootstrap-icons";

const Contactuscomp = () => {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <div className="contactus">
            <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
              You tell us. We Listen.
            </h2>
            <div>
              <div style={{ marginBottom: "15px", fontSize: "32px" }}>
                <Whatsapp size={35} />
                <a style={{ marginLeft: "18px", fontSize: "20px" }}>
                  +62 8111 2222 3333
                </a>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <Envelope size={35} />
                <a style={{ marginLeft: "18px", fontSize: "20px" }}>
                  nusatur2022@gmail.com
                </a>
              </div>
              <div style={{ marginBottom: "50px" }}>
                <Calendar3 size={35} />
                <a style={{ marginLeft: "18px", fontSize: "20px" }}>
                  Senin - Minggu | 07:00 am - 17:00 pm
                </a>
              </div>
              <h2 style={{ marginBottom: "20px", fontWeight: "bold" }}>
                We’re on social media.
              </h2>
              <div>
                <Twitter size={35} style={{ marginRight: "40px" }} />
                <Instagram size={35} style={{ marginRight: "40px" }} />
                <Tiktok size={35} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <section>
            <div className="anyqueries">
              <div>
                <div className="">
                  <h2
                    style={{
                      margin: "15px auto",
                      marginLeft: "37px",
                      fontWeight: "bold",
                      fontSize: "30px",
                      textAlign: "center",
                    }}
                  >
                    Have any Queries? We’re here to help.
                  </h2>
                </div>

                <form>
                  <div>
                    <div
                      className="form-group"
                      style={{ marginLeft: "37px", marginTop: "25px" }}
                    >
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        style={{ backgroundColor: "#F3F3F3" }}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginLeft: "37px" }}>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="7"
                      placeholder="Message"
                      required
                      style={{ backgroundColor: "#F3F3F3" }}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="btn-anyqueries">
                    <button>SEND MESSAGE</button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default Contactuscomp;
