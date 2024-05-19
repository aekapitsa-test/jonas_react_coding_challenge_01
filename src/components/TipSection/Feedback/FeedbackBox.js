import QuestionWrapper from "./QuestionWrapper";
import H2Header from "../../Utilities/TextElements/H2Header";

function FeedbackBox({ handleClientsTip, handleOtherTip }) {
  const questions = [
    {
      question: "How much was the bill?",
      typeOfAnswer: "input",
      variantsOfAnswers: [],
      feedbackProvider: "",
    },
    {
      question: "How did you like the service?",
      typeOfAnswer: "select",
      variantsOfAnswers: [
        ["Dissatisfied", 0],
        ["It was okay", 5],
        ["It was good", 10],
        ["Absolutely amazing!", 20],
      ],
      feedbackProvider: "client",
    },
    {
      question: "How did your friend like the service?",
      typeOfAnswer: "select",
      variantsOfAnswers: [
        ["Dissatisfied", 0],
        ["It was okay", 5],
        ["It was good", 10],
        ["Absolutely amazing!", 20],
      ],
      feedbackProvider: "other",
    },
  ];

  return (
    <div className="feedbackBox">
      <H2Header>Feedback</H2Header>
      {questions.map((questionObj, index) => {
        return (
          <QuestionWrapper
            key={index}
            questionObj={questionObj}
            handleClientsTip={handleClientsTip}
            handleOtherTip={handleOtherTip}
          />
        );
      })}
    </div>
  );
}

export default FeedbackBox;
