import React from "react";

import "./graphicDesign.scss";

export default function graphicDesign() {
  return (
    <div className="graphic-design-container">
      <div className="first-image image-container">
        <img className="image" src="assets/graphic/poster.png" alt="poster" />
      </div>
      <div className="second-image image-container">
        <img
          className="image"
          src="assets/graphic/business-card.png"
          alt="logo"
        />
      </div>
      <div className="third-image image-container">
        <img
          className="image"
          src="assets/graphic/leaflet-mockup.png"
          alt="leaflet"
        />
      </div>
      <div className="fourth-image image-container">
        <img
          className="image"
          src="assets/graphic/magazine-mockup.png"
          alt="magazine"
        />
      </div>
      <div className="fifth-image image-container">
        <img
          className="image"
          src="assets/graphic/final-work.png"
          alt="alphet"
        />
      </div>
    </div>
  );
}
