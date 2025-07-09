import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import DesignPage from './components/DesignPage';
import AboutPage from './components/AboutPage';

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('test_table').select('message');
      if (error) {
        console.error('Error fetching data:', error.message);
      } else {
        console.log('Supabase data:', data);
        setMessages(data.map((item) => item.message));
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Supabase Test Connection</h1>
      <ul>
        {messages.length === 0 ? (
          <li>Loading or no messages found.</li>
        ) : (
          messages.map((msg, index) => <li key={index}>{msg}</li>)
        )}
      </ul>
    </div>
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
