import React from "react";
import "./Card.css";

const Card = ({ id, image, title, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt={title} className="card-image" />
      <p className="card-title">{title}</p>
    </div>
  );
};

export default Card;
