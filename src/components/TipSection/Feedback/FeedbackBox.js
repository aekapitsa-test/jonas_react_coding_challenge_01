import QuestionWrapper from "./QuestionWrapper";
import QuestionSelectWrapper from "./QuestionSelectWrapper";
import H2Header from "../../Utilities/TextElements/H2Header";

function FeedbackBox() {
  return (
    <div className="feedbackBox">
      <H2Header>Feeback</H2Header>
      <QuestionWrapper />
      <QuestionSelectWrapper />
      <QuestionSelectWrapper />
    </div>
  );
}

export default FeedbackBox;
