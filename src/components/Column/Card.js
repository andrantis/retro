import React from "react";
import "./Card.css";

const Card = props => (
  <div className={`card-container ${props.dragging ? "dragging" : ""}`}>{props.text}</div>
);

export default Card;
