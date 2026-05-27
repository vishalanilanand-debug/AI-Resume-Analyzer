"use client";

import Link from "next/link";

export default function HeroSection() {

  return (

    <section className="hero-section">

      <div className="hero-content">

        <span className="badge">
          ✨ AI Powered Resume Intelligence Platform
        </span>

        <h1>
          Build a Resume
          <br />
          That Gets
          <span className="gradient-text">
            {" "}Hired Faster
          </span>
        </h1>

        <p>
          Analyze your resume using intelligent ATS simulation,
          identify missing skills, improve job matching,
          and prepare for interviews with AI-powered feedback.
        </p>

        <div className="hero-buttons">

          <Link href="/upload">

            <button className="primary-btn">

              Analyze Resume

            </button>

          </Link>

          <Link href="/interview">

            <button className="secondary-btn">

              Start Mock Interview

            </button>

          </Link>

        </div>

        <div className="hero-stats">

          <div className="stat-card">


            <h2>
              95%
            </h2>

            <p>
              ATS Accuracy
            </p>

          </div>

          <div className="stat-card">

            <h2>
              10K+
            </h2>

            <p>
              Resume Analyses
            </p>

          </div>

          <div className="stat-card">

            <h2>
              AI
            </h2>

            <p>
              Interview Feedback
            </p>

          </div>

        </div>

      </div>

    </section>

  );

}