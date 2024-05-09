import QuestionText from "./QuestionText";
import SelectElement from "../../Utilities/InputElements/SelectElement";

function QuestionSelectWrapper() {
  return (
    <div className="questionSelectWrapper">
      <QuestionText />
      <SelectElement />
    </div>
  );
}

export default QuestionSelectWrapper;
