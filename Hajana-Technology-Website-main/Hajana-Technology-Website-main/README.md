# Hajana Technology Website

![Hajana Technologies](https://via.placeholder.com/150)

A modern, AI & Salesforce-focused corporate website built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed to be interactive, responsive, and visually appealing.

---

## Features

- Fully **responsive** design with mobile-first approach
- **AI-powered interactive ChatBot** for customer engagement
- Stunning **hero section** with animated backgrounds
- Modern **contact form** with API integration
- Smooth animations with **Framer Motion**
- Modular components for **easy maintenance**
- SEO-friendly, including **sitemap and metadata**
- Rate-limiting and security headers for API routes

---

## Folder Structure
```
src/
├─ components/
│  ├─ ai-effects/
│  │  ├─ CircuitPattern.tsx
│  │  ├─ NeuralNetworkBackground.tsx
│  │  └─ ParticleField.tsx
│  ├─ interactive/
│  │  └─ ChatBot.tsx
│  ├─ sections/
│  │  ├─ ContactSection.tsx
│  │  ├─ HeroSection.tsx
│  │  └─ ServicesSection.tsx
│  └─ ui/
│     ├─ button.tsx
│     ├─ card.tsx
│     ├─ input.tsx
│     └─ textarea.tsx
├─ pages/
│  ├─ api/
│  │  ├─ chat.ts
│  │  └─ contact.ts
│  ├─ _app.tsx
│  ├─ page.tsx
│  └─ sitemap.ts
├─ hooks/
│  └─ useIsMobile.ts
├─ styles/
│  └─ global.css
└─ middleware.ts
```
---

## Tech Stack

- **Framework:** Next.js 13 (App Router)  
- **Language:** TypeScript  
- **Styling:** Tailwind CSS + Custom Components  
- **Animation:** Framer Motion  
- **State Management:** React Hooks  
- **Backend:** Next.js API Routes  
- **Deployment Ready:** AWS / Vercel

---

## Getting Started

1. Clone the repository:

git clone https://github.com/SrihariRamesh/Hajana-Technology-Website.git
cd Hajana-Technology-Website

2. Install dependencies:

npm install

3. Run the development server:

npm run dev

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

- Can be deployed on **Vercel**, **AWS Amplify**, or any platform supporting **Next.js**.

---

## ChatBot

- **Lazy-loaded** for performance
- Integrates with `/api/chat`
- Maintains session IDs for conversations
- Handles errors and loading states gracefully

---

## Security & Middleware

- Rate limiting applied per IP for `/api/contact` and `/api/chat`
- Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
- CORS headers for API routes

---

## API Routes

- `/api/contact` — Handles contact form submissions  
- `/api/chat` — Handles chatbot interactions

---

## Notes

- **Home Page:** Minimal contact section with CTA, animated hero, stats, and AI effects  
- **Contact Page:** Full-featured contact form, company info, social media links  
- **Mobile:** Fully responsive with `useIsMobile` hook

---

## Contact

- Email: `info@hajanatechnologies.com`  
- Phone: `+1 (669) 235-6845`

---

## License

MIT License