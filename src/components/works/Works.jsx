import "./works.scss";
import { useState } from "react";
import UXProject from "../UXProject/UXProject";
import FrontEndProject from "../FrontEndProject/FrontEndProject";
import FullStackProject from "../FullStackProject/FullStackProject";
import { uxData, frontData } from "../../data";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState(uxData);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  const [selected, setSelected] = useState("ux");

  const toggleTab = (index) => {
    setSelected(index);
    if (index === "ux") {
      setData(uxData);
    }
    if (index === "front-end") {
      setData(frontData);
    }
  };

  return (
    <div className="works" id="works">
      <div className="top-section">
        <h1> Web Development Portfolio</h1>
        <ul>
          <li
            onClick={() => toggleTab("ux")}
            className={selected === "ux" ? "active" : ""}
          >
            UX Design Project
          </li>
          <li
            onClick={() => toggleTab("front-end")}
            className={selected === "front-end" ? "active" : ""}
          >
            Front End Project
          </li>
          <li
            onClick={() => toggleTab("full-stack")}
            className={selected === "full-stack" ? "active" : ""}
          >
            Full Stack Project
          </li>
        </ul>
      </div>

      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {selected === "ux" && <UXProject setData={setData} />}
        {selected === "front-end" && <FrontEndProject setData={setData} />}
        {selected === "full-stack" && <FullStackProject setData={setData} />}
      </div>

      <img
        src="assets/arrow.png"
        className="arrow left"
        alt="arrow"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt="arrow"
        onClick={() => handleClick()}
      />
    </div>
  );
}
