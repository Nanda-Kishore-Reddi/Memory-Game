import React from "react";

const Scoreboard = ({ score, bestScore }) => {
  return (
    <header className="scoreboard">
      <h1>Memory Game</h1>
      <div>
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
      </div>
    </header>
  );
};

export default Scoreboard;
