import TipCalcBox from "./Calculation/TipCalcBox";
import FeedbackBox from "./Feedback/FeedbackBox";
import { useState } from "react";

function TipWrapper() {
  const [clientsTip, setClientsTip] = useState(0);
  const [otherTip, setOtherTip] = useState(0);

  let averageTipPercentage = (clientsTip + otherTip) / 2;

  function handleClientsTip(tipValue) {
    setClientsTip(tipValue);
  }

  function handleOtherTip(tipValue) {
    setOtherTip(tipValue);
  }

  return (
    <div className="tipWrapper">
      <FeedbackBox
        handleClientsTip={handleClientsTip}
        handleOtherTip={handleOtherTip}
      />
      <TipCalcBox averageTipPercentage={averageTipPercentage} />
    </div>
  );
}

export default TipWrapper;
