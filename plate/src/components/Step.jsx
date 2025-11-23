import React from "react";

const Step = () => {
  const steps = [
    {
      step: "01",
      title: "Visit Our Website",
      description: "Go to our official website to begin the process",
      text: "Visit our official website to start your HSRP application. Our website makes applying for a HSRP plate simple by organizing all the necessary information in one place.",
      icon: "🌐",
      color: "blue"
    },
    {
      step: "02",
      title: "Enter Vehicle Information",
      description: "Provide your vehicle details accurately",
      text: "After visiting our website, you must enter your automobile information. This includes your car's chassis, engine, registration, and fuel type. Accurate information is needed to produce and register your HSRP number plate.",
      icon: "📝",
      color: "green"
    },
    {
      step: "03",
      title: "Choose Installation Place",
      description: "Select your preferred installation location",
      text: "Choose a location to install. Choose our simple home installation service or one of our licensed installation centers in India. Select the option that meets your needs.",
      icon: "📍",
      color: "purple"
    },
    {
      step: "04",
      title: "Pay Securely",
      description: "Complete payment through secure gateway",
      text: "After selecting your installation place, you'll complete the payment. Our 100% secure payment gateway gives you peace of mind when you make your purchase. After your payment is processed, you will receive an email with instructions and your receipt.",
      icon: "💳",
      color: "orange"
    },
    {
      step: "05",
      title: "Schedule Installation",
      description: "Book your installation appointment",
      text: "After payment, schedule your installation appointment. Choose your preferred day and time, and we'll handle the rest. Our professionals will securely and professionally install your HSRP plate at your home or at an installation facility.",
      icon: "📅",
      color: "red"
    }
  ];

  const colorSchemes = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      border: "border-blue-500",
      text: "text-blue-600",
      badgeBg: "bg-blue-600",
      lightBg: "bg-blue-50"
    },
    green: {
      bg: "from-green-500 to-green-600",
      border: "border-green-500",
      text: "text-green-600",
      badgeBg: "bg-green-600",
      lightBg: "bg-green-50"
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      border: "border-purple-500",
      text: "text-purple-600",
      badgeBg: "bg-purple-600",
      lightBg: "bg-purple-50"
    },
    orange: {
      bg: "from-orange-500 to-orange-600",
      border: "border-orange-500",
      text: "text-orange-600",
      badgeBg: "bg-orange-600",
      lightBg: "bg-orange-50"
    },
    red: {
      bg: "from-red-500 to-red-600",
      border: "border-red-500",
      text: "text-red-600",
      badgeBg: "bg-red-600",
      lightBg: "bg-red-50"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Clear Header Section */}
      <div className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <span className="text-white font-bold text-sm uppercase tracking-widest flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              📋 STEP-BY-STEP PROCESS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Simple 5-Step Process
          </h1>
          <p className="text-2xl md:text-3xl text-green-100 font-light mb-4">
            Get Your HSRP Plate in Minutes
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
      </div>

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Getting your HSRP number plate online from our agency is easy and straightforward. 
            Follow these simple steps to complete your application:
          </p>
        </div>

        {/* Desktop Timeline Layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 via-purple-300 to-red-300"></div>
            
            {/* Steps Container */}
            <div className="space-y-20">
              {steps.map((step, index) => {
                const colors = colorSchemes[step.color];
                return (
                  <div 
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    } gap-8`}
                  >
                    {/* Step Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                      <div className={`bg-white rounded-3xl shadow-2xl p-8 border-2 ${colors.border} hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}>
                        <div className={`inline-flex items-center ${colors.lightBg} px-4 py-2 rounded-full mb-4`}>
                          <span className={`${colors.text} font-bold text-sm uppercase tracking-wide`}>
                            Step {step.step}
                          </span>
                        </div>
                        <h3 className="text-3xl font-black text-gray-900 mb-3">{step.title}</h3>
                        <p className={`${colors.text} font-bold text-lg mb-4`}>{step.description}</p>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          {step.text}
                        </p>
                      </div>
                    </div>

                    {/* Step Icon Circle */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className={`w-24 h-24 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 border-4 border-white`}>
                        <span className="text-4xl">{step.icon}</span>
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          <div className="space-y-8">
            {steps.map((step, index) => {
              const colors = colorSchemes[step.color];
              return (
                <div key={index} className="relative">
                  <div className={`bg-white rounded-3xl shadow-xl border-2 ${colors.border} overflow-hidden hover:shadow-2xl transition-all duration-300`}>
                    {/* Header Section */}
                    <div className={`bg-gradient-to-r ${colors.bg} px-6 py-4 flex items-center justify-between`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                          <span className="text-3xl">{step.icon}</span>
                        </div>
                        <div>
                          <div className="bg-white/30 px-3 py-1 rounded-full inline-block mb-1">
                            <span className="text-white text-xs font-bold">STEP {step.step}</span>
                          </div>
                          <h3 className="text-xl font-black text-white">{step.title}</h3>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      <p className={`${colors.text} font-bold text-lg mb-4`}>{step.description}</p>
                      <p className="text-gray-700 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Step;