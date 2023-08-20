import React from "react";

interface QuizProps {
  quiz: {
    question: string;
    options: string[];
    correctOption: number;
  };
  onOptionClick: (selectedOption: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ quiz, onOptionClick }) => {
  return (
    <div>
      <p>{quiz.question}</p>
      <ul>
        {quiz.options.map((option, index) => (
          <li key={index} onClick={() => onOptionClick(index)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
