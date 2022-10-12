import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  const [whichQuestion, setWhichQuestion] = useState(0);
  const [numberCorrect, setNumberCorrect] = useState(0);
  const buttonClickHandler = (event) => {
    const chosenAnswer = event.target.innerHTML;
    const answerSet = questions[whichQuestion].answerOptions;
    let correctAnswer = "";
    for (let i = 0; i < answerSet.length; i++) {
      if (answerSet[i].isCorrect) {
        correctAnswer = answerSet[i].answerText;
      }
    }
    if (correctAnswer === chosenAnswer) {
      setNumberCorrect((prevState) => {
        return prevState + 1;
      });
    }

    setWhichQuestion((prevState) => {
      return prevState + 1;
    });
  };

  const tryAgainHandler = () => {
    setNumberCorrect(0);
    setWhichQuestion(0);
  };
  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {whichQuestion === 4 ? (
        <div>
          <div className="score-section">
            You scored {numberCorrect} out of {questions.length}
          </div>
          <button onClick={tryAgainHandler}>Try Again?</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question 1</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[whichQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {}
            <button onClick={buttonClickHandler}>
              {questions[whichQuestion].answerOptions[0].answerText}
            </button>
            <button onClick={buttonClickHandler}>
              {questions[whichQuestion].answerOptions[1].answerText}
            </button>
            <button onClick={buttonClickHandler}>
              {questions[whichQuestion].answerOptions[2].answerText}
            </button>
            <button onClick={buttonClickHandler}>
              {questions[whichQuestion].answerOptions[3].answerText}
            </button>
          </div>
        </>
      )}
    </div>
  );
}