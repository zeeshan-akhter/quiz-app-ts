import { initialState } from "../App";
import { AppState, QuizAction } from "./quizReducer.types";

function checkAnswer(selectedOption: number, correctOption: number): boolean {
  return selectedOption === correctOption;
}

function getNextQuestionIndex(
  currentIndex: number,
  totalQuestions: number
): number {
  return currentIndex + 1 <= totalQuestions ? currentIndex + 1 : currentIndex;
}

export const quizReducer = (state: AppState, action: QuizAction): AppState => {
  switch (action.type) {
    case "ATTEMPTED":
      const nextQuestionIndex = getNextQuestionIndex(
        state.currentQuestionIndex,
        state.quizData.length
      );
      const updatedScore = checkAnswer(
        action.selectedOption,
        state.quizData[state.currentQuestionIndex].correctOption
      )
        ? state.score + 1
        : state.score;

      return {
        ...state,
        currentQuestionIndex: nextQuestionIndex,
        score: updatedScore
      };

    case "RESET":
      return initialState;
    default:
      return state;
  }
};
