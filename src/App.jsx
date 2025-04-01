import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import AnimatedLetters from "./components/AnimatedLetters";
import AboutAnimatedLetters from "./components/AboutAnimatedLetters";
import "animate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const App = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [aboutLetterClass, setAboutLetterClass] =
    useState("about-text-animate");
  const nameArray = ["M", "a", "y", "u", "r"];
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setAboutLetterClass("about-text-animate-hover");
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const toggleMenu = () => {
    const menuLinks = document.querySelector(".menu-links");
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    menuLinks.classList.toggle("open");
    hamburgerIcon.classList.toggle("open");
  };

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* NAVIGATION */}
      <nav id="desktop-nav">
        <div className="logo">
          <h4>Mayur Bhat</h4>
        </div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">
          <h4>Mayur Bhat</h4>
        </div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#home" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" onClick={toggleMenu}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>

      {/* PROFILE */}
      <section id="profile">
        <div className="section__pic-container">
          <img src="./assets/profile_pic.png" alt="Mayur Bhat profile" />
        </div>
        <div className="section__text">
          {/* <p className="section__text__p1">Hello, I'm</p> */}
          <h1 className="title_name">
            <span className={aboutLetterClass}>H</span>
            <span className={`${aboutLetterClass} _12`}>i</span>
            <br />
            <span className={`${aboutLetterClass} _13`}>I</span>
            <span className={`${aboutLetterClass} _14`}>'m</span>
            &nbsp;
            <AboutAnimatedLetters
              letterClass={aboutLetterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
          </h1>
          <p className="section__text__p2">Software Engineer</p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => openInNewTab("./assets/Mayur_Bhat_Resume.pdf")}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => scrollToSection("#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <ul>
              <li className="socials">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/mayur-bhat22/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#4d4d4de" />
                </a>
              </li>
              <li className="socials">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/mayurbhat22"
                >
                  <FontAwesomeIcon icon={faGithub} color="#4d4d4de" />
                </a>
              </li>
            </ul>

            {/* <img
              src="./assets/linkedin.png"
              alt="LinkedIn"
              className="icon"
              onClick={() =>
                openInNewTab("https://www.linkedin.com/in/mayur-bhat22/")
              }
            />
            <img
              src="./assets/github.png"
              alt="GitHub"
              className="icon"
              onClick={() => openInNewTab("https://github.com/mayurbhat22")}
            /> */}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
            idx={15}
          />
        </h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="./assets/about_pic.jpeg"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  2.5+ years <br />
                  Software Engineer
                </p>
              </div>
              <div className="details-container">
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  Bachelors Degree - JSS Science and Technology University
                  <br />
                  Masters Degree - Indiana University Bloomington
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                I'm a passionate Software Engineer looking for roles as a Full
                Stack Developer, where I can work on latest tech stack which can
                help me to grow as a developer and contribute to the
                organization.
                <br />
                I am pursuing my Masters in Computer Science, at Indiana
                University, Bloomington where I am improving one design problem
                at a time and being naturally curious about it.
                <br />I am a self taught developer, I have worked on various
                projects including Web Development, Machine Learning and Data
                Science. I am always looking for new opportunities to learn.
              </p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => scrollToSection("#skills")}
        />
      </section>

      {/* SKILLS */}
      <section id="skills">
        <p className="section__text__p1">Explore My</p>
        <h1 className="title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["S", "k", "i", "l", "l", "s"]}
            idx={15}
          />
        </h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container">
              <h2 className="experience-sub-title">Frontend Development</h2>
              <div className="article-container">
                {[
                  "HTML",
                  "CSS",
                  "SASS",
                  "JavaScript",
                  "React JS",
                  "TypeScript",
                ].map((skill) => (
                  <article key={skill}>
                    <img
                      src="./assets/checkmark.png"
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>{skill}</h3>
                      <p>
                        {["SASS", "TypeScript"].includes(skill)
                          ? "Intermediate"
                          : "Experienced"}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="details-container">
              <h2 className="experience-sub-title">Backend Development</h2>
              <div className="article-container">
                {[
                  { tech: "Python", level: "Experienced" },
                  { tech: "C#", level: "Experienced" },
                  { tech: ".NET", level: "Experienced" },
                  { tech: "NodeJS", level: "Advanced" },
                  { tech: "ExpressJS", level: "Advanced" },
                  { tech: "Django", level: "Intermediate" },
                  { tech: "PostgreSQL", level: "Experienced" },
                  { tech: "MySQL", level: "Experienced" },
                  { tech: "AWS", level: "Experienced" },
                ].map(({ tech, level }) => (
                  <article key={tech}>
                    <img
                      src="./assets/checkmark.png"
                      alt="Experience icon"
                      className="icon"
                    />
                    <div>
                      <h3>{tech}</h3>
                      <p>{level}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => scrollToSection("#experience")}
        />
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <p className="section__text__p1">Where have I worked?</p>
        <h1 className="title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["E", "x", "p", "e", "r", "i", "e", "n", "c", "e"]}
            idx={15}
          />
        </h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/aurigo_logo.png"
                  alt="Aurigo Logo"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Software Engineer - 2
              </h2>
              <h4>Jan 2023 - Jul 2023</h4>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/in/mayur-bhat22/details/experience/"
                    )
                  }
                >
                  LinkedIn
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/aurigo_logo.png"
                  alt="Aurigo Logo"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Software Engineer - 1
              </h2>
              <h4>Aug 2021 - Jan 2023</h4>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/in/mayur-bhat22/details/experience/"
                    )
                  }
                >
                  LinkedIn
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/aurigo_logo.png"
                  alt="Aurigo Logo"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Software Engineer Intern
              </h2>
              <h4>Jan 2021 - Aug 2021</h4>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    openInNewTab(
                      "https://www.linkedin.com/in/mayur-bhat22/details/experience/"
                    )
                  }
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => scrollToSection("#projects")}
        />
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <p className="section__text__p1">Browse My Recent</p>
        <h1 className="title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["P", "r", "o", "j", "e", "c", "t", "s"]}
            idx={15}
          />
        </h1>
        <div className="experience-details-container">
          <div className="about-containers">
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/project_1.png"
                  alt="Project 1"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                DB Operator AI
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    openInNewTab("https://github.com/mayurbhat22/DBOperatorBot")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    openInNewTab("https://github.com/mayurbhat22/DBOperatorBot")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/project_2.png"
                  alt="Project 2"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Nouveau Health
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    openInNewTab("https://github.com/mayurbhat22/nouveau_react")
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    openInNewTab("https://github.com/mayurbhat22/nouveau_react")
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="details-container color-container">
              <div className="article-container">
                <img
                  src="./assets/project_3.png"
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">
                Secure Bank
              </h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    openInNewTab(
                      "https://github.com/mayurbhat22/Bank-Management-Frontend"
                    )
                  }
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() =>
                    openInNewTab(
                      "https://github.com/mayurbhat22/Bank-Management-Frontend"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => scrollToSection("#contact")}
        />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
            idx={15}
          />
        </h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="./assets/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:bhatmayur22@gmail.com">bhatmayur22@gmail.com</a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="./assets/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a href="https://www.linkedin.com/in/mayur-bhat22/">LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#experience">Experience</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default App;
