# Alex Philip James - Developer Portfolio

A modern, responsive developer portfolio built with React, TypeScript, and Tailwind CSS. Features a beautiful dark/light mode toggle and modern UI components.

## 🚀 Features

- **Modern UI/UX**: Built with Radix UI components and Tailwind CSS
- **Dark/Light Mode**: Smooth theme switching with system preference detection
- **Responsive Design**: Mobile-first approach with beautiful animations
- **TypeScript**: Full type safety throughout the application
- **Performance**: Optimized with Vite and React Query

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, Framer Motion
- **Build Tool**: Vite
- **State Management**: React Query
- **Styling**: Tailwind CSS with custom animations

## 📁 Project Structure

```
alexphilipjames/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                 # Express.js backend (if needed)
├── shared/                 # Shared types and schemas
└── attached_assets/        # Static assets
```

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Fork/Clone** this repository
2. **Enable GitHub Pages** in your repository settings
3. **Set source** to "GitHub Actions"
4. **Push to main branch** - automatic deployment will trigger

### Manual Deployment

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy dist/ folder to your hosting service
```

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database (if using backend)
DATABASE_URL=your_database_url_here

# Build environment
NODE_ENV=production
```

## 🔒 Security

- ✅ No hardcoded secrets or API keys
- ✅ Environment variables properly configured
- ✅ Dependencies from trusted sources
- ✅ Modern security practices

## 📱 Customization

### Colors & Themes
Edit `tailwind.config.ts` to customize your color scheme and design tokens.

### Components
All components are in `client/src/components/` and can be easily modified.

### Content
Update the content in each component file to match your information.

## 🐛 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run check
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using modern web technologies 2025
