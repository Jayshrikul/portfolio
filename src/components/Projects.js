import React from "react";
import "../styles/Projects.css";
import proj1 from "../assets/project1.jpg";
import proj2 from "../assets/project1.jpg"; // Replace with unique image if available

function Projects() {
  const projectData = [
    {
      title: "Portfolio Website",
      image: proj1,
      description:
        "A personal portfolio to showcase my skills, projects, and resume.",
      demoLink: "https://yourportfolio.com",
      githubLink: "https://github.com/yourusername/portfolio",
    },
    {
      title: "E-commerce App",
      image: proj2,
      description: "React + Firebase based e-commerce web app.",
      demoLink: "https://yourecommerce.com",
      githubLink: "https://github.com/yourusername/ecommerce-app",
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/400x300?text=Project+Image";
              }}
            />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="buttons">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
