import React, { useEffect, useRef } from "react";
import "./skills.css";

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="skills" className="skills-section hidden" ref={sectionRef}>
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        
        {/* Technical Skills */}
        <div className="skills-box">
          <h3>Technical Skills</h3>

          <div className="skill">
            <span>HTML</span>
            <div className="progress-wrapper">
              <div className="progress-bar"><div style={{width:"85%"}}></div></div>
              <span className="percent">85%</span>
            </div>
          </div>

          <div className="skill">
            <span>CSS</span>
            <div className="progress-wrapper">
              <div className="progress-bar"><div style={{width:"75%"}}></div></div>
              <span className="percent">75%</span>
            </div>
          </div>

          <div className="skill">
            <span>JavaScript</span>
            <div className="progress-wrapper">
              <div className="progress-bar"><div style={{width:"50%"}}></div></div>
              <span className="percent">50%</span>
            </div>
          </div>

          <div className="skill">
            <span>PHP</span>
            <div className="progress-wrapper">
              <div className="progress-bar"><div style={{width:"50%"}}></div></div>
              <span className="percent">50%</span>
            </div>
          </div>

          <div className="skill">
            <span>React</span>
            <div className="progress-wrapper">
              <div className="progress-bar"><div style={{width:"30%"}}></div></div>
              <span className="percent">30%</span>
            </div>
          </div>

          <div className="skill">
            <span>Figma</span>
            <div className="progress-wrapper">
              <div className="progress-bar"><div style={{width:"60%"}}></div></div>
              <span className="percent">60%</span>
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="skills-box">
          <h3>Professional Skills</h3>
          <div className="circle-skills">
            <div className="circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45"/>
                <circle cx="50" cy="50" r="45" style={{strokeDashoffset: "calc(283 - (283 * 80) / 100)"}}/>
              </svg>
              <span>80%<br/>Creativity</span>
            </div>
            <div className="circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45"/>
                <circle cx="50" cy="50" r="45" style={{strokeDashoffset: "calc(283 - (283 * 70) / 100)"}}/>
              </svg>
              <span>70%<br/>Communication</span>
            </div>
            <div className="circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45"/>
                <circle cx="50" cy="50" r="45" style={{strokeDashoffset: "calc(283 - (283 * 90) / 100)"}}/>
              </svg>
              <span>90%<br/>Teamwork</span>
            </div>
            <div className="circle">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45"/>
                <circle cx="50" cy="50" r="45" style={{strokeDashoffset: "calc(283 - (283 * 85) / 100)"}}/>
              </svg>
              <span>85%<br/>Problem Solving</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
