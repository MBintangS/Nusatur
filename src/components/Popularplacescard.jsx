import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/stylesdestinations.css";

const Popularplacescardcomp = ({ kotapict, kotaname, to }) => {
  return (
    <div className="card-kota">
      <div className="text-center">
        <NavLink to={to}>
          <img src={kotapict} alt="Foto" className="img-kota-pict" />
          <div className="card-kota-text">
            <p style={{ fontSize: "24px", fontWeight:"600" }}>{kotaname}</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Popularplacescardcomp;
