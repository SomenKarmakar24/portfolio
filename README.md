# ⚡ SOMEN KARMAKAR | Developer Portfolio

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

> A hacker-themed, terminal-inspired developer portfolio built with React. Features Matrix rain background, boot screen glitch animation, GitHub contribution graph, certificates section and a fully functional contact form powered by Formspree.

---

## 🖥️ Live Preview

🌐 [somenkarmaka.me](https://somenkarmaka.me)

---

## ✨ Features

- **Boot Screen Animation** — RGB glitch name reveal on every page load
- **Matrix Binary Rain** — High-performance Canvas API background with Katakana + binary characters
- **Interactive Terminal UI** — Terminal-styled cards, navigation and console elements throughout
- **Mouse Glow Effect** — Radial neon glow that follows the cursor on desktop
- **Live Clock** — Real-time ticking clock in the Hero HUD
- **GitHub Contribution Graph** — Live GitHub calendar with year selector (Latest / 2025 / 2024)
- **About Section** — Personal info, social links and CV download
- **Education Section** — Timeline-style education cards
- **Skills Section** — Animated progress bars per skill category (Frontend / Backend / Tools)
- **Projects Section** — Horizontal cards with thumbnail, tech stack icons and GitHub/live links
- **Certificates Section** — Grid layout with thumbnail, issuer, date and credential verify button
- **Contact Form** — Powered by Formspree — messages land directly in your inbox, works on all devices including mobile
- **CV Download** — Direct PDF download from the About section
- **Fully Responsive** — Mobile-first design with animated full-screen sidebar navigation

---

## 🛠️ Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| React.js | 19 | UI Framework |
| Vite | 7 | Build Tool |
| React Router DOM | 7 | Client-side Routing |
| React Icons | 5 | Icon Library |
| React GitHub Calendar | 5 | GitHub Contribution Graph |
| React Tooltip | 5 | Custom Matrix-styled Tooltip |
| Axios | 1 | HTTP Client |
| @formspree/react | latest | Contact Form Submission |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── Somen.png                   # Favicon
│   ├── Somen_CV.pdf                # CV for download
│   └── CNAME                       # Custom domain config
└── src/
    ├── assets/
    │   ├── css/                    # Component-scoped CSS files
    │   │   ├── About.css
    │   │   ├── Certificate.css
    │   │   ├── Contact.css
    │   │   ├── Education.css
    │   │   ├── Footer.css
    │   │   ├── GitContribution.css
    │   │   ├── Hero.css
    │   │   ├── Interactive_Background.css
    │   │   ├── Navbar.css
    │   │   ├── Project.css
    │   │   ├── Service.css
    │   │   └── Skills.css
    │   └── img/                    # Profile image, project thumbnails, certificates
    ├── components/                 # All UI section components
    │   ├── About.jsx
    │   ├── Certificate.jsx
    │   ├── Components_Import.jsx   # Barrel export for all components
    │   ├── Contact.jsx
    │   ├── Education.jsx
    │   ├── Footer.jsx
    │   ├── GitContribution.jsx
    │   ├── Hero.jsx
    │   ├── Navbar.jsx
    │   ├── Project.jsx
    │   ├── Service.jsx
    │   └── Skills.jsx
    ├── config/
    │   └── api.js                  # Axios instance with env-based base URL
    ├── context/
    │   ├── Parent_API_Context.jsx  # React context definition
    │   ├── Parent_API_Fetch.jsx    # API fetch functions
    │   └── Parent_API_Provider.jsx # Provider with 6-hour localStorage cache
    ├── pages/
    │   └── Home.jsx                # Main single page
    ├── utils/
    │   ├── BootScreen.jsx          # Glitch boot animation
    │   ├── BootScreen.css
    │   ├── Interactive_Background.jsx  # Matrix rain canvas + mouse glow
    │   ├── Scroll_To_Section.jsx   # Smooth scroll helper
    │   └── Typing_Animation.jsx    # Typewriter effect component
    ├── App.jsx
    ├── App.css                     # Global CSS variables and base styles
    └── main.jsx
```

---

## ⚙️ Environment Variables

Create a `.env` file in the `portfolio/` root:

```env
VITE_API_URL_DEVELOPMENT=http://localhost:8000
VITE_API_URL_PRODUCTION=https://your-backend-api.com
```

> The contact form uses **Formspree** and requires no environment variable — the form ID is embedded directly in `Contact.jsx`.

---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/SomenKarmakar24/portfolio.git

# Navigate into the project
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## � Contact Form Setup

The contact form is powered by [Formspree](https://formspree.io) — no backend required.

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and set your notification email
3. Copy your form ID (e.g. `xbdwdlva`)
4. Replace the ID in `src/components/Contact.jsx`:

```jsx
const [state, handleSubmit, reset] = useForm("your-form-id");
```

Works on all devices and custom domains with no approval needed on the free tier (50 submissions/month).

---

## 📦 Deployment

The project is deployed via **GitHub Pages** with a custom domain.

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

- The `public/CNAME` file points to `somenkarmaka.me`
- `vite.config.js` sets `base: '/'` for correct asset paths on the custom domain

---

## 👤 Contact

**Somen Karmakar**

- 🌐 Portfolio: [somenkarmaka.me](https://somenkarmaka.me)
- 💻 GitHub: [github.com/SomenKarmakar24](https://github.com/SomenKarmakar24)
- 💼 LinkedIn: [linkedin.com/in/somen-karmakar-74453724a](https://www.linkedin.com/in/somen-karmakar-74453724a/)
- 📧 Email: somenkarmakar.info2432@gmail.com

---

## 📄 License

This project is licensed under the MIT License.
