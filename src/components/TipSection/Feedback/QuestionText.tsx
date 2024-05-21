import IQuestionTextProps from "./Interfaces/IQuestionTextProps";

function QuestionText({ children }: IQuestionTextProps) {
  return <div className="questionText">{children}</div>;
}

export default QuestionText;
