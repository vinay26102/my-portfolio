import { useState } from "react"
import emailjs from "@emailjs/browser"
import profileImage from "../assets/vinay-profile.jpg"
import {
  FaJava,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaCode,
  FaRobot,
  FaDatabase,
  FaVial,
} from "react-icons/fa"

import {
  SiSelenium,
  SiAppium,
  SiPostman,
  SiApachemaven,
  SiMysql,
} from "react-icons/si"


function Home() {

  /* =================================
     CONTACT FORM
  ================================= */

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })


  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    await emailjs.send(
      "service_ovcikok",
      "template_iagacjn",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      {
        publicKey: "fvtqPHfr9OPoAk7-m",
      }
    )

    alert("Message sent successfully!")

    setFormData({
      name: "",
      email: "",
      message: "",
    })
  } catch (error) {
    console.error("EmailJS Error:", error)
    alert("Failed to send message. Please try again.")
  }
}


  return (
    <main>

      {/* =================================
          HERO SECTION
      ================================= */}

      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hero-greeting">
            HELLO, I'M
          </p>

          <h1 className="hero-title">
            VINAY <span>THANDLA</span>
          </h1>

          <h2 className="hero-role">
            Associate Engineer
            <span> | </span>
            QA Engineer
            <br />
            & Frontend Developer
          </h2>

          <p className="hero-description">
            I build reliable digital experiences through quality engineering,
            test automation, and modern frontend development.
          </p>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-btn primary-btn"
            >
              View My Work
            </a>

            <a
              href="#contact"
              className="hero-btn secondary-btn"
            >
              Contact Me
            </a>

          </div>

        </div>


        <div className="hero-image">

          <div className="hero-image-frame">

            <img
  src={profileImage}
  alt="Vinay Thandla"
/>

          </div>

        </div>

      </section>


      {/* =================================
          ABOUT SECTION
      ================================= */}

      <section id="about" className="about">

        <div className="about-container">

          <div className="section-heading">

            <p className="section-label">
              ABOUT ME
            </p>

            <h2>
              Building with <span>quality</span> in mind.
            </h2>

          </div>


          <div className="about-content">

            <div className="about-text">

              <p>
                I'm Vinay Thandla, an Associate Engineer focused on
                Quality Engineering, Test Automation, and Frontend Development.
              </p>

              <p>
                I enjoy building reliable software, exploring modern
                technologies, and turning ideas into clean and practical
                digital experiences.
              </p>

            </div>


            <div className="about-info">

              <div className="info-card">
                <span>ROLE</span>
                <strong>QA Engineer</strong>
              </div>

              <div className="info-card">
                <span>FOCUS</span>
                <strong>Test Automation</strong>
              </div>

              <div className="info-card">
                <span>DEVELOPMENT</span>
                <strong>React & Java</strong>
              </div>

              <div className="info-card">
                <span>LOCATION</span>
                <strong>India</strong>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          SKILLS SECTION
      ================================= */}

      <section id="skills" className="skills">

        <div className="skills-container">

          <div className="skills-heading">

            <p className="section-label">
              MY SKILLS
            </p>

            <h2>
              What I work <span>with.</span>
            </h2>

            <p className="skills-intro">
              A combination of development, testing and modern tools
              to build reliable and practical digital experiences.
            </p>

          </div>


          <div className="skills-grid">


            {/* DEVELOPMENT */}

            <div className="skill-category">

              <div className="category-top">

                <span className="category-number">
                  01
                </span>

                <div className="category-icon">
                  <FaCode />
                </div>

              </div>

              <h3>
                Development
              </h3>

              <p className="category-description">
                Building responsive and modern web applications.
              </p>


              <div className="skill-list">

                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge java">
                      <FaJava />
                    </span>

                    <span>
                      Java
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "80%" }}></span>
                  </div>

                </div>


                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge react">
                      <FaReact />
                    </span>

                    <span>
                      React JS
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "75%" }}></span>
                  </div>

                </div>


                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge javascript">
                      <FaJsSquare />
                    </span>

                    <span>
                      JavaScript
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "75%" }}></span>
                  </div>

                </div>


                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge web">
                      <FaHtml5 />
                      <FaCss3Alt />
                    </span>

                    <span>
                      HTML & CSS
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "85%" }}></span>
                  </div>

                </div>

              </div>

            </div>


            {/* TESTING & AUTOMATION */}

            <div className="skill-category">

              <div className="category-top">

                <span className="category-number">
                  02
                </span>

                <div className="category-icon">
                  <FaRobot />
                </div>

              </div>

              <h3>
                Testing & Automation
              </h3>

              <p className="category-description">
                Ensuring quality through automated and manual testing.
              </p>


              <div className="skill-list">

                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge selenium">
                      <SiSelenium />
                    </span>

                    <span>
                      Selenium
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "80%" }}></span>
                  </div>

                </div>


                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge playwright">
                      <FaRobot />
                    </span>

                    <span>
                      Playwright
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "70%" }}></span>
                  </div>

                </div>


                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge appium">
                      <SiAppium />
                    </span>

                    <span>
                      Appium
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "70%" }}></span>
                  </div>

                </div>


                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge testng">
                      <FaVial />
                    </span>

                    <span>
                      TestNG
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "75%" }}></span>
                  </div>

                </div>


                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge api">
                      <SiPostman />
                    </span>

                    <span>
                      API Testing
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "80%" }}></span>
                  </div>

                </div>

              </div>

            </div>


            {/* TOOLS & DATABASE */}

            <div className="skill-category">

              <div className="category-top">

                <span className="category-number">
                  03
                </span>

                <div className="category-icon">
                  <FaDatabase />
                </div>

              </div>

              <h3>
                Tools & Database
              </h3>

              <p className="category-description">
                Tools I use for development, testing and project work.
              </p>


              <div className="skill-list">

                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge mysql">
                      <SiMysql />
                    </span>

                    <span>
                      MySQL
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "75%" }}></span>
                  </div>

                </div>


                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge git">
                      <FaGitAlt />
                    </span>

                    <span>
                      Git
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "80%" }}></span>
                  </div>

                </div>


                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge maven">
                      <SiApachemaven />
                    </span>

                    <span>
                      Maven
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "70%" }}></span>
                  </div>

                </div>


                <div className="skill-item">

                  <div className="skill-info">

                    <span className="skill-badge postman">
                      <SiPostman />
                    </span>

                    <span>
                      Postman
                    </span>

                  </div>

                  <div className="skill-bar">
                    <span style={{ width: "80%" }}></span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          EXPERIENCE SECTION
      ================================= */}

      <section id="experience" className="experience">

        <div className="experience-container">

          <div className="experience-heading">

            <p className="section-label">
              MY EXPERIENCE
            </p>

            <h2>
              Where I've <span>worked.</span>
            </h2>

            <p className="experience-intro">
              My professional journey in quality engineering,
              testing and software development.
            </p>

          </div>


          <div className="experience-card">

            <div className="experience-date">
              <span>DEC 2025</span>
              <strong>PRESENT</strong>
            </div>


            <div className="experience-content">

              <div className="experience-company">
                VIRTUSA
              </div>

              <h3>
                Associate Engineer — QA
              </h3>

              <p className="experience-location">
                Hyderabad, India
              </p>

              <p className="experience-description">
                Working in Quality Engineering with a focus on
                software testing, test automation and reliable
                digital experiences.
              </p>


              <ul className="experience-points">

                <li>
                  Manual testing and functional validation
                  of web applications.
                </li>

                <li>
                  Working with test automation using Selenium,
                  Playwright and Appium.
                </li>

                <li>
                  API testing and understanding of
                  automation frameworks and SDET practices.
                </li>

                <li>
                  Applying software testing fundamentals,
                  test scenarios and test case design.
                </li>

              </ul>


              <div className="experience-tags">

                <span>QA</span>
                <span>Test Automation</span>
                <span>Selenium</span>
                <span>Playwright</span>
                <span>API Testing</span>

              </div>

            </div>


            <div className="experience-number">
              01
            </div>

          </div>

        </div>

      </section>


      {/* =================================
    PROJECTS SECTION
================================= */}

<section id="projects" className="projects">

  <div className="projects-container">

    <div className="projects-heading">

      <p className="section-label">
        MY PROJECTS
      </p>

      <h2>
        Things I've <span>built.</span>
      </h2>

      <p className="projects-intro">
        A collection of projects where I combine development,
        testing and problem-solving to create practical
        and real-world solutions.
      </p>

    </div>


    <div className="projects-list">


      {/* PROJECT 01 */}

      <article className="project-showcase">

        <div className="project-details">

          <div className="project-number">
            01
          </div>

          <div className="project-content">

            <p className="project-category">
              E-COMMERCE WEBSITE
            </p>

            <h3>
              Mom's Pickle
            </h3>

            <p className="project-description">
              A modern e-commerce website for a traditional
              homemade pickle brand, designed with a warm
              and authentic visual experience.
            </p>

            <div className="project-technologies">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>React Hooks</span>
              <span>E-Commerce</span>
            </div>

            <a
              href="https://www.amazon.in/"
              target="_blank"
              rel="noreferrer"
              className="project-view-btn"
            >
              View Project
              <span>↗</span>
            </a>

          </div>

        </div>


        <a
          href="https://www.amazon.in/"
          target="_blank"
          rel="noreferrer"
          className="project-preview"
        >

          <iframe
            src="https://www.amazon.in/"
            title="Mom's Pickle Preview"
          />

          <div className="project-preview-overlay">

            <span>
              Open Project <b>↗</b>
            </span>

          </div>

        </a>

      </article>


      {/* PROJECT 02 — FINTRACK */}

      <article className="project-showcase reverse">

        <a
          href="https://fin-track-black-three.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="project-preview"
        >

          <iframe
            src="https://fin-track-black-three.vercel.app/"
            title="FinTrack Preview"
          />

          <div className="project-preview-overlay">

            <span>
              Open Project <b>↗</b>
            </span>

          </div>

        </a>


        <div className="project-details">

          <div className="project-number">
            02
          </div>

          <div className="project-content">

            <p className="project-category">
              PERSONAL FINANCE DASHBOARD
            </p>

            <h3>
              FinTrack
            </h3>

            <p className="project-description">
              A modern personal finance dashboard for managing
              transactions, tracking income and expenses, and
              visualizing financial insights through interactive
              analytics.
            </p>

            <div className="project-technologies">
              <span>React</span>
              <span>JavaScript</span>
              <span>React Router</span>
              <span>Recharts</span>
              <span>LocalStorage</span>
              <span>Responsive UI</span>
            </div>

            <a
              href="https://fin-track-black-three.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="project-view-btn"
            >
              View Project
              <span>↗</span>
            </a>

          </div>

        </div>

      </article>


      {/* PROJECT 03 */}

      <article className="project-showcase">

        <div className="project-details">

          <div className="project-number">
            03
          </div>

          <div className="project-content">

            <p className="project-category">
              RESTAURANT WEBSITE
            </p>

            <h3>
              Restaurant Website
            </h3>

            <p className="project-description">
              A responsive restaurant website with menu
              browsing, category filtering, cart functionality
              and a clean modern interface.
            </p>

            <div className="project-technologies">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Responsive UI</span>
            </div>

            <a
              href="https://www.flipkart.com/"
              target="_blank"
              rel="noreferrer"
              className="project-view-btn"
            >
              View Project
              <span>↗</span>
            </a>

          </div>

        </div>

      </article>




    </div>

  </div>

</section>

      {/* =================================
          CERTIFICATIONS
      ================================= */}

      <section
        className="certifications"
        id="certifications"
      >

        <div className="certifications-container">

          <div className="certifications-heading">

            <p className="section-label">
              CERTIFICATIONS
            </p>

            <h2>
              Learning that <span>builds confidence.</span>
            </h2>

            <p className="certifications-intro">
              Professional certifications completed as part of my continuous
              learning and software testing journey.
            </p>

          </div>


          <div className="certifications-grid">


            {/* CERTIFICATION 01 */}

            <div className="certification-card">

              <div className="certification-top">

                <span className="certification-number">
                  01
                </span>

                <span className="certification-status">
                  COMPLETED
                </span>

              </div>

              <div className="certification-icon">
                ✓
              </div>

              <p className="certification-category">
                SOFTWARE TESTING
              </p>

              <h3>
                ISTQB Foundation Level
              </h3>

              <p className="certification-description">
                Foundation-level certification covering the fundamentals,
                principles and practices of software testing.
              </p>

              <div className="certification-footer">
                <span>ISTQB</span>
                <span>2026</span>
              </div>

            </div>


            {/* CERTIFICATION 02 */}

            <div className="certification-card">

              <div className="certification-top">

                <span className="certification-number">
                  02
                </span>

                <span className="certification-status">
                  COMPLETED
                </span>

              </div>

              <div className="certification-icon">
                ✓
              </div>

              <p className="certification-category">
                MOBILE TESTING
              </p>

              <h3>
                ISTQB AI Mobile Tester
              </h3>

              <p className="certification-description">
                Certification focused on testing mobile applications
                and applying AI-related testing concepts.
              </p>

              <div className="certification-footer">
                <span>ISTQB</span>
                <span>2026</span>
              </div>

            </div>


            {/* CERTIFICATION 03 */}

            <div className="certification-card">

              <div className="certification-top">

                <span className="certification-number">
                  03
                </span>

                <span className="certification-status">
                  COMPLETED
                </span>

              </div>

              <div className="certification-icon">
                ✓
              </div>

              <p className="certification-category">
                TEST AUTOMATION
              </p>

              <h3>
                SDET Certification
              </h3>

              <p className="certification-description">
                Certification focused on software development and
                engineering practices for test automation.
              </p>

              <div className="certification-footer">
                <span>SDET</span>
                <span>2026</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          CONTACT
      ================================= */}

      <section
        className="contact"
        id="contact"
      >

        <div className="contact-container">

          <div className="contact-heading">

            <p className="section-label">
              CONTACT
            </p>

            <h2>
              Let's build something <span>great.</span>
            </h2>

            <p className="contact-intro">
              Have a project, opportunity, or just want to connect?
              Feel free to reach out. I'm always open to interesting
              conversations and new opportunities.
            </p>

          </div>


          <div className="contact-content">


            {/* CONTACT INFORMATION */}

            <div className="contact-info">

              <div className="contact-info-item">

                <span className="contact-info-label">
                  EMAIL
                </span>

                <a href="mailto:vinaythandla2610@gmail.com">
                  vinaythandla2610@gmail.com
                </a>

              </div>


              <div className="contact-info-item">

                <span className="contact-info-label">
                  PHONE
                </span>

                <a href="tel:+919951092303">
                  +91 99510 92303
                </a>

              </div>


              <div className="contact-info-item">

                <span className="contact-info-label">
                  LINKEDIN
                </span>

                <a
                  href="https://www.linkedin.com/in/thandlavinay2709"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/thandlavinay2709
                </a>

              </div>


              <div className="contact-info-item">

                <span className="contact-info-label">
                  LOCATION
                </span>

                <p>
                  Tirupati, Andhra Pradesh
                </p>

              </div>

            </div>


            {/* CONTACT FORM */}

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="name">
                    NAME
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="email">
                    EMAIL
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />

                </div>

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
                <span>↗</span>
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =================================
          FOOTER
      ================================= */}

      <footer className="footer">

        <div className="footer-container">

          <div className="footer-top">


            {/* BRAND */}

            <div className="footer-brand">

              <h2>
                THANDLA <span>VINAY</span>
              </h2>

              <p>
                Building reliable digital experiences through
                development, testing and continuous learning.
              </p>

              <div className="footer-social-icons">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn ↗
                </a>

              </div>

            </div>


            {/* QUICK LINKS */}

            <div className="footer-links">

              <span className="footer-label">
                QUICK LINKS
              </span>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#certifications">Certifications</a>
              <a href="#contact">Contact</a>

            </div>


            {/* CONTACT CTA */}

            <div className="footer-cta">

              <span className="footer-label">
                GET IN TOUCH
              </span>

              <p>
                Let's build something amazing together.
              </p>

              <a
                href="#contact"
                className="footer-contact-btn"
              >
                Say Hello
                <span>→</span>
              </a>

            </div>

          </div>


          {/* FOOTER BOTTOM */}

          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} Thandla Vinay.
              All rights reserved.
            </p>

            <button
              className="footer-top-btn"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }}
            >
              Back to top ↑
            </button>

          </div>

        </div>

      </footer>

    </main>
  )
}

export default Home