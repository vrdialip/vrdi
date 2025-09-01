import React from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About</h2>
      <div className="timeline">
        
        {/* Left side */}
        <div className="timeline-container left" data-aos="fade-right">
          <div className="content">
            <h3>👥 My Team</h3>
            <p>I am part of <b>LocalGrow</b>, a small developer team from SMK Yaj Depok. Together, we focus on creating modern websites and digital solutions to support local businesses. With strong collaboration and creativity, our team has gained experience through real projects and national competitions.</p>
          </div>
        </div>

        {/* Right side */}
        <div className="timeline-container right" data-aos="fade-left">
          <div className="content">
            <h3>🏆 Top Achievement</h3>
            <p>5th Place in National UMKM Website Competition – It's Day
Achieved Top 5 in the It's Day national UMKM website competition with my team, focusing on user-friendly design, optimized UI/UX, and digital solutions for small businesses. This experience enhanced my teamwork, problem-solving, and modern web development skills.</p>
          </div>
        </div>

        {/* Left side */}
        <div className="timeline-container left" data-aos="fade-right">
          <div className="content">
            <h3>🎓 Education</h3>
            <p><b>SMK YAJ Depok</b>
Currently pursuing vocational education at SMK YAJ Depok, focusing on Information and Communication Technology. Gaining knowledge and practical experience in web development, programming, and digital design as preparation for a career in the tech industry.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
