import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Simple CRUD App",
    subtitle: "Web Development",
    desc: "A simple CRUD application built with PHP & MySQL to manage data (create, read, update, delete) with a clean and functional interface.",
    img: "./crud.png", // contoh gambar
  },
  {
    title: "Dimsum Ordering App",
    subtitle: "Frontend Dev",
    desc: "Svarga Web App – Team project for IT’Day 2025 to support MSMEs. Frontend Developer role, achieved Top 5 & certified.",
    img: "./svarga.png",
  },
  {
    title: "Portfolio Website",
    subtitle: "Web Development",
    desc: "A simple responsive website built with React and Vite to showcase clean design and usability.",
    img: "./porto.png",
  },
];

const Projects = () => {
  return (
    <section id="project" className="projects-section">
      <div className="container">
        <h2 className="projects-title">🚀 My Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-glow"></div>

              <img src={project.img} alt={project.title} className="project-img" />

              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-subtitle">{project.subtitle}</h4>
              <p className="project-desc">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
