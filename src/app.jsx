import React, { useEffect, useState } from "react";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";
import Popup from "./components/Popup";
import fetchImages from "./utils/api";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedIds, setClickedIds] = useState([]);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    fetchImages().then((data) => {
      setCards(data);
    });
  }, []);

  const shuffleCards = () => {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  };

  const handleCardClick = (id) => {
    if (clickedIds.includes(id)) {
      setIsGameOver(true);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedIds((prevIds) => [...prevIds, id]);
      if (newScore > bestScore) setBestScore(newScore);
    }
    shuffleCards();
  };

  const handleClosePopup = () => {
    setIsGameOver(false);
    setScore(0);
    setClickedIds([]);
  };

  return (
    <div className="App">
      <Scoreboard score={score} bestScore={bestScore} />

      <div className="card-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {isGameOver && (
        <Popup
          score={score}
          bestScore={bestScore}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default App;
