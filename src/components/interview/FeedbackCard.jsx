export default function FeedbackCard({ score, totalQuestions }) {

  const percentage =
    Math.round((score / totalQuestions) * 100);

  let feedbackTitle = "";
  let feedbackMessage = "";

  if (percentage >= 80) {

    feedbackTitle = "Excellent Performance";

    feedbackMessage =
      "Outstanding job! Your technical understanding is strong and your answers were accurate. Keep practicing advanced concepts and real-world problem solving.";

  } else if (percentage >= 60) {

    feedbackTitle = "Good Performance";

    feedbackMessage =
      "Good attempt! You understand most concepts well. Focus on improving explanation clarity and technical depth.";

  } else if (percentage >= 40) {

    feedbackTitle = "Average Performance";

    feedbackMessage =
      "Decent effort, but you need more practice. Revise core frontend concepts and improve confidence while answering.";

  } else {

    feedbackTitle = "Needs Improvement";

    feedbackMessage =
      "Your score is low. Focus on understanding fundamentals like React, JavaScript, APIs, and CSS before attempting advanced interviews.";

  }

  return (

    <div className="dashboard-card">

      <h2>
        AI Feedback
      </h2>

      <div
        style={{
          marginTop: "20px",
        }}
      >

        <h3
          style={{
            color: "cyan",
            marginBottom: "15px",
            fontSize: "24px",
          }}
        >
          {feedbackTitle}
        </h3>

        <p
          style={{
            color: "#94a3b8",
            lineHeight: "1.8",
          }}
        >
          {feedbackMessage}
        </p>

        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid #334155",
          }}
        >

          <p>
            Final Score:
            {" "}
            <span
              style={{
                color: "cyan",
                fontWeight: "bold",
              }}
            >
              {score}/{totalQuestions}
            </span>
          </p>

        </div>

      </div>

    </div>

  );

}