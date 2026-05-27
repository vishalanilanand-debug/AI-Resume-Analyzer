"use client";

import { useEffect, useState } from "react";

import Navbar from "../../components/common/Navbar";

import ATSScoreCard from "../../components/result/ATSScoreCard";
import SkillCard from "../../components/result/SkillCard";
import SuggestionsCard from "../../components/result/SuggestionsCard";
import ResumeSummary from "../../components/result/ResumeSummary";

export default function ResultPage() {

  const [analysis, setAnalysis] = useState("");

  useEffect(() => {

    const stored =
      localStorage.getItem("resumeAnalysis");

    if (
      stored &&
      stored !== "undefined"
    ) {

      setAnalysis(stored);

    }

  }, []);

  return (

    <main className="result-page">

      <Navbar />

      <section className="result-container">

        <h1>
          AI Resume Analysis
        </h1>

        <div className="result-grid">

          <ATSScoreCard />

          <SkillCard />

          <SuggestionsCard />

          <ResumeSummary />

        </div>

        <div
          className="dashboard-card"
          style={{
            marginTop: "40px",
          }}
        >

          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Gemini AI Analysis
          </h2>

          <pre
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: "1.8",
              color: "#94a3b8",
              fontSize: "16px",
            }}
          >
            {analysis || "No AI analysis available yet."}
          </pre>

        </div>

      </section>

    </main>

  );

}