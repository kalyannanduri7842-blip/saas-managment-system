# SaaS Management Platform

A professional SaaS Management Dashboard for tracking applications, subscriptions, users, expenses, and renewals. Built with React, Vite, Tailwind CSS, and LocalStorage persistence.

## Features

- **Dashboard** – Live stats, spending charts, status distribution, upcoming renewals
- **Applications** – Full CRUD, search/filter, detail views
- **Subscriptions** – Plans, billing cycles, seats, renewal tracking
- **Users** – Role-based directory with application assignment
- **Expenses** – Payment tracking and spend totals
- **Reports** – Spending, subscription, and usage reports with CSV export
- **Audit Log** – Compliance-oriented change history
- **Activity Feed** – Portfolio activity timeline
- **Integrations** – Third-party connection status
- **Billing History** – Invoice and payment records
- **Notifications** – Renewal and payment alerts
- **Settings** – Company, profile, dark/light theme, notification preferences
- **Dark mode** – Persisted via LocalStorage
- **Responsive** – Desktop, tablet, and mobile layouts

## Tech Stack

- React 18 + Vite 5
- Tailwind CSS 3
- React Router 6
- Recharts
- Lucide React
- date-fns
- Vitest (unit tests)
- LocalStorage persistence

## Install

```bash
npm install
```

## Run (development)

```bash
npm run dev
```

Open the URL printed by Vite (typically http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Test

```bash
npm test
npm run test:coverage
```

## Project Structure

```
saas-management-platform/
├── public/
├── src/
│   ├── components/     # UI components (Sidebar, Header, Modal, etc.)
│   ├── pages/          # Route pages
│   ├── layouts/        # Main layout shell
│   ├── context/        # React context + CRUD operations
│   ├── services/       # Storage and domain services
│   ├── data/           # Sample and extended datasets
│   ├── validators/     # Form and entity validation
│   ├── constants/      # Categories, statuses, navigation
│   ├── lib/            # Utility libraries (filters, costs, reports, etc.)
│   ├── features/       # Feature-specific business logic
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Dashboard calculations and CSV export
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tests/              # Vitest unit tests
├── package.json
├── vite.config.js
├── vitest.config.js
└── README.md
```

## Data Persistence

On first load the app seeds LocalStorage with realistic sample data (applications, users, subscriptions, expenses, notifications). All CRUD operations persist across page refreshes.

## License

Proprietary. All rights reserved.
