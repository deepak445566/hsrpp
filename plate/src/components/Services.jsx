import React, { useState } from "react";
import { 
  FaCar, 
  FaMotorcycle, 
  FaTruck, 
  FaTractor, 
  FaBolt, 
  FaStickerMule, 
  FaRegListAlt,
  FaArrowRight,
  FaCheckCircle,
  FaHeadset,
  FaShieldAlt
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const [loadingId, setLoadingId] = useState(null);
  const navigate = useNavigate();

  // Get unique colors for each service
  const getServiceTheme = (id) => {
    const themes = {
      highSecurity: {
        iconColor: "text-red-600",
        bgColor: "bg-red-100",
        hoverBg: "hover:bg-red-600",
        gradient: "from-red-500 to-red-600",
        hoverGradient: "hover:from-red-600 hover:to-red-700"
      },
      twoWheeler: {
        iconColor: "text-green-600",
        bgColor: "bg-green-100",
        hoverBg: "hover:bg-green-600",
        gradient: "from-green-500 to-green-600",
        hoverGradient: "hover:from-green-600 hover:to-green-700"
      },
      fourWheeler: {
        iconColor: "text-blue-600",
        bgColor: "bg-blue-100",
        hoverBg: "hover:bg-blue-600",
        gradient: "from-blue-500 to-blue-600",
        hoverGradient: "hover:from-blue-600 hover:to-blue-700"
      },
      colorStickers: {
        iconColor: "text-purple-600",
        bgColor: "bg-purple-100",
        hoverBg: "hover:bg-purple-600",
        gradient: "from-purple-500 to-purple-600",
        hoverGradient: "hover:from-purple-600 hover:to-purple-700"
      },
      heavyWheeler: {
        iconColor: "text-orange-600",
        bgColor: "bg-orange-100",
        hoverBg: "hover:bg-orange-600",
        gradient: "from-orange-500 to-orange-600",
        hoverGradient: "hover:from-orange-600 hover:to-orange-700"
      },
      tractorTrailer: {
        iconColor: "text-yellow-600",
        bgColor: "bg-yellow-100",
        hoverBg: "hover:bg-yellow-600",
        gradient: "from-yellow-500 to-yellow-600",
        hoverGradient: "hover:from-yellow-600 hover:to-yellow-700"
      },
      electricVehicle: {
        iconColor: "text-emerald-600",
        bgColor: "bg-emerald-100",
        hoverBg: "hover:bg-emerald-600",
        gradient: "from-emerald-500 to-emerald-600",
        hoverGradient: "hover:from-emerald-600 hover:to-emerald-700"
      },
      trackOrder: {
        iconColor: "text-indigo-600",
        bgColor: "bg-indigo-100",
        hoverBg: "hover:bg-indigo-600",
        gradient: "from-indigo-500 to-indigo-600",
        hoverGradient: "hover:from-indigo-600 hover:to-indigo-700"
      }
    };
    return themes[id] || themes.fourWheeler;
  };

  const services = [
    {
      id: "highSecurity",
      title: "High Security Registration Plate with Colour Sticker",
      description: "Get your high security registration plate with color sticker as per government standards",
      icon: <FaShieldAlt className="text-2xl" />,
      features: ["ISO Certified", "Hologram Sticker", "Laser Branded"]
    },
    {
      id: "twoWheeler",
      title: "Two Wheeler Plate",
      description: "Book number plates for two-wheelers - bikes, scooters, and motorcycles",
      icon: <FaMotorcycle className="text-2xl" />,
      features: ["Durable Material", "Weather Resistant", "Easy Installation"]
    },
    {
      id: "fourWheeler",
      title: "Four Wheeler Plate",
      description: "Book number plates for four-wheelers - cars, SUVs, and sedans",
      icon: <FaCar className="text-2xl" />,
      features: ["Standard Size", "Reflective Surface", "Quick Delivery"]
    },
    {
      id: "colorStickers",
      title: "Only Colour Stickers",
      description: "Get only color stickers for your vehicle with secure features",
      icon: <FaStickerMule className="text-2xl" />,
      features: ["Anti-Counterfeit", "Self-Destructive", "QR Code"]
    },
    {
      id: "heavyWheeler",
      title: "Heavy Wheeler Plate",
      description: "Book number plates for heavy vehicles - trucks, buses, and lorries",
      icon: <FaTruck className="text-2xl" />,
      features: ["Extra Durable", "Large Size", "Commercial Grade"]
    },
    {
      id: "tractorTrailer",
      title: "Tractor & Trailer Number Plate",
      description: "Book number plates for tractors and trailers - agricultural and commercial",
      icon: <FaTractor className="text-2xl" />,
      features: ["Rust Proof", "Farm Ready", "Custom Sizes"]
    },
    {
      id: "electricVehicle",
      title: "Electric Vehicle Number Plate",
      description: "Book number plates for electric vehicles with special identification",
      icon: <FaBolt className="text-2xl" />,
      features: ["Green Border", "EV Specific", "Fast Track"]
    },
    {
      id: "trackOrder",
      title: "Track Your Order & Grievance Redressal",
      description: "Track your order status and submit grievances for quick resolution",
      icon: <FaHeadset className="text-2xl" />,
      features: ["Real-time Tracking", "24/7 Support", "Quick Resolution"]
    },
  ];

  const handleBook = (serviceId) => {
    setLoadingId(serviceId);
    // Simulate loading and then navigate to booking page
    setTimeout(() => {
      navigate('/booking'
       );
      setLoadingId(null);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-700 text-sm font-semibold uppercase tracking-wide">
              🚗 Official Vehicle Services
            </span>
          </div>
          
          <h1 className="text-4xl big sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Vehicle Number Plate
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Services
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Get your vehicle number plates and color stickers easily — fast, secure, and completely hassle-free process with government approval.
          </p>
        </div>

        {/* Enhanced Service Cards */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => {
            const theme = getServiceTheme(service.id);
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 hover:-translate-y-3 cursor-pointer border border-gray-100 overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative flex flex-col items-center text-center h-full">
                  
                  {/* Icon Container */}
                  <div className={`mb-6 ${theme.bgColor} p-5 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-md`}>
                    <span className={`${theme.iconColor} group-hover:text-white transition-colors duration-500`}>
                      {service.icon}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                    {service.description}
                  </p>

                  {/* Book Now Button */}
                  <button
                    onClick={handleBook}
                    disabled={loadingId === service.id}
                    className={`w-full bg-gradient-to-r ${theme.gradient} ${theme.hoverGradient} text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2`}
                  >
                    {loadingId === service.id ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <span>Book Now</span>
                        <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;