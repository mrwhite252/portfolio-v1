import "./intro.scss";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Intro() {
  const { text } = useTypewriter({
    words: ["UI/UX Designer", "Front End Developer"],
    loop: 0,
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
            A Dynamic <span>{text}</span>
            <Cursor />
          </h3>
          <a href="#portfolio">
            <ExpandMoreRoundedIcon className="arrow-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
