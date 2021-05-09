import React from "react";
import Navbar from "./Navbar";

import "../../styles/HeroHeader.css";

export default function HeroHeader({ props }) {
  return (
    <div className="hero-header">
      <Navbar props={props} />
      <h1 className="hero-header-title">Schwarzenberg Palace</h1>
    </div>
  );
}
