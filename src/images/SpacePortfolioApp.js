import React, { useEffect, useState, useRef } from "react";
import space from './images/space2.jpg'
import earth from './images/earth.jpg'
import moon from './images/moon.png'

const starsBackgroundStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  backgroundImage: `url(${space})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  zIndex: -6,
  overflow: "hidden"
};


const headingStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#61dafb",
  fontSize: "4rem",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  textShadow: "0 0 10px #61dafb",
  userSelect: "none",
};

const sectionStyle = {
  minHeight: "100vh",
  padding: "2rem",
  color: "white",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  position: "relative",
  zIndex: 1,
};

const earthBackgroundStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  background: `url(${earth})`,
  backgroundSize: "cover",
  opacity: 0.1,              // increased from 0.1 or 0.15
  zIndex: -6,
  pointerEvents: "none",
  transition: "opacity 1s ease-in-out",
};

const cometStyleBase = {
  position: "fixed",
  top: "30vh",
  width: "150px",
  height: "150px",
  backgroundImage:`url(${moon})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  pointerEvents: "none",
  zIndex: -5,
  opacity: 1,
  filter: "drop-shadow(0 0 5px #f0e68c)",
};

const skillsSectionStyle = {
  ...sectionStyle,
  backgroundColor: "rgba(0,0,0,0.3)",
  borderRadius: "12px",
};

const horizontalScrollStyle = {
  display: "flex",
  overflowX: "auto",
  padding: "1rem 0",
  gap: "1rem",
  scrollbarWidth: "thin",
  scrollbarColor: "#61dafb transparent",
};

const skillCardStyle = {
  flex: "0 0 auto",
  backgroundColor: "#111",
  borderRadius: "10px",
  padding: "1rem",
  width: "160px",
  height: "180px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxShadow:
    "0 4px 8px 0 rgba(97, 218, 251, 0.8), 0 6px 20px 0 rgba(97, 218, 251, 0.6)",
  userSelect: "none",
  transition: "transform 0.3s",
  cursor: "default",
};

const skillLogoStyle = {
  maxWidth: "80px",
  maxHeight: "80px",
  marginBottom: "1rem",
  filter: "drop-shadow(0 0 3px #61dafb)",
};

const projectsListStyle = {
  listStyleType: "none",
  padding: 0,
  marginTop: "1rem",
  maxWidth: "800px",
};

const projectItemStyle = {
  backgroundColor: "rgba(255 255 255 / 0.1)",
  marginBottom: "1rem",
  padding: "1rem 1.5rem",
  borderRadius: "10px",
  boxShadow:
    "0 2px 6px 0 rgba(97, 218, 251, 0.6), 0 4px 10px 0 rgba(97, 218, 251, 0.4)",
};

export default function SpacePortfolioApp() {
  const [scrollY, setScrollY] = useState(0);
  const [cometX, setCometX] = useState(-200);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate comet horizontally when scroll crosses a threshold
  useEffect(() => {
    let start = null;
    const cometStartX = -200;
    const cometEndX = window.innerWidth + 200;
    const cometTravelDuration = 30000; // 30 seconds
    
    function animateComet(timestamp) {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      if (elapsed < cometTravelDuration) {
        const progress = elapsed / cometTravelDuration;
        const currentX = cometStartX + progress * (cometEndX - cometStartX);
        setCometX(currentX);
        animationFrameRef.current = requestAnimationFrame(animateComet);
      } else {
        // Reset comet position after finishing
        setCometX(cometStartX);
        animationFrameRef.current = null;
      }
    }

    if (scrollY > window.innerHeight * 2) {
      // Start comet animation if not already running
      if (animationFrameRef.current === null) {
        animationFrameRef.current = requestAnimationFrame(animateComet);
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [scrollY]);

  // Skill data - sample logos are from public urls or known CDN
  const skills = [
    {
      name: "React",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "JavaScript",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    },
    {
      name: "CSS3",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    {
      name: "Node.js",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Git",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    },
    {
      name: "HTML5",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
  ];

  // Sample projects
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio website built with React.",
    },
    {
      title: "Chat App",
      description:
        "Real-time chat application using WebSocket technology.",
    },
    {
      title: "Task Manager",
      description:
        "A productivity app to manage and track daily tasks efficiently.",
    },
  ];

  return (
    <>
      <div style={starsBackgroundStyle}></div>

      {/* Earth background visible when scroll reaches second screen */}
      <div
        style={{
          ...earthBackgroundStyle,
          opacity: (scrollY > window.innerHeight * 0.7 && scrollY < window.innerHeight * 1.6)? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      ></div>

      {/* Comet that passes only further down on scroll */}
      <div
        style={{
          ...cometStyleBase,
          left: cometX,
          opacity: cometX > -190 && cometX < window.innerWidth + 190 ? 1 : 0,
          transition: "opacity 0.5s ease",
          top: "25vh",
        }}
      ></div>

      {/* First screen with name */}
      <section style={headingStyle}>
        <h1>Abhishek Ojha</h1>
      </section>

      {/* Skills horizontal scroll section */}
      <section style={skillsSectionStyle}>
        <h2 style={{ color: "#61dafb", textAlign: "center" }}>My Skills</h2>
        <div style={horizontalScrollStyle} aria-label="Skills list">
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={skillCardStyle}
              title={skill.name}
              tabIndex={0}
            >
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                style={skillLogoStyle}
                loading="lazy"
              />
              <span style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects list with comet background below */}
      <section style={sectionStyle}>
        <h2 style={{ color: "#61dafb", textAlign: "center" }}>My Projects</h2>
        <ul style={projectsListStyle}>
          {projects.map((p) => (
            <li key={p.title} style={projectItemStyle} tabIndex={0}>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

