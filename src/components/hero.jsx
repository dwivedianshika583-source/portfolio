function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hello, I'm</p>

        <h1>Anshika Dwivedi</h1>

        <h2>CSE | AI/ML Student</h2>

        <p className="hero-description">
          I am passionate about Machine Learning, Artificial Intelligence,
          Data Structures and building real-world applications.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="/Anshika_Resume.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;