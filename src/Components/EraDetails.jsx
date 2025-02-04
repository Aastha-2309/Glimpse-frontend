import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import wonder from "../assets/images/wonder.png";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import { FaCirclePause, FaCirclePlay} from "react-icons/fa6";

const EraDetails = () => {
  const { id } = useParams();
  const [eraDetails, setEraDetails] = useState(null);
  const [playingMusicId, setPlayingMusicId] = useState(null);
  const audioRefs = useRef({});
  

  useEffect(() => {
    axios
      .get(`https://13.233.75.216/api/api/eras/${id}`)
      .then((response) => setEraDetails(response.data))
      .catch((error) => console.error("Error fetching era details:", error));
  }, [id]);

  if (!eraDetails) return <div>Loading...</div>;

  const handlePlayPause = (musicId, url) => {
    if (playingMusicId && playingMusicId !== musicId) {
      // Stop currently playing audio
      audioRefs.current[playingMusicId]?.pause();
      audioRefs.current[playingMusicId].currentTime = 0;
    }

    if (playingMusicId === musicId) {
      // Pause current playing audio
      audioRefs.current[musicId]?.pause();
      setPlayingMusicId(null);
    } else {
      // Play selected audio
      if (!audioRefs.current[musicId]) {
        audioRefs.current[musicId] = new Audio(url);
        audioRefs.current[musicId].onended = () => setPlayingMusicId(null); // Reset when finished
      }
      audioRefs.current[musicId]?.play();
      setPlayingMusicId(musicId);
    }
  };

  return (
    <div className="EraPage">
      <div className="eraHeading">
        <h1>{eraDetails.name}</h1>
      </div>

      {/* Movies Section */}
      <h1>Movies</h1>
      <div className="movieBlock">
        {eraDetails.details
          .filter((detail) => detail.type === "movie")
          .map((detail) => (
            <div key={detail._id} className="movieBox">
              <img src={`https://res.cloudinary.com/djjmj40t9/image/upload/dpr_auto,f_auto,q_auto,w_500,h_500/v1738151947/${detail.image}`} className="movieImg" alt={detail.name} />
              <div className="movieName">
                <h2>{detail.name}</h2>
                <div className="overlayMusic">
                <Link to={detail.mediaUrl}><BiSolidMoviePlay className="streamButton"/></Link>
                </div>
              </div>
              <div className="movieDetail">
                <div className="movieTitle">
                  <p>Director:</p>
                  <p>{detail.director}</p>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Music Section */}
      <h1>Music</h1>
      <div className="musicBlock">
        {eraDetails.details
          .filter((detail) => detail.type === "music")
          .map((detail) => (
            <div key={detail._id} className="musicBox">
          <img src={`https://res.cloudinary.com/djjmj40t9/image/upload/dpr_auto,f_auto,q_auto,w_500,h_500/v1738151947/${detail.image}`} className="movieImg" alt={detail.name} />
              <div className="movieName">
                <h2>{detail.name}</h2>
                <div className="overlayMusic">
        <button onClick={() => handlePlayPause(detail._id, detail.mediaUrl)}>
          {playingMusicId === detail._id ? (
            
              <FaCirclePause className="playButton" />
          
          ) : (
           
              <FaCirclePlay className="playButton" />
           
          )}
        </button>
      </div>
              </div>
              <div className="movieDetail">
                <div className="movieTitle">
                  <p>Singer: </p>
                  <p>{detail.singer}</p>
                </div>
              </div>
              
            </div>
          ))}
      </div>

      {/* Book Section */}
      <h1>Books</h1>
      <div className="bookBlock">
        {eraDetails.details
          .filter((detail) => detail.type === "book")
          .map((detail) => {
            const media = detail.image; // Declare media here
            return (
              <div key={detail._id} className="movieBox">
                <img
                  src={`https://res.cloudinary.com/djjmj40t9/image/upload/dpr_auto,f_auto,q_auto,w_500,h_500/v1738151947/${media}`}
                  className="movieImg"
                  alt={detail.name}
                />
                <div className="movieName">
                  <h2>{detail.name}</h2>
                  <p>{detail.year}</p>
                </div>
                <div className="movieDetail">
                  <div className="movieTitle">
                    <p>Author:</p>
                    <p>{detail.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EraDetails;