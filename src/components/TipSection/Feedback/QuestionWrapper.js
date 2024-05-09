import QuestionText from "./QuestionText";
import InputBox from "../../Utilities/InputElements/InputBox";

function QuestionWrapper() {
  return (
    <div className="questionWrapper">
      <QuestionText />
      <InputBox />
    </div>
  );
}

export default QuestionWrapper;
