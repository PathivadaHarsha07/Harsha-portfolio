import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      value: "harshavardhanpathivada01@gmail.com",
      link: "mailto:harshavardhanpathivada01@gmail.com"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: "Phone",
      value: "+91 8074415157",
      link: "tel:+918074415157"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/pathivada-harshavardhan-196aa1275"
    }
  ]

  return (
    <>
      <header className="page-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Let's connect and discuss how we can work together</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <p className="contact-description">
            I'm always open to discussing new opportunities and interesting projects. Let's connect and explore how we
            can work together!
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            {/* Contact Information */}
            <div>
              <div className="contact-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-card">
                    <div className="contact-card-icon">{info.icon}</div>
                    <h3 className="contact-card-title">{info.title}</h3>
                    <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="contact-card-link"
                    >
                      {info.value}
                    </a>
                  </div>
                ))}
              </div>

              {/* Availability Card */}
              <div className="card mt-8" style={{ backgroundColor: '#1e293b', color: 'white', border: '1px solid #334155' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#22c55e"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: '0.5rem' }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Availability</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Response Time</p>
                    <p style={{ color: '#cbd5e1' }}>Usually within 24 hours</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Best Time to Reach</p>
                    <p style={{ color: '#cbd5e1' }}>Monday - Friday, 9 AM - 6 PM IST</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Current Status</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{ 
                        width: '8px', 
                        height: '8px', 
                        backgroundColor: '#22c55e', 
                        borderRadius: '50%', 
                        marginRight: '0.5rem' 
                      }}></div>
                      <p style={{ color: '#cbd5e1' }}>Available for opportunities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Send Me a Message</h2>
              <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-2">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    rows={6}
                    className="form-textarea"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-full btn-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginRight: '0.5rem' }}
                  >
                    <path d="M22 2L11 13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Quick Contact Actions */}
          <div className="mt-8 text-center">
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '2rem', color: 'black' }}>
              Prefer Direct Contact?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
              <a href="mailto:harshavardhanpathivada01@gmail.com" className="btn btn-primary btn-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: '0.5rem' }}
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Send Email
              </a>
              <a href="tel:+918074415157" className="btn btn-outline btn-lg" style={{ borderColor: '#22c55e', color: '#22c55e' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: '0.5rem' }}
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://www.linkedin.com/in/pathivada-harshavardhan-196aa1275"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
                style={{ borderColor: '#3b82f6', color: '#3b82f6' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: '0.5rem' }}
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


// import { useState } from 'react'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState(null)

//   const handleInputChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setSubmitStatus(null)

//     try {
//       // Option 1: EmailJS Integration (Recommended)
//       // First, install EmailJS: npm install @emailjs/browser
//       // Then uncomment the code below and configure your EmailJS service
      
      
//       const emailjs = await import('@emailjs/browser')
      
//       const templateParams = {
//         from_name: formData.name,
//         from_email: formData.email,
//         subject: formData.subject,
//         message: formData.message,
//         to_email: 'harshavardhanpathivada01@gmail.com'
//       }

//       await emailjs.send(
//         'harsha_portfolio',     // Replace with your EmailJS service ID
//         'template_harsha1',    // Replace with your EmailJS template ID
//         templateParams,
//         '8kCJyOlc_Th3sEjbj'      // Replace with your EmailJS public key
//       )
     

//       // Option 2: Formspree Integration (Alternative)
//       // Uncomment the code below to use Formspree
      
//       /*
//       const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message
//         })
//       })

//       if (!response.ok) {
//         throw new Error('Failed to send message')
//       }
//       */

//       // For demonstration purposes, we'll simulate a successful submission
//       await new Promise(resolve => setTimeout(resolve, 2000))
      
//       setSubmitStatus('success')
//       setFormData({ name: '', email: '', subject: '', message: '' })
      
//     } catch (error) {
//       console.error('Error sending message:', error)
//       setSubmitStatus('error')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const contactInfo = [
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="32"
//           height="32"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="#3b82f6"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <rect width="20" height="16" x="2" y="4" rx="2" />
//           <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//         </svg>
//       ),
//       title: "Email",
//       value: "harshavardhanpathivada01@gmail.com",
//       link: "mailto:harshavardhanpathivada01@gmail.com"
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="32"
//           height="32"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="#22c55e"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//         </svg>
//       ),
//       title: "Phone",
//       value: "+91 8074415157",
//       link: "tel:+918074415157"
//     },
//     {
//       icon: (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="32"
//           height="32"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="#3b82f6"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//           <rect width="4" height="12" x="2" y="9" />
//           <circle cx="4" cy="4" r="2" />
//         </svg>
//       ),
//       title: "LinkedIn",
//       value: "Connect with me",
//       link: "https://www.linkedin.com/in/pathivada-harshavardhan-196aa1275"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <style>{`
//         .page-header {
//           background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
//           color: white;
//           padding: 6rem 0 3rem;
//           text-align: center;
//         }
//         .container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 1rem;
//         }
//         .section {
//           padding: 4rem 0;
//         }
//         .contact-description {
//           text-align: center;
//           font-size: 1.125rem;
//           color: #475569;
//           margin-bottom: 3rem;
//           max-width: 600px;
//           margin-left: auto;
//           margin-right: auto;
//         }
//         .contact-cards {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//           gap: 1.5rem;
//           margin-bottom: 2rem;
//         }
//         .contact-card {
//           background: white;
//           padding: 2rem;
//           border-radius: 0.75rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//           text-align: center;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//         }
//         .contact-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
//         }
//         .contact-card-icon {
//           margin-bottom: 1rem;
//         }
//         .contact-card-title {
//           font-size: 1.25rem;
//           font-weight: 600;
//           margin-bottom: 0.5rem;
//           color: #1e293b;
//         }
//         .contact-card-link {
//           color: #3b82f6;
//           text-decoration: none;
//           font-weight: 500;
//         }
//         .contact-card-link:hover {
//           text-decoration: underline;
//         }
//         .card {
//           background: white;
//           padding: 2rem;
//           border-radius: 0.75rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//         }
//         .grid {
//           display: grid;
//           gap: 1.5rem;
//         }
//         .grid-2 {
//           grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//         }
//         .form-group {
//           margin-bottom: 1.5rem;
//         }
//         .form-label {
//           display: block;
//           font-weight: 500;
//           margin-bottom: 0.5rem;
//           color: #374151;
//         }
//         .form-input, .form-textarea {
//           width: 100%;
//           padding: 0.75rem;
//           border: 2px solid #e5e7eb;
//           border-radius: 0.5rem;
//           font-size: 1rem;
//           transition: border-color 0.3s ease, box-shadow 0.3s ease;
//         }
//         .form-input:focus, .form-textarea:focus {
//           outline: none;
//           border-color: #3b82f6;
//           box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
//         }
//         .form-textarea {
//           resize: vertical;
//           min-height: 120px;
//         }
//         .btn {
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           padding: 0.75rem 1.5rem;
//           border-radius: 0.5rem;
//           font-weight: 500;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           cursor: pointer;
//           border: 2px solid transparent;
//           font-family: inherit;
//         }
//         .btn-primary {
//           background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
//           color: white;
//         }
//         .btn-primary:hover:not(:disabled) {
//           background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
//           transform: translateY(-1px);
//           box-shadow: 0 10px 25px -3px rgba(59, 130, 246, 0.3);
//         }
//         .btn-primary:disabled {
//           opacity: 0.7;
//           cursor: not-allowed;
//           transform: none;
//         }
//         .btn-outline {
//           background: transparent;
//           border: 2px solid #3b82f6;
//           color: #3b82f6;
//         }
//         .btn-outline:hover {
//           background: #3b82f6;
//           color: white;
//           transform: translateY(-1px);
//         }
//         .btn-lg {
//           padding: 1rem 2rem;
//           font-size: 1.125rem;
//         }
//         .w-full {
//           width: 100%;
//         }
//         .mt-8 {
//           margin-top: 2rem;
//         }
//         .text-center {
//           text-align: center;
//         }
//         .alert {
//           padding: 1rem;
//           border-radius: 0.5rem;
//           margin-bottom: 1rem;
//         }
//         .alert-success {
//           background-color: #d1fae5;
//           border: 1px solid #10b981;
//           color: #047857;
//         }
//         .alert-error {
//           background-color: #fee2e2;
//           border: 1px solid #ef4444;
//           color: #dc2626;
//         }
//         .spinner {
//           width: 20px;
//           height: 20px;
//           border: 2px solid #ffffff;
//           border-top: 2px solid transparent;
//           border-radius: 50%;
//           animation: spin 1s linear infinite;
//         }
//         @keyframes spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//         @media (min-width: 768px) {
//           .grid-layout {
//             grid-template-columns: 1fr 1fr;
//             gap: 4rem;
//           }
//         }
//       `}</style>

//       <header className="page-header">
//         <div className="container">
//           <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>Get In Touch</h1>
//           <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>Let's connect and discuss how we can work together</p>
//         </div>
//       </header>

//       <section className="section">
//         <div className="container">
//           <p className="contact-description">
//             I'm always open to discussing new opportunities and interesting projects. Let's connect and explore how we
//             can work together!
//           </p>

//           <div style={{ display: 'grid', gap: '3rem' }} className="grid-layout">
//             {/* Contact Information */}
//             <div>
//               <div className="contact-cards">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="contact-card">
//                     <div className="contact-card-icon">{info.icon}</div>
//                     <h3 className="contact-card-title">{info.title}</h3>
//                     <a
//                       href={info.link}
//                       target={info.link.startsWith('http') ? '_blank' : '_self'}
//                       rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
//                       className="contact-card-link"
//                     >
//                       {info.value}
//                     </a>
//                   </div>
//                 ))}
//               </div>

//               {/* Availability Card */}
//               <div className="card" style={{ backgroundColor: '#1e293b', color: 'white' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#22c55e"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     style={{ marginRight: '0.5rem' }}
//                   >
//                     <circle cx="12" cy="12" r="10" />
//                     <polyline points="12 6 12 12 16 14" />
//                   </svg>
//                   <h3 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>Availability</h3>
//                 </div>
//                 <div style={{ display: 'grid', gap: '1rem' }}>
//                   <div>
//                     <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Response Time</p>
//                     <p style={{ color: '#cbd5e1', margin: 0 }}>Usually within 24 hours</p>
//                   </div>
//                   <div>
//                     <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Best Time to Reach</p>
//                     <p style={{ color: '#cbd5e1', margin: 0 }}>Monday - Friday, 9 AM - 6 PM IST</p>
//                   </div>
//                   <div>
//                     <p style={{ fontWeight: '500', marginBottom: '0.25rem' }}>Current Status</p>
//                     <div style={{ display: 'flex', alignItems: 'center' }}>
//                       <div style={{ 
//                         width: '8px', 
//                         height: '8px', 
//                         backgroundColor: '#22c55e', 
//                         borderRadius: '50%', 
//                         marginRight: '0.5rem' 
//                       }}></div>
//                       <p style={{ color: '#cbd5e1', margin: 0 }}>Available for opportunities</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="card" style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
//               <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontWeight: '700' }}>Send Me a Message</h2>
//               <p style={{ color: '#64748b', marginBottom: '2rem' }}>
//                 Fill out the form below and I'll get back to you as soon as possible.
//               </p>

//               {submitStatus === 'success' && (
//                 <div className="alert alert-success">
//                   <strong>Success!</strong> Your message has been sent. I'll get back to you soon!
//                 </div>
//               )}

//               {submitStatus === 'error' && (
//                 <div className="alert alert-error">
//                   <strong>Error!</strong> There was a problem sending your message. Please try again or contact me directly.
//                 </div>
//               )}

//               <div onSubmit={handleSubmit}>
//                 <div className="grid grid-2">
//                   <div className="form-group">
//                     <label htmlFor="name" className="form-label">
//                       Full Name *
//                     </label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       required
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Your full name"
//                       className="form-input"
//                       disabled={isSubmitting}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="email" className="form-label">
//                       Email Address *
//                     </label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       required
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="your.email@example.com"
//                       className="form-input"
//                       disabled={isSubmitting}
//                     />
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="subject" className="form-label">
//                     Subject *
//                   </label>
//                   <input
//                     id="subject"
//                     name="subject"
//                     type="text"
//                     required
//                     value={formData.subject}
//                     onChange={handleInputChange}
//                     placeholder="What's this about?"
//                     className="form-input"
//                     disabled={isSubmitting}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="message" className="form-label">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     placeholder="Tell me about your project, opportunity, or just say hello..."
//                     rows={6}
//                     className="form-textarea"
//                     disabled={isSubmitting}
//                   />
//                 </div>

//                 <button type="submit" onClick={handleSubmit} className="btn btn-primary w-full btn-lg" disabled={isSubmitting}>
//                   {isSubmitting ? (
//                     <>
//                       <div className="spinner" style={{ marginRight: '0.5rem' }}></div>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="20"
//                         height="20"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         style={{ marginRight: '0.5rem' }}
//                       >
//                         <path d="M22 2L11 13" />
//                         <polygon points="22 2 15 22 11 13 2 9 22 2" />
//                       </svg>
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Quick Contact Actions */}
//           <div className="mt-8 text-center">
//             <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
//               Prefer Direct Contact?
//             </h2>
//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
//               <a href="mailto:harshavardhanpathivada01@gmail.com" className="btn btn-primary btn-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   style={{ marginRight: '0.5rem' }}
//                 >
//                   <rect width="20" height="16" x="2" y="4" rx="2" />
//                   <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//                 </svg>
//                 Send Email
//               </a>
//               <a href="tel:+918074415157" className="btn btn-outline btn-lg" style={{ borderColor: '#22c55e', color: '#22c55e' }}>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   style={{ marginRight: '0.5rem' }}
//                 >
//                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//                 </svg>
//                 Call Now
//               </a>
//               <a
//                 href="https://www.linkedin.com/in/pathivada-harshavardhan-196aa1275"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn btn-outline btn-lg"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   style={{ marginRight: '0.5rem' }}
//                 >
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//                   <rect width="4" height="12" x="2" y="9" />
//                   <circle cx="4" cy="4" r="2" />
//                 </svg>
//                 LinkedIn
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }