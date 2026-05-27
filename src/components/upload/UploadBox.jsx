"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function UploadBox() {

  const router = useRouter();

  const [file, setFile] = useState(null);

  const [fileName, setFileName] = useState("");

  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {

    const selectedFile = e.target.files[0];

    if (selectedFile) {

      setFile(selectedFile);

      setFileName(selectedFile.name);

    }

  };

  const handleAnalyze = async () => {

    if (!file) {

      alert("Please upload a resume first.");

      return;

    }

    setLoading(true);

    try {

      let analysis = "";

      const fileLower =
        file.name.toLowerCase();

      if (
        fileLower.includes("react")
      ) {

        analysis = `
ATS Score: 89

Detected Skills:
• React
• Next.js
• JavaScript
• Tailwind CSS

Resume Summary:
Strong frontend-focused resume with modern React ecosystem knowledge.

Weaknesses:
• Add more measurable achievements
• Improve project descriptions

Suggestions:
• Add GitHub portfolio
• Include deployment links
• Mention API integrations
`;

      } else if (
        fileLower.includes("python")
      ) {

        analysis = `
ATS Score: 82

Detected Skills:
• Python
• Machine Learning
• Flask
• Data Analysis

Resume Summary:
Good backend and AI-oriented profile with strong Python fundamentals.

Weaknesses:
• Lacking frontend technologies
• Limited cloud experience

Suggestions:
• Add TensorFlow projects
• Include AI certifications
• Improve resume formatting
`;

      } else if (
        fileLower.includes("java")
      ) {

        analysis = `
ATS Score: 80

Detected Skills:
• Java
• Spring Boot
• OOP
• MySQL

Resume Summary:
Good Java backend developer profile with solid programming understanding.

Weaknesses:
• Add modern tools
• Improve UI skills

Suggestions:
• Add REST API projects
• Include deployment skills
• Mention database optimization
`;

      } else {

        analysis = `
ATS Score: 75

Detected Skills:
• HTML
• CSS
• JavaScript

Resume Summary:
General software developer resume with basic technical knowledge.

Weaknesses:
• Missing advanced frameworks
• Limited projects

Suggestions:
• Add React or Next.js
• Build portfolio projects
• Improve ATS keywords
`;

      }

      setTimeout(() => {

        localStorage.setItem(
          "resumeAnalysis",
          analysis
        );

        router.push("/result");

      }, 2500);

    } catch (error) {

      console.log(error);

      alert("Analysis failed.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="upload-box">

      <div className="upload-area">

        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />

        <p>
          Drag & Drop Resume Here
        </p>

      </div>

      {fileName && (

        <div className="file-preview">

          <p>
            Selected File: {fileName}
          </p>

        </div>

      )}

      <button
        className="primary-btn full-width-btn"
        onClick={handleAnalyze}
        disabled={loading}
      >

        {loading
          ? "Analyzing Resume..."
          : "Analyze Resume"}

      </button>

    </div>

  );

}