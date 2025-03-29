
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Leaf from './Leaf'; // Import the Leaf component

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-krishi-50 to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Identify Plant Diseases <span className="heading-gradient">Instantly</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              KrishiMitra uses AI technology to detect plant diseases from photos, 
              providing instant diagnosis and treatment recommendations to improve crop yield.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#download" className="btn-primary inline-flex items-center">
                Download Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#how-it-works" className="btn-secondary">
                Learn How It Works
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute inset-0 scale-[0.80] bg-krishi-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="bg-white p-2 rounded-3xl shadow-xl border border-krishi-100 relative animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Plant disease detection" 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute bottom-8 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-krishi-100">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 bg-krishi-100 rounded-full flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-krishi-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-krishi-900">Leaf Spot Detected</h3>
                      <p className="text-xs text-gray-500">Treatment recommendation available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute left-0 right-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
