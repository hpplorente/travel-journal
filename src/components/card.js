import React from "react";
import "./card.css";

function Card(props) {
  console.log(props.item.description);
  console.log(props.item.startDate);
  return (
    <div className="container">
      <img src={props.item.image} />
      <div>
        <div>
          <span>{props.item.location}</span>
          <span>
            <a href={props.item.googleMaps}>View on Google Maps</a>
          </span>
        </div>
        <h3>{props.item.title}</h3>
        <p>
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;
