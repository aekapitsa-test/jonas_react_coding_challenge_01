import VariantsOfAnswerAndPercentage from "../Types/VariantsOfAnswerAndPercentage";

interface IQuestionObj {
  question: string;
  typeOfAnswer: "input" | "select";
  variantsOfAnswers: VariantsOfAnswerAndPercentage;
  feedbackProvider?: "client" | "other";
}

export default IQuestionObj;
