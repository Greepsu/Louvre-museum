import React from "react";

//import styles
import "../../styles/Footer.css";

//import assets
import youtubeIcon from "../../assets/icons/youtube-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";

export default function Footer({ props }) {
  const executeScroll = (ref) =>
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <span>L</span>
        </div>
        <div className="footer-contact">
          <span>
          Rue de Rivoli <br />
          75001 Paris <br />
            France
          </span>
          <span>01 40 20 50 50</span>
          <span>info@louvre.fr</span>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a
                href="#Events"
                onClick={() => executeScroll(props.exhibitionsRef)}
              >
                Events
              </a>
            </li>
            <li>
              <a 
                href="#Visit" 
                onClick={() => executeScroll(props.visitRef)}>
                Visit
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                onClick={() => executeScroll(props.contactRef)}
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="#Tickets"
                onClick={() => executeScroll(props.purchaseRef)}
              >
                Tickets
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="social-media-container">
        <div className="social-media-links">
          <a href="https://www.youtube.com/user/louvre">
            <img src={youtubeIcon} alt="youtube icon" />
          </a>
          <a href="https://www.instagram.com/museelouvre/">
            <img src={instagramIcon} alt="instagram icon" />
          </a>
          <a href="https://www.facebook.com/museedulouvre">
            <img src={facebookIcon} alt="facebook icon" />
          </a>
        </div>
        <span>© Louvre museum, 2021</span>
      </div>
    </footer>
  );
}
