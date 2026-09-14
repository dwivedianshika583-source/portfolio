function Skill() {
  const skills = [
    "Python",
    "C++",
    "DSA",
    "Machine Learning",
    "SQL",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "Seaborn",
    "HTML",
    "CSS",
    "OpenCV",
    "Git & GitHub",
    "FastAPI",
    "React"
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>

      <div className="skill-container">
        {skills.map((skill) => (
          <div className="skill" key={skill}>
            <strong>{skill}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;