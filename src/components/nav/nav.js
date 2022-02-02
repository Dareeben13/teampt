import logo from "../../ax-logo.png";
import "./nav.css";

export const Nav = ({ inverted }) => {
  return (
    <nav className="navbar d-flex ">
      <div className="flex-one d-flex align-start ">
        <img className="c-pointer lgx" src={logo} alt="logo" />
      </div>
      <div className="flex-one nav-links d-flex">
        <div className="d-flex in-nav-links">
          <span style={{ color: inverted ? "white" : "#29526e" }} className="nav-link">
            Facebook
          </span>
          <span style={{ color: inverted ? "white" : "#29526e" }} className="nav-link">
            LinkedIn
          </span>
          <span style={{ color: inverted ? "white" : "#29526e" }} className="nav-link">
            YouTube
          </span>
        </div>
        <span style={{ background: inverted ? "white" : "#084c78", color: inverted ? "#29526e" : "white" }} className="nav-link-btn">
          Get the full report
        </span>
      </div>
    </nav>
  );
};
