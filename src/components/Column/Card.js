import React from "react";
import "./Card.css";

import Textarea from "../Forms/Textarea";

const Card = props => (
  // <div className={`card-container ${props.dragging ? "dragging" : ""}`}>{props.text}</div>
  // <textarea className={`card-container ${props.dragging ? "dragging" : ""}`}>{props.text}</textarea>
  <div className={`card-container ${props.dragging ? "dragging" : ""}`}>
    <Textarea />
  </div>
  
);

export default Card;
