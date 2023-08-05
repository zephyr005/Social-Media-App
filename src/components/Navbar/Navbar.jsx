import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBell,
  faUser,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  const data = useSelector((state) => state.clickedData);
  console.log(data);

  return (
    <div className="Navbar">
      <div className="logo">
        <h3>TravelMedia.in</h3>
      </div>
      <div className="nav">
        <ul className="nav-list">
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faHouse} size="2xl" className="icon" />
              <div className="dot"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Rem">
              <FontAwesomeIcon icon={faBell} size="2xl" className="icon" />
              <div className="dot"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to={`/item/${data.id}`}>
              <FontAwesomeIcon icon={faBookmark} size="2xl" className="icon" />
              <div className="dot"></div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Profile">
              <FontAwesomeIcon icon={faUser} size="2xl" className="icon" />
              <div className="dot"></div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
