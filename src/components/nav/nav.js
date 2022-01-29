import logo from "../../ax-logo.png";
import "./nav.css";

export const Nav = () => {
  return (
    <nav className="navbar d-flex ">
      <div className="flex-one d-flex align-start ">
        <img className="c-pointer lgx" src={logo} alt="logo" />
      </div>
      <div className="flex-one nav-links d-flex">
        <div className="d-flex in-nav-links">
          <span className="nav-link">Facebook</span>
          <span className="nav-link">LinkedIn</span>
          <span className="nav-link">YouTube</span>
        </div>
        <span className="nav-link-btn">Get the full report</span>
      </div>
    </nav>
  );
};
