import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Logo from "../../assets/images/logo_thumb-removebg-preview.png";

import Hamburger from "./Hamburger";
import "./index.css";

const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  // Change Navbar color
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 85) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <header className={navbar ? "nav-header active" : "nav-header"}>
      <div className="header__container">
        <div className="header__wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">
                <img src={Logo} alt="Official Logo" className="dach__logo" />
              </Link>
            </div>
            <div className="menu">
              <button
                className="menu-btn"
                disabled={disabled}
                onClick={handleMenu}
              >
                {/* <RiMenu4Fill /> */}
                {state.menuName}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Hamburger state={state} />
    </header>
  );
};

export default withRouter(Header);
