import { useState } from 'react'
import blogData from '../data/blogData'

const BlogSection = () => {
  const [visiblePosts, setVisiblePosts] = useState(3)

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 3)
  }

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold relative inline-block">
            Tech Blog
            <span className="absolute bottom-0 left-0 w-full h-1 bg-indigo-600 dark:bg-indigo-400 transform -translate-y-2"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogData.slice(0, visiblePosts).map(post => (
            <article 
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                    {post.category} Blog
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-xs">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 
                  text-gray-800 dark:text-gray-200 
                  group-hover:text-indigo-600 dark:group-hover:text-indigo-400 
                  transition-colors duration-300"
                >
                  <a href={`/blog/${post.slug}`}>{post.title}</a>
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                        {post.author.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {post.author}
                    </span>
                  </div>
                  
                  <a 
                    href={`/blog/${post.slug}`}
                    className="text-indigo-600 dark:text-indigo-400 
                      font-medium hover:underline 
                      inline-flex items-center group"
                  >
                    Read More
                    <svg 
                      className="w-4 h-4 ml-1 
                        group-hover:translate-x-1 
                        transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {visiblePosts < blogData.length && (
          <div className="text-center mt-12">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-3 
                bg-indigo-600 hover:bg-indigo-700 
                text-white font-medium 
                rounded-lg transition-colors 
                shadow-lg hover:shadow-xl"
            >
              Load More Posts
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogSection