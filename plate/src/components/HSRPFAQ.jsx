import React, { useState } from 'react';

const HSRPFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: '📋', color: 'gray' },
    { id: 'basics', name: 'HSRP Basics', icon: '📖', color: 'blue' },
    { id: 'application', name: 'Application Process', icon: '✍️', color: 'green' },
    { id: 'legal', name: 'Legal & Compliance', icon: '⚖️', color: 'purple' },
    { id: 'pricing', name: 'Pricing & Costs', icon: '💰', color: 'yellow' },
    { id: 'technical', name: 'Technical Support', icon: '🔧', color: 'red' }
  ];

  const faqs = [
    {
      category: 'basics',
      question: "What is the HSRP number plate?",
      answer: "HSRP number plates are designed to prevent counterfeiting, vehicle-related fraud, and tampering. Some key traits are:",
      features: [
        "A laser-etched number is attached to each HSRP's vehicle registration.",
        "A chromium-based Ashoka Chakra hologram hot-stamped on the plate's top left corner provides protection.",
        "Tamper-Proof Design: Metal plates with snap-lock mechanisms prevent unauthorized usage or removal.",
        "Reflective Sheeting: Plates are covered with reflective material to improve visibility and meet global road safety regulations."
      ],
      conclusion: "This makes HSRP number plates a dependable vehicle identification option, boosting road safety and deterring automobile crimes."
    },
    {
      category: 'basics',
      question: "Who is required to have a HSRP number plate?",
      answer: "All Indian automobiles must have HSRP number plates by law. This applies to various vehicles, including:",
      features: [
        "New Vehicles: All vehicles registered after April 2019 have HSRP number plates.",
        "Old Vehicles: Pre-April 2019 vehicles must have HSRP number plates.",
        "Commercial vehicles: Buses, lorries, and other commercial vehicles need HSRP plates.",
        "Other private vehicles include cars, motorcycles, scooters, and more."
      ],
      conclusion: "Whether you drive an ancient motorcycle or a modern car, a HSRP number plate is essential to meet the latest security standards and avoid legal complications."
    },
   
    {
      category: 'application',
      question: "How long do HSRP number plates take to get installed?",
      answer: "Vehicle type, location, and availability at the installation site influence HSRP number plate processing time. In general, the timeline is:",
      timeline: [
        "Application Processing: Your online application request usually takes several hours to a day.",
        "Appointment Date: The chosen installation facility may allow you to schedule an appointment a few days after applying.",
        "Installation Time: HSRP number plate installation takes 15-30 minutes"
      ],
      conclusion: "From application to installation, the procedure usually takes three to five days. However, service provider and regional demand may modify this."
    },
    {
      category: 'legal',
      question: "What happens in the absence of a HSRP number plate?",
      answer: "HSRP number plates may have legal and security consequences if ignored:",
      consequences: [
        "Legal Penalties: If Indian traffic authorities discover you driving without a HSRP plate, you may face fines.",
        "Enhanced Vulnerability: Lack of HSRP plate security makes your automobile more susceptible to theft or fraud.",
        "Legal Issues: Vehicles without HSRP plates may be refused toll payments and registrations.",
        "Road Safety Risks: Authorities may have trouble tracking and certifying your automobile without a HSRP."
      ],
      warning: "These issues may be avoided by following the HSRP standard and installing a high-security number plate."
    },
    
    {
      category: 'application',
      question: "Which documents are required for online HSRP registration?",
      answer: "Applying for a HSRP number plate online requires several necessary documents:",
      documents: [
        "Vehicle Registration Certificate (RC): Verifies automobile ownership and registration.",
        "ID proof: Aadhaar, passport, driver's license, or other government-issued IDs.",
        "Address Proof: Rental agreements, bank accounts, and utility bills verify your address.",
        "Vehicle Details: The RC usually lists the engine, chassis, and fuel type."
      ],
      note: "These prepared papers help streamline registration and simplify the application process."
    },
    {
      category: 'legal',
      question: "Can I copy my HSRP number plate to another car?",
      answer: "Not transferable: HSRP number plates. Each plate is registered and customized for a vehicle.",
      features: [
        "Unique Registration: Each HSRP plate is specifically registered to one vehicle",
        "Non-Transferable: The HSRP plate cannot be transferred when you sell or scrap your automobile",
        "New Owner Responsibility: The new owner must apply for a new HSRP number plate"
      ],
      warning: "The HSRP plate cannot be transferred to another vehicle. Instead, the new owner must apply for a new HSRP number plate that matches the vehicle's updated registration."
    },
    {
      category: 'technical',
      question: "How can I check my HSRP application status?",
      answer: "Use these instructions to check your HSRP application status:",
      steps: [
        "Go to the Official Website page where you applied for the HSRP number plate.",
        "Search for 'Track Your Order' or similar options on the site.",
        "Enter your order number, automobile registration number, and captcha code.",
        "After providing these information, you may examine your HSRP application's status and projected installation date."
      ],
      note: "This tracking system ensures you can arrange for the installation of your new HSRP number plate and offers application updates."
    },
    {
      category: 'technical',
      question: "Can I receive a HSRP number plate if my current one is lost or destroyed?",
      answer: "For missing or damaged HSRP number plates, you may get a replica. Like the initial application, the process:",
      steps: [
        "Visit the official website using the same gateway you applied for the HSRP.",
        "Look into getting a duplicate or replacement HSRP number plate.",
        "Enter your automobile registration and missing or damaged plate information.",
        "Complete the replacement plate purchasing process by paying the fee.",
        "After your application is processed, you may schedule the duplicate HSRP number plate installation."
      ],
      conclusion: "Replacing a missing or damaged HSRP plate immediately helps protect your car's security and legality."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.color || 'gray';
  };

  const colorClasses = {
    gray: { bg: 'bg-gray-100', text: 'text-gray-700', border: 'border-gray-300', badge: 'bg-gray-500' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300', badge: 'bg-blue-500' },
    green: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-300', badge: 'bg-green-500' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300', badge: 'bg-purple-500' },
    yellow: { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-300', badge: 'bg-yellow-500' },
    red: { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300', badge: 'bg-red-500' }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <span className="mr-2">💡</span>
            Got Questions? We've Got Answers
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            HSRP Number Plate
            <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text mt-2">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about High Security Registration Plates. 
            Browse by category or search all questions.
          </p>
        </div>

      

        {/* FAQ Section */}
        <div className="grid grid-cols-1 gap-6">
          {filteredFaqs.map((faq, index) => {
            const colors = colorClasses[getCategoryColor(faq.category)];
            const categoryInfo = categories.find(cat => cat.id === faq.category);
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 hover:border-blue-200"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-start hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-4 flex-1">
                    <div className={`flex-shrink-0 w-12 h-12 ${colors.badge} text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-lg`}>
                      {categoryInfo?.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                          {categoryInfo?.name}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${colors.bg} flex items-center justify-center`}>
                    <svg
                      className={`w-6 h-6 ${colors.text} transform transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className={`border-t-2 ${colors.border} pt-6`}>
                      <p className="text-gray-700 mb-6 text-lg leading-relaxed">{faq.answer}</p>
                      
                      {/* Features List */}
                      {faq.features && (
                        <div className={`${colors.bg} rounded-xl p-6 mb-6`}>
                          <h4 className={`font-bold ${colors.text} mb-4 text-lg flex items-center`}>
                            <span className="mr-2">✨</span>
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {faq.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <svg className={`w-6 h-6 ${colors.text} mt-0.5 mr-3 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Steps List */}
                      {faq.steps && (
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                          <h4 className="font-bold text-blue-700 mb-4 text-lg flex items-center">
                            <span className="mr-2">📝</span>
                            Step-by-Step Process
                          </h4>
                          <ol className="space-y-4">
                            {faq.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start">
                                <span className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-full text-sm font-bold flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-lg">
                                  {stepIndex + 1}
                                </span>
                                <span className="text-gray-700 flex-1">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {/* Timeline List */}
                      {faq.timeline && (
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
                          <h4 className="font-bold text-purple-700 mb-4 text-lg flex items-center">
                            <span className="mr-2">⏱️</span>
                            Processing Timeline
                          </h4>
                          <ul className="space-y-3">
                            {faq.timeline.map((time, timeIndex) => (
                              <li key={timeIndex} className="flex items-start text-gray-700">
                                <span className="w-3 h-3 bg-purple-500 rounded-full mr-4 mt-1.5 flex-shrink-0"></span>
                                <span className="flex-1">{time}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Pricing Table */}
                      {faq.pricing && (
                        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-6">
                          <h4 className="font-bold text-yellow-700 mb-4 text-lg flex items-center">
                            <span className="mr-2">💰</span>
                            Pricing Information
                          </h4>
                          <div className="space-y-3">
                            {faq.pricing.map((item, priceIndex) => (
                              <div key={priceIndex} className="flex justify-between items-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                                <span className="text-gray-800 font-semibold">{item.type}</span>
                                <span className="text-orange-600 font-bold text-lg">{item.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Documents List */}
                      {faq.documents && (
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6">
                          <h4 className="font-bold text-green-700 mb-4 text-lg flex items-center">
                            <span className="mr-2">📄</span>
                            Required Documents
                          </h4>
                          <ul className="space-y-3">
                            {faq.documents.map((doc, docIndex) => (
                              <li key={docIndex} className="flex items-start">
                                <svg className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Consequences List */}
                      {faq.consequences && (
                        <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 mb-6">
                          <h4 className="font-bold text-red-700 mb-4 text-lg flex items-center">
                            <span className="mr-2">⚠️</span>
                            Important Warnings
                          </h4>
                          <ul className="space-y-3">
                            {faq.consequences.map((consequence, consequenceIndex) => (
                              <li key={consequenceIndex} className="flex items-start">
                                <svg className="w-6 h-6 text-red-500 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{consequence}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Note */}
                      {faq.note && (
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-4 rounded-r-lg">
                          <div className="flex items-start">
                            <span className="text-2xl mr-3">💡</span>
                            <p className="text-blue-800 font-medium">{faq.note}</p>
                          </div>
                        </div>
                      )}

                      {/* Warning */}
                      {faq.warning && (
                        <div className="bg-red-50 border-l-4 border-red-500 p-5 mb-4 rounded-r-lg">
                          <div className="flex items-start">
                            <span className="text-2xl mr-3">⚠️</span>
                            <p className="text-red-800 font-bold">{faq.warning}</p>
                          </div>
                        </div>
                      )}

                      {/* Conclusion */}
                      {faq.conclusion && (
                        <div className={`${colors.bg} border-l-4 ${colors.border} p-5 rounded-r-lg`}>
                          <p className={`${colors.text} font-semibold text-lg`}>{faq.conclusion}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

       
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default HSRPFAQ;