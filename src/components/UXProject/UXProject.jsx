import React from "react";

import { uxData } from "../../data";

import "./UXProject.scss";

export default function UXProject() {
  return (
    <>
      {uxData.map((d) => (
        <div className="container" key={d.id}>
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <h2>{d.title}</h2>
                <div className="imgContainer">
                  <img src={d.icon} alt="figma" />
                  <img src={d.icon2} alt="html" />
                  <img src={d.icon3} alt="html" />
                  <img src={d.icon4} alt="html" />
                </div>
                <p>{d.desc}</p>
                <div className="links">
                  <span>
                    <a
                      href={d.originalWebsite}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {d.original}
                    </a>
                  </span>
                  <span>
                    <a href={d.newWebsite} target="_blank" rel="noreferrer">
                      {d.new}
                    </a>
                  </span>
                </div>
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
