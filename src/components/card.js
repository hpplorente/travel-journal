import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.item.image} />
        <div className="info">
          <div>
            <span className="location">{props.item.location}</span>
            <span>
              <a href={props.item.googleMaps} className="map-loc">
                View on Google Maps
              </a>
            </span>
          </div>
          <h3 className="title">{props.item.title}</h3>
          <p className="date">
            {props.item.startDate} - {props.item.endDate}
          </p>
          <p className="description">{props.item.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Card;
