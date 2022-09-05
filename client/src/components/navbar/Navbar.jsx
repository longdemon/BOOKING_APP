import "./navbar.css";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthConext";

const Navbar = () => {
  const [nav, setNav] = useState("stays");
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Demon Booking</span>
        </Link>
        <div className="navigation">
          <ul>
            <li
              className={nav === "stays" ? "list active" : "list"}
              id="stays"
              onClick={() => setNav("stays")}
            >
              <a href="#">
                <span className="text">Stays</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faBed} />
                </span>
              </a>
            </li>
            <li
              className={nav === "flights" ? "list active" : "list"}
              id="flights"
              onClick={() => setNav("flights")}
            >
              <a href="#">
                <span className="text">Flights</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faPlane} />
                </span>
              </a>
            </li>
            <li
              className={nav === "car" ? "list active" : "list"}
              id="car"
              onClick={() => setNav("car")}
            >
              <a href="#">
                <span className="text">Car rentals</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faCar} />
                </span>
              </a>
            </li>
            <li
              className={nav === "attactions" ? "list active" : "list"}
              id="attactions"
              onClick={() => setNav("attactions")}
            >
              <a href="#">
                <span className="text">Attactions</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faBed} />
                </span>
              </a>
            </li>
            <li
              className={nav === "taxis" ? "list active" : "list"}
              id="taxis"
              onClick={() => setNav("taxis")}
            >
              <a href="#">
                <span className="text">Airport taxis</span>
                <span className="icon">
                  <FontAwesomeIcon icon={faTaxi} />
                </span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
        {user ? (
          user.username
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
