import React, { useEffect, useState, useRef } from "react";
import "../styles/About.css";
import profilePic from "../assets/profile.jpg";

function About() {
  const titles = useRef([
    "Frontend Developer 💻",
    "React Enthusiast ⚛️",
    "UI/UX Lover 🎨",
  ]);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles.current[index];
    let timeout;

    if (charIndex <= currentTitle.length) {
      timeout = setTimeout(() => {
        setText(currentTitle.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % titles.current.length);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, index]);

  return (
    <section id="about" className="about-section">
      <img src={profilePic} alt="Profile" className="profile-img" />
      <h2>
        Hi, I'm <span className="highlight">Jayshri Kulkarni</span>
      </h2>
      <h3 className="typing-text">{text}</h3>
      <p>
        I build clean, beautiful, and responsive websites using modern frontend
        technologies.
      </p>
      <a
        href="/assets/resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>
    </section>
  );
}

export default About;
