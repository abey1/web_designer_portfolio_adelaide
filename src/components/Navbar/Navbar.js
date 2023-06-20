import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { MenuBar, NavBall, NavInstagram, MenuBarCloseIcon } from "../../assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const Navbar = () => {
  const { sidebarOpen, openSideBar, closeSideBar } = useAppContext();
  const [chosenNavLink, setChosenNavLink] = useState(
    parseInt(window.localStorage.getItem("page"))
  );
  useEffect(() => {
    window.localStorage.setItem("page", chosenNavLink);
  }, [chosenNavLink]);
  return (
    <div className="nav_parent">
      <div
        className={`menu_holder ${sidebarOpen ? "menu_holder_hidden" : ""}`}
        onClick={() => {
          openSideBar();
        }}
      >
        <img src={MenuBar} alt="menu bar img" />
      </div>
      <div className="nav_original">
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
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={NavInstagram} alt="nav instagram" />
            </a>
            <div className="nav_cpy">Copyright ©2023 Abey Dellelegn.</div>
          </div>
        </div>
      </div>
      <nav
        className={`nav_main ${
          sidebarOpen ? "nav_main_open" : "nav_main_hidden"
        }`}
      >
        <div className="nav_center">
          <div className="nav_logo">
            Abd.
            <i
              className="fa-solid fa-x menu_bar_close_icon_img"
              onClick={() => {
                closeSideBar();
              }}
            ></i>
          </div>

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
                    closeSideBar();
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
                    closeSideBar();
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
                    closeSideBar();
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
                    closeSideBar();
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
                    closeSideBar();
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
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={NavInstagram} alt="nav instagram" />
            </a>
            <div className="nav_cpy">Copyright ©2023 Abey Dellelegn.</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
