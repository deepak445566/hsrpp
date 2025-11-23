import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

const handleform =()=>{
  navigate("/booking")
}


  const imageSrc = "https://d3jbu7vaxvlagf.cloudfront.net/small/v2/category_media/image_17406608837973.jpeg";

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>

      <section className="relative z-10">
        {/* Premium Notification Bar */}
        <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 py-3 overflow-hidden shadow-lg">
          <div className="relative flex">
            <div className="animate-marquee whitespace-nowrap text-white font-bold text-sm lg:text-base flex items-center justify-center">
              <span className="inline-flex items-center mr-8">
                <span className="w-2.5 h-2.5 bg-white rounded-full mr-2 animate-ping"></span>
                🎯 BOOK NOW & GET INSTANT CONFIRMATION
              </span>
              <span className="mr-8">📍 Karnataka • Madhya Pradesh • Andhra Pradesh • Assam • Bihar • Chandigarh • Haryana • Punjab • Gujarat • Himachal Pradesh • Odisha • Uttar Pradesh • West Bengal • NCT of Delhi</span>
              <span className="inline-flex items-center mr-8">
                <span className="w-2.5 h-2.5 bg-white rounded-full mr-2 animate-ping"></span>
                ⚡ SAME DAY INSTALLATION AVAILABLE
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-9xl mx-auto px-6 sm:px-8 lg:px-10 py-6 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
            <div className=" big ">
             

              <h1 className="text-3xl sm:text-2xl lg:text-5xl font-black text-gray-900  mb-6">
                Get Your
                <span className="block text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text animate-gradient">
                  HSRP Plate
                </span>
                <span className="block text-3xl sm:text-2xl lg:text-5xl mt-2">in 24 Hours!</span>
              </h1>

              <p className="text-xl sm:text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl font-light">
                India's #1 HSRP Service Provider. Experience hassle-free booking with 
                <span className="font-bold text-orange-600"> doorstep installation</span>, 
                certified plates, and <span className="font-bold text-orange-600">100% secure payments</span>.
              </p>

              {/* Premium Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border-2 border-green-200 hover:border-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <div className="flex  space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">✓</span>
                    </div>
                    <div className="text-left">
                      <div className="text-gray-900 font-bold text-md">Official Hologram</div>
                      <div className="text-gray-600 text-sm">BIS Certified</div>
                    </div>
                  </div>
                </div>
                
               
                
             
                
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 border-2 border-orange-200 hover:border-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl">🔒</span>
                    </div>
                    <div className="text-left">
                      <div className="text-gray-900 font-bold text-lg">Safe Payment</div>
                      <div className="text-gray-600 text-sm">SSL Protected</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-8">
                <button  onClick={handleform} className="group relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 hover:from-yellow-500 hover:via-orange-600 hover:to-red-600 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-500/50 overflow-hidden">
                  <span className="relative z-10 flex items-center justify-center">
                    <span className="mr-2">🚀</span>
                    Book Your HSRP Now
                  </span>
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
               
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">✓ 100% Authentic</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">🛡️ Secure Process</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">🌐 Pan India</span>
                </div>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative -mt-20">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-3 shadow-2xl border-2 border-white/50 transform hover:scale-105 hover:rotate-1 transition-all duration-500">
                  <img
                    src={imageSrc}
                    alt="Official HSRP Number Plate"
                    className="w-full h-52 sm:h-76 lg:h-[350px] object-cover object-center rounded-2xl shadow-xl"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1549921296-3a4a7bca3c9f?auto=format&fit=crop&w=1400&q=60";
                    }}
                  />
                  
                  {/* Verification Badge */}
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
                    <span className="mr-1">✓</span>
                    VERIFIED
                  </div>
                </div>
                
                {/* Floating Stats - Enhanced */}
                <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-5 shadow-2xl border-4 border-white transform hover:scale-110 transition-transform">
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">50,000+</div>
                    <div className="text-sm text-blue-100 font-semibold">Happy Customers</div>
                  </div>
                </div>
                
                

                {/* Rating Badge */}
                <div className="absolute bottom-8 right-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-2xl border-4 border-white transform hover:scale-110 transition-transform">
                  <div className="text-center">
                    <div className="text-2xl font-black text-white">⭐ 4.9</div>
                    <div className="text-xs text-yellow-100 font-semibold">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 L0,60 Q300,100 600,60 T1200,60 L1200,0 Z" fill="rgba(255,255,255,0.1)"/>
          </svg>
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </div>
  );
};

export default Home;