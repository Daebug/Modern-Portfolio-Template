import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import BlogSection from './components/BlogSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    // Add event listeners
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden">
      <Header isScrolled={isScrolled} isMobile={isMobile} />
      <main className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection isMobile={isMobile} />
        <AboutSection isMobile={isMobile} />
        <ExperienceSection isMobile={isMobile} />
        <SkillsSection isMobile={isMobile} />
        <BlogSection isMobile={isMobile} />
        <ContactSection isMobile={isMobile} />
      </main>
      <Footer />
    </div>
  )
}

export default App