import "./intro.scss";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Front End Developer", "UI/UX Designer", "Content Creator"],
    });
  });
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/developer-cartoon.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I am </h2>
          <h1>David Bai</h1>
          <h3>
            Dynamic <span ref={textRef}></span>
          </h3>
          <a href="#portfolio">
            <ExpandMoreRoundedIcon className="arrow-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
