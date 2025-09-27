import Image from 'next/image'
import { useState } from 'react'

const ProfileImage = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 
      rounded-full bg-indigo-200 dark:bg-indigo-900/30 
      overflow-hidden flex items-center justify-center relative"
    >
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center 
          text-indigo-500 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/30">
          Loading...
        </div>
      )}
      <Image 
        src="/images/profile.jpg"
        alt="Your Name"
        fill
        priority
        sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
        className={`object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoadingComplete={() => setImageLoaded(true)}
        onError={() => {
          console.error('Image failed to load')
          setImageLoaded(false)
        }}
      />
    </div>
  )
}

export default ProfileImage