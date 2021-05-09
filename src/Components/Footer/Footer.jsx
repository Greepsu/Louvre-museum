import React from "react";

//import styles
import "../../styles/Footer.css";

//import assets
import logo from "../../assets/images/logo-white.svg";
import youtubeIcon from "../../assets/icons/youtube-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-contact">
          <span>
            Staroměstské Nám. 12 <br />
            110 15 Prague 1 <br />
            Czech Republic
          </span>
          <span>(+420) 220 397 211</span>
          <span>palackinskych@ngprague.cz</span>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#Events">Events</a>
            </li>
            <li>
              <a href="#Visit">Visit</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#Tickets">Tickets</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social-media-container">
        <div className="social-media-links">
          <a href="youtube.com">
            <img src={youtubeIcon} alt="youtube icon" />
          </a>
          <a href="instagram.com">
            <img src={instagramIcon} alt="instagram icon" />
          </a>
          <a href="facebook.com">
            <img src={facebookIcon} alt="facebook icon" />
          </a>
        </div>
        <span>© Národní Galerie Praha, 2021</span>
      </div>
    </div>
  );
}
