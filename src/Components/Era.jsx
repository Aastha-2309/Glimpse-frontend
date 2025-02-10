
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TimeCapsuleButton from "./TimeCapsuleButton";
import { BASE_URL } from "../Constants/Constants";
import { CLOUDINARY_URL } from "../Constants/Constants";
const Era = () => {
  const [eras, setEras] = useState([]);

  useEffect(() => { 
    axios
      .get(`${BASE_URL}/api/eras`)
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
                  <img height="auto" width="auto" src={`${CLOUDINARY_URL}eraplant_hfgjit`} alt={era.name} className="era-img" />
                </Link>
              </button>
              <p className="era-caption">{era.name}</p>
            </div>
          ))}
        </div>
      </div>
      <TimeCapsuleButton />
    </div>
  );
};

export default Era;
