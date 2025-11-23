import React from "react";

const HSRPOlderVehicles = () => {
  const steps = [
    {
      step: "1. Prepare Police Report",
      desc: "If your HSRP plate is stolen or lost, report it to the police. Online HSRP replacement applications need this report.",
      icon: "📝",
      color: "blue"
    },
    {
      step: "2. Visit Our Website",
      desc: "Reserve a HSRP replacement online on our website. Enter car details and provide necessary documents, including the police report.",
      icon: "🌐",
      color: "green"
    },
    {
      step: "3. Choose Installation Plan",
      desc: "Select a location and convenient installation time. We promise skilled and rapid replacement whether you pick home service or an installation center.",
      icon: "📍",
      color: "purple"
    },
    {
      step: "4. Pay and Verify",
      desc: "Pay for your replacement HSRP plate and get a confirmation email. Our personnel will then make and install your plate.",
      icon: "✅",
      color: "orange"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Security",
      desc: "Enhanced security against theft and fraud",
      icon: "🔒"
    },
    {
      title: "Legal Compliance",
      desc: "Legal compliance with current regulations",
      icon: "⚖️"
    },
    {
      title: "Nationwide Traceability",
      desc: "Nationwide traceability and identification",
      icon: "📍"
    },
    {
      title: "Future-Proof",
      desc: "Future-proof your vehicle against new laws",
      icon: "🚀"
    }
  ];

  const colorSchemes = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      border: "border-blue-500",
      text: "text-blue-600",
      lightBg: "bg-blue-50"
    },
    green: {
      bg: "from-green-500 to-green-600",
      border: "border-green-500",
      text: "text-green-600",
      lightBg: "bg-green-50"
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      border: "border-purple-500",
      text: "text-purple-600",
      lightBg: "bg-purple-50"
    },
    orange: {
      bg: "from-orange-500 to-orange-600",
      border: "border-orange-500",
      text: "text-orange-600",
      lightBg: "bg-orange-50"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Clear Header Section */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <span className="text-white font-bold text-sm uppercase tracking-widest flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
              🚗 OLDER VEHICLES & REPLACEMENTS
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            HSRP for Older Vehicles
          </h1>
          <p className="text-2xl md:text-3xl text-orange-100 font-light mb-4">
            Upgrade & Replace Your Number Plates
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>
      </div>

      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Introduction Section */}
        <section className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 shadow-lg border-2 border-orange-200">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-5xl">🚗</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-flex items-center bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                <span className="mr-2">ℹ️</span>
                Important Information
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Upgrade Your Pre-2019 Vehicle
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                If your automobile was registered before April 2019, it may not have a HSRP plate. 
                Upgrade to a HSRP number plate for antique cars is legal and protects your vehicle. 
                Older automobiles are more prone to be stolen and frauded, making HSRP plates even more important.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Why Upgrade */}
          <section className="space-y-8">
            <div className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
                <div className="flex items-center">
                  <div className="bg-white rounded-xl p-3 mr-4">
                    <span className="text-3xl">🔒</span>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-black text-white">
                      Why Upgrade?
                    </h3>
                    <p className="text-blue-100 text-lg mt-1">Benefits for Older Vehicles</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                        <span className="text-2xl">{benefit.icon}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-700">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl shadow-2xl p-8 md:p-10 text-white">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-3xl font-black">Easy Online Application</h3>
              </div>
              <p className="text-green-100 text-lg leading-relaxed">
                Online HSRP plate applications for older automobiles are easy at our agency. 
                Our quick and easy HSRP online booking system lets you secure your automobile with minimum effort. 
                Simply provide your vehicle details and installation place, and we'll do the rest.
              </p>
            </div>
          </section>

          {/* Right Column - Replacement Process */}
          <section className="bg-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-pink-600 px-8 py-6">
              <div className="flex items-center">
                <div className="bg-white rounded-xl p-3 mr-4">
                  <span className="text-3xl">🔄</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white">
                    Replacement Process
                  </h2>
                  <p className="text-red-100 text-lg mt-1">For Lost/Damaged Plates</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 space-y-6">
              {steps.map((item, index) => {
                const colors = colorSchemes[item.color];
                return (
                  <div 
                    key={index}
                    className={`bg-gradient-to-r ${colors.lightBg} to-white rounded-2xl p-6 border-2 ${colors.border} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-xl font-black ${colors.text} mb-2`}>
                          {item.step}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Features Grid */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Why Choose Our <span className="text-transparent bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text">Service?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We make upgrading and replacing HSRP plates simple and convenient
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl shadow-lg p-8 text-center border-2 border-green-200 hover:shadow-2xl hover:border-green-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-4xl">⚡</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Quick Process</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Get your HSRP plate within days with our streamlined online system</p>
            </div>

            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl shadow-lg p-8 text-center border-2 border-blue-200 hover:shadow-2xl hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-4xl">🏠</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Home Installation</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Professional installation at your preferred location</p>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl shadow-lg p-8 text-center border-2 border-purple-200 hover:shadow-2xl hover:border-purple-400 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">100% Secure</h3>
              <p className="text-gray-700 text-lg leading-relaxed">Government-approved plates with advanced security features</p>
            </div>
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default HSRPOlderVehicles;