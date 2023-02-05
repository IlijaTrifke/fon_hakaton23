import React, { useState, useEffect } from "react";
import { debounce } from "../../utilities/helpers";
import "./navbar.scss";
import menuItems from "./MenuItems";
import { HashLink } from "react-router-hash-link";
import { Twirl as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: "fixed",
    textAlign: "center",
    transition: "top 0.4s",
  };

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div
      className="ceo-nav"
      style={{ ...navbarStyles, top: visible ? "0" : "-6rem" }}
    >
      <nav className="navbar">
        <div className="menu-icon" onClick={handleClick}>
          <Hamburger
            className="hamburger"
            toggled={active}
            toggle={setActive}
          />
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <HashLink
                  to={item.url}
                  className={item.cName}
                  onClick={handleClick}
                >
                  {item.title}
                </HashLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
