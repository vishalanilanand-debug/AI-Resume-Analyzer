"use client";

import Link from "next/link";

export default function CTASection() {

  return (

    <section className="cta-section">

      <div className="cta-box">

        <span className="cta-badge">
          🚀 AI Career Optimization
        </span>

        <h2>
          Ready To Build
          <br />
          A Winning Resume?
        </h2>

        <p>
          Analyze your resume, improve ATS performance,
          prepare for interviews, and boost your chances
          of getting hired with our intelligent AI platform.
        </p>

        <div className="cta-buttons">

          <Link href="/upload">

            <button className="primary-btn">

              Analyze Resume

            </button>

          </Link>

          <Link href="/interview">

            <button className="secondary-btn">

              Start Interview

            </button>

          </Link>

        </div>

      </div>

    </section>

  );

}