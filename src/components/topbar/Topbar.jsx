import "./topbar.scss";
import { PhoneAndroid, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            DAVID BAI
          </a>
          <div className="itemContainer">
            <PhoneAndroid className="icon" />
            <span>021 187 0328</span>
            <Mail className="icon" />
            <span>baiminghan@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
