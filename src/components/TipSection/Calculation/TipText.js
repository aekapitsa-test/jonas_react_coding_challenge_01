function TipText({ averageTipPercentage }) {
  return (
    <p className="tipText">{`Amount for payment: ${0} (${0} + ${averageTipPercentage})`}</p>
  );
}

export default TipText;
