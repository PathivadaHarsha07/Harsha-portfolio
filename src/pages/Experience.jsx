

"use client"

import { useEffect, useRef, useState } from "react"
import "../Componentscss/experience.css"

export default function Experience() {
  const [visibleElements, setVisibleElements] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.dataset.animate
          if (entry.isIntersecting && elementId) {
            setVisibleElements((prev) => new Set([...prev, elementId]))
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

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

  const responsibilities = [
    {
      text: "Hands-on experience in full-stack development using Java, PHP, JavaScript, React.js, HTML, CSS, and Bootstrap",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16,18 22,12 16,6" />
          <polyline points="8,6 2,12 8,18" />
        </svg>
      ),
    },
    {
      text: "Built responsive web interfaces and dynamic UIs using React.js and Bootstrap for modern web applications",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
    {
      text: "Developed backend services using Java (Servlets, JSP, Spring Boot, REST APIs) and PHP, following MVC architecture",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
    },
    {
      text: "Worked with MySQL, JDBC, and Hibernate for efficient data storage and retrieval",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
    },
    {
      text: "Proficient with tools like Eclipse, VS Code, Git, and GitHub for development and version control",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
          <path d="M12 2a6 6 0 0 1 6 6c0 1.5-1 6-6 10-5-4-6-8.5-6-10a6 6 0 0 1 6-6Z" />
        </svg>
      ),
    },
    {
      text: "Collaborated with cross-functional teams to deliver high-quality software solutions",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      text: "Participated in code reviews and maintained coding standards",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
        </svg>
      ),
    },
    {
      text: "Implemented responsive design principles for optimal user experience across devices",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M10 4v16" />
        </svg>
      ),
    },
  ]

  const achievements = [
    {
      text: "Successfully delivered 4+ major projects including real-time monitoring systems",
      metric: "4+",
      label: "Projects",
      color: "#3b82f6",
    },
    {
      text: "Improved application performance by implementing efficient database queries",
      metric: "40%",
      label: "Performance",
      color: "#10b981",
    },
    {
      text: "Contributed to the development of scalable microservices architecture",
      metric: "5+",
      label: "Services",
      color: "#8b5cf6",
    },
    {
      text: "Mentored junior developers and shared knowledge through code reviews",
      metric: "3+",
      label: "Mentees",
      color: "#f59e0b",
    },
  ]

  const technologies = [
    { name: "Java", level: 90, color: "#f89820" },
    { name: "Spring Boot", level: 85, color: "#6db33f" },
    { name: "React.js", level: 80, color: "#61dafb" },
    { name: "PHP", level: 75, color: "#777bb4" },
    { name: "MySQL", level: 85, color: "#4479a1" },
    { name: "HTML", level: 95, color: "#e34f26" },
    { name: "CSS", level: 90, color: "#1572b6" },
    { name: "Bootstrap", level: 85, color: "#7952b3" },
    { name: "JavaScript", level: 85, color: "#f7df1e" },
    { name: "Git", level: 80, color: "#f05032" },
    { name: "GitHub", level: 80, color: "#181717" },
    { name: "REST APIs", level: 88, color: "#ff6b6b" },
    { name: "Microservices", level: 75, color: "#4ecdc4" },
  ]

  const timelineEvents = [
    {
      title: "Started as Junior Software Engineer",
      description: "Joined IScientific Techsolutions Labs",
      date: "May 2023",
      status: "completed",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22,4 12,14.01 9,11.01" />
        </svg>
      ),
    },
    {
      title: "Full Stack Development Focus",
      description: "Specialized in Java and React.js development",
      date: "2023",
      status: "completed",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
        </svg>
      ),
    },
    {
      title: "Project Leadership",
      description: "Leading multiple high-impact projects",
      date: "2024",
      status: "current",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <header className="page-header modern-experience-header">
        <div className="experience-header-background"></div>
        <div className="container">
          <div
            className={`header-content ${visibleElements.has("exp-header") ? "animate-slide-up" : "hidden-initial"}`}
            data-animate="exp-header"
          >
            <div className="experience-icon-wrapper">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            </div>
            <h1 className="experience-title">Work Experience</h1>
            <p className="experience-subtitle">My professional journey and accomplishments in software development</p>
          </div>
        </div>
      </header>

      <section className="section modern-experience-section">
        <div className="container">
          {/* Main Experience Card */}
          <div
            className={`experience-main-card ${visibleElements.has("main-card") ? "animate-card-reveal" : "hidden-scale"}`}
            data-animate="main-card"
          >
            <div className="experience-card-header">
              <div className="job-info">
                <h3 className="job-title-modern">Junior Software Engineer (Full Stack Developer)</h3>
                <p className="company-name-modern">IScientific Techsolutions Labs Pvt.Ltd</p>
                <p className="duration-modern">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                  May 2023 - Present
                </p>
              </div>
              <div className="status-badge current">
                <span className="status-dot"></span>
                Current Position
              </div>
            </div>

            {/* Responsibilities Section */}
            <div
              className={`section-block ${visibleElements.has("responsibilities") ? "animate-fade-in-up" : "hidden-bottom"}`}
              data-animate="responsibilities"
            >
              <h4 className="section-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11H1v3h8v3l3-4-3-4v2z" />
                  <path d="M22 12h-6" />
                </svg>
                Key Responsibilities
              </h4>
              <div className="responsibilities-grid">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className={`responsibility-item ${visibleElements.has("responsibilities") ? "animate-responsibility-reveal" : "hidden-left"}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="responsibility-icon">{responsibility.icon}</div>
                    <p className="responsibility-text">{responsibility.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div
              className={`section-block ${visibleElements.has("achievements") ? "animate-fade-in-up" : "hidden-bottom"}`}
              data-animate="achievements"
            >
              <h4 className="section-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                Key Achievements
              </h4>
              <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className={`achievement-card ${visibleElements.has("achievements") ? "animate-achievement-reveal" : "hidden-scale"}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="achievement-metric" style={{ color: achievement.color }}>
                      {achievement.metric}
                    </div>
                    <div className="achievement-label">{achievement.label}</div>
                    <p className="achievement-text">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Section */}
            <div
              className={`section-block ${visibleElements.has("technologies") ? "animate-fade-in-up" : "hidden-bottom"}`}
              data-animate="technologies"
            >
              <h4 className="section-block-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                Technologies Used
              </h4>
              <div className="technologies-grid">
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={`tech-badge ${visibleElements.has("technologies") ? "animate-tech-reveal" : "hidden-scale"}`}
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      "--tech-color": tech.color,
                    }}
                  >
                    <span className="tech-name">{tech.name}</span>
                    <div className="tech-level-bar">
                      <div
                        className={`tech-level-fill ${visibleElements.has("technologies") ? "animate-tech-fill" : ""}`}
                        style={{
                          "--level": `${tech.level}%`,
                          backgroundColor: tech.color,
                          animationDelay: `${index * 0.05 + 0.5}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Timeline */}
          <div
            className={`timeline-section ${visibleElements.has("timeline") ? "animate-timeline-reveal" : "hidden-bottom"}`}
            data-animate="timeline"
          >
            <div className="section-title-modern">
              <h2 className="gradient-title">Career Timeline</h2>
              <p className="section-description">My professional growth and key milestones</p>
            </div>

            <div className="timeline-container">
              <div className="timeline-line"></div>
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`timeline-item ${visibleElements.has("timeline") ? "animate-timeline-item" : "hidden-left"}`}
                  style={{ animationDelay: `${0.5 + index * 0.2}s` }}
                >
                  <div className={`timeline-marker ${event.status}`}>{event.icon}</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">{event.title}</h3>
                    <p className="timeline-description">{event.description}</p>
                    <span className="timeline-date">{event.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}
