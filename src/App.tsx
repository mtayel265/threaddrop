// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your page components
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import DesignPage from './components/DesignPage';
import AboutPage from './components/AboutPage';
import SignIn from './components/SignIn'; // Assuming it's in src/components/
import SignUp from './components/SignUp'; // Assuming it's in src/components/

function App() {
  return (
    // The Router component is the foundation for all routing
    <Router>
      {/* This main div provides the consistent background and layout for your entire app */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* 
          The Navigation component is placed here, outside of <Routes>.
          This means it will be visible on EVERY page that matches a route below.
          We will need to update it slightly to work with the router.
        */}
        <Navigation />

        {/* 
          The <Routes> component looks at the current URL and renders the
          first <Route> that matches.
        */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* You might also want a "Not Found" page for bad URLs */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
