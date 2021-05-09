import React, { forwardRef } from "react";
import ExhibitonCard from "./ExhibitonCard";

//import styles
import "../../styles/Exhibitions.css"

//import assets
import OldMasters from "../../assets/images/OldMasters.png";
import LineLightShade from "../../assets/images/LineLightShade.png";


function Exhibitions({props}, ref) {
  return (
    <div className="exhibitions" ref={ref}>
      <h2 className="exhibitions-title" >Current Exhibitions</h2>
      <div className="exhibitions-container">
      <ExhibitonCard
        exhibitonImage={OldMasters}
        exhibitonTitle="The Old Masters"
        exhibitonDate="Permanent"
        exhibitonDescription="Selected key artworks from the Collection of Old Masters (Petr BrandL, Adriaen de Vries, Albrecht Dürer, El Greco, Francisco, José Goya, Hans Holbein, Jan Mabuse, Rembrandt van Rijin, Jusepe de Ribera, Peter Paul Rubens and others)."
      />
      <div className="separator"></div>
      <ExhibitonCard
      exhibitonImage={LineLightShade}
      exhibitonTitle="Line, Light, Shade"
      exhibitonDate="18.2.2020 - 17.5.2020"
      exhibitonDescription="Masterpieces on paper and vellum from the periods of the Renaissance, Mannerism, Baroque and Neoclassicism by Bohemian, Northern and italian artists"
      />

      </div>
    </div>
  );
}

const forwardedExhibition = forwardRef(Exhibitions)

export default forwardedExhibition
