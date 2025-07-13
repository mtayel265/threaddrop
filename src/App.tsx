import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import DesignPage from './components/DesignPage';
import AboutPage from './components/AboutPage';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
   return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
  const [currentPage, setCurrentPage] = useState<'home' | 'design' | 'about'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigateToDesign={() => setCurrentPage('design')} />;
      case 'design':
        return <DesignPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigateToDesign={() => setCurrentPage('design')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
