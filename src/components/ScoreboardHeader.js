import React, { useState } from "react";

const ScoreboardHeader = ({ score, bestScore }) => {
  return (
    <div className="header">
      <h2 className="gameTitle">Memory Card Game</h2>

      <p>Current score: {score}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
};

export default ScoreboardHeader;
