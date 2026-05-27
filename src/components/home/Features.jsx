const features = [

  {
    icon: "📊",
    title: "ATS Score Analysis",
    description:
      "Instantly check how well your resume performs in ATS systems used by top companies.",
  },

  {
    icon: "🧠",
    title: "Skill Intelligence",
    description:
      "Detect missing technologies, weak areas, and high-demand skills automatically.",
  },

  {
    icon: "✨",
    title: "AI Suggestions",
    description:
      "Get intelligent recommendations to improve resume quality and visibility.",
  },

  {
    icon: "🎤",
    title: "Mock Interviews",
    description:
      "Practice interview questions with timer-based AI interview simulation.",
  },

  {
    icon: "📈",
    title: "Smart Dashboard",
    description:
      "Track resume performance, interview score, and improvement insights.",
  },

  {
    icon: "⚡",
    title: "Fast Processing",
    description:
      "Analyze resumes within seconds using advanced AI-inspired analysis flow.",
  },

];

export default function Features() {

  return (

    <section className="features-section">

      <h2>
        Powerful AI Features
      </h2>

      <div className="feature-grid">

        {features.map((feature, index) => (

          <div
            className="feature-card"
            key={index}
          >

            <div className="feature-icon">

              {feature.icon}

            </div>

            <h3>
              {feature.title}
            </h3>

            <p>
              {feature.description}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}