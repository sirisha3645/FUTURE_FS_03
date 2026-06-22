# Saanvi Bridal & Beauty Studio 🌸✨
### Task 3: Local Business Website & Live Pitch Project
**Full-Stack Web Development Internship at Future Interns**

---

## 🌐 Project Overview
**Saanvi Bridal & Beauty Studio** is a premium, fully-featured, and highly-immersive digital platform tailored for an elite luxury Indian beauty salon and bridal studio located in Hyderabad, India. 

Designed to address real-world local business pain points, this solution enables the salon owner to capture high-value bridal leads, automate booking reservation slots, recommend personalized skincare services through AI, and visualize operational performance via a consolidated backoffice dashboard.

This project was built to satisfy **Task 3 of the Future Interns Full-Stack Web Development Internship**, serving as a live demo and business pitch to demonstrate how a professionally engineered web presence directly accelerates lead conversions, booking volume, and average check sizes.

---

## 🚀 Key Features

### 1. Modern Indian Heritage Aesthetic & Premium UI
- **Visual Design**: Styled with a luxury, high-contrast, eye-safe **Champagne-Ivory & Rose-Gold** theme. 
- **Cultural Finishes**: Integrates traditional **Lotus SVG iconography**, bespoke hand-drawn floral dividers, and custom mandala grids.
- **Fluid Experience**: Includes smooth transitions, responsive layouts, modular sliders, and a swipe-ready Instagram Showcase.
- **Dual Visual Modes**: Smooth transition between a professional, elegant **Slate Light Mode** and a deep, luxurious **Glow Dark Mode**.

### 2. Vedic AI Wedding Beauty Quiz (Powered by Google Gemini 🤖)
- **Interactive consultation Engine**: Integrates the state-of-the-art `@google/genai` SDK on the backend server.
- **Bespoke Routine Recommendations**: Takes user profiles (skin type, hair texture, bridal goals, timeline) and returns tailored beauty-prep routines, scheduling advice, and ideal service matches.
- **Offline Resilient Fallback**: Delivers a tailored offline consultation experience if API keys are unconfigured.

### 3. Interactive Premium Cost Estimator & Bundle Calculator
- **Custom Bundle Builder**: Enables brides-to-be to construct personalized bridal bundles (HD Makeup, couture styling, floral hair decoration, organic mehendi, draping).
- **Dynamic Tier Discounting**: Automatically calculates proportional discounts as users build larger bundles to incentivize higher-value bookings.
- **Instant Redirection**: Once a bundle is created, it auto-fills the booking interface for seamless conversions.

### 4. Fully-Featured Client Scheduling & Slot Reservation
- **Dynamic Bookings Engine**: Fully-validated multi-step scheduler featuring customized stylist selections, timeslots, and specialized requests.
- **Client-Side Persistence**: Synchronizes booking data with `localStorage` to ensure a robust, persistent state.

### 5. High-Octane Admin Control Center
- **Key Metric Indicators**: Shows real-time counters for Total Bookings, Month-to-Date Revenue, Pending Confirmations, and Stylist Workloads.
- **Operational Data Widgets**: Includes interactive list elements to approve, confirm, or delete client bookings on the fly.
- **Dynamic Revenue Analytics**: Renders modern analytics charts with `Recharts` to display reservation trends and popular services.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | React 18, Vite, Tailwind CSS, Lucide React, Recharts |
| **Backend** | Node.js, Express, TypeScript, tsx, esbuild |
| **Integrations** | Google Gemini Generative AI (`@google/genai` TypeScript SDK) |
| **Databases** | Firebase Firestore, Local Storage client persistence |

---

## 📂 Project Architecture & Codebase Design
This codebase adheres strictly to robust development standards:
- **`src/types.ts`**: Standardized, unified TypeScript contract schemas representing booking structures, service details, and quiz requests.
- **`src/components/`**: Modularized component architecture separating the **AI Quiz (`PremiumAIQuiz.tsx`)**, the **Cost Calculator (`PremiumCostCalculator.tsx`)**, the **Service Catalog (`ServicesView.tsx`)**, and the **Admin Management Control (`AdminDashboard.tsx`)**.
- **`server.ts`**: Light, super-fast Express server serving static assets in production, supporting hot refresh in development, and securely proxying generative AI requests.

---

## 📈 The Live Business Pitch: How It Helps Saanvi Studio Grow

A primary requirement of **Task 3** is to pitch the solution as a live commercial project. This website solves critical bottlenecks for traditional salons:

1. **Eliminating Administrative Choke Points**: Automatically schedules bookings 24/7 without requiring active phone receptionist management.
2. **Unlocking Premium bridal Leads**: High-end brides look for trust. The professional gallery, stylized review list, and sleek layout immediately build brand credibility.
3. **Improving Cart Values through the Calculator**: Users interact with the slider bundle calculator, encouraging them to book multiple services to take advantage of tier discounts.
4. **Providing Data-Driven Insights**: The Admin Dashboard equips the owner with essential metrics to trace high-performing therapists and busy booking days, enabling smarter resource allocation.

---

## ⚙️ Development & Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Secrets
Create a `.env` file in the root directory:
```env
GEMINI_API_KEY=your_google_gemini_api_key_here
```

### 3. Run Development Server
```bash
npm run dev
```
The server will boot and serve the SPA on [http://localhost:3000](http://localhost:3000).

### 4. Build for Production Compilation
```bash
npm run build
```
This builds the client assets inside `dist/` and compiles the Express backend server into a single, highly-optimized CommonJS file `dist/server.cjs` for lightning-fast container cold-starts.

---

*A project built with passion during the Future Interns Web Development Internship.*  
**Developed by Sirisha**  
🎓 *Mohan Babu University (MBU)*
