# Royal Chai - Premium Landing Page

A luxurious, high-performance landing page for **Royal Chai**, a premium instant tea brand. This project showcases a modern, immersive web experience designed to evoke the elegance of Indian heritage and the richness of authentic spices.



## ✨ Features

- **Immersive Hero Section**: Full-screen hero with a custom-crafted SVG gold crest logo, elegant typography, and smooth entrance animations.
- **Scroll-Triggered Animations**: Utilizing **Framer Motion** for revealing content as the user explores the page.
- **Interactive Flavor Cards**: A showcase of distinct blends (Maharaja Masala, Cardamom Crown, Saffron Sultan) with rich hover effects and premium imagery.
- **Heritage Storytelling**: A dedicated section blending history and visual storytelling.
- **Responsive Design**: Fully optimized for all devices, from mobile to desktop.
- **Performance Optimized**: Built with **Vite** for lightning-fast loading and HMR.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/royal-chai-landing.git
    cd vite-project
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

```
vite-project/
├── public/
│   ├── images/          # Premium assets (logos, flavor images)
│   └── vite.svg
├── src/
│   ├── components/      # Modular UI components
│   │   ├── Features.tsx
│   │   ├── Flavors.tsx
│   │   ├── Heritage.tsx
│   │   ├── Hero.tsx
│   │   └── Newsletter.tsx
│   ├── App.tsx          # Main application layout
│   ├── index.css        # Global styles & Tailwind configuration
│   └── main.tsx         # Entry point
├── index.html
├── package.json
└── vite.config.ts
```

## 🎨 Customization

-   **Colors**: The project uses a custom CSS variable system for its royal palette. Check `src/index.css` to modify the Gold (`#D4AF37`) and Brown (`#1A0F0A`) themes.
-   **Images**: Replace assets in `public/images/` to update product visuals.


