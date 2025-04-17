import React from "react";
import AnimatedAvatar from "./AnimatedAvatar";
import "../styles/Intro.css"; // Make sure to style as per layout

function Intro() {
  return (
    <section className="intro-section" id="intro">
      <div className="intro-content">
        <div className="intro-text">
          <h1>
            Hey, I'm <span className="highlight">Jayshri Kulkarni</span>
          </h1>
          <p className="subtitle">
            Frontend Developer who builds stylish websites & apps 💼
          </p>
        </div>

        <div className="intro-avatar">
          <AnimatedAvatar />
        </div>
      </div>
    </section>
  );
}

export default Intro;
