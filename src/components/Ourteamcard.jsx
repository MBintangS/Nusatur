import React from "react";
import { Card } from "react-bootstrap";
import "../styles/stylesaboutus.css";

const Ourteamcardcomp = ({ ourpict, name, job }) => {
  return (
    <div className="mt-5">
      <Card
        className="card-container"
        style={{
          width: "18rem",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
          borderRadius: "30px",
        }}
      >
        <div className="">
          <div className="text-center">
            <img src={ourpict} alt="Foto" className="img-ourteam-pict"></img>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              {name}
            </h3>
            <p
              style={{
                fontSize: "14px",
              }}
            >
              {job}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Ourteamcardcomp;
