import SelectOption from "./SelectOption";

function SelectElement({
  variantsOfAnswer,
  feedbackProvider,
  handleClientsTip,
  handleOtherTip,
}) {
  return (
    <select
      className="selectElement"
      name="selectElement"
      id="selectElement"
      onChange={(e) => {
        if (feedbackProvider === "client") {
          handleClientsTip(Number(e.target.value));
        } else if (feedbackProvider === "other") {
          handleOtherTip(Number(e.target.value));
        }
      }}
    >
      <option hidden>...</option>

      {variantsOfAnswer.map(([clientAnswer, percentageForTipCalc], index) => {
        return (
          <SelectOption
            key={index}
            value={percentageForTipCalc}
          >{`${clientAnswer} ${percentageForTipCalc}%`}</SelectOption>
        );
      })}
      <SelectOption />
    </select>
  );
}

export default SelectElement;
