import QuestionText from "./QuestionText";
import InputBox from "../../Utilities/InputElements/InputBox";
import SelectElement from "../../Utilities/InputElements/SelectElement";
import IQuestionWrapperProps from "./Interfaces/IQuestionWrapperProps";

function QuestionWrapper({
  questionObj,
  handleClientsTip,
  handleOtherTip,
}: IQuestionWrapperProps) {
  // re-write using if to show variants?

  return (
    <div className="questionWrapper">
      <QuestionText>{questionObj.question}</QuestionText>
      {questionObj.typeOfAnswer === "input" ? (
        <InputBox />
      ) : (
        <SelectElement
          variantsOfAnswer={questionObj.variantsOfAnswers}
          feedbackProvider={questionObj.feedbackProvider}
          handleClientsTip={handleClientsTip}
          handleOtherTip={handleOtherTip}
        />
      )}
    </div>
  );
}

export default QuestionWrapper;
