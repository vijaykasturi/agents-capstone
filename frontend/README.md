# 🎓 EduMentor Frontend

## Overview
This directory contains the **frontend application** for the Personalized Multi-Agent Education Mentor platform. It is a modern, responsive single-page application (SPA) built with **React** and **Vite**, designed to provide an interactive learning experience for students preparing for competitive exams.

The frontend connects to our FastAPI backend to visualize syllabus mind maps, deliver adaptive quizzes, track progress, and facilitate AI mentor chat.

---

## 🚀 Tech Stack

- **Framework:** [React](https://react.dev/) (v18+)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/) (v6)
- **Styling:** Custom CSS (Responsive, Mobile-First)
- **Icons:** CSS-based SVG icons (Lightweight, no external library dependency)

---

## 🛠️ Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, and global static files
│   ├── components/      # Reusable UI components (Buttons, Cards, Loaders)
│   ├── pages/           # Main Application Views
│   │   ├── Dashboard.jsx      # Student overview & stats
│   │   ├── MindMap.jsx        # Interactive syllabus visualization
│   │   ├── Quiz.jsx           # Adaptive testing interface
│   │   ├── Progress.jsx       # Mastery tracking & charts
│   │   └── MentorChat.jsx     # AI Chat interface
│   ├── App.jsx          # Main Layout (Sidebar/Drawer + Routing)
│   ├── App.css          # Global Styles & Responsive Layout
│   ├── icons.css        # Lightweight icon classes
│   └── main.jsx         # Application Entry Point
├── index.html           # HTML Root
├── package.json         # Dependencies & Scripts
└── vite.config.js       # Vite Configuration
```

---

## 📱 Features Implemented

### 1. **Responsive Navigation System**
- **Desktop:** Persistent sidebar navigation for quick access to all modules.
- **Mobile:** Collapsible drawer navigation with a clean hamburger menu.
  - **Smart Overlay:** Tapping outside the menu closes it.
  - **Route Awareness:** Menu automatically closes when navigating to a new page.
  - **Visual Feedback:** Active states for current page links.

### 2. **Core Page Skeletons**
- **Dashboard:** Placeholder for user statistics and daily summaries.
- **Mind Map:** Ready for integrating graph/tree visualizations.
- **Quiz:** Structure in place for question delivery and scoring.
- **Progress:** Layout ready for charts and mastery bars.
- **Mentor Chat:** UI ready for real-time message history and input.

---

## ⚡ Getting Started

### Prerequisites
- Node.js (LTS version recommended)
- npm (comes with Node.js)

### Installation

1. **Navigate to the frontend directory:**
   ```
   cd frontend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

### Running Development Server

To start the local development server with hot-reload:
```
npm run dev
```
> The app will typically run at `http://localhost:5173`.

### Building for Production

To create an optimized production build:
```
npm run build
```
To preview the production build locally:
```
npm run preview
```

---

## 🤝 Integration Points (For Backend Team)

The frontend is prepared to consume the following API endpoints from the backend agent system:

|Feature|Expected Endpoint| Method | Description | | :---  | :---            | :---   | :---        |
| **Mind Map** | `/api/mindmap/{subject}` | GET | JSON tree structure of topics & status. |

| **Quiz** | `/api/quiz/generate` | POST | Request a new quiz based on topic/weakness. |

| **Quiz** | `/api/quiz/submit` | POST | Submit answers & get immediate scoring. |

| **Progress** | `/api/progress` | GET | Mastery scores per subject/topic. |

| **Chat** | `/api/chat/message` | POST | Send user query & receive agent response. |

---

## 📝 Next Steps
- [ ] Implement API service layer (`src/services/api.js`) to connect with backend.
- [ ] Integrate a visualization library (e.g., React Flow or D3) for the Mind Map.
- [ ] Add state management for user sessions.
- [ ] Enhance accessibility (ARIA labels, keyboard nav).

---

**Developed by:** Sanyam Chaudhary  
**Last Updated:** November 2025