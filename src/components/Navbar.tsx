
import React from 'react';
import { Leaf } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="border-b border-krishi-100 py-4 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6 text-krishi-600" />
          <span className="font-bold text-xl text-krishi-900">KrishiMitra</span>
        </div>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <a href="#features" className="text-gray-700 hover:text-krishi-600 transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-700 hover:text-krishi-600 transition-colors">How It Works</a>
          <a href="#benefits" className="text-gray-700 hover:text-krishi-600 transition-colors">Benefits</a>
          <a href="#download" className="text-gray-700 hover:text-krishi-600 transition-colors">Download</a>
        </div>
        
        <div>
          <a href="#download" className="btn-primary">Download App</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
