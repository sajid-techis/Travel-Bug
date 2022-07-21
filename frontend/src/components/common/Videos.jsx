import React from "react";
import VideoBackground from "../../assets/img/video-background.png";
import VideoOne from "../../assets/Videos/Wonders.mp4";
import WaveImage from "../../assets/img/wave-icon.svg";

const Videos = () => {
  return (
    <section className="videos">
      <div className="background">
        <img src={VideoBackground} alt="video-background" />
        <div className="videos-container">
          <div className="text">
            <p>Discover</p>
            <span>Watch Our Video Tour</span>
            <img src={WaveImage} alt="wave" />
          </div>
          <div className="videos-content">
            <video loop autoPlay controls>
              <source src={VideoOne} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="filter"></div>
      </div>
    </section>
  );
};

export default Videos;
