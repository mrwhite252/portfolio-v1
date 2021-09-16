import React from "react";

import "./UI.scss";

export default function UI() {
  return (
    <div className="UI-container">
      <div className="first-image image-container">
        <img className="image" src="assets/ui/ceres.png" alt="ceresnz" />
      </div>
      <div className="second-image image-container">
        <img className="image" src="assets/ui/chch.png" alt="chch-council" />
      </div>
      <div className="third-image image-container">
        <img className="image" src="assets/ui/lab.jpg" alt="lab-tour" />
      </div>
      <div className="fourth-image image-container">
        <img className="image" src="assets/ui/bottles.png" alt="bottles" />
      </div>
      <div className="fifth-image image-container">
        <img className="image" src="assets/ui/uc.png" alt="uc" />
      </div>
    </div>
  );
}
