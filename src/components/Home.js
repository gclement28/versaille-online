import React from "react";
import "../Style/Home.css";
import FamilleRoyal from "./FamilleRoyal";
import Navbar from "./Navbar";

const Home = (props) => {
  const HandleReservationClick = () => {
    props.history.push("/reservation");
  };
  return (
    <div>
      <div className="home-first-bloc">
        <Navbar />
      </div>
      <div className="home-second-bloc">
        <div>
          <p className="home-text">
            Une envie de visiter le magnifique chateau de sa majesté?
          </p>
        </div>
        <div>
          <button className="btn-reservation" onClick={HandleReservationClick}>
            Reservez une visite
          </button>
        </div>
      </div>

      <FamilleRoyal />
    </div>
  );
};

export default Home;
