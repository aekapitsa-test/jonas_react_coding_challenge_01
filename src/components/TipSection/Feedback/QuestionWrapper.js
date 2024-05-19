import QuestionText from "./QuestionText";
import InputBox from "../../Utilities/InputElements/InputBox";
import SelectElement from "../../Utilities/InputElements/SelectElement";

function QuestionWrapper({ questionObj, handleClientsTip, handleOtherTip }) {
  // rewrite using if to show variants?

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
