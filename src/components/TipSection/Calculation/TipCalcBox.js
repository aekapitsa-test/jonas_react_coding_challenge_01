import TipText from "./TipText";
import ControlPanelWrapper from "./ControlPanelWrapper";
import H2Header from "../../Utilities/TextElements/H2Header";

function TipCalcBox() {
  return (
    <div className="tipCalcBox">
      <H2Header>Tip Calculation</H2Header>
      <TipText />
      <ControlPanelWrapper />
    </div>
  );
}

export default TipCalcBox;
