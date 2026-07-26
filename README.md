# SRIMATH Builder

Official website for **SRIMATH Builder**, designed and developed as a modern, responsive web platform to showcase the company's services, projects, and brand presence.

The application is built with **Next.js** and **Supabase**, with deployment and hosting managed through **Vercel**.

---

## 🏗️ Overview

The **SRIMATH Builder** website provides a modern digital presence for the company with a focus on performance, responsive design, smooth user experience, and maintainability.

The project uses a modern web development stack and is structured to support future enhancements and additional business requirements.

---

## 🚀 Tech Stack

- **Next.js** — React framework for the frontend application
- **React** — Component-based user interface development
- **TypeScript** — Type-safe application development
- **Tailwind CSS** — Responsive styling and UI design
- **Supabase** — Backend services and PostgreSQL database
- **Vercel** — Hosting, deployment, and CI/CD
- **GitHub** — Source code and version control

---

## ✨ Features

- Modern and responsive user interface
- Mobile, tablet, and desktop support
- Optimized website performance
- Reusable component architecture
- Dynamic content integration
- Supabase backend integration
- SEO-friendly Next.js architecture
- Smooth animations and interactions
- Production deployment through Vercel

---

## 🛠️ Getting Started

### Prerequisites

Make sure the following are installed on your development machine:

- Node.js
- npm
- Git

You can verify the installations using:

```bash
node --version
npm --version
git --version
```

---

### Clone the Repository

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd srimath-builder
```

---

### Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory of the project.

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Additional environment variables can be added depending on the application's requirements.

### Important

Never commit sensitive information such as:

- `.env.local`
- Database credentials
- Passwords
- API secrets
- Supabase service-role keys
- Other private credentials

Make sure `.env.local` is included in `.gitignore`.

```gitignore
.env
.env.local
.env*.local
```

---

## 💻 Running Locally

Start the development server:

```bash
npm run dev
```

The application will typically be available at:

```text
http://localhost:3000
```

---

## 📦 Production Build

Create an optimized production build:

```bash
npm run build
```

Run the production build locally:

```bash
npm start
```

---

## ▲ Deployment

The application is deployed using **Vercel**.

### Deployment Workflow

```text
Development
     ↓
Git Commit
     ↓
GitHub Repository
     ↓
Vercel
     ↓
Production Website
```

Vercel can automatically create a new deployment whenever changes are pushed to the configured production branch.

### Vercel Environment Variables

Environment variables required by the application should be configured in:

```text
Vercel
→ Project
→ Settings
→ Environment Variables
```

Do not commit production credentials directly to the repository.

---

## 🗄️ Supabase

**Supabase** is used to provide backend services required by the application.

Depending on the project's requirements, Supabase can provide:

- PostgreSQL database
- Authentication
- Storage
- REST APIs
- Row Level Security (RLS)
- Server-side functionality

### Supabase Security

Database access should follow appropriate security policies.

For tables exposed through the Supabase API, **Row Level Security (RLS)** should be configured appropriately.

Privileged credentials such as the Supabase `service_role` key must never be exposed in client-side/browser code.

---

## 🌿 Branching Strategy

The production branch is:

```text
main
```

Development work can use separate branches based on the feature or task.

Examples:

```text
feature/home-page
feature/about-page
feature/projects
feature/contact-form
feature/admin-dashboard

fix/mobile-navigation
fix/responsive-layout
fix/contact-form
```

A typical development workflow is:

```text
feature branch
      ↓
development & testing
      ↓
pull request
      ↓
code review
      ↓
main
      ↓
Vercel production deployment
```

---

## 👨‍💻 Development Guidelines

When contributing to this project:

1. Pull the latest changes before starting development.
2. Create a separate feature or fix branch when appropriate.
3. Keep components reusable and maintainable.
4. Follow the existing project structure and coding conventions.
5. Use TypeScript types wherever appropriate.
6. Test responsive layouts across different screen sizes.
7. Test changes locally before committing.
8. Never commit credentials or environment files.
9. Verify the production build before deployment.

Before pushing major changes, run:

```bash
npm run build
```

---

## 🔒 Security

The following security practices should be followed throughout the project:

- Never expose private credentials in frontend code.
- Never commit `.env.local`.
- Keep Supabase Row Level Security enabled where appropriate.
- Configure database policies carefully.
- Never expose Supabase `service_role` keys to the browser.
- Store production secrets using Vercel Environment Variables.
- Keep project dependencies updated.
- Review access permissions for GitHub, Supabase, and Vercel.

---

## 🔄 Version Control

Git is used for source-code version control, and the project is maintained in a private GitHub repository.

Example workflow:

```bash
git checkout -b feature/example-feature

git add .

git commit -m "feat: add example feature"

git push origin feature/example-feature
```

---

## 📌 Project Status

> 🚧 **Active Development**

The website is currently under active development.

Features, content, design, and functionality may continue to evolve based on **SRIMATH Builder's** requirements.

---

## 📄 License & Usage

This repository contains source code developed for **SRIMATH Builder**.

The project is intended for authorized use associated with the SRIMATH Builder website.

The source code should not be copied, redistributed, published, sublicensed, or reused for unrelated commercial projects without permission from the applicable rights holder.

This project is **not distributed under an open-source license**.

---

## © Copyright

Copyright © 2026 **SRIMATH Builder**.

All rights reserved.

---

## 🤝 Client

**SRIMATH Builder**

Official business website developed to establish and enhance the company's digital presence.

---

## 📬 Support & Maintenance

For website updates, technical maintenance, bug fixes, or additional feature requirements, contact the project administrator/development team.

---

<p align="center">
  <strong>SRIMATH Builder</strong>
</p>

<p align="center">
  Building a modern digital presence with modern web technologies.
</p>
