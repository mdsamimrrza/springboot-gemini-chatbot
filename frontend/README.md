# 🌟 AI Chatbot Frontend

<div align="center">
  <h1>Modern React Chat Interface</h1>
  <p>Built with React 19, Vite, Tailwind CSS, and Framer Motion</p>
  
  [![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
</div>

## ✨ Features

- **⚡ Blazing Fast** - Built with Vite for instant hot module replacement (HMR)
- **🎨 Beautiful UI** - Modern, responsive design with Tailwind CSS
- **🤖 AI Integration** - Seamless connection to the AI Chatbot backend
- **📱 Responsive** - Works flawlessly on all device sizes
- **🎭 Smooth Animations** - Powered by Framer Motion
- **📝 Markdown Support** - Renders AI responses with proper formatting

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm (comes with Node.js) or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo/frontend
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 🛠️ Build for Production

```bash
# Build the app for production
npm run build

# Preview the production build
npm run preview
```

## 🎨 Tech Stack

- **Framework**: [React 19](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Markdown**: [React Markdown](https://github.com/remarkjs/react-markdown)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```
frontend/
├── public/              # Static files
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── styles/          # Global styles and Tailwind config
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Git ignore file
├── index.html           # Main HTML file
├── package.json         # Project dependencies
├── postcss.config.js    # PostCSS configuration
├── README.md            # Project documentation
└── vite.config.js       # Vite configuration
```

## 🔧 Configuration

Create a `.env` file in the root directory with the following variables:

```env
VITE_API_BASE_URL=http://localhost:8080/api
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for the amazing build tooling
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icons