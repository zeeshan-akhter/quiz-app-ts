import React, { useReducer } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Score from "./components/Score";
import { quizData } from "./data/quizData.content";
import { AppState } from "./reducer/quizReducer.types";
import { quizReducer } from "./reducer/quizRedcuer";
import { useTheme } from "./context/ThemeContext";

export const initialState: AppState = {
  quizData: quizData,
  currentQuestionIndex: 0,
  score: 0
};

const App: React.FC = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
      <Header title="Quiz App" />
      <button onClick={toggleTheme}>Toggle theme</button>
      {state.currentQuestionIndex < state.quizData.length ? (
        <Quiz
          quiz={state.quizData[state.currentQuestionIndex]}
          onOptionClick={(selectedOption) =>
            dispatch({ type: "ATTEMPTED", selectedOption })
          }
        />
      ) : (
        <Score
          currentScore={state.score}
          totalScore={state.quizData.length}
          onReset={() => dispatch({ type: "RESET" })}
        />
      )}
    </div>
  );
};

export default App;
