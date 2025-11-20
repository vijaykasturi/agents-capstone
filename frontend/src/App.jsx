import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import './icons.css';

const Dashboard = () => <div className="page-content"><h1>Dashboard</h1><p>Overview of your learning journey.</p></div>;
const MindMap = () => <div className="page-content"><h1>Mind Map</h1><p>Syllabus and topic connections will be visualized here.</p></div>;
const Quiz = () => <div className="page-content"><h1>Quiz</h1><p>Interactive quizzes will appear here.</p></div>;
const Progress = () => <div className="page-content"><h1>Progress Tracker</h1><p>Your detailed progress will be shown here.</p></div>;
const MentorChat = () => <div className="page-content"><h1>Mentor Chat</h1><p>Chat with your AI mentor here.</p></div>;

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Only close sidebar if in mobile
  const closeSidebar = () => {
    if (window.innerWidth < 900) setMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className={`app-container${mobileMenuOpen ? " menu-open" : ""}`}>
        <div className="menu-header">
          <button className="menu-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Open navigation">
            <span className="hamburger"></span>
          </button>
          <h3>EduMentor</h3>
        </div>
        {mobileMenuOpen && window.innerWidth < 900 && (
          <div className="sidebar-overlay" onClick={closeSidebar} />
        )}
        <nav className="sidebar">
          <div className="sidebar-header">
            <h3>EduMentor</h3>
          </div>
          <ul className="sidebar-nav">
            <li><NavLink to="/" end onClick={closeSidebar}><i className="icon-dashboard"></i><span>Dashboard</span></NavLink></li>
            <li><NavLink to="/mind-map" onClick={closeSidebar}><i className="icon-mind-map"></i><span>Mind Map</span></NavLink></li>
            <li><NavLink to="/quiz" onClick={closeSidebar}><i className="icon-quiz"></i><span>Quiz</span></NavLink></li>
            <li><NavLink to="/progress" onClick={closeSidebar}><i className="icon-progress"></i><span>Progress</span></NavLink></li>
            <li><NavLink to="/chat" onClick={closeSidebar}><i className="icon-chat"></i><span>Mentor Chat</span></NavLink></li>
          </ul>
        </nav>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/mind-map" element={<MindMap />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/chat" element={<MentorChat />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;