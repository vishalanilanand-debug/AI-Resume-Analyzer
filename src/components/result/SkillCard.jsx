const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "CSS",
  "API Integration",
];

export default function SkillCard() {
  return (
    <div className="dashboard-card">

      <h2>Detected Skills</h2>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <span
            className="skill-badge"
            key={index}
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}