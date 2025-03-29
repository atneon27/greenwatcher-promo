
import React from 'react';
import { Check } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    "Increase crop yield by early disease detection",
    "Reduce pesticide use with targeted treatment recommendations",
    "Save time and resources with instant diagnosis",
    "Access expert agricultural knowledge at your fingertips",
    "Make informed decisions with accurate disease identification",
    "Prevent disease spread to healthy plants",
    "Learn about sustainable farming practices",
    "Connect with agricultural experts through the app"
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-krishi-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-earth-400 rounded-lg blur-2xl opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-krishi-600 rounded-lg blur-2xl opacity-20"></div>
              
              <div className="relative bg-white p-4 rounded-2xl shadow-xl border border-krishi-100 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Healthy plants" 
                  className="w-full h-auto rounded-lg"
                />
                
                <div className="mt-6 space-y-4 pb-2">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Healthy Plant Confirmed</h4>
                      <p className="text-sm text-gray-500">No disease detected in your corn plants</p>
                    </div>
                  </div>
                  
                  <div className="h-1 w-full bg-gray-100 rounded-full">
                    <div className="h-1 w-4/5 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Plant Health Score</span>
                    <span className="font-medium text-green-600">92/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Benefits of Using <span className="heading-gradient">KrishiMitra</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our app helps farmers and gardeners improve plant health, increase yield, and practice sustainable agriculture.
            </p>
            
            <div className="mt-8 grid gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${0.1 * (index + 1)}s` }}>
                  <div className="mt-1 h-5 w-5 rounded-full bg-krishi-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-krishi-600" />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
