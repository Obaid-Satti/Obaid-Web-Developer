# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring stunning animations and interactive elements.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and glassmorphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations, hover effects, and dynamic content
- **TypeScript**: Type-safe development with excellent developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Component Library**: Built with shadcn/ui components for consistency

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone or download the project files**
   ```bash
   # If cloning from git
   git clone [your-repository-url]
   cd portfolio-website
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
   - Navigate to `http://localhost:5173`
   - The site should automatically reload when you make changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons

## 📁 Project Structure

```
├── components/                 # React components
│   ├── ui/                    # shadcn/ui components
│   ├── figma/                 # Image components
│   ├── Header.tsx             # Navigation header
│   ├── Hero.tsx               # Hero section
│   ├── About.tsx              # About section
│   ├── Skills.tsx             # Skills showcase
│   ├── Projects.tsx           # Project portfolio
│   └── Contact.tsx            # Contact form
├── styles/
│   └── globals.css            # Global styles and Tailwind config
├── App.tsx                    # Main app component
├── main.tsx                   # App entry point
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── vite.config.ts             # Vite configuration
└── README.md                  # This file
```

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Name, role, description
- `components/About.tsx` - Bio, stats, timeline, profile image
- `components/Skills.tsx` - Technologies and skill levels
- `components/Projects.tsx` - Project data and images
- `components/Contact.tsx` - Contact information and social links

### Styling
- Modify `styles/globals.css` for color scheme and design tokens
- Update component classes for layout and styling changes
- Add custom animations in the CSS file

### Profile Picture
Replace the placeholder image URL in `components/About.tsx`:
```tsx
<ImageWithFallback
  src="YOUR_PROFILE_IMAGE_URL"
  alt="Your Name - Your Title"
  className="w-full h-full object-cover"
/>
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   - Try a different port: `npm run dev -- --port 3001`

2. **Dependencies not installing**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again

3. **TypeScript errors**
   - Make sure all imports are correct
   - Check that all referenced files exist

4. **Styling not applied**
   - Ensure Tailwind CSS is properly configured
   - Check that `styles/globals.css` is imported in `main.tsx`

### VS Code Setup

For the best development experience:

1. **Install recommended extensions:**
   - TypeScript and JavaScript Language Features (built-in)
   - Tailwind CSS IntelliSense
   - ES7+ React/Redux/React-Native snippets
   - Auto Rename Tag
   - Prettier - Code formatter

2. **Configure VS Code settings:**
   Create `.vscode/settings.json`:
   ```json
   {
     "typescript.preferences.importModuleSpecifier": "relative",
     "typescript.suggest.autoImports": true,
     "editor.formatOnSave": true,
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```

## 📝 License

This project is for personal use. Feel free to use it as a template for your own portfolio.

## 🤝 Contributing

If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS