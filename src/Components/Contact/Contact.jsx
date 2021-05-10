import React, { useRef, useEffect } from "react";

//import styles
import "../../styles/Contact.css";

//import google maps api
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { forwardRef } from "react/cjs/react.development";

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
      center: [14.433009649043225, 50.102028604067016],
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
              National Gallery Prague
              <br />
              Schwarzenberg Palace
            </h3>
            <span>
              Hradčanské nám
              <br />
              Prague 1
            </span>
            <span>(+420) 233 081 730</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const forwardedContact = forwardRef(Contact);
export default forwardedContact;
