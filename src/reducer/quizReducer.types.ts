type AttemptedAction = {
  type: "ATTEMPTED";
  selectedOption: number;
};

type ResetAction = {
  type: "RESET";
};

export type QuizAction = AttemptedAction | ResetAction;

export type AppState = {
  quizData: {
    question: string;
    options: string[];
    correctOption: number;
  }[];
  currentQuestionIndex: number;
  score: number;
};
