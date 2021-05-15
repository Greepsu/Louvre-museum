import React, { useRef, useEffect, forwardRef } from "react";

//import styles
import "../../styles/Contact.css";

//import google maps api
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;

mapboxgl.accessToken = MAPBOX_TOKEN;

function Contact({ props }, ref) {
  const mapContainer = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [2.334595, 48.864824],
      zoom: 15,
    });
  });

  return (
    <div className="contact" ref={ref}>
      <h2>Contact</h2>
      <div className="contact-map">
        <div className="map-container" ref={mapContainer}></div>
        <div className="contact-text">
          <div>
            <h3>
              Louvre museum -
              <br />
              Palais Royal
            </h3>
            <span>
            Rue de Rivoli
              <br />
              75001 Paris
            </span>
            <span>01 40 20 50 50</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const forwardedContact = forwardRef(Contact);
export default forwardedContact;
