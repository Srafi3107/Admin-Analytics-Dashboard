# Admin Analytics Dashboard

A modern, responsive analytics dashboard built with Next.js, featuring real-time data visualization and KPI tracking.

## 🚀 Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [Next Themes](https://github.com/pacocoursey/next-themes) (Dark/Light mode support)

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd admin-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏛️ Architecture Decisions

### 1. Component Composition
The dashboard is broken down into small, reusable components (e.g., `StatsGrid`, `RevenueChart`, `OrdersChart`, `UserPieChart`) and located in `components/dashboard/`. This promotes maintainability and easier testing.

### 2. Mock Data Strategy
Currently, the application uses mock data defined in `lib/mockData.ts`. This allows for rapid UI development and testing without requiring a live backend. The data structure is designed to be easily swappable with API calls.

### 3. API Routes
Next.js API routes (`app/api/`) are implemented to serve data. While currently returning mock data, they provide a clean separation between the frontend and the data layer, following RESTful principles.

### 4. Client-Side State Management
Zustand is used for managing global UI state, such as themes and dashboard filters. It was chosen for its minimal boilerplate and excellent TypeScript support.

### 5. Responsive Design
A mobile-first approach is used with Tailwind CSS grid and flexbox, ensuring the dashboard remains usable on all screen sizes.

## 📝 Assumptions Made

- **Data Period**: Statistics and charts are assumed to represent recent activity (last 7 days by default) as indicated by the mock data.
- **User Personas**: The dashboard is designed for administrative users who require a high-level overview of sales, revenue, and user demographics.
- **Environment**: The project assumes a modern browser environment supporting CSS Grid and Flexbox.
- **Authentication**: Current implementation assumes the user is authenticated (authentication flow is not yet implemented in this version).

## 🌐 Deploying to Netlify

To take this dashboard live on Netlify, follow these steps:

### Option 1: Via Netlify Dashboard (Recommended)

1.  **Push to Git**: Ensure your code is pushed to a Git repository (GitHub, GitLab, or Bitbucket).
2.  **Import to Netlify**:
    *   Log in to [Netlify](https://app.netlify.com/).
    *   Click **Add new site** > **Import an existing project**.
    *   Select your Git provider and the repository.
3.  **Configure Settings**: Netlify will auto-detect Next.js and apply these settings:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `.next`
4.  **Deploy**: Click **Deploy site**.

### Option 2: Via Netlify CLI

1.  Install the CLI: `npm install -g netlify-cli`
2.  Run `netlify deploy` and follow the interactive prompts.
3.  For production, run `netlify deploy --prod`.
