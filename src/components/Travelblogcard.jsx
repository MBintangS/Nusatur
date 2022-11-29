import React from "react";
import { Card } from "react-bootstrap";
import "../styles/artikelblog.css";
import { Clock } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

const Travelblogcardcomp = ({ artikelimage, artikeljudul, artikeltanggal, to }) => {
  return (
    <div className="mt-5" style={{ alignItems: "center" }}>
      <Card
        className="card-container"
        style={{
          width: "20rem",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
          borderRadius: "10px",
        }}
      >
        <div>
          <div>
            <img
              src={artikelimage}
              alt="Foto"
              className="img-alrtikel-pict"
            ></img>
            <div className="content-card-blog">
              <NavLink to={to}>
                <h3
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    marginTop: "10px",
                  }}
                >
                  {artikeljudul}
                </h3>
              </NavLink>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                <Clock></Clock>
                {artikeltanggal}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Travelblogcardcomp;
