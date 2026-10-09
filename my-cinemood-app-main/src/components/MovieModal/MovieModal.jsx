import React from "react";
import "./MovieModal.css";

const MovieModal = ({ movie, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{movie.title}</h2>
        <img src={movie.poster} alt={movie.title} />
        <p>{movie.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MovieModal;