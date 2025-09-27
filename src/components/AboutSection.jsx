const AboutSection = () => {
    return (
      <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold relative inline-block">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-400 transform -translate-y-2"></span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Get to know more about me and my journey as a developer
            </p>
          </div>
  
          <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/Profile1.jpg"
                alt="About Me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
                      
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-semibold mb-4">
                Front-end Developer based in Chicago
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Hello! I'm John, a passionate front-end developer with 4 years of experience creating stunning web applications. I specialize in React and modern JavaScript frameworks, turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                My journey in web development began during college when I built my first portfolio website. Since then, I've worked with agencies and startups to create user-friendly interfaces that help businesses grow.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  <span className="font-medium">Name:</span>
                  <span className="text-gray-600 dark:text-gray-400">John Smith</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  <span className="font-medium">Email:</span>
                  <span className="text-gray-600 dark:text-gray-400">john@example.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  <span className="font-medium">Phone:</span>
                  <span className="text-gray-600 dark:text-gray-400">(123) 456-7890</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full"></div>
                  <span className="font-medium">Location:</span>
                  <span className="text-gray-600 dark:text-gray-400">Chicago, IL</span>
                </div>
              </div>
              
              <a 
                href="/resume.pdf" 
                className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl"
                target="_blank"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default AboutSection