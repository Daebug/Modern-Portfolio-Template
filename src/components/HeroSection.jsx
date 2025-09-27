const HeroSection = ({ isMobile }) => {
  return (
    <section 
      id="home" 
      className={`
        pt-32 pb-20 
        ${isMobile ? 'px-4' : 'px-0'}
        md:pt-40 md:pb-32 
        flex items-center justify-center
      `}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <span className="text-indigo-600 dark:text-indigo-400 font-medium mb-2 block text-sm sm:text-base">
              👋 Hello, my name is
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              John Smith
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-medium mb-6">
              Front-end Developer & UI Designer
            </h2>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
              I craft responsive websites where technology meets creativity. With 4 years of experience in web development.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-6 sm:px-8 py-2 sm:py-3 
                  bg-indigo-600 hover:bg-indigo-700 
                  text-white font-medium rounded-lg 
                  transition-colors shadow-lg hover:shadow-xl 
                  text-sm sm:text-base"
              >
                Contact Me
              </a>
              <a 
                href="#portfolio" 
                className="px-6 sm:px-8 py-2 sm:py-3 
                  border-2 border-indigo-600 dark:border-indigo-400 
                  text-indigo-600 dark:text-indigo-400 
                  font-medium rounded-lg 
                  hover:bg-indigo-600 hover:text-white 
                  transition-colors 
                  text-sm sm:text-base"
              >
                View Work
              </a>
            </div>
          </div>
          <div className="md:w-2/5 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 
              rounded-full bg-indigo-200 dark:bg-indigo-900/30 
              overflow-hidden flex items-center justify-center relative">
              <img 
                src="/Profile.jpg"  // Make sure to place your profile image in the public directory
                alt="Dion Cedrick"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            </div>
              <div className="absolute -top-6 -right-6 
                w-24 h-24 sm:w-32 sm:h-32 
                bg-indigo-400/20 dark:bg-indigo-400/10 
                rounded-full z-0"></div>
              <div className="absolute -bottom-6 -left-6 
                w-20 h-20 sm:w-24 sm:h-24 
                bg-cyan-400/20 dark:bg-cyan-400/10 
                rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection