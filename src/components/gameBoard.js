import React from "react";
const gameBoard = ({ gameImages, imageClickedActions, shuffleImageOrder }) => {
  return (
    <div className="gameBoardContainer">
      <div className="gameBoard">
        <button className="shuffleButton" onClick={shuffleImageOrder}>
          Shuffle
        </button>
      </div>
      <div className="gameBoard">
        {gameImages.map((image) => (
          <img
            alt=""
            src={image}
            className="gameBoardImage"
            onClick={imageClickedActions}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default gameBoard;
