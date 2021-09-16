import React from "react";
import "./frontEndProject.scss";
import { frontData } from "../../data";

export default function FrontEndProject() {
  return (
    <>
      {frontData.map((d) => (
        <div className="container" key={d.id}>
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h2>{d.title}</h2>
                <div className="imgContainer">
                  <img id="icon1" src={d.icon} alt="icon" />
                  <img id="icon2" src={d.icon1} alt="icon" />
                  <img id="icon3" src={d.icon2} alt="icon" />
                  <img id="icon4" src={d.icon3} alt="icon" />
                </div>
                <p>{d.desc}</p>
                <span>
                  <a href={d.link} target="_blank" rel="noreferrer">
                    View Project
                  </a>
                </span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} alt="poster" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
