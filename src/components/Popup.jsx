import React from "react";

const Popup = ({ score, bestScore, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Game Over!</h2>
        <p>Your Score: <strong>{score}</strong></p>
        <p>Best Score: <strong>{bestScore}</strong></p>
        <button className="popup-button" onClick={onClose}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Popup;

