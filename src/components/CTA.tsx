
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="download" className="py-16 sm:py-24 bg-gradient-to-br from-krishi-700 to-krishi-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Start Protecting Your Plants Today
            </h2>
            <p className="mt-4 text-lg text-krishi-100">
              Join thousands of farmers and gardeners who have improved their plant health and increased yields with KrishiMitra.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="#" 
                className="bg-white text-krishi-900 hover:bg-krishi-100 font-medium py-3 px-6 rounded-md transition duration-200 ease-in-out flex items-center justify-center"
              >
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9 5c-.1.2-.3.3-.4.5l-7.9 7.9-2.1-2.1c-1.9-1.9-4.4-.9-5.2.2-.8 1.1-.7 3.1.7 4.5l4.5 4.5c.2.2.4.3.7.3.3 0 .5-.1.7-.3l9.7-9.7c1.6-1.6 1.9-4.1.9-5.7-.5-.8-1.2-1-1.6-.1z"/>
                </svg>
                Download on Google Play
              </a>
              <a 
                href="#" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 font-medium py-3 px-6 rounded-md transition duration-200 ease-in-out flex items-center justify-center"
              >
                <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.1 13.1L13 17.2c-.2.1-.4.1-.6.1s-.4 0-.5-.1L7.9 15c-.5-.2-.7-.6-.7-1.1V9.9c0-.5.3-.9.7-1.1l4-2.2c.3-.2.7-.2 1.1 0l4 2.2c.5.2.7.6.7 1.1V14c0 .5-.3.9-.7 1.1z"/>
                </svg>
                Download on App Store
              </a>
            </div>
            
            <div className="mt-8 flex items-center text-sm text-krishi-100">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free to download with in-app purchases</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-10"></div>
            <div className="relative grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 animate-float" style={{ animationDelay: "0.1s" }}>
                <div className="flex justify-between items-start">
                  <div className="h-10 w-10 bg-krishi-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-krishi-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-xs bg-krishi-500 px-2 py-1 rounded text-white">New</div>
                </div>
                <h3 className="mt-4 font-medium">Disease Database</h3>
                <p className="mt-1 text-sm opacity-80">Access 500+ plant diseases</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 animate-float" style={{ animationDelay: "0.2s" }}>
                <div className="flex justify-between items-start">
                  <div className="h-10 w-10 bg-earth-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-earth-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 font-medium">Instant Detection</h3>
                <p className="mt-1 text-sm opacity-80">Results in 2 seconds</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 animate-float" style={{ animationDelay: "0.3s" }}>
                <div className="flex justify-between items-start">
                  <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 font-medium">Expert Advice</h3>
                <p className="mt-1 text-sm opacity-80">Verified treatments</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 animate-float" style={{ animationDelay: "0.4s" }}>
                <div className="flex justify-between items-start">
                  <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 font-medium">24/7 Support</h3>
                <p className="mt-1 text-sm opacity-80">Help when you need it</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
