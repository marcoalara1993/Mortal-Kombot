import React from "react";
import JapanPark from "../../../images/Japan-Park.jpg";
import "./styles.css";

const Park = (props) => {
  return (
    <div>
      <img className="img-park" src={JapanPark} alt="Parque Japones" />
    </div>
  );
};

export default Park;
