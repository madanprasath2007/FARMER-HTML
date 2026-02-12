
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Diagnosis from './views/Diagnosis';
import Auction from './views/Auction';
import Advisory from './views/Advisory';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderView = () => {
    switch (currentPath) {
      case '#/':
        return <Home />;
      case '#/diagnosis':
        return <Diagnosis />;
      case '#/auction':
        return <Auction />;
      case '#/advisory':
        return <Advisory />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {renderView()}
      </main>
      <footer className="bg-white py-12 px-4 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white">
              <i className="fa-solid fa-seedling"></i>
            </div>
            <span className="font-bold text-slate-800">Smart Crop System 2025</span>
          </div>
          <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
            Innovation for Indian Agriculture • L&T Construction
          </p>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-emerald-600 transition"><i className="fa-brands fa-github text-xl"></i></a>
            <a href="#" className="hover:text-emerald-600 transition"><i className="fa-brands fa-linkedin text-xl"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
