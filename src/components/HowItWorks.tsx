
import React from 'react';
import { Camera, Search, FileText } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="h-8 w-8 text-white" />,
      title: "Take a Photo",
      description: "Snap a clear picture of the affected plant part - leaf, stem, fruit, or the whole plant.",
      bgColor: "bg-krishi-600",
    },
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Get Diagnosis",
      description: "Our AI analyzes the image and identifies the disease with details on severity and spread.",
      bgColor: "bg-krishi-700",
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Receive Treatment",
      description: "Get customized treatment recommendations, organic and chemical solutions, and preventive measures.",
      bgColor: "bg-krishi-800",
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            How <span className="heading-gradient">KrishiMitra</span> Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple 3-step process helps you quickly identify and address plant health issues.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className={`${step.bgColor} p-6`}>
                <div className="h-16 w-16 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Step {index+1}: {step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
              <div className="bg-gray-50 p-6 border border-t-0 border-gray-100 rounded-b-xl">
                {index === 0 && (
                  <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                      alt="Taking plant photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {index === 1 && (
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-full bg-krishi-100 flex items-center justify-center">
                        <Search className="h-5 w-5 text-krishi-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-200 rounded-full w-4/5"></div>
                        <div className="h-2 bg-gray-200 rounded-full w-3/5 mt-2"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-5/6"></div>
                      <div className="h-2 bg-gray-200 rounded-full w-4/6"></div>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="mt-1">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-800 rounded-full w-4/5"></div>
                        <div className="h-2 bg-gray-200 rounded-full w-full mt-2"></div>
                        <div className="h-2 bg-gray-200 rounded-full w-5/6 mt-1"></div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="h-8 bg-krishi-100 rounded-md w-full flex items-center justify-center">
                        <div className="h-2 w-20 bg-krishi-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
