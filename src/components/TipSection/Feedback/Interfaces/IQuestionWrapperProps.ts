import { ReactNode } from "react";
import IQuestionObj from "./IQuestionObj";

interface IQuestionWrapperProps {
  questionObj: IQuestionObj;
  handleClientsTip: (a: number) => void;
  handleOtherTip: (a: number) => void;
  children?: ReactNode;
}

export default IQuestionWrapperProps;
