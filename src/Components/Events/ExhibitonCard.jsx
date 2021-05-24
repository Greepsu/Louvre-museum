import React from "react";

//import styles 
import "../../styles/ExhibitionCard.css";

export default function ExhibitonCard({
  exhibitonImage,
  exhibitonTitle,
  exhibitonDate,
  exhibitonDescription,
  props
}){
  const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  console.log(props.purchaseRef)
  return (
    <div className="exhibition-card">
      <div className="card-image">
        <img src={exhibitonImage} alt="painting" />
      </div>
      <div className="card-text">
        <h3 className="card-title">{exhibitonTitle}</h3>
        <span className="card-date">{exhibitonDate}</span>
        <p className="card-description">{exhibitonDescription}</p>
        <a href="#buy" onClick={() => executeScroll(props.purchaseRef)} className="card-button">
          Buy Tickets
        </a>
      </div>
    </div>
  );
}
