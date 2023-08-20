import React from "react";

interface ScoreProps {
  currentScore: number;
  totalScore: number;
  onReset: () => void;
}

const Score: React.FC<ScoreProps> = ({ currentScore, totalScore, onReset }) => {
  return (
    <div>
      <p>
        Score: {currentScore}/{totalScore}
      </p>
      <button onClick={onReset}>Reset Quiz</button>
    </div>
  );
};

export default Score;
