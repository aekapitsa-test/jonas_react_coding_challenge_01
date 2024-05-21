import { ReactNode } from "react";

interface IFeedbackBoxProps {
  handleClientsTip: (a: number) => void;
  handleOtherTip: (a: number) => void;
  children?: ReactNode;
}

export default IFeedbackBoxProps;
