import React from "react";

//import styles
import "../../styles/Navbar.css";

//import assets
import logo from "../../assets/images/logo-white.svg";
import eventIcon from "../../assets/images/event-icon.svg";
import visitIcon from "../../assets/images/visit-icon.svg";
import contactIcon from "../../assets/images/contact-icon.svg";
import purchaseIcon from "../../assets/images/purchase-icon.svg";

//import Hooks
import { useWindowSize } from "react-use";

export default function Navbar({ props }) {
  const { width } = useWindowSize();
  const breakpoint = 768;

  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      {width > breakpoint ? (
        <div className="navbar-container">
          <div className="navbar-menu">
            <span>Schwarzenberg Palace</span>
          </div>
          <div className="navbar-links">
            <ul>
              <li>
                <a
                  onClick={() => executeScroll(props.exhibitionsRef)}
                  href="#exhibiion"
                >
                  Events
                </a>
              </li>
              <li>
                <a onClick={() => executeScroll(props.visitRef)} href="#visit">
                  Visit
                </a>
              </li>
              <li>
                <a
                  onClick={() => executeScroll(props.contactRef)}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  onClick={() => executeScroll(props.purchaseRef)}
                  href="#purchase"
                  className="navbar-button"
                >
                  Buy Tickets
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="responsive-navbar">
          <div
            className="navbar-event"
            onClick={() => executeScroll(props.exhibitionsRef)}
          >
            <img src={eventIcon} alt="event icon" />
          </div>
          <div
            className="navbar-visit"
            onClick={() => executeScroll(props.visitRef)}
          >
            <img src={visitIcon} alt="visit icon" />
          </div>
          <div
            className="navbar-purchase"
            onClick={() => executeScroll(props.purchaseRef)}
          >
            <img src={purchaseIcon} alt="purchase icon" />
          </div>
          <div
            className="navbar-contact"
            onClick={() => executeScroll(props.contactRef)}
          >
            <img src={contactIcon} alt="contact icon" />
          </div>
        </div>
      )}
    </nav>
  );
}
