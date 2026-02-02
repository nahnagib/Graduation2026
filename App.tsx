
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Event from './pages/Event';
import About from './pages/About';
import Project from './pages/Project';

export enum Page {
  Home = 'home',
  Event = 'event',
  About = 'about',
  Project = 'project'
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onNavigate={setCurrentPage} />;
      case Page.Event:
        return <Event />;
      case Page.About:
        return <About />;
      case Page.Project:
        return <Project />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        <div className="animate-in fade-in duration-700">
          {renderPage()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
