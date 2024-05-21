import TipText from "./TipText";
import ControlPanelWrapper from "./ControlPanelWrapper";
import H2Header from "../../Utilities/TextElements/H2Header";
import ITipCalcBoxProps from "./Interfaces/ITipCalcBoxProps";

function TipCalcBox({ averageTipPercentage }: ITipCalcBoxProps) {
  return (
    <div className="tipCalcBox">
      <H2Header>Tip Calculation</H2Header>
      <TipText averageTipPercentage={averageTipPercentage} />
      <ControlPanelWrapper />
    </div>
  );
}

export default TipCalcBox;
