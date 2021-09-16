import React from "react";

import "./packageDesign.scss";

export default function PackageDesign() {
  return (
    <div className="package-design-container">
      <div className="first-image image-container">
        <img
          className="image"
          src="assets/package/package-1.png"
          alt="package"
        />
      </div>
      <div className="second-image image-container">
        <img className="image" src="assets/package/cover-1.png" alt="package" />
      </div>
      <div className="third-image image-container">
        <img className="image" src="assets/package/box-2.png" alt="leaflet" />
      </div>
      <div className="fourth-image image-container">
        <img
          className="image"
          src="assets/package/envelop-package.png"
          alt="magazine"
        />
      </div>
    </div>
  );
}
