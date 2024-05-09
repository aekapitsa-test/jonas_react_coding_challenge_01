import TipCalcBox from "./Calculation/TipCalcBox";
import FeedbackBox from "./Feedback/FeedbackBox";

function TipWrapper() {
  return (
    <div className="tipWrapper">
      <FeedbackBox />
      <TipCalcBox />
    </div>
  );
}

export default TipWrapper;
