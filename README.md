# 🔥 YOTTA FORGE PORTFOLIO

> **Software and hardware, built together**

A modern, responsive portfolio website for Yotta Forge — a software and embedded/hardware development company. Built with React, Vite, and TailwindCSS featuring a "Molten Forge" industrial-tech aesthetic.

---

## ⚡ Features

- **🎨 Molten Forge Theme**: Dark charcoal background with ember orange accents and steel silver highlights
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **✨ Smooth Animations**: One-time scroll-triggered animations and interactive hover effects
- **🔧 Interactive Components**: Floating labels in contact form, spark glow effects on hover
- **🚀 Fast Performance**: Minimal dependencies, optimized load times
- **🎯 Single Page Design**: Seamless navigation with smooth scrolling

---

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Google Fonts** - Oswald (headings) & Inter (body)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yottaforgeofficial/Yotta-Forge-Portfolio.git

# Navigate to project directory
cd Yotta-Forge-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🚀 Deployment

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Theme Configuration

The color palette is defined in `tailwind.config.js`:

```javascript
colors: {
  charcoal: {
    950: '#0d0d0d',  // Deepest background
    900: '#1a1a1a',  // Main background
    800: '#2b2b2b',  // Secondary background
    700: '#3d3d3d',  // Borders
  },
  ember: {
    500: '#ff5722',  // Primary accent
    600: '#e64a19',  // Hover state
    400: '#ff7043',  // Light accent
  },
  steel: {
    500: '#c0c0c0',  // Secondary accent
    400: '#9e9e9e',  // Muted text
  },
  offwhite: '#f5f5f5',  // Primary text
}
```

---

## 📁 Project Structure

```
Yotta-Forge-Portfolio/
├── public/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

---

## 🎯 Sections

1. **Hero** - Company name, positioning statement, and CTA
2. **What We Do** - Service cards (Custom Software, Embedded Systems, IoT, Automation)
3. **What We Can Build** - Capability showcase with demo projects
4. **Why Yotta Forge** - Trust points and differentiators
5. **Let's Talk** - Contact form with floating labels

---

## 🔧 Customization

### Updating Contact Information

Edit contact details in `src/App.jsx`:

```javascript
// Email (line ~281)
<a href="mailto:yottaforgeofficial@gmail.com">

// LinkedIn (line ~286)
<a href="https://www.linkedin.com/in/yottaforge/">
```

### Modifying Content

All section content is in `src/App.jsx`. Look for these sections:
- Services (line ~88)
- Capabilities (line ~134)
- Why Us (line ~187)

---

## 📄 License

© 2024 Yotta Forge. All rights reserved.

---

## 📞 Contact

- **Email**: yottaforgeofficial@gmail.com
- **LinkedIn**: [yottaforge](https://www.linkedin.com/in/yottaforge/)

---

<div align="center">

**Built with 🔥 by Yotta Forge**

</div>
