import experienceData from '../data/experienceData'

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold relative inline-block">
            Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-400 transform -translate-y-2"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey so far
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-indigo-600 dark:border-indigo-400 pl-8 ml-4">
            {experienceData.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`mb-12 ${index === experienceData.length - 1 ? '' : ''}`}
              >
                <div className="absolute w-4 h-4 bg-indigo-600 dark:bg-indigo-400 rounded-full -left-[9px] mt-1.5"></div>
                <div className="absolute w-8 h-0.5 bg-indigo-600 dark:bg-indigo-400 -left-[5px] mt-3"></div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <h3 className="text-xl font-bold">{exp.position}</h3>
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">{exp.company}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection