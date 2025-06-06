"use client"

import { useEffect, useRef, useState } from "react"
import "../Componentscss/skills.css"
export default function Skills() {
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

  const skills = {
    "Programming Languages": {
      skills: [
        { name: "Java", level: 90 },
        { name: "PHP", level: 75 },
        { name: "JavaScript", level: 85 },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 16-4-4 4-4" />
          <path d="m6 8 4 4-4 4" />
        </svg>
      ),
      gradient: "from-blue-500 to-purple-600",
      color: "#3b82f6",
    },
    "Frontend Technologies": {
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "React.js", level: 80 },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-600",
      color: "#10b981",
    },
    "Backend Technologies": {
      skills: [
        { name: "Servlets", level: 85 },
        { name: "JSP", level: 80 },
        { name: "Spring Boot", level: 88 },
        { name: "Microservices", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-600",
      color: "#a855f7",
    },
    "Database & ORM": {
      skills: [
        { name: "MySQL", level: 85 },
        { name: "JDBC", level: 80 },
        { name: "Hibernate", level: 75 },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-600",
      color: "#f97316",
    },
    "Architecture & Design": {
      skills: [
        { name: "MVC Architecture", level: 85 },
        { name: "RESTful Services", level: 90 },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </svg>
      ),
      gradient: "from-red-500 to-pink-600",
      color: "#ef4444",
    },
    "Tools & Development": {
      skills: [
        { name: "Eclipse", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Git", level: 88 },
        { name: "GitHub", level: 85 },
      ],
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
          <path d="M12 2a6 6 0 0 1 6 6c0 1.5-1 6-6 10-5-4-6-8.5-6-10a6 6 0 0 1 6-6Z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-blue-600",
      color: "#6366f1",
    },
  }

  const additionalSkills = [
    {
      title: "Problem Solving",
      description: "Analytical thinking and debugging",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
          <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        </svg>
      ),
      color: "#8b5cf6",
    },
    {
      title: "Team Collaboration",
      description: "Agile methodologies and teamwork",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: "#06b6d4",
    },
    {
      title: "API Development",
      description: "RESTful services and integration",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16,6 12,2 8,6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
      ),
      color: "#10b981",
    },
    {
      title: "Version Control",
      description: "Git workflows and collaboration",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M13 6h3a2 2 0 0 1 2 2v7" />
          <line x1="6" y1="9" x2="6" y2="21" />
        </svg>
      ),
      color: "#f59e0b",
    },
  ]

  return (
    <>
      <header className="page-header modern-skills-header">
        <div className="header-background-skills"></div>
        <div className="container">
          <div
            className={`header-content ${visibleElements.has("skills-header") ? "animate-slide-up" : "hidden-initial"}`}
            data-animate="skills-header"
          >
            <div className="skills-icon-wrapper">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <path d="M9 9h6v6H9z" />
                <path d="M9 1v6" />
                <path d="M15 1v6" />
                <path d="M9 17v6" />
                <path d="M15 17v6" />
                <path d="M1 9h6" />
                <path d="M1 15h6" />
                <path d="M17 9h6" />
                <path d="M17 15h6" />
              </svg>
            </div>
            <h1 className="skills-title">Technical Skills</h1>
            <p className="skills-subtitle">My technical expertise and proficiencies across different technologies</p>
          </div>
        </div>
      </header>

      <section className="section modern-skills-section">
        <div className="container">
          <div
            className={`skills-grid ${visibleElements.has("skills-grid") ? "animate-grid-reveal" : "hidden-initial"}`}
            data-animate="skills-grid"
          >
            {Object.entries(skills).map(([category, data], index) => (
              <div
                key={category}
                className={`skill-category-card ${visibleElements.has(`skill-${index}`) ? "animate-card-reveal" : "hidden-scale"}`}
                data-animate={`skill-${index}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon" style={{ color: data.color }}>
                    {data.icon}
                  </div>
                  <h3 className="skill-category-title">{category}</h3>
                </div>

                <div className="skills-list">
                  {data.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percentage">{skill.level}%</span>
                      </div>
                      <div className="skill-progress-bar">
                        <div
                          className={`skill-progress-fill ${visibleElements.has(`skill-${index}`) ? "animate-progress" : ""}`}
                          style={{
                            "--progress": `${skill.level}%`,
                            "--color": data.color,
                            animationDelay: `${index * 0.1 + skillIndex * 0.1}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="card-glow-effect"
                  style={{ background: `radial-gradient(circle, ${data.color}20 0%, transparent 70%)` }}
                ></div>
              </div>
            ))}
          </div>

          {/* Additional Skills Section */}
          <div
            className={`additional-skills-section ${visibleElements.has("additional-skills") ? "animate-fade-in-up" : "hidden-bottom"}`}
            data-animate="additional-skills"
          >
            <div className="section-title-modern">
              <h2 className="gradient-title">Additional Competencies</h2>
              <p className="section-description">
                Soft skills and methodologies that complement my technical expertise
              </p>
            </div>

            <div className="competencies-grid">
              {additionalSkills.map((skill, index) => (
                <div
                  key={skill.title}
                  className={`competency-card ${visibleElements.has("additional-skills") ? "animate-competency-reveal" : "hidden-scale"}`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <div className="competency-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3 className="competency-title">{skill.title}</h3>
                  <p className="competency-description">{skill.description}</p>
                  <div className="competency-glow" style={{ background: `${skill.color}20` }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
