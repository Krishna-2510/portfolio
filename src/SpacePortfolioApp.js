import React, { useEffect, useState, useRef } from "react";
import space from './images/space2.jpg'
import earth from './images/earthCropped.png'
import './styles.css'
import mypic from './images/MyPictureNoBg.jpeg'
import jupiter from './images/jupiterCropped.png'
import rocketCursor from './images/rocketFire32.png'
import galaxy from './images/galaxy.png'
import contact from './images/contact.png'
import portfolio from './images/portfolio.png'
import georZ from './images/georZ.png'


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
  marginBottom: "1rem",
  padding: "1rem 1.5rem",
  borderRadius: "10px",
  width: "800px",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
};

const contactSectionStyle = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  position: "relative",
  // background: "rgba(0, 0, 0, 0)",
  borderRadius: "20px",
  marginTop: "2rem",
  // marginBottom: "2rem",
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
        "A space themed modern personal portfolio website built with React",
      delay: 0.6,
      image: portfolio
    },
    {
      title: "Rumble Crunch",
      description:
        "Food delivery UI with lazy loading and live API integration with React",
      delay: 1.2,
      image: georZ
    },
    {
      title: "GeorZ",
      description:
        "An AI chatbot with voice chat and text chat features along with an amazing UI.",
      delay: 1.8,
      image: georZ
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
        <h2 style={{ display: 'inline-block', minWidth: '11ch' }}>{typedName}<span className="cursor">_</span></h2>
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
            fontSize: "1.7rem",
            color: "#00BFFF",
            width: "250px",
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
            fontSize: "1.5rem",
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
          <h2
            style={{
              textAlign: "center",
              marginLeft: "auto",
              fontSize: "1.5rem",
              color: "#00BFFF",
              width: "250px",
              border: "2px solid #00BFFF",
              marginBottom: "20px",
              borderRadius: "20px",
              padding: "1rem", background: "rgba(0, 0, 0, 0.52)",
              transform: (scrollY > window.innerHeight * 2.6) ? 'translateX(-850px)' : 'translateX(-4000px)',
              transition: "transform 0.6s ease-in-out"
            }}>My Projects</h2>
          <ul style={projectsListStyle}>
            {projects.map((p) => (
              <li key={p.title}
                className="project-item"
                style={{
                  ...projectItemStyle,
                  transform: (scrollY > window.innerHeight * 2.8 && scrollY < window.innerHeight * 3.5) ? 'translateX(0px)' : 'translateX(-2000px)',
                  // transition: "transform 0.6s ease-in-out"
                  transition: `transform ${p.delay}s ease-in-out`
                }} tabIndex={0}>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <button className="githubButton">View on GitHub</button>
                </div>
                <div style={{ border: "1px solid white", borderRadius: "10px", width: "200px", height: "100px", backgroundImage: `url(${p.image})`, backgroundSize: 'cover' }}>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact section */}
        <section ref={contactMeRef} style={sectionStyle}>
          <form style={{
            position: 'absolute',
            left: '64.5%',
            top: '36%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0,0,0,0.7)',
            borderRadius: '16px',
            padding: '2rem 2.5rem',
            // boxShadow: '0 0 20px #00BFFF',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem',
            minWidth: '400px',
            zIndex: 3
          }}>
            <input type="text" placeholder="Name" style={{
              padding: '0.7rem 1rem',
              borderRadius: '8px',
              border: 'none',
              background: 'rgba(17,17,17,0.7)',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              fontFamily: 'Orbitron',
            }} />
            <input type="email" placeholder="Email" style={{
              padding: '0.7rem 1rem',
              borderRadius: '8px',
              border: 'none',
              background: 'rgba(17,17,17,0.7)',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              fontFamily: 'Orbitron',
            }} />
            <textarea placeholder="Message" rows={4} style={{
              padding: '0.7rem 1rem',
              borderRadius: '8px',
              border: 'none',
              background: 'rgba(17,17,17,0.7)',
              color: 'white',
              fontSize: '1rem',
              outline: 'none',
              fontFamily: 'Orbitron',
              resize: 'none',
            }} />
            <button type="submit" style={{
              background: '#2c8400',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              padding: '0.8rem 1.5rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              fontFamily: 'Orbitron',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}>Send</button>
          </form>
          <img
            src={contact}
            alt="Contact"
            style={{
              display: 'block',
              margin: '0 auto',
              position: 'absolute',
              left: '50%',
              bottom: 0,
              transform: 'translateX(-50%)',
              maxHeight: '90vh',
              maxWidth: '98vw',
              objectFit: 'contain',
              zIndex: 1
            }}
          />
          <div style={{
            position: 'absolute',
            right: '2.5rem',
            bottom: '2.5rem',
            // color: '#00BFFF',
            fontFamily: 'Orbitron',
            fontSize: '1.1rem',
            background: 'rgba(0,0,0,0.6)', 
            padding: '0.7rem 1.2rem',
            borderRadius: '10px',
            zIndex: 4,
            letterSpacing: '0.5px',
            // boxShadow: '0 2px 8px 0 rgba(0,191,255,0.12)'
          }}>
            Email id - ojha22781@gmail.com
          </div>
        </section>

        {/* Scroll to Contact Button */}
        <button
          style={{
            position: 'fixed',
            right: '2.5rem',
            bottom: '2.5rem',
            zIndex: 100,
            background: '#0000006a',
            color: 'white',
            border: '2px solid white',
            borderRadius: '10px',
            width: '140px',
            height: '50px',
            fontSize: '1rem',
            fontFamily: 'Orbitron, sans-serif',
            color: '#ffffff',
            // boxShadow: '0 2px 8px 0 rgba(0,191,255,0.22)',
            cursor: 'pointer',
            display: scrollY > window.innerHeight * 2.8 && scrollY < window.innerHeight * 3.5 ? 'block' : 'none',
            transition: 'opacity 0.3s',
            opacity: scrollY > window.innerHeight * 2.8 && scrollY < window.innerHeight * 3.5 ? 1 : 0
          }}
          aria-label="Scroll to Contact"
          onClick={() => contactMeRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact me ↓
        </button>
      </div>
    </>
  );
}

