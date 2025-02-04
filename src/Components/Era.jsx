// src/components/Era.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TimeCapsuleButton from "./TimeCapsuleButton";
import EraImg from "../assets/images/eraplant.jpg"

const Era = () => {
  const [eras, setEras] = useState([]);

  useEffect(() => { 
    axios
      .get("https://13.233.75.216/api/api/eras")
      .then((response) => setEras(response.data))
      .catch((error) => console.error("There was an error fetching the eras:", error));
  }, []);

  return (
    <div className="EraPage">
      <h1>Era</h1>

      <div className="era-container">
        <div className="era-grid">
          {eras.map((era) => (
            <div key={era._id} className="era-item">
              <button className="era-button">
                <Link to={`/era/${era._id}`} className="nav-link">
                  <img src={EraImg} alt={era.name} className="era-img" />
                </Link>
              </button>
              <p className="era-caption">{era.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Assuming TimeCapsuleButton remains the same */}
      <TimeCapsuleButton />
    </div>
  );
};

export default Era;
