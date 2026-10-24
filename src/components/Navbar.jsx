import { useState } from "react"
import resume from "../assets/Vinay_Resume.pdf"
function Navbar() {
  const [activeLink, setActiveLink] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ]

  const handleNavClick = (section) => {
    setActiveLink(section)
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* =================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* =================================
            LOGO
        ================================= */}

        <a
          href="#home"
          className="nav-logo"
          onClick={() => handleNavClick("home")}
        >
          THANDLA <span>VINAY</span>
        </a>


        {/* =================================
            DESKTOP NAVIGATION
        ================================= */}

        <div className="nav-links">

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeLink === item.id ? "active" : ""
              }
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
            </a>
          ))}

        </div>


        {/* =================================
            RESUME BUTTON
        ================================= */}

<a
  href={resume}
  download="Thandla_Vinay_Resume.pdf"
  className="resume-btn"
>
  <span className="download-icon">
    ↓
  </span>

  <span className="resume-text">

    {/* Desktop */}
    <span className="desktop-resume-text">
      Download Resume
    </span>

    {/* Mobile */}
    <span className="mobile-resume-text">
      ↓ Resume
    </span>

  </span>

</a>


        {/* =================================
            MOBILE NAVIGATION
        ================================= */}

        <div
          className={`mobile-menu ${
            menuOpen ? "open" : ""
          }`}
        >

          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={
                activeLink === item.id ? "active" : ""
              }
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
            </a>
          ))}

        </div>

      </div>

    </nav>
  )
}

export default Navbar