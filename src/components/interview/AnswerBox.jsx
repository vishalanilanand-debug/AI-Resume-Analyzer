"use client";

import { useEffect, useState } from "react";

const questions = [
  {
    question: "What is React?",
    answer: "library",
  },

  {
    question: "What is Next.js?",
    answer: "framework",
  },

  {
    question: "What is useState?",
    answer: "state",
  },

  {
    question: "What is API?",
    answer: "application",
  },

  {
    question: "What is CSS used for?",
    answer: "style",
  },
];

export default function AnswerBox() {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [userAnswer, setUserAnswer] = useState("");

  const [score, setScore] = useState(0);

  const [timer, setTimer] = useState(30);

  const [completed, setCompleted] = useState(false);

  const [totalTime, setTotalTime] = useState(0);

  const [feedback, setFeedback] = useState("");

  useEffect(() => {

    if (completed) return;

    if (timer === 0) {

      if (currentQuestion < questions.length - 1) {

        handleNextQuestion();

      } else {

        setCompleted(true);

      }

      return;

    }

    const interval = setInterval(() => {

      setTimer((prev) => prev - 1);

      setTotalTime((prev) => prev + 1);

    }, 1000);

    return () => clearInterval(interval);

  }, [timer, completed]);

  const handleSubmitAnswer = () => {

    const correctAnswer =
      questions[currentQuestion]?.answer.toLowerCase();

    let feedbackMessage = "";

    if (
      userAnswer.toLowerCase().includes(correctAnswer)
    ) {

      setScore((prev) => prev + 1);

      feedbackMessage =
        "Excellent answer! You explained the concept correctly.";

    } else if (userAnswer.length > 15) {

      feedbackMessage =
        "Decent attempt. Try improving technical accuracy and clarity.";

    } else {

      feedbackMessage =
        "Weak answer. Try understanding the core concept better.";

    }

    setFeedback(feedbackMessage);

    setTimeout(() => {

      handleNextQuestion();

    }, 2000);

  };

  const handleNextQuestion = () => {

    if (currentQuestion < questions.length - 1) {

      setCurrentQuestion((prev) => prev + 1);

      setUserAnswer("");

      setFeedback("");

      setTimer(30);

    } else {

      setCompleted(true);

    }

  };

  const handleSkip = () => {

    handleNextQuestion();

  };

  const restartTest = () => {

    setCurrentQuestion(0);

    setUserAnswer("");

    setScore(0);

    setTimer(30);

    setCompleted(false);

    setTotalTime(0);

    setFeedback("");

  };

  if (completed) {

    const percentage =
      Math.round((score / questions.length) * 100);

    let performance = "";

    let suggestion = "";

    if (percentage >= 80) {

      performance = "Excellent Performance";

      suggestion =
        "Outstanding work! Your technical understanding is strong and interview-ready.";

    } else if (percentage >= 60) {

      performance = "Good Performance";

      suggestion =
        "Good job! You have decent understanding, but improve explanation clarity and technical depth.";

    } else if (percentage >= 40) {

      performance = "Average Performance";

      suggestion =
        "You need more practice with frontend concepts and confidence while answering.";

    } else {

      performance = "Needs Improvement";

      suggestion =
        "Focus on React, JavaScript, APIs, and CSS fundamentals before attempting advanced interviews.";

    }

    return (

      <div className="dashboard-card">

        <h2>
          Interview Test Completed
        </h2>

        <div
          style={{
            marginTop: "30px",
            lineHeight: "2",
          }}
        >

          <p>
            Total Questions: {questions.length}
          </p>

          <p>
            Correct Answers: {score}
          </p>

          <p>
            Wrong Answers: {questions.length - score}
          </p>

          <p>
            Final Score: {percentage}%
          </p>

          <p>
            Total Time Taken: {totalTime} sec
          </p>

        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "25px",
            borderRadius: "18px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid #334155",
          }}
        >

          <h2
            style={{
              color: "cyan",
              marginBottom: "15px",
            }}
          >
            AI Feedback
          </h2>

          <h3
            style={{
              marginBottom: "15px",
            }}
          >
            {performance}
          </h3>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
            }}
          >
            {suggestion}
          </p>

        </div>

        <button
          className="primary-btn"
          style={{
            marginTop: "30px",
          }}
          onClick={restartTest}
        >
          Start Test Again
        </button>

      </div>

    );

  }

  return (

    <div className="dashboard-card">

      <h2>
        Question {currentQuestion + 1}/{questions.length}
      </h2>

      <p
        style={{
          marginTop: "20px",
          marginBottom: "25px",
          fontSize: "22px",
          lineHeight: "1.6",
        }}
      >
        {questions[currentQuestion]?.question}
      </p>

      <div
        style={{
          marginBottom: "20px",
          color: "cyan",
          fontSize: "22px",
          fontWeight: "bold",
        }}
      >
        Time Left: {timer}s
      </div>

      <textarea
        className="answer-box"
        placeholder="Write your answer here..."
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
      />

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "20px",
        }}
      >

        <button
          className="primary-btn"
          onClick={handleSubmitAnswer}
        >
          Submit Answer
        </button>

        <button
          className="secondary-btn"
          onClick={handleSkip}
        >
          Skip Question
        </button>

      </div>

      {feedback && (

        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            borderRadius: "16px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid #334155",
          }}
        >

          <h3
            style={{
              marginBottom: "10px",
              color: "cyan",
            }}
          >
            AI Feedback
          </h3>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: "1.8",
            }}
          >
            {feedback}
          </p>

        </div>

      )}

    </div>

  );

}