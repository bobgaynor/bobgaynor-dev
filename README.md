# bobgaynor.dev - Personal Portfolio

A modern, responsive portfolio website showcasing my skills and projects, with a focus on combining security expertise with machine learning.

**Live Site:** [https://bobgaynor.dev](https://bobgaynor.dev)

---

## Description

Combining security expertise with machine learning to reveal hidden threat patterns and move detection toward predictive intelligence.

---

## Technology Stack

- **Frontend:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (build-time optimized)
- **Hosting:** Firebase Hosting
- **Deployment:** Automated via GitHub Actions
- **Performance:**
  - Optimized bundle size (~207 kB JS, ~17 kB CSS)
  - Build-time CSS extraction and purging
  - Aggressive caching with service workers

---

## Features

- ✨ Modern, responsive design with smooth animations
- 🌙 Dark theme optimized for readability
- 📱 Fully functional mobile navigation
- ⚡ Optimized performance with lazy loading
- 🔒 Security headers (CSP, HSTS, XSS protection)
- ♿ Accessibility-focused with ARIA labels and keyboard navigation
- 🎨 Custom scrollbar and signal animation effects
- 📊 SEO optimized with Open Graph and Twitter Card meta tags

---

## Local Development

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bobgaynor/bobgaynor-dev.git
   cd bobgaynor-dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## Project Structure

```
bobgaynor-dev/
├── components/          # React components
│   ├── About.tsx       # Capabilities section
│   ├── Contact.tsx     # Contact links and footer
│   ├── ErrorBoundary.tsx  # Error handling
│   ├── Hero.tsx        # Landing hero section
│   ├── Navbar.tsx      # Navigation with mobile menu
│   └── Projects.tsx    # Featured projects
├── App.tsx             # Main app component
├── index.tsx           # React entry point
├── index.html          # HTML template
├── index.css           # Global styles and Tailwind
├── constants.ts        # Site content and config
├── types.ts            # TypeScript interfaces
├── vite.config.ts      # Vite configuration
├── tailwind.config.js  # Tailwind theme config
├── tsconfig.json       # TypeScript config
└── firebase.json       # Firebase hosting config
```

---

## Deployment

The site is automatically deployed to Firebase Hosting when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment

If you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy to Firebase (requires Firebase CLI)
firebase deploy --only hosting
```

---

## Performance

| Metric | Value |
|--------|-------|
| Bundle Size (JS) | 207 kB (65 kB gzipped) |
| Bundle Size (CSS) | 17 kB (4 kB gzipped) |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 2.5s |
| Lighthouse Score | 95+ |

---

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

- **Website:** [bobgaynor.dev](https://bobgaynor.dev)
- **Email:** bg@bobgaynor.dev
- **GitHub:** [@bobgaynor](https://github.com/bobgaynor)
- **LinkedIn:** [bobgaynor](https://www.linkedin.com/in/bobgaynor/)
