import Navbar from "../../components/common/Navbar";
import QuestionCard from "../../components/interview/QuestionCard";
import AnswerBox from "../../components/interview/AnswerBox";


export default function InterviewPage() {
  return (
    <main className="interview-page">
      <Navbar />

      <section className="interview-container">
        <h1>AI Mock Interview</h1>

        <QuestionCard />
        <AnswerBox />
        
      </section>
    </main>
  );
}