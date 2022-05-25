import React, { useState } from "react";
import "./App.css";
import gameImagesArray from "./components/gameImages";
import ScoreboardHeader from "./components/ScoreboardHeader";
import GameBoard from "./components/gameBoard";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameImages, setGameImages] = useState(gameImagesArray);

  const [guessedItemsArray, setGuessedItemsArray] = useState([]);

  const imageClickedActions = (e) => {
    const imageSrc = e.target.src;
    const copyGuessedItemsArray = [...guessedItemsArray];
    if (!copyGuessedItemsArray.includes(imageSrc)) {
      // if it's a scoring click, add it to the guessed array and add a score.  The shuffle the image order.
      copyGuessedItemsArray.push(imageSrc);
      setGuessedItemsArray(copyGuessedItemsArray);
      const newScore = score + 1;

      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
      }
      shuffleImageOrder();
    } else {
      // item already clicked and so game is over.  Reset the game and alert the user:
      window.alert("Image previously clicked.  Please play again....");
      setUpNewGame();
    }
  };

  const setUpNewGame = () => {
    setGuessedItemsArray([]);
    setScore(0);
  };

  const shuffleImageOrder = () => {
    const copyGameImages = [...gameImages];
    for (let i = copyGameImages.length - 1; i > 0; i--) {
      let replacedPosition = Math.floor(Math.random() * (i + 1));
      let storedTemp = copyGameImages[i];
      copyGameImages[i] = copyGameImages[replacedPosition];
      copyGameImages[replacedPosition] = storedTemp;
    }
    setGameImages(copyGameImages);
  };

  return (
    <div className="appContainer">
      <ScoreboardHeader score={score} bestScore={bestScore} />

      <GameBoard
        shuffleImageOrder={shuffleImageOrder}
        gameImages={gameImages}
        shuffleImageOrder={shuffleImageOrder}
        imageClickedActions={imageClickedActions}
      />
    </div>
  );
}

export default App;
