import React, { forwardRef } from "react";
import ExhibitonCard from "./ExhibitonCard";

//import styles
import "../../styles/Exhibitions.css"

//import assets
import ArlesVenus from "../../assets/images/la-venus-d-arles.jpg"
import PaoloCaliari from "../../assets/images/paolo-caliari.jpg"


function Exhibitions({props}, ref) {
  return (
    <div className="exhibitions" ref={ref}>
      <h2 className="exhibitions-title" >Current Exhibitions</h2>
      <div className="exhibitions-container">
      <ExhibitonCard
        exhibitonImage={ArlesVenus}
        exhibitonTitle="Ideal Greek beauty"
        exhibitonDate="Permanent"
        exhibitonDescription="Selected The Louvre’s gallery of antiquities, which replaced the royal apartments, displays masterpieces of Greek sculpture – including the famous Venus de Milo. You would need a heart of stone not to be moved by her grace!"
      />
      <div className="separator"></div>
      <ExhibitonCard
      exhibitonImage={PaoloCaliari}
      exhibitonTitle="From the 'Mona Lisa' to 'The wedding feast at Cana'"
      exhibitonDate="18.2.2020 - 17.5.2020"
      exhibitonDescription="The world’s most famous painting, the Mona Lisa, needs a space big enough to welcome its many admirers. It is therefore housed in the Salle des États, which is also home to other remarkable Venetian paintings such as The Wedding Feast at Cana by Veronese."
      />

      </div>
    </div>
  );
}

const forwardedExhibition = forwardRef(Exhibitions)

export default forwardedExhibition
