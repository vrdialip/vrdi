import React from "react";
import "./page.css";

export default function Hero() {
  return (
    <section id="home" className="homepage fade-in">
      <div className="hero">
        {/* Bagian teks */}
        <div className="text-side slide-up">
          <h1 className="title">
            Hi, I'm <span>Verdi</span>
          </h1>
          <h2 className="subtitle">Junior Frontend Developer , Passionate about UI /UX</h2>
          <p className="desc">
            "This website was built with AI assistance while learning React and Vite, combining hands-on practice with smart guidance on components, styling, and modern animations."
          </p>
          <div className="cta fade-in-delay">
            <a href="#projects" className="btn">🚀 View Projects</a>
            <a href="#contact" className="btn-outline">📩 Contact Me</a>
          </div>
        </div>

        {/* Bagian foto */}
        <div className="image-side scale-in">
          <div className="decor-shape shape1"></div>
          <div className="decor-shape shape2"></div>
          <img src="./karikatur-verdi.png" alt="Verdi" className="profile-img" />
        </div>
      </div>
    </section>
  );
}
