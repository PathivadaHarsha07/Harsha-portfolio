import { useParams, Link } from 'react-router-dom'

const projectsData = {
  "motor-control-system": {
    title: "Live Motor Control and Monitoring System",
    description: "Centralized dashboard for monitoring and controlling 6 motors and 6 valves across 10 platforms at Secunderabad Railway Station with real-time visibility and alerting system.",
    fullDescription: "A comprehensive web application designed for real-time monitoring and control of industrial motors and valves. This system provides operators with complete visibility and control over critical infrastructure components, ensuring optimal performance and quick response to any issues.",
    technologies: ["React.js", "Java", "MySQL", "HTML", "CSS", "Bootstrap", "Git", "GitHub", "MQTT Protocol"],
    type: "Web Application",
    category: "Industrial IoT",
    status: "Completed",
    duration: "3 months",
    client: "Railway Infrastructure",
    teamSize: "3 developers",
    features: [
      "Real-time monitoring of 6 motors and 6 valves across 10 platforms",
      "Centralized dashboard with intuitive user interface",
      "Automatic/Manual mode switching for motors",
      "Inlet and outlet pressure readings monitoring",
      "Electrical parameters tracking (voltage, current, power)",
      "Valve operation control for water distribution",
      "Alert system for fault detection and diagnostics",
      "Historical data reporting and analysis",
      "Performance tracking and optimization",
      "MQTT protocol integration for real-time communication"
    ],
    challenges: [
      "Implementing real-time data synchronization across multiple platforms",
      "Ensuring system reliability for critical railway infrastructure",
      "Designing an intuitive interface for complex industrial operations",
      "Integrating MQTT protocol for seamless device communication"
    ],
    outcomes: [
      "Improved operational efficiency by 40%",
      "Reduced manual monitoring time by 60%",
      "Enhanced fault detection and response time",
      "Successful deployment across 10 railway platforms"
    ]
  },
  "water-management-system": {
    title: "Water Management System",
    description: "Real-time monitoring system for multiple water tanks with capacity visualization, automated status indicators, and remote pump control with flow rate measurement.",
    fullDescription: "An intelligent water management solution that revolutionizes how water resources are monitored and controlled. The system provides comprehensive oversight of water infrastructure with automated controls and detailed analytics.",
    technologies: ["React.js", "Java", "MySQL", "HTML", "CSS", "Bootstrap", "Git", "GitHub"],
    type: "Web Application",
    category: "Resource Management",
    status: "Completed",
    duration: "2 months",
    client: "Municipal Water Department",
    teamSize: "2 developers",
    features: [
      "Real-time monitoring of multiple water tanks",
      "Visual capacity indicators and status displays",
      "Automated status indicators for tank levels",
      "Remote pump and valve control system",
      "ON/OFF functionality with live status tracking",
      "Flow rate measurement and monitoring",
      "Water consumption tracking and analysis",
      "Usage optimization algorithms",
      "Electrical parameter monitoring for pump health",
      "Performance analysis and reporting"
    ],
    challenges: [
      "Implementing accurate flow rate measurement systems",
      "Creating responsive visualizations for tank capacities",
      "Developing reliable remote control mechanisms",
      "Ensuring data accuracy for consumption tracking"
    ],
    outcomes: [
      "Reduced water wastage by 25%",
      "Improved pump efficiency and lifespan",
      "Enhanced monitoring capabilities",
      "Automated reporting system implementation"
    ]
  },
  "ccms-system": {
    title: "Centralized Control Monitoring System (CCMS)",
    description: "Web-based dashboard for centralized control and real-time monitoring of multiple systems with dynamic visualization of live system data.",
    fullDescription: "A sophisticated centralized monitoring solution that provides unified control and visualization of multiple interconnected systems. The platform offers real-time data processing and dynamic dashboards for comprehensive system oversight.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    type: "Web Application",
    category: "System Monitoring",
    status: "Completed",
    duration: "2 months",
    client: "Industrial Facility",
    teamSize: "2 developers",
    features: [
      "Centralized dashboard for multiple system control",
      "Real-time monitoring and data visualization",
      "Dynamic visualization of live system data",
      "Interactive control panels",
      "System status indicators and alerts",
      "Data logging and historical analysis",
      "User access control and permissions",
      "Responsive design for multiple devices",
      "Custom reporting and analytics",
      "System integration capabilities"
    ],
    challenges: [
      "Integrating multiple disparate systems",
      "Creating real-time data visualization",
      "Ensuring system scalability and performance",
      "Implementing secure access controls"
    ],
    outcomes: [
      "Unified control of multiple systems",
      "Improved operational visibility",
      "Reduced system downtime",
      "Enhanced decision-making capabilities"
    ]
  },
  "sesola-energy-website": {
    title: "Sesola Energy Company Website",
    description: "Complete responsive website with interactive user interface and dynamic backend integration, successfully deployed online.",
    fullDescription: "A professional corporate website for Sesola Energy Company featuring modern design principles, responsive layout, and comprehensive content management capabilities. The site serves as the digital presence for the energy company.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
    type: "Website",
    category: "Corporate Website",
    status: "Live",
    duration: "1 month",
    client: "Sesola Energy Company",
    teamSize: "1 developer",
    link: "https://sesolaenergy.com",
    features: [
      "Responsive design for all devices",
      "Interactive and modern user interface",
      "Dynamic content management system",
      "SEO-optimized structure and content",
      "Contact forms and inquiry management",
      "Service showcase and portfolio",
      "Company information and team profiles",
      "News and updates section",
      "Social media integration",
      "Performance optimization"
    ],
    challenges: [
      "Creating an engaging design for energy sector",
      "Implementing SEO best practices",
      "Ensuring fast loading times",
      "Developing user-friendly content management"
    ],
    outcomes: [
      "Successfully launched corporate website",
      "Improved online presence and visibility",
      "Enhanced customer engagement",
      "Streamlined inquiry management process"
    ]
  }
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projectsData[id]

  if (!project) {
    return (
      <>
        <header className="page-header">
          <div className="container">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist</p>
          </div>
        </header>
        <section className="section">
          <div className="container text-center">
            <Link to="/projects" className="btn btn-primary">
              Back to Projects
            </Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <header className="page-header">
        <div className="container">
          <Link to="/projects" className="btn btn-outline" style={{ marginBottom: '1.5rem' }}>
            ← Back to Projects
          </Link>
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge badge-outline">{project.type}</span>
            <span className={`badge ${project.status === "Live" ? "badge-success" : "badge-primary"}`}>
              {project.status}
            </span>
          </div>
          <h1>{project.title}</h1>
          <p>{project.category}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '1rem' }}>
              View Live Site
            </a>
          )}
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ alignItems: 'flex-start' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <div className="card">
                <h2 style={{ marginBottom: '1rem' }}>Project Overview</h2>
                <p style={{ marginBottom: '1rem', color: '#475569', lineHeight: '1.7' }}>{project.description}</p>
                <p style={{ color: '#475569', lineHeight: '1.7' }}>{project.fullDescription}</p>
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Project Details</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: '0.5rem' }}
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Duration: {project.duration}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: '0.5rem' }}
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Team: {project.teamSize}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#64748b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: '0.5rem' }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span style={{ fontSize: '0.875rem', color: '#64748b' }}>Client: {project.client}</span>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Technologies Used</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.technologies.map((tech) => (
                  <span key={tech} className="badge badge-secondary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="card mt-8">
            <h2 style={{ marginBottom: '1.5rem' }}>Key Features & Functionality</h2>
            <div className="grid grid-2">
              {project.features.map((feature, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                  <div style={{ 
                    width: '8px', 
                    height: '8px', 
                    backgroundColor: '#2563eb', 
                    borderRadius: '50%', 
                    marginRight: '0.75rem', 
                    marginTop: '0.5rem',
                    flexShrink: 0
                  }}></div>
                  <span style={{ color: '#64748b' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenges & Outcomes */}
          <div className="grid grid-2 mt-8">
            <div className="card">
              <h2 style={{ marginBottom: '1.5rem' }}>Technical Challenges</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.challenges.map((challenge, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      backgroundColor: '#ef4444', 
                      borderRadius: '50%', 
                      marginRight: '0.75rem', 
                      marginTop: '0.5rem',
                      flexShrink: 0
                    }}></div>
                    <span style={{ color: '#64748b' }}>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 style={{ marginBottom: '1.5rem' }}>Project Outcomes</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.outcomes.map((outcome, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div style={{ 
                      width: '8px', 
                      height: '8px', 
                      backgroundColor: '#22c55e', 
                      borderRadius: '50%', 
                      marginRight: '0.75rem', 
                      marginTop: '0.5rem',
                      flexShrink: 0
                    }}></div>
                    <span style={{ color: '#64748b' }}>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
