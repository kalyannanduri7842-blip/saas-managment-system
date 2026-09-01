# Alea Enterprise ERP & SaaS Business Management Platform

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.11-646CFF?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.17-06B6D4?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Vitest-2.1.8-729B1B?style=flat&logo=vitest)](https://vitest.dev/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat&logo=docker)](https://www.docker.com/)

A comprehensive, production-grade **Enterprise Resource Planning (ERP) & SaaS Business Management Operating System** designed with a **Zero-Default On-Demand Data Architecture**, **Strict Role-Based Access Control (RBAC)**, and **16 Core Executive Dashboards**.

---

## 🌟 Key Features & Architectural Highlights

1. **Zero-Default Pure On-Demand Data Architecture**:
   - Every transactional module initializes to `0` counts and clean empty tables.
   - Data is generated only when authorized users trigger ingestion via direct `+ Add` action modals.
2. **Manager-Only Deletion & RBAC Security**:
   - **Employees (Staff)**: Authorized to view dashboards and ingest operational data. Delete actions are hidden and restricted.
   - **Managers & Admins**: Full operational privileges, including one-click record deletion (`🗑️ Delete`) across all modules.
   - Immutable audit logging tracks all creations and deletions in real-time.
3. **16 Executive Dashboards**:
   - Full suite covering Governance, HR, ATS, OKRs, Finance, Payroll, Inventory, Procurement, CRM, Operations, SLA Service, DMS Vault, and MIS Reports.
4. **Human-Centric Crisp Light Theme**:
   - Zero AI stock images or synthetic badges.
   - Dynamic 2-letter human initials badges derived directly from legal employee names.
   - Emerald (`#059669`), Slate (`#0f172a`), and Warm Amber styling.

---

## 📋 16 Core Executive Dashboards Catalog

| # | Dashboard Module | Route | Primary Capabilities |
|---|---|---|---|
| 1 | **Dashboard** | `/` | Executive Cockpit, live revenue metrics, headcount, and activity telemetry |
| 2 | **My Portal / Self Service** | `/employee` | Biometric clock-in/out, leave balance quotas (CL, SL, PL), payslip downloads |
| 3 | **Organization** | `/organization` | Corporate legal master, branch hierarchy, headquarters compliance |
| 4 | **Users & Roles** | `/users` | Role-based permission matrix (Admin, Manager, Employee), RBAC enforcement |
| 5 | **HR & Attendance** | `/hr` | Corporate employee directory, designation allocation, staff onboarding |
| 6 | **Recruitment & ATS** | `/recruitment` | Requisition publishing, applicant tracking pipeline, candidate screening |
| 7 | **Performance & OKR** | `/performance` | Quarterly Objectives & Key Results (OKRs), SLA uptime targets |
| 8 | **Finance & Accounts** | `/finance` | GST tax invoicing, GSTR-1 output liability, Accounts Receivable / Payable |
| 9 | **Statutory Payroll** | `/payroll` | EPF, ESI, TDS tax withholding calculations, HDFC SFMS bank disbursal |
| 10 | **Inventory & Stock** | `/inventory` | Multi-warehouse SKU master, stock counts, reorder alerts, material valuation |
| 11 | **Procurement & POs** | `/procurement` | Vendor purchase orders, 3-way matching verification against GRN |
| 12 | **CRM & Sales** | `/crm` | Sales funnel stages, deal velocity, contract win probability weighting |
| 13 | **Operations & Projects** | `/operations` | Project milestone timelines, plant operations, task velocity tracking |
| 14 | **Customer Service & SLA** | `/service` | AMC contracts, warranty tracking, ticket queue, CSAT satisfaction |
| 15 | **Documents & DMS** | `/dms` | Encrypted Cloud Vault, incorporation certs, ISO audits, NDAs |
| 16 | **MIS & Reports** | `/reports` | Audited P&L statements, board decks, statutory annual tax filing reports |

---

## 🚀 Quick Start & Installation

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher (or yarn / pnpm)
- **Docker** (Optional, for containerized execution)

### 1. Clone & Install Dependencies
```bash
# Clone the repository
git clone https://github.com/your-org/aleans-enterprise-erp.git
cd aleans-enterprise-erp

# Install dependencies (manifest & lockfile verified)
npm install
```

### 2. Run Development Server
```bash
npm run dev
# or
npm start
```
The application will launch immediately at **`http://localhost:5176`**.

### 3. Production Build & Preview
```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🧪 Automated Unit Testing

The repository includes a comprehensive test suite powered by **Vitest** testing calculation engines, zero-default data constraints, RBAC permissions, and initials generators.

```bash
# Run all unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run test coverage report
npm run test:coverage
```

### Test Coverage Breakdown:
- `tests/aleansERP.test.js`: Validates zero initial state arrays and initials generation.
- `tests/rbacSecurity.test.js`: Validates 16 sidebar routes and Manager-only delete access.
- `tests/validators.test.js`: Validates form schemas, currency formatting, and email validation.
- `tests/libUtils.test.js`: Validates date helpers, math calculations, and export utilities.

---

## 🐳 Docker & Containerization

### Run with Docker:
```bash
# Build Docker image
docker build -t aleans-erp-platform .

# Run Docker container
docker run -p 5176:5176 aleans-erp-platform
```

### Run with Docker Compose:
```bash
docker compose up -d
```

---

## 🛠️ Makefile Commands

| Command | Description |
|---|---|
| `make install` | Installs all npm dependencies |
| `make dev` | Starts the local Vite development server on port 5176 |
| `make build` | Compiles optimized production bundle in `dist/` |
| `make test` | Executes all unit test suites via Vitest |
| `make coverage` | Generates full test coverage report |
| `make docker-build` | Builds production Docker container image |
| `make docker-up` | Launches containerized platform via Docker Compose |
| `make clean` | Removes build artifacts and caches |

---

## 🔒 Security & RBAC Permission Matrix

| Role | Dashboard Access | Add / Ingest Records | Delete Records (`🗑️`) | Manage System Users |
|---|:---:|:---:|:---:|:---:|
| **Admin** | Full Access | ✅ Yes | ✅ Yes (Full Access) | ✅ Yes |
| **Manager** | Full Access | ✅ Yes | ✅ Yes (Full Access) | ❌ No |
| **Employee** | Full Access | ✅ Yes | ❌ Restricted | ❌ No |

---

## 📦 Dependencies & Technology Stack

### Core Dependencies
- **react** (`^18.3.1`): Declarative UI library
- **react-dom** (`^18.3.1`): React DOM renderer
- **react-router-dom** (`^6.28.0`): Client-side routing engine
- **lucide-react** (`^0.475.0`): Clean, accessible SVG iconography
- **recharts** (`^2.15.0`): Composable financial and analytics charting
- **date-fns** (`^4.1.0`): Immutable modern date utility library

### Developer Dependencies
- **vite** (`^5.4.11`): High-speed frontend build tool & dev server
- **vitest** (`^2.1.8`): Fast unit test runner
- **tailwindcss** (`^3.4.17`): Utility-first CSS framework
- **postcss** (`^8.4.49`) & **autoprefixer** (`^10.4.20`): CSS processing pipeline

---

## 📄 License
Enterprise Commercial License. All rights reserved.
