# Modern Portfolio Template

A clean, responsive portfolio website template built with React, Vite, and Tailwind CSS. This template provides a professional foundation for showcasing your skills, experience, and projects.

## ✨ Features

- **Modern Design**: Clean and professional layout with dark/light mode support
- **Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Fast Loading**: Built with Vite for lightning-fast development and build times
- **Component-Based**: Modular React components for easy customization
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **Interactive Sections**: Smooth scrolling and dynamic interactions
- **Easy to Customize**: Well-structured data files for quick content updates

## 🏗️ Built With

- [React](https://reactjs.org/) - Frontend library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [ESLint](https://eslint.org/) - Code linting and formatting

## 📁 Project Structure

```
portfolio-template/
├── public/
│   ├── Profile.jpg          # Profile images
│   └── Profile1.jpg
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── HeroSection.jsx  # Landing/intro section
│   │   ├── AboutSection.jsx # About me section
│   │   ├── ExperienceSection.jsx # Work experience
│   │   ├── SkillsSection.jsx # Skills showcase
│   │   ├── BlogSection.jsx  # Blog posts section
│   │   ├── ContactSection.jsx # Contact form
│   │   ├── Footer.jsx       # Footer component
│   │   └── ProfileImage.jsx # Profile image component
│   ├── data/
│   │   ├── skillsData.js    # Skills data configuration
│   │   ├── experienceData.js # Experience data
│   │   └── blogData.js      # Blog posts data
│   ├── App.jsx              # Main application component
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download this template**

   ```bash
   git clone <repository-url>
   cd tailwind-css-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see your portfolio

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Customization

### 1. Personal Information

Update the content in each component file to reflect your personal information:

- Hero section text in `src/components/HeroSection.jsx`
- About section in `src/components/AboutSection.jsx`
- Contact information in `src/components/ContactSection.jsx`

### 2. Skills

Modify `src/data/skillsData.js` to add/remove/update your skills:

```javascript
{
  id: 1,
  name: 'React',
  icon: '⚛️',
  level: 90,
  category: 'frontend'
}
```

### 3. Experience

Update `src/data/experienceData.js` with your work experience and projects.

### 4. Blog Posts

Edit `src/data/blogData.js` to showcase your articles or projects.

### 5. Profile Images

Replace the profile images in the `public/` directory with your own photos:

- `Profile.jpg` - Main profile image
- `Profile1.jpg` - Alternative profile image

### 6. Styling

The template uses Tailwind CSS classes. You can:

- Modify existing component styles
- Add custom CSS in `src/index.css`
- Extend Tailwind configuration if needed

## 📱 Responsive Design

The template is fully responsive and includes:

- Mobile-first approach
- Flexible grid layouts
- Adaptive navigation
- Optimized typography scaling
- Touch-friendly interactions

## 🎯 Sections Included

1. **Header** - Navigation with smooth scrolling links
2. **Hero** - Introduction and call-to-action
3. **About** - Personal description and background
4. **Experience** - Work history and achievements
5. **Skills** - Technical skills with proficiency levels
6. **Blog** - Articles, projects, or case studies
7. **Contact** - Contact form and social links
8. **Footer** - Additional links and information

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service like:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Firebase Hosting
