import React from "react";
import "./HeroCard.css";

const HeroCard = ({ movie, onClick }) => {
  return (
    <div className="hero-card" onClick={onClick}>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  );
};

export default HeroCard;
