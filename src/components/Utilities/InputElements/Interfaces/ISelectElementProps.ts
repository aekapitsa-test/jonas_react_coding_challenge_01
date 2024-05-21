import { ReactNode } from "react";
import variantsOfAnswerAndPercentage from "../../../TipSection/Feedback/Types/VariantsOfAnswerAndPercentage";

interface ISelectElementProps {
  variantsOfAnswer: variantsOfAnswerAndPercentage;
  feedbackProvider?: "client" | "other";
  handleClientsTip: (a: number) => void;
  handleOtherTip: (a: number) => void;
  children?: ReactNode;
}

export default ISelectElementProps;
