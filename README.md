# ⚡ SOMEN KARMAKAR | Developer Portfolio

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

> A hacker-themed, terminal-inspired developer portfolio built with React. Features Matrix rain background, boot screen glitch animation, GitHub contribution graph, certificates section and a fully functional contact form.

---

## 🖥️ Live Preview

🌐 [somenkarmaka.me](https://somenkarmaka.me) *(coming soon)*

---

## ✨ Features

- **Boot Screen Animation** — Matrix rain canvas + RGB glitch intro on page load
- **Matrix Binary Rain** — High-performance Canvas API background
- **Interactive Terminal UI** — Terminal-styled cards, navigation and console elements
- **Live Clock** — Real-time ticking clock in the Hero HUD
- **GitHub Contribution Graph** — Live GitHub calendar with year selector
- **About Section** — Personal info, social links and CV download
- **Education Section** — Timeline-style education cards
- **Skills Section** — Animated progress bars per skill category
- **Projects Section** — Horizontal cards with thumbnail, tech stack icons and GitHub/live links
- **Certificates Section** — Grid layout with thumbnail, issuer, date and verify button
- **Contact Form** — Integrated with Web3Forms — messages land directly in your inbox
- **CV Download** — Direct PDF download from the About section
- **Fully Responsive** — Mobile-first design with animated sidebar navigation

---

## 🛠️ Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| React.js | 19 | UI Framework |
| Vite | 7 | Build Tool |
| React Router DOM | 7 | Client-side Routing |
| React Icons | 5 | Icon Library |
| React GitHub Calendar | 5 | GitHub Contribution Graph |
| React Tooltip | 5 | Tooltip Component |
| Web3Forms | - | Contact Form Submission |

---

## 📁 Project Structure

```
portfolio/
└── Frontend/
    ├── public/
    │   ├── Somen.png               # Favicon
    │   └── Somen_CV.pdf            # CV for download
    └── src/
        ├── assets/
        │   ├── css/                # Component-scoped CSS files
        │   └── img/                # Profile image, project thumbnail, certificates
        ├── components/             # All UI components
        │   ├── Navbar.jsx
        │   ├── Hero.jsx
        │   ├── GitContribution.jsx
        │   ├── About.jsx
        │   ├── Education.jsx
        │   ├── Skills.jsx
        │   ├── Project.jsx
        │   ├── Certificate.jsx
        │   ├── Contact.jsx
        │   └── Footer.jsx
        ├── pages/
        │   └── Home.jsx            # Main page
        └── utils/
            ├── BootScreen.jsx      # Glitch boot animation
            ├── Interactive_Background.jsx  # Matrix rain canvas
            ├── Typing_Animation.jsx
            └── Scroll_To_Section.jsx
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `Frontend/` folder:

```env
VITE_EMAIL_ACCESS_KEY=your-web3forms-access-key
```

> Get your free access key at [web3forms.com](https://web3forms.com)

---

## 🚀 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/SomenKarmakar24/portfolio.git

# Navigate to Frontend
cd portfolio/Frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📦 Deployment

- **Frontend** → [GitHub Pages](https://pages.github.com) / [Vercel](https://vercel.com) / [Netlify](https://netlify.com)

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
