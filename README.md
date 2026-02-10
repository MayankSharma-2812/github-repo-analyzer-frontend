# GitHub Repo Analyzer - Client

A modern, beautiful frontend for analyzing GitHub repositories with AI-powered insights.

## 🚀 Features

- **Beautiful UI** - Modern glassmorphism design with smooth animations
- **Real-time Analysis** - Instant repository analysis and insights
- **Responsive Design** - Works perfectly on all devices
- **Advanced Animations** - Smooth micro-interactions and transitions
- **Professional Layout** - Clean, intuitive user interface
- **Social Integration** - Connect with developer profiles

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Custom CSS** - Professional styling without frameworks
- **Axios** - HTTP client for API calls

## 📦 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/MayankSharma-2812/github-repo-analyzer.git
cd github-repo-analyzer/client

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=https://your-api-url.com
```

### Deploy to Render

```bash
# Build the application
npm run build

# Deploy dist folder to Render
# Configure build command: npm run build
# Configure output directory: dist
```

### Deploy to Netlify

```bash
# Build and deploy
npm run build
# Deploy dist folder to Netlify
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 🎨 Customization

### Colors

Edit `src/index.css` to customize the color scheme:

```css
:root {
  --primary-gradient-start: #667eea;
  --primary-gradient-end: #764ba2;
  --secondary-gradient-start: #f093fb;
  --secondary-gradient-end: #f5576c;
  /* ... more variables */
}
```

### Animations

Animation classes are available in `src/index.css`:

- `.fade-in` - Smooth fade in effect
- `.slide-up` - Slide up from bottom
- `.slide-in-left` - Slide in from left
- `.slide-in-right` - Slide in from right
- `.scale-in` - Scale up from center
- `.floating` - Continuous floating animation

## 📁 Project Structure

```
client/
├── public/                 # Static assets
│   ├── manifest.json       # PWA manifest
│   ├── index.html         # HTML template
│   ├── browserconfig.xml   # IE configuration
│   └── favicon.ico        # Site icons
├── src/
│   ├── components/         # React components
│   │   ├── RepoCard.tsx
│   │   ├── TechBadge.tsx
│   │   ├── MetricCard.tsx
│   │   └── InsightList.tsx
│   ├── services/          # API services
│   │   └── api.ts
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── package.json           # Dependencies
└── README.md            # This file
```

## 🔧 Configuration

### Vite Config

The `vite.config.ts` file includes:

- Path aliases for clean imports
- Build optimizations
- Development server settings

### TypeScript Config

Strict TypeScript configuration with:

- React 19 types
- Modern ES features
- Path resolution

## 📱 PWA Features

The application includes Progressive Web App features:

- **Offline Support** - Service worker ready
- **Installable** - Add to home screen
- **Responsive** - Works on all devices
- **Fast Loading** - Optimized assets

## 🚀 Performance

- **Bundle Size** - Optimized for fast loading
- **Code Splitting** - Lazy loaded components
- **Asset Optimization** - Compressed images and CSS
- **Caching** - Proper cache headers

## 🔍 SEO Optimization

- **Meta Tags** - Complete Open Graph and Twitter cards
- **Structured Data** - Rich snippets support
- **Sitemap** - Search engine friendly
- **Fast Loading** - Core Web Vitals optimized

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 👨‍💻 Author

**Mayank Sharma**

- GitHub: [@MayankSharma-2812](https://github.com/MayankSharma-2812)
- LinkedIn: [Mayank Sharma](https://www.linkedin.com/in/mayank-sharma-7b277b312)
- Portfolio: [Your Portfolio](https://your-portfolio.com)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the build tool
- GitHub API for repository data
- All contributors and users

---

**Built with ❤️ by [Mayank Sharma](https://github.com/MayankSharma-2812)**
