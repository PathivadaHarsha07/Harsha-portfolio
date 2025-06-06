"use client"

import { useEffect, useRef, useState } from "react"
import "../Componentscss/education.css"

export default function Education() {
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

  const certifications = [
    {
      title: "Power BI Workshop Certification",
      provider: "Professional Workshop",
      description:
        "Successfully completed a comprehensive workshop focused on Power BI, covering data visualization, dashboard creation, and data analysis techniques.",
      skills: ["Data Visualization", "Dashboard Creation", "Data Analysis", "Business Intelligence"],
      date: "2023",
    },
    {
      title: "Introduction to Python",
      provider: "Udemy",
      description:
        "Completed an online course covering Python fundamentals, including basic syntax, data structures, and introductory programming concepts.",
      skills: ["Python Programming", "Data Structures", "Programming Fundamentals", "Problem Solving"],
      date: "2023",
    },
  ]

  const academicAchievements = [
    "Maintained consistent academic performance throughout the program",
    "Completed major project on embedded systems and IoT applications",
    "Participated in technical workshops and seminars",
    "Developed strong foundation in electronics and communication principles",
  ]

  const relevantCoursework = [
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Computer Networks",
    "Software Engineering",
    "Web Technologies",
    "Object-Oriented Programming",
    "Microprocessors and Microcontrollers",
    "Digital Signal Processing",
  ]

  return (
    <>
      <header className="page-header modern-education-header">
        <div className="education-header-background"></div>
        <div className="container">
          <div
            className={`header-content ${visibleElements.has("edu-header") ? "animate-slide-up" : "hidden-initial"}`}
            data-animate="edu-header"
          >
            <div className="education-icon-wrapper">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg>
            </div>
            <h1 className="education-title">Education & Certifications</h1>
            <p className="education-subtitle">
              My academic background and professional certifications that have shaped my technical expertise
            </p>
          </div>
        </div>
      </header>

      <section className="section modern-education-section">
        <div className="container">
          {/* Academic Education Section */}
          <div
            className={`academic-education-card ${visibleElements.has("academic-card") ? "animate-card-reveal" : "hidden-scale"}`}
            data-animate="academic-card"
          >
            <div className="section-header-modern">
              <div className="section-icon academic-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h2 className="section-title-modern">Academic Education</h2>
            </div>

            <div className="degree-header">
              <div className="degree-info">
                <h3 className="degree-title-modern">Bachelor of Technology (B.Tech)</h3>
                <p className="degree-specialization">Electronics & Communication Engineering</p>
                <p className="institution-name-modern">GMR Institute of Technology</p>
                <p className="degree-duration">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  2019 - 2023 • Rajam, Andhra Pradesh
                </p>
              </div>
              <div className="cgpa-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
                CGPA: 7.84
              </div>
            </div>

            <div
              className={`achievements-section ${visibleElements.has("achievements") ? "animate-fade-in-up" : "hidden-bottom"}`}
              data-animate="achievements"
            >
              <h4 className="subsection-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 11H1v3h8v3l3-4-3-4v2z" />
                  <path d="M22 12h-6" />
                </svg>
                Academic Achievements
              </h4>
              <ul className="achievements-list">
                {academicAchievements.map((achievement, index) => (
                  <li
                    key={index}
                    className={`achievement-item ${visibleElements.has("achievements") ? "animate-achievement-reveal" : "hidden-left"}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="achievement-icon"></div>
                    <p className="achievement-text">{achievement}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`coursework-section ${visibleElements.has("coursework") ? "animate-fade-in-up" : "hidden-bottom"}`}
              data-animate="coursework"
            >
              <h4 className="subsection-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
                Relevant Coursework
              </h4>
              <div className="coursework-grid">
                {relevantCoursework.map((course, index) => (
                  <span
                    key={course}
                    className={`coursework-badge ${visibleElements.has("coursework") ? "animate-skill-tag" : ""}`}
                    style={{ animationDelay: `${0.5 + index * 0.05}s` }}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications Section */}
          <div
            className={`certifications-section ${visibleElements.has("certifications") ? "animate-fade-in-up" : "hidden-bottom"}`}
            data-animate="certifications"
          >
            <div className="section-header-modern">
              <div className="section-icon certification-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
                  <path d="M12 2a6 6 0 0 1 6 6c0 1.5-1 6-6 10-5-4-6-8.5-6-10a6 6 0 0 1 6-6Z" />
                </svg>
              </div>
              <h2 className="section-title-modern">Professional Certifications</h2>
            </div>

            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`certification-card ${visibleElements.has("certifications") ? "animate-certification-reveal" : "hidden-scale"}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="certification-header">
                    <div className="certification-info">
                      <h3 className="certification-title">{cert.title}</h3>
                      <p className="certification-provider">{cert.provider}</p>
                    </div>
                    <span className="certification-date">{cert.date}</span>
                  </div>
                  <p className="certification-description">{cert.description}</p>
                  <div className="skills-section">
                    <h4 className="skills-label">Skills Acquired:</h4>
                    <div className="skills-tags">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skill}
                          className={`skill-tag ${visibleElements.has("certifications") ? "animate-skill-tag" : ""}`}
                          style={{ animationDelay: `${index * 0.2 + skillIndex * 0.05}s` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Philosophy */}
          <div
            className={`philosophy-card ${visibleElements.has("philosophy") ? "animate-card-reveal" : "hidden-scale"}`}
            data-animate="philosophy"
          >
            <div className="section-header-modern">
              <div className="section-icon philosophy-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h2 className="section-title-modern">Continuous Learning Philosophy</h2>
            </div>
            <p className="philosophy-description">
              I believe in the importance of continuous learning and staying updated with the latest technologies. My
              educational journey has provided me with a strong foundation in engineering principles, while my
              professional certifications have enhanced my practical skills in modern development tools and
              methodologies.
            </p>

            <div className="philosophy-pillars">
              <div
                className={`pillar-card ${visibleElements.has("philosophy") ? "animate-pillar-reveal" : "hidden-scale"}`}
                style={{ animationDelay: "0.2s" }}
              >
                <div className="pillar-icon foundation">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="pillar-title">Strong Foundation</h3>
                <p className="pillar-description">Engineering principles and technical knowledge</p>
              </div>
              <div
                className={`pillar-card ${visibleElements.has("philosophy") ? "animate-pillar-reveal" : "hidden-scale"}`}
                style={{ animationDelay: "0.4s" }}
              >
                <div className="pillar-icon skills">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
                    <path d="M12 2a6 6 0 0 1 6 6c0 1.5-1 6-6 10-5-4-6-8.5-6-10a6 6 0 0 1 6-6Z" />
                  </svg>
                </div>
                <h3 className="pillar-title">Practical Skills</h3>
                <p className="pillar-description">Industry-relevant certifications and training</p>
              </div>
              <div
                className={`pillar-card ${visibleElements.has("philosophy") ? "animate-pillar-reveal" : "hidden-scale"}`}
                style={{ animationDelay: "0.6s" }}
              >
                <div className="pillar-icon growth">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </div>
                <h3 className="pillar-title">Continuous Growth</h3>
                <p className="pillar-description">Always learning new technologies and methodologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}
