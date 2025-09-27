import { useState } from 'react'

const ContactSection = ({ isMobile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formErrors, setFormErrors] = useState({})
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  })
  
  const validateForm = () => {
    const errors = {}
    
    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address'
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required'
    }
    
    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate form
    if (!validateForm()) {
      return
    }
    
    // Simulate form submission with async behavior
    setFormStatus({
      submitted: true,
      success: false,
      message: 'Sending message...'
    })
    
    // Simulated API call
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: 'Your message has been sent successfully! I will get back to you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        })
      }, 5000)
    }, 1500)
  }

  return (
    <section 
      id="contact" 
      className={`
        py-20 bg-gray-100 dark:bg-gray-800 
        ${isMobile ? 'px-4' : 'px-0'}
      `}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold relative inline-block">
            Contact Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-400 transform -translate-y-2"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Get in touch for opportunities or just to say hi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  ),
                  title: 'Email',
                  content: 'john@example.com'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  ),
                  title: 'Phone',
                  content: '(123) 456-7890'
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  ),
                  title: 'Location',
                  content: 'Chicago, IL'
                }
              ].map((contact, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-indigo-100 dark:bg-indigo-900/50 p-3 rounded-full text-indigo-600 dark:text-indigo-400">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{contact.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{contact.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form Column */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { 
                name: 'name', 
                label: 'Full Name', 
                type: 'text', 
                placeholder: 'Your Name' 
              },
              { 
                name: 'email', 
                label: 'Email Address', 
                type: 'email', 
                placeholder: 'you@example.com' 
              },
              { 
                name: 'subject', 
                label: 'Subject', 
                type: 'text', 
                placeholder: 'Email Subject' 
              }
            ].map((field) => (
              <div key={field.name}>
                <label 
                  htmlFor={field.name} 
                  className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {field.label}
                </label>
                <input 
                  type={field.type} 
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`w-full px-4 py-3 rounded-lg border 
                    ${formErrors[field.name] 
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                      : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500'
                    } 
                    bg-white dark:bg-gray-800 
                    text-gray-900 dark:text-gray-100
                    text-sm`}
                />
                {formErrors[field.name] && (
                  <p className="mt-1 text-sm text-red-500">{formErrors[field.name]}</p>
                )}
              </div>
            ))}
            
            <div>
              <label 
                htmlFor="message" 
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea 
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className={`w-full px-4 py-3 rounded-lg border 
                  ${formErrors.message 
                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                    : 'border-gray-300 dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500'
                  } 
                  bg-white dark:bg-gray-800 
                  text-gray-900 dark:text-gray-100
                  text-sm`}
              ></textarea>
              {formErrors.message && (
                <p className="mt-1 text-sm text-red-500">{formErrors.message}</p>
              )}
            </div>
            
            {formStatus.message && (
              <div 
                className={`p-4 rounded-lg text-center text-sm
                  ${formStatus.success 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                  }`}
              >
                {formStatus.message}
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={formStatus.submitted}
              className={`w-full py-3 rounded-lg text-white font-medium transition-colors text-sm
                ${formStatus.submitted 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'
                }`}
            >
              {formStatus.submitted ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection