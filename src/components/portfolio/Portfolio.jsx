import { useState } from "react";

import GraphicDesign from "../graphicDesign/GraphicDesign";

import PackageDesign from "../PackageDesign/PackageDesign";

import UI from "../UI/UI";

import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState(1);

  const toggleTab = (index) => {
    setSelected(index);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li
          onClick={() => toggleTab(1)}
          className={selected === 1 ? "active" : ""}
        >
          Graphic Design
        </li>
        <li
          onClick={() => toggleTab(2)}
          className={selected === 2 ? "active" : ""}
        >
          Package Design
        </li>
        <li
          onClick={() => toggleTab(3)}
          className={selected === 3 ? "active" : ""}
        >
          UI Design
        </li>
      </ul>
      <div className="container">
        {selected === 1 && <GraphicDesign />}
        {selected === 2 && <PackageDesign />}
        {selected === 3 && <UI />}
      </div>
    </div>
  );
}
