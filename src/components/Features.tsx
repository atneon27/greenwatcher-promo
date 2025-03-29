
import React from 'react';
import { Camera, Sprout, Search, BookOpen, Clock, Wifi } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Camera className="h-6 w-6 text-krishi-600" />,
      title: "Instant Detection",
      description: "Take a photo of the affected plant and get disease identification within seconds."
    },
    {
      icon: <Search className="h-6 w-6 text-krishi-600" />,
      title: "Accurate Diagnosis",
      description: "Our AI model is trained on thousands of plant diseases for precise identification."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-krishi-600" />,
      title: "Treatment Guides",
      description: "Receive detailed treatment options and preventive measures for each disease."
    },
    {
      icon: <Sprout className="h-6 w-6 text-krishi-600" />,
      title: "Plant Library",
      description: "Access information on hundreds of plant species and common diseases."
    },
    {
      icon: <Clock className="h-6 w-6 text-krishi-600" />,
      title: "Early Detection",
      description: "Identify diseases in early stages to prevent crop loss and save resources."
    },
    {
      icon: <Wifi className="h-6 w-6 text-krishi-600" />,
      title: "Offline Mode",
      description: "Use core features without internet connection in remote agricultural areas."
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-white to-krishi-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Powerful Features for <span className="heading-gradient">Plant Health</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            KrishiMitra combines advanced AI technology with agricultural expertise to help you identify and treat plant diseases efficiently.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card animate-fade-in"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="h-12 w-12 bg-krishi-100 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-krishi-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
