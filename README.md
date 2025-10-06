# 🎨 Interactive Portfolio Website

An interactive, modern portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

### 🎯 Single Page Application (SPA)
- Smooth transitions between sections
- Animated page elements with fade-in/fade-out effects
- Responsive design that works on all devices

### 📁 Organized Folder Structure
The portfolio is organized into logical sections accessible via the sidebar:

#### Professional Info
- **Experience**: Work history and responsibilities
- **Skills**: Technical skills with visual progress bars
- **Certificates**: Professional certifications and achievements

#### Personal Info
- **About Me**: Introduction and background
- **Hobbies**: Personal interests and activities

#### Projects
- **All Projects**: Showcase of completed projects with tags
- **Code Snippets**: Reusable code examples with syntax highlighting

#### Contact
- **Get in Touch**: Interactive contact form and social links

### 🎮 Interactive Game Section
- **Snake Game**: Classic snake game implementation
- Score tracking and high score persistence
- Responsive controls (keyboard + touch buttons)
- Smooth animations and effects

### 💻 Code Snippets with Highlights
- Syntax highlighting using `react-syntax-highlighter`
- Detailed explanations for each snippet
- Star/favorite system for snippets
- Tags for easy categorization

### ⭐ Interactive Features
- Hover effects on cards and buttons
- Smooth animations with Framer Motion
- Progressive loading animations
- Custom scrollbar design
- Gradient text effects

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Code Highlighting**: React Syntax Highlighter

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Personal Information

1. **About Section** (`components/sections/AboutSection.tsx`):
   - Update name, title, location, and bio

2. **Experience Section** (`components/sections/ExperienceSection.tsx`):
   - Add/edit work experience entries

3. **Skills Section** (`components/sections/SkillsSection.tsx`):
   - Update skill levels and categories

4. **Projects Section** (`components/sections/ProjectsSection.tsx`):
   - Add your projects with GitHub and demo links

5. **Contact Section** (`components/sections/ContactSection.tsx`):
   - Update email and social media links

### Customize Colors

The main color scheme uses purple and pink gradients. To change:

1. Open `app/page.tsx` and modify gradient classes
2. Update Tailwind theme in `tailwind.config.ts` for global changes

## 🎨 Components Structure

```
components/
├── Sidebar.tsx              # Navigation sidebar with folder structure
├── MainContent.tsx          # Main content area with section routing
├── GameSection.tsx          # Snake game component
└── sections/
    ├── AboutSection.tsx     # About me information
    ├── ExperienceSection.tsx # Work experience
    ├── SkillsSection.tsx    # Skills with progress bars
    ├── CertificatesSection.tsx # Certifications
    ├── HobbiesSection.tsx   # Personal hobbies
    ├── ProjectsSection.tsx  # Projects showcase
    ├── CodeSnippetsSection.tsx # Code snippets with highlighting
    └── ContactSection.tsx   # Contact form and info
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

Deploy easily to Vercel:
```bash
npm install -g vercel
vercel
```

---

Made with ❤️ using Next.js and Tailwind CSS

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
