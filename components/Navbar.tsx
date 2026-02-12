
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
                <a href="#/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110">
                        <i className="fa-solid fa-seedling"></i>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-slate-800">Smart Crop System</span>
                </a>
                <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
                    <a href="#/diagnosis" className="hover:text-emerald-600 transition">AI Diagnosis</a>
                    <a href="#/auction" className="hover:text-emerald-600 transition">Market Auction</a>
                    <a href="#/advisory" className="hover:text-emerald-600 transition">Expert Voice</a>
                    <a href="#abstract" className="hover:text-emerald-600 transition">The Project</a>
                </div>
                <div className="md:hidden">
                    <i className="fa-solid fa-bars text-xl text-slate-600"></i>
                </div>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
