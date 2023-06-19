import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { NavBe, NavBall, NavInstagram } from "../../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [chosenNavLink, setChosenNavLink] = useState(
    parseInt(window.localStorage.getItem("page"))
  );
  useEffect(() => {
    window.localStorage.setItem("page", chosenNavLink);
  }, [chosenNavLink]);
  return (
    <nav className="nav_main">
      <div className="nav_center">
        <div className="nav_logo">Abd.</div>

        <div className="nav_links">
          <ul>
            <li>
              <Link
                className={`link_item ${
                  chosenNavLink === 1 ? "nav_link_active" : ""
                } `}
                to="/"
                onClick={() => {
                  setChosenNavLink(1);
                }}
              >
                <span className="nav_link_outer">
                  <span className="nav_link_inner">home</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                className={`link_item ${
                  chosenNavLink === 2 ? "nav_link_active" : ""
                } `}
                to="/about"
                onClick={() => {
                  setChosenNavLink(2);
                }}
              >
                <span className="nav_link_outer">
                  <span className="nav_link_inner">about</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                className={`link_item ${
                  chosenNavLink === 3 ? "nav_link_active" : ""
                } `}
                to="/services"
                onClick={() => {
                  setChosenNavLink(3);
                }}
              >
                <span className="nav_link_outer">
                  <span className="nav_link_inner">services</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                className={`link_item ${
                  chosenNavLink === 4 ? "nav_link_active" : ""
                } `}
                to="/works"
                onClick={() => {
                  setChosenNavLink(4);
                }}
              >
                <span className="nav_link_outer">
                  <span className="nav_link_inner">works</span>
                </span>
              </Link>
            </li>
            <li>
              <Link
                className={`link_item ${
                  chosenNavLink === 5 ? "nav_link_active" : ""
                } `}
                to="/contact"
                onClick={() => {
                  setChosenNavLink(5);
                }}
              >
                <span className="nav_link_outer">
                  <span className="nav_link_inner">contact</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav_footer">
          {/* <img src={NavBe} alt="nav be" /> */}
          <a href="https://dribbble.com/" target="_blank" rel="noreferrer">
            <img src={NavBall} alt="nav ball" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={NavInstagram} alt="nav instagram" />
          </a>
          <div className="nav_cpy">Copyright ©2023 Abey Dellelegn.</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
