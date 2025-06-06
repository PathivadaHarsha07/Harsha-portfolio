import { Link } from 'react-router-dom'

export default function Projects() {
  const projects = [
    {
      id: "motor-control-system",
      title: "Live Motor Control and Monitoring System",
      description:
        "Centralized dashboard for monitoring and controlling 6 motors and 6 valves across 10 platforms at Secunderabad Railway Station with real-time visibility and alerting system.",
      technologies: ["React.js", "Java", "MySQL", "HTML", "CSS", "Bootstrap", "Git", "GitHub", "MQTT Protocol"],
      type: "Web Application",
      category: "Industrial IoT",
      status: "Completed",
      features: [
        "Real-time motor and valve control",
        "Electrical parameter monitoring", 
        "Historical data reporting"
      ]
    },
    {
      id: "water-management-system",
      title: "Water Management System",
      description:
        "Real-time monitoring system for multiple water tanks with capacity visualization, automated status indicators, and remote pump control with flow rate measurement.",
      technologies: ["React.js", "Java", "MySQL", "HTML", "CSS", "Bootstrap", "Git", "GitHub"],
      type: "Web Application",
      category: "Resource Management",
      status: "Completed",
      features: [
        "Tank capacity visualization",
        "Automated pump control",
        "Flow rate measurement"
      ]
    },
    {
      id: "ccms-system",
      title: "Centralized Control Monitoring System (CCMS)",
      description:
        "Web-based dashboard for centralized control and real-time monitoring of multiple systems with dynamic visualization of live system data.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      type: "Web Application",
      category: "System Monitoring",
      status: "Completed",
      features: [
        "Centralized system control",
        "Real-time data visualization",
        "Dynamic dashboard updates"
      ]
    },
    {
      id: "sesola-energy-website",
      title: "Sesola Energy Company Website",
      description:
        "Complete responsive website with interactive user interface and dynamic backend integration, successfully deployed online.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
      type: "Website",
      category: "Corporate Website",
      status: "Live",
      link: "https://sesolaenergy.com",
      features: [
        "Responsive design",
        "Interactive user interface",
        "Content management system"
      ]
    }
  ]

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>My Projects</h1>
          <p>A showcase of my technical projects demonstrating expertise in full-stack development</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            {projects.map((project, index) => (
              <div key={index} className="card">
                <div className="project-card-header">
                  <div>
                    <h3 className="project-card-title">{project.title}</h3>
                    <div className="project-card-meta">
                      <span className="badge badge-outline">{project.type}</span>
                      <span className={`badge ${project.status === "Live" ? "badge-success" : "badge-primary"}`}>
                        {project.status}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.75rem' }}>
                      {project.category}
                    </p>
                  </div>
                  <div className="project-card-actions">
                    <Link to={`/projects/${project.id}`} className="project-card-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </Link>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="project-card-description">{project.description}</p>
                
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ fontWeight: '500', fontSize: '0.875rem', color: '#374151', marginBottom: '0.5rem' }}>
                    Key Features:
                  </h4>
                  <ul style={{ fontSize: '0.875rem', color: '#64748b' }}>
                    {project.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <div style={{ 
                          width: '6px', 
                          height: '6px', 
                          backgroundColor: '#2563eb', 
                          borderRadius: '50%', 
                          marginRight: '0.5rem' 
                        }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontWeight: '500', fontSize: '0.875rem', color: '#374151', marginBottom: '0.5rem' }}>
                    Technologies:
                  </h4>
                  <div className="project-card-tech">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="badge badge-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Categories */}
          <div className="mt-8">
            <div className="section-title">
              <h2>Project Categories</h2>
            </div>
            <div className="grid grid-4">
              <div className="card text-center" style={{ background: 'linear-gradient(to bottom right, #eff6ff, #dbeafe)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Industrial IoT</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Real-time monitoring and control systems</p>
              </div>
              <div className="card text-center" style={{ background: 'linear-gradient(to bottom right, #f0fdf4, #dcfce7)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Web Applications</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Full-stack web development projects</p>
              </div>
              <div className="card text-center" style={{ background: 'linear-gradient(to bottom right, #faf5ff, #f3e8ff)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>System Integration</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Complex system integration solutions</p>
              </div>
              <div className="card text-center" style={{ background: 'linear-gradient(to bottom right, #fff7ed, #fed7aa)' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Corporate Websites</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem' }}>Professional business websites</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
