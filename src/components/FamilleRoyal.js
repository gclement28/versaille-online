import React from "react";
import lebrunss from "../Images/lebrunss.jpg";
import "../Style/FamilleRoyal.css";
import Navbar from "./Navbar";

const FamilleRoyal = () => {
  return (
    <div>
      <h1 className="title-famille">Composition de la famille royale</h1>
      <div className="img-container">
        <img className="img-famille" src={lebrunss} />
        <img className="img-famille" src={lebrunss} />
        <img className="img-famille" src={lebrunss} />
      </div>
    </div>
  );
};

export default FamilleRoyal;
