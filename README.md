# SaaS Management Platform

A clean, fully functional SaaS Management Dashboard built with React, Vite, Tailwind CSS, and LocalStorage.

## Features

- **Dashboard** – Stats cards, charts (monthly spending, app status, category distribution), upcoming renewals
- **Applications** – Full CRUD, search, filter by category/status, detail pages
- **Subscriptions** – Manage plans, billing cycles, seats, renewals
- **Users** – User management with role/status filters and application assignment
- **Expenses** – Track SaaS spending with payment status
- **Reports** – Spending, subscription, and usage reports with CSV export
- **Notifications** – Renewal reminders and activity alerts
- **Settings** – Company, profile, theme (dark/light), notification preferences
- **Dark mode** – Persisted via LocalStorage
- **Responsive** – Works on desktop, tablet, and mobile

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router v6
- Recharts
- Lucide React icons
- date-fns
- LocalStorage for persistence

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Project Structure

```
saas-management-platform/
├── public/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route pages
│   ├── layouts/        # Main layout with sidebar
│   ├── data/           # Sample data
│   ├── context/        # App context (state + CRUD)
│   ├── services/       # LocalStorage service
│   ├── utils/          # Calculations, CSV export
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Sample Data

On first load the app seeds LocalStorage with:

- 10 SaaS applications (Slack, Microsoft 365, GitHub, Jira, Notion, Zoom, etc.)
- 12 users across departments
- 10 subscriptions
- 18 expenses
- 9 notifications

Data persists across page refreshes.
