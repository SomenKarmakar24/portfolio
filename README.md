# ⚡ SOMEN KARMAKAR | Developer Portfolio

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Django](https://img.shields.io/badge/Django-6.0-092E20?style=for-the-badge&logo=django&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

> A hacker-themed, terminal-inspired developer portfolio built with React and Django REST Framework. Features Matrix rain background, boot screen animation, GitHub contribution graph, and a fully functional contact form.

---

## 🖥️ Live Preview

🌐 [somenkarmakar.me](https://somenkarmakar.me) *(coming soon)*

---

## ✨ Features

- **Boot Screen Animation** — Matrix rain + RGB glitch intro on page load
- **Matrix Binary Rain** — High-performance Canvas API background
- **Interactive Terminal UI** — Terminal-styled cards, navigation and console elements
- **Live Clock** — Real-time ticking clock in the Hero HUD
- **GitHub Contribution Graph** — Live GitHub calendar with year selector
- **Education Section** — Timeline-style education cards
- **Skills Section** — Animated progress bars per skill category
- **Projects Section** — Horizontal cards with thumbnail, tech stack icons and GitHub/live links
- **Certificates Section** — Grid layout with thumbnail, issuer, date and verify button
- **Contact Form** — Integrated with Web3Forms — messages land directly in your inbox
- **CV Download** — Direct PDF download from the About section
- **Fully Responsive** — Mobile-first design with sidebar navigation

---

## 🛠️ Tech Stack

### Frontend
| Tech | Version |
|------|---------|
| React.js | 19 |
| Vite | 7 |
| React Router DOM | 7 |
| React Icons | 5 |
| React GitHub Calendar | 5 |
| React Tooltip | 5 |
| Axios | 1.13 |

### Backend
| Tech | Version |
|------|---------|
| Django | 6.0 |
| Django REST Framework | 3.16 |
| Django CORS Headers | 4.9 |
| Cloudinary | 1.44 |
| dj-database-url | 3.0 |
| Gunicorn | 23.0 |
| WhiteNoise | 6.11 |

---

## 📁 Project Structure

```
portfolio/
├── Frontend/
│   ├── public/
│   │   ├── Somen.png           # Favicon
│   │   └── Somen_CV.pdf        # CV for download
│   └── src/
│       ├── assets/
│       │   ├── css/            # Component-scoped CSS files
│       │   └── img/            # Profile image, thumbnails, certificates
│       ├── components/         # All UI components
│       ├── context/            # API context & provider
│       ├── pages/              # Home page
│       ├── routes/             # Route definitions
│       └── utils/              # BootScreen, Background, Typing animation
└── Backend/
    ├── Home/                   # Projects, Skills, CV models & API
    ├── Email/                  # Contact form model
    ├── api/                    # URL routing
    └── Backend/                # Django settings
```

---

## ⚙️ Environment Variables

### `Frontend/.env`
```env
VITE_EMAIL_ACCESS_KEY=your-web3forms-access-key
VITE_API_URL_PRODUCTION=https://your-backend-host-url
VITE_API_URL_DEVELOPMENT=http://127.0.0.1:8000
```

### `Backend/.env`
```env
SECRET_KEY=your-django-secret-key
DEBUG=False
ALLOWED_HOSTS=*
PRODUCTION_DATABASE_URL=your-production-database-url
DEVELOPMENT_DATABASE_URL=your-development-database-url
CLOUD_NAME=your-cloudinary-name
CLOUD_API_KEY=your-cloudinary-api-key
CLOUD_API_SECRET=your-cloudinary-api-secret
```

---

## 🚀 Installation & Setup

### Frontend
```bash
cd Frontend
npm install
npm run dev
```

### Backend
```bash
cd Backend
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

---

## 📦 Deployment

- **Frontend** → [Vercel](https://vercel.com)
- **Backend** → [Render](https://render.com)
- **Database** → [Neon](https://neon.tech) / [Supabase](https://supabase.com)
- **Media Storage** → [Cloudinary](https://cloudinary.com)

---

## 👤 Contact

**Somen Karmakar**

- 🌐 Portfolio: [somenkarmakar.me](https://somenkarmakar.me)
- 💻 GitHub: [github.com/SomenKarmakar24](https://github.com/SomenKarmakar24)
- 💼 LinkedIn: [linkedin.com/in/somen-karmakar-74453724a](https://www.linkedin.com/in/somen-karmakar-74453724a/)
- 📧 Email: somenkarmakar.info2432@gmail.com

---

## 📄 License

This project is licensed under the MIT License.
