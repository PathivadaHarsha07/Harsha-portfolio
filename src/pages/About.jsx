"use client"

import { useEffect, useRef, useState } from "react"
import "../Componentscss/about.css"
export default function About() {
  const [visibleElements, setVisibleElements] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    // Create intersection observer with better options
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.dataset.animate
          if (entry.isIntersecting && elementId) {
            setVisibleElements((prev) => new Set([...prev, elementId]))
            // Optional: Stop observing once animated to prevent re-triggering
            // observerRef.current.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is fully visible
      },
    )

    // Observe all elements with data-animate attribute
    const animatedElements = document.querySelectorAll("[data-animate]")
    animatedElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const CountUp = ({ end, duration = 2000, suffix = "", isVisible = false }) => {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)

    useEffect(() => {
      if (!isVisible || hasStarted) return

      setHasStarted(true)
      let startTime = null
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }

      requestAnimationFrame(animate)
    }, [isVisible, hasStarted, end, duration])

    return (
      <span>
        {count}
        {suffix}
      </span>
    )
  }

  return (
    <>
      <header className="page-header modern-header">
        <div className="header-background"></div>
        <div className="container">
          <div
            className={`header-content ${visibleElements.has("header") ? "animate-slide-up" : "hidden-initial"}`}
            data-animate="header"
          >
            <div className="profile-avatar">
              <div className="avatar-ring"></div>
              <div className="avatar-content">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
            </div>
            <h1 className="glitch-text">About Me</h1>
            <p className="subtitle-animated">Learn more about my background and what drives me</p>
          </div>
        </div>
      </header>

      <section className="section modern-section">
        <div className="container">
          <div className="about-content modern-grid">
            {/* Left Column - Main Content */}
            <div
              className={`about-text content-card ${visibleElements.has("content") ? "animate-fade-in-left" : "hidden-left"}`}
              data-animate="content"
            >
              <div
                className={`role-badge ${visibleElements.has("badge") ? "animate-bounce-in" : "hidden-scale"}`}
                data-animate="badge"
              >
                <span className="badge-dot"></span>
                Full Stack Developer
              </div>

              <h3
                className={`gradient-text ${visibleElements.has("title") ? "animate-slide-up-delayed" : "hidden-initial"}`}
                data-animate="title"
              >
                Crafting Digital Experiences
              </h3>

              <div
                className={`text-content ${visibleElements.has("text") ? "animate-fade-in-stagger" : "hidden-initial"}`}
                data-animate="text"
              >
                <p className="highlight-paragraph">
                  I'm a passionate Full Stack Java Developer with 2+ years of hands-on experience in building scalable
                  web applications. Currently working as a Junior Software Engineer at IScientific Techsolutions Labs
                  Pvt.Ltd, where I develop end-to-end solutions using modern technologies.
                </p>
                <p>
                  My expertise spans across frontend technologies like React.js and backend development with Java,
                  Spring Boot, and microservices architecture. I'm passionate about creating efficient, user-friendly
                  applications that solve real-world problems.
                </p>
                <p>
                  I believe in continuous learning and staying updated with the latest technologies. My goal is to
                  contribute to innovative projects that make a positive impact while growing as a professional
                  developer.
                </p>
              </div>

              <div
                className={`about-stats modern-stats ${visibleElements.has("stats") ? "animate-stats-reveal" : "hidden-bottom"}`}
                data-animate="stats"
              >
                <div className="stat-card">
                  <div className="stat-number">
                    <CountUp end={2} suffix="+" isVisible={visibleElements.has("stats")} />
                  </div>
                  <div className="stat-label">Years Experience</div>
                  <div className="stat-bar">
                    <div
                      className={`stat-fill ${visibleElements.has("stats") ? "animate-fill" : ""}`}
                      style={{ "--width": "80%" }}
                    ></div>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">
                    <CountUp end={5} suffix="+" isVisible={visibleElements.has("stats")} />
                  </div>
                  <div className="stat-label">Projects Completed</div>
                  <div className="stat-bar">
                    <div
                      className={`stat-fill ${visibleElements.has("stats") ? "animate-fill" : ""}`}
                      style={{ "--width": "90%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Cards */}
            <div
              className={`cards-container ${visibleElements.has("cards") ? "animate-fade-in-right" : "hidden-right"}`}
              data-animate="cards"
            >
              {/* Current Role Card */}
              <div
                className={`info-card role-card ${visibleElements.has("role-card") ? "animate-card-reveal" : "hidden-scale"}`}
                data-animate="role-card"
              >
                <div className="card-header">
                  <div className="icon-wrapper role-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2Z" />
                      <path d="M14 13v4" />
                      <path d="M10 13v4" />
                    </svg>
                  </div>
                  <h4>Current Role</h4>
                </div>
                <div className="card-content">
                  <div className="job-title">Junior Software Engineer</div>
                  <div className="company-name">IScientific Techsolutions Labs Pvt.Ltd</div>
                  <div className="duration">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                    May 2023 - Present
                  </div>
                </div>
                <div className="card-glow"></div>
              </div>

              {/* Education Card */}
              <div
                className={`info-card education-card ${visibleElements.has("edu-card") ? "animate-card-reveal-delayed" : "hidden-scale"}`}
                data-animate="edu-card"
              >
                <div className="card-header">
                  <div className="icon-wrapper education-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <h4>Education</h4>
                </div>
                <div className="card-content">
                  <div className="degree-title">B.Tech in Electronics & Communication</div>
                  <div className="institution-name">GMR Institute of Technology</div>
                  <div className="academic-info">
                    <div className="cgpa">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                      CGPA: 7.84
                    </div>
                    <div className="year-range">2019-2023</div>
                  </div>
                </div>
                <div className="card-glow"></div>
              </div>

              {/* Skills Preview Card */}
              <div
                className={`info-card skills-preview-card ${visibleElements.has("skills-card") ? "animate-card-reveal-final" : "hidden-scale"}`}
                data-animate="skills-card"
              >
                <div className="card-header">
                  <div className="icon-wrapper skills-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16,18 22,12 16,6" />
                      <polyline points="8,6 2,12 8,18" />
                    </svg>
                  </div>
                  <h4>Core Skills</h4>
                </div>
                <div className="card-content">
                  <div className={`skills-tags ${visibleElements.has("skills-card") ? "animate-tags-reveal" : ""}`}>
                    <span className="skill-tag java">Java</span>
                    <span className="skill-tag react">React.js</span>
                    <span className="skill-tag spring">Spring Boot</span>
                    <span className="skill-tag more">+5 more</span>
                  </div>
                </div>
                <div className="card-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
