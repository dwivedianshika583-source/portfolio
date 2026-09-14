function Projects() {
  const projects = [
    {
      title: "Fake News Detection",
      description:
        "A machine learning project that detects whether a news article is real or fake.",
      technologies:
        "Python, Pandas, NumPy, Scikit-learn, TF-IDF",
        github: "https://github.com/dwivedianshika583"
    },
    {
      title: "Food Waste Reduction App",
      description:
        "A platform that connects surplus food with people and organizations that need it.",
      technologies:
        "React, FastAPI, SQLite, SQLAlchemy",
        github: "https://github.com/dwivedianshika583"
    },
    {
      title: "Heart Disease Prediction",
      description:
        "A machine learning application for heart disease prediction.",
      technologies:
        "Python, Scikit-learn, SVM, Streamlit",
        github: "https://github.com/dwivedianshika583"
    }
  ];

  return (
    <section id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
                
            <button>GitHub</button>
             rel=""https://github.com/dwivedianshika583""

          </div>
      
          
        ))}
      </div>
    </section>
  );
}

export default Projects;