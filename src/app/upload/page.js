 import Navbar from "../../components/common/Navbar";

import UploadBox from "../../components/upload/UploadBox";

export default function UploadPage() {

  return (

    <main className="upload-page">

      <Navbar />

      <section className="upload-container">

        <span className="badge">
          🚀 AI Resume Scanner
        </span>

        <h1>
          Upload Your Resume
          <br />
          For
          <span className="gradient-text">
            {" "}Smart Analysis
          </span>
        </h1>

        <p>
          Get ATS score, skill intelligence,
          AI-powered recommendations,
          and interview insights instantly.
        </p>

        <div className="upload-highlight">

          <div className="highlight-card">

            <h3>
              ATS Optimization
            </h3>

            <p>
              Improve resume visibility for recruiters.
            </p>

          </div>

          <div className="highlight-card">

            <h3>
              AI Suggestions
            </h3>

            <p>
              Get smart improvements for stronger resumes.
            </p>

          </div>

          <div className="highlight-card">

            <h3>
              Instant Analysis
            </h3>

            <p>
              Receive resume insights within seconds.
            </p>

          </div>

        </div>

        <UploadBox />

      </section>

    </main>

  );

}