
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Leaf from './Leaf';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-krishi-50 to-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
              Identify Plant & Cattle Diseases <span className="heading-gradient">Instantly</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              KrishiMitra uses AI technology to detect diseases in plants and livestock, 
              providing instant diagnosis and treatment recommendations to improve crop yield and animal health.
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
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-2 rounded-3xl shadow-xl border border-krishi-100 relative animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="Plant disease detection" 
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-krishi-100">
                    <div className="flex items-start gap-2">
                      <div className="h-8 w-8 bg-krishi-100 rounded-full flex items-center justify-center">
                        <Leaf className="h-4 w-4 text-krishi-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-krishi-900">Leaf Spot Detected</h3>
                        <p className="text-xs text-gray-500">Treatment available</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-2 rounded-3xl shadow-xl border border-krishi-100 relative animate-float" style={{ animationDelay: "0.2s" }}>
                  <img 
                    src="https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Cattle disease detection" 
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-krishi-100">
                    <div className="flex items-start gap-2">
                      <div className="h-8 w-8 bg-earth-100 rounded-full flex items-center justify-center">
                        <svg className="h-4 w-4 text-earth-600" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 17c.2 0 .3.1.4.2.7.4 1.7.8 2.6.8 1.1 0 2.5-.5 3.5-2 .5-.7.7-1.3.3-2s-1.1-.5-1.4-.2c-.4.4-.7 1-1.5 1-1 0-1.4-1-1.4-1.5s.3-1.5 1.5-1.5c.9 0 2-.5 2.7-1.5.7-1 .5-2.5-.3-3.5-.5-.6-1.2-1-2.2-1-1.3 0-2.7 1-2.7 2.5 0 1.3-.7 2-1.5 2s-1.5-.8-1.5-1.5c0-1-.3-1.5-.5-2 .3-.3.5-.7.5-1C10.5 5.5 9 4 7 4S3.5 5.5 3.5 7c0 .3.2.7.5 1-.2.5-.5 1-.5 2 0 2 1.5 3 3 3 .5 0 2 .3 2 1.5 0 .5 0 1 1 1h1c.5 0 1 .5 1 1v1c0 .5.5 1 1 1zm5-6"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-earth-900">Mastitis Detected</h3>
                        <p className="text-xs text-gray-500">Treatment available</p>
                      </div>
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
