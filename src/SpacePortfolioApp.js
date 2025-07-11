import React, { useEffect, useState, useRef } from "react";
import space from './images/space2.jpg'
import earth from './images/earthCropped.png'
import moon from './images/moon.png'
import './styles.css'
import mypic from './images/MyPictureNoBg.jpeg'
import jupiter from './images/jupiterCropped.png'
import rocketCursor from './images/rocketFire32.png'
import galaxy from './images/galaxy.png'


// style={{position: 'absolute', bottom: '2rem', background:`url(${rocket})`, backgroundSize: 'cover', width: '75px',height: '75px', transform: 'rotate(135deg)'}}
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
  color: "#00BFFF",
  fontSize: "3rem",
  fontWeight: 300,
  userSelect: "none",
  fontFamily: "Orbitron",
};

const sectionStyle = {
  minHeight: "100vh",
  // padding: "2rem",
  color: "white",
  fontFamily: "Orbitron",
  position: "relative",
  zIndex: 1,
  // border: "1px solid white",
  display: "flex", flexDirection: "column", justifyContent: 'center',
  cursor: `url(${rocketCursor}) 32 32, auto`

};

const earthBackgroundStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  height: "100vh",
  width: "100vw",
  background: `url(${earth})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  opacity: 1,              // increased from 0.1 or 0.15
  zIndex: -5,
  pointerEvents: "none",
};

const jupiterBackgroundStyle = {
  position: "fixed",
  top: 10,
  left: 0,
  height: "100vh",
  width: "100vw",
  background: `url(${jupiter})`,
  backgroundSize: "50%",
  backgroundRepeat: "no-repeat",
  opacity: 1,              // increased from 0.1 or 0.15
  zIndex: -5,
  pointerEvents: "none",
};

const galaxyBackgroundStyle = {
  position: "fixed",
  top: 300,
  left: 700,
  height: "100vh",
  width: "100vw",
  background: `url(${galaxy})`,
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  filter: "brightness(0.5)",          // increased from 0.1 or 0.15
  zIndex: -5,
  pointerEvents: "none",
};



const cometStyleBase = {
  position: "fixed",
  top: "30vh",
  width: "500px",
  height: "300px",
  backgroundImage: `url(${moon})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  pointerEvents: "none",
  zIndex: -5,
  opacity: 1,
  filter: "drop-shadow(0 0 5px #f0e68c)",
};

const darkSectionStyle = {
  ...sectionStyle,
  backgroundColor: "rgba(0, 0, 0, 0.52)",
  borderRadius: "12px",
  boxSizing: "borderBox"
};

const horizontalScrollStyle = {
  display: "flex",
  justifyContent: "center",
  overflowX: "auto",
  padding: "1rem 0",
  gap: "2rem",
  scrollbarWidth: "thin",
  scrollbarColor: "#00BFFF transparent",
};

const skillCardStyle = {
  flex: "0 0 auto",
  backgroundColor: "rgb(17 17 17 / 47%)",
  borderRadius: "10px",
  padding: "1rem",
  width: "160px",
  height: "180px",
  color: "white",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // boxShadow:
  //   "0 4px 8px 0 rgba(97, 218, 251, 0.8), 0 6px 20px 0 rgba(97, 218, 251, 0.6)",
  userSelect: "none",
  transition: "transform 0.3s",
  cursor: "default",
};

const skillLogoStyle = {
  maxWidth: "80px",
  maxHeight: "80px",
  marginBottom: "1rem",
  // filter: "drop-shadow(0 0 3px #00BFFF)",
};

const projectsListStyle = {
  listStyleType: "none",
  padding: 0,
  marginTop: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem"
};

const projectItemStyle = {
  backgroundColor: "rgba(255 255 255 / 0.1)",
  marginBottom: "1rem",
  padding: "1rem 1.5rem",
  borderRadius: "10px",
  width: "800px",
  // boxShadow:
  //   "0 2px 6px 0 rgba(97, 218, 251, 0.6), 0 4px 10px 0 rgba(97, 218, 251, 0.4)",
  display: "flex",
  gap: "1rem",

};



export default function SpacePortfolioApp() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Animate comet horizontally when scroll crosses a threshold
  // useEffect(() => {
  //   let start = null;
  //   const cometStartX = -300;
  //   const cometEndX = window.innerWidth + 300;
  //   const cometTravelDuration = 50000;

  //   function animateComet(timestamp) {
  //     if (!start) start = timestamp;
  //     const elapsed = timestamp - start;
  //     if (elapsed < cometTravelDuration) {
  //       const progress = elapsed / cometTravelDuration;
  //       const currentX = cometStartX + progress * (cometEndX - cometStartX);
  //       setCometX(currentX);
  //       animationFrameRef.current = requestAnimationFrame(animateComet);
  //     } else {
  //       // Reset comet position after finishing
  //       setCometX(cometStartX);
  //       animationFrameRef.current = null;
  //     }
  //   }

  //   if (scrollY > window.innerHeight * 0.7) {
  //     // Start comet animation if not already running
  //     if (animationFrameRef.current === null) {
  //       animationFrameRef.current = requestAnimationFrame(animateComet);
  //     }
  //   }

  //   return () => {
  //     if (animationFrameRef.current && cometX >= cometEndX) {
  //       cancelAnimationFrame(animationFrameRef.current);
  //       animationFrameRef.current = null;
  //     }
  //   };
  // }, [scrollY]);

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
      delay: 0.6
    },
    {
      title: "Chat App",
      description:
        "Real-time chat application using WebSocket technology.",
      delay: 1.2
    },
    {
      title: "Task Manager",
      description:
        "A productivity app to manage and track daily tasks efficiently.",
      delay: 1.8
    },
  ];

  const [showRocket, setShowRocket] = useState(false)

  const [typedName, setTypedName] = useState("");
  useEffect(() => {
    let index = 0;
    const text = "Abhishek Ojha";
    const speed = 100;

    // Use a local variable to store partial text
    const interval = setInterval(() => {
      setTypedName(text.substring(0, index + 1)); // set substring directly
      index++;
      if (index >= text.length) {
        clearInterval(interval);
        setShowRocket(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  const [aboutMe, setAboutMe] = useState("");
  const [aboutMeTyped, setAboutMeTyped] = useState(false);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    console.log("started use")
    if (scrollY > window.innerHeight * 0.7 && !aboutMeTyped) {
      console.log("Inside IF use")
      let index = 0;
      const text = `Hi I'm Abhishek, a full-stack developer by skill, a frontend artist by passion — I build web experiences that not only work great but feel great. 
      \n Specializing in React, JavaScript, and modern frontend ecosystems — with solid experience across Node.js, Express, and MongoDB`;
      const speed = 10;
      // Use a local variable to store partial text
      const interval = setInterval(() => {
        setAboutMe(text.substring(0, index + 1)); // set substring directly
        index++;
        if (index >= text.length) {
          clearInterval(interval);
          setShowActions(true);
        }
      }, speed);
      setAboutMeTyped(true);
    }

  }, [scrollY, aboutMeTyped]);

  const aboutMeRef = useRef(null);
  const mySkillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactMeRef = useRef(null);




  return (
    <>
      <div style={starsBackgroundStyle}></div>
      <div id="starsky">
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
        <span className="star"></span>
      </div>

      {/* Earth background visible when scroll reaches second screen */}
      <div
        style={{
          ...earthBackgroundStyle,
          transform: (scrollY > window.innerHeight * 0.6 && scrollY < window.innerHeight * 1.4) ? 'translateY(170px)' : 'translateY(1000px)',
          transition: "transform 0.6s ease-in-out",
        }}
      ></div>

      {/* Jupiter background visible when scroll reaches second screen */}
      <div
        style={{
          ...jupiterBackgroundStyle,
          transform: (scrollY > window.innerHeight * 1.8 && scrollY < window.innerHeight * 2.4) ? 'translateX(0)' : 'translateX(-1000px)',
          transition: "transform 0.5s ease-in-out",
        }}
      ></div>

      <div
        style={{
          ...galaxyBackgroundStyle,
          transform: `rotate(22deg) scale(${scrollY > window.innerHeight * 2.8 && scrollY < window.innerHeight * 3.5
            ? 1.7
            : 0
            })`,
          transition: "transform 0.6s ease-in-out",
        }}
      ></div>



      {/* First screen with name */}
      <section style={headingStyle}>
        <h1 style={{ display: 'inline-block', minWidth: '11ch' }}>{typedName}<span className="cursor">_</span></h1>
        <div id="rocket" style={{ opacity: scrollY > window.innerHeight * 0.01 ? '0' : showRocket ? '1' : '0', transition: "opacity 2s ease-in-out" }} onClick={() => aboutMeRef.current?.scrollIntoView({ behavior: "smooth" })}></div>
      </section>

      {/* <hr></hr> */}

      <div>
        <div style={{ color: "white", zIndex: '10', display: "flex", position: "sticky", top: "0px", gap: "5rem", justifyContent: "flex-end", alignItems: "center", width: "100%", boxSizing: "border-box", padding: "1rem 3rem", fontSize: '1.1rem', fontFamily: "Orbitron", opacity: scrollY > window.innerHeight * 0.7 ? "1" : "0", cursor: `url(${rocketCursor}) 20 20, auto` }}>
          <div style={{ cursor: `url(${rocketCursor}) 20 20, auto` }} onClick={() => aboutMeRef.current?.scrollIntoView({ behavior: "smooth" })}>About me</div>
          <div style={{ cursor: `url(${rocketCursor}) 20 20, auto` }} onClick={() => mySkillsRef.current?.scrollIntoView({ behavior: "smooth" })}>My skills</div>
          <div style={{ cursor: `url(${rocketCursor}) 20 20, auto` }} onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}>Projects</div>
          <div style={{ cursor: `url(${rocketCursor}) 20 20, auto` }} onClick={() => contactMeRef.current?.scrollIntoView({ behavior: "smooth" })}>Contact me</div>
        </div>
        <section ref={aboutMeRef} style={sectionStyle}>
          <h1 style={{
            textAlign: "center",
            fontSize: "2rem",
            color: "#00BFFF",
            width: "300px",
            border: "2px solid #00BFFF",
            marginBottom: "0",
            borderRadius: "20px",
            padding: "1rem", background: "rgba(0, 0, 0, 0.52)",
            transform: (scrollY > window.innerHeight * 0.4) ? 'translateX(50px)' : 'translateX(-1000px)',
            transition: "transform 0.6s ease-in-out"
          }}>Who am I ?</h1>
          <div style={{ display: "flex", gap: "20px", height: "70vh", alignItems: "center", padding: "0 50px" }}>
            <div style={{
              width: "80%",
              fontSize: "1.3rem",
              height: '60%',
              backgroundColor: "rgba(0, 0, 0, 0.73)",
              padding: "50px",
              borderRadius: "20px",
              boxSizing: "border-box",
              whiteSpace: "pre-line"
            }}>
              {aboutMe}<span className="cursor">_</span>

              <div style={{ padding: "1rem", margin: "2rem auto", display: "flex", gap: "2rem", opacity: showActions ? "1" : "0", transition: "opacity 1s ease-in-out" }}>
                <button className="actionButton">Download resume 📋</button>
                <button className="actionButton" onClick={() => mySkillsRef.current?.scrollIntoView({ behavior: "smooth" })}>View skills ⚡️</button>
              </div>
            </div>
            <div style=
              {{
                width: "20%",
                height: '60%',
                backgroundImage: `url(${mypic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: "0 0 20px #00BFFF",
                borderRadius: "20px",
                transform: (scrollY > window.innerHeight * 0.7) ? 'translateX(0)' : 'translateX(1000px)',
                filter: (scrollY > window.innerHeight * 0.7) ? 'grayscale(0%)' : 'grayscale(100%)',
                transition: "transform 0.7s ease-in-out, filter 3s ease-in-out",
              }}>
            </div>
          </div>
        </section>

        {/* Skills horizontal scroll section */}
        <section ref={mySkillsRef} style={sectionStyle}>
          <h2 style={{
            textAlign: "center",
            marginLeft: "auto",
            fontSize: "2rem",
            color: "#00BFFF",
            width: "250px",
            border: "2px solid #00BFFF",
            marginBottom: "0",
            borderRadius: "20px",
            padding: "1rem", background: "rgba(0, 0, 0, 0.52)",
            transform: (scrollY > window.innerHeight * 1.8) ? 'translateX(-50px)' : 'translateX(1000px)',
            transition: "transform 0.6s ease-in-out"
          }}>
            My Skills
          </h2>

          <div className="skills-carousel-wrapper">
            <div className="skills-carousel-track">
              {[...skills, ...skills].map((skill, index) => (
                <div className="skill-card" key={`${skill.name}-${index}`}>
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="skill-logo"
                    loading="lazy"
                  />
                  <span style={{ fontSize: "1.3rem", fontWeight: "600" }}>
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={{
            border: "2px solid white", width: "600px", marginLeft: "auto", borderRadius: "20px", padding: "1.2rem 2rem", fontSize: "1.3rem", backgroundColor: "rgba(255 255 255 / 0.1)", transform: (scrollY > window.innerHeight * 1.8) ? 'translateX(-50px)' : 'translateX(1000px)',
            transition: "transform 2s ease-in-out"
          }}>
            Always exploring new tools and frameworks to stay ahead in the ever-evolving world of web development.
            <div>
              <button id="viewProjects" onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}>Explore my work 🚀</button>
            </div>
          </div>
        </section>


        {/* Projects list with comet background below */}
        <section ref={projectsRef} style={sectionStyle}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "#00BFFF" }}>My Projects</h2>
          <ul style={projectsListStyle}>
            {projects.map((p) => (
              <li key={p.title}
                style={{
                  ...projectItemStyle,
                  transform: (scrollY > window.innerHeight * 2.8 && scrollY < window.innerHeight * 3.5) ? 'translateX(0px)' : 'translateX(-2000px)',
                  // transition: "transform 0.6s ease-in-out"
                  transition: `transform ${p.delay}s ease-in-out`
                }} tabIndex={0}>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <button><img src='mon'></img></button>
                </div>
                <div style={{ border: "2px solid white", width: "200px", backgroundImage: `url(${moon})`, backgroundSize: 'cover' }}>

                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}

