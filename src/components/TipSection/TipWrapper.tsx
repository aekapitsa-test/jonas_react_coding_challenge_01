import TipCalcBox from "./Calculation/TipCalcBox";
import FeedbackBox from "./Feedback/FeedbackBox";
import { useState } from "react";

function TipWrapper() {
  type TipState = [number, (a: number) => void];

  const [clientsTip, setClientsTip]: TipState = useState(0);
  const [otherTip, setOtherTip]: TipState = useState(0);

  let averageTipPercentage: number = (clientsTip + otherTip) / 2;

  function handleClientsTip(tipValue: number): void {
    setClientsTip(tipValue);
  }

  function handleOtherTip(tipValue: number): void {
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
