import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Zap, 
  Monitor, 
  Package, 
  Truck, 
  BarChart3,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Building Tomorrow's Government Solutions",
      subtitle: "Modern infrastructure for federal missions",
      image: '/assets/hero1.jpeg?' + Date.now(),
    },
    {
      title: "Delivering Mission-Critical Infrastructure",
      subtitle: "Precision execution for government projects",
      image: '/assets/hero2.jpg?' + Date.now(),
    },
    {
      title: "Powering Smart Government Operations",
      subtitle: "AI-driven solutions for federal agencies",
      image: '/assets/hero3.webp?' + Date.now(),
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-96 md:h-[70vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-opacity-40"></div>
            </div>
            <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
              <div className="max-w-4xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {slide.subtitle}
                </p>
                <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                  REQUEST CONSULTATION
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
        >
          <ChevronRight size={24} />
        </button> */}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-orange-500' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-gray-700 mb-4">Our Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Construction & Infrastructure Management",
                description: "Modern federal facility construction with AI-driven project oversight and compliance management.",
                image: "/assets/Incident-and-Compliance-Management-for-Construction.webp",
                
              },
              {
                title: "Commissioning, Energy & Sustainability",
                description: "Smart building systems and energy optimization for government facilities with IoT integration.",
                image: "/assets/enery.jpg",
                
              },
              {
                title: "Smart City & Government IT Solutions",
                description: "Digital transformation and technology integration for modern government operations.",
                image: "/assets/smart-city.jpg",
                
              },
              {
                title: "Government Supply & Procurement Solutions",
                description: "Streamlined procurement processes with digital supply chain management and compliance tracking.",
                image: "/assets/gove.webp",
                
              },
              {
                title: "Public Sector Logistics & Distribution",
                description: "Efficient logistics coordination with real-time tracking and automated delivery systems.",
                image: "/assets/log.jpg",
                
              },
              {
                title: "Estimating, Scheduling & Risk Management",
                description: "AI-powered project forecasting with predictive analytics and automated risk assessment.",
                image: "/assets/est.jpg",
                
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image Header Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0  flex items-center justify-center text-center p-6">
                    <h3 className="text-xl font-bold text-white leading-tight">{service.title}</h3>
                  </div>
                </div>
                
                {/* White Content Section */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link 
                    to={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} 
                    className={`inline-block   text-orange-600   font-medium transition-colors`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Centauri-Pro Consulting</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a forward-thinking government solutions firm specializing in AI-driven project management, 
                compliance-by-design approaches, and comprehensive federal contracting services.
              </p>
              <div className="bg-gray-50 border-l-4  p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Dashboard Advantage</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Real-time task completion and field reporting</li>
                  <li>• Automated compliance documentation and audit readiness</li>
                  <li>• Predictive risk indicators across schedule, performance, and staffing</li>
                  <li>• Integrated field team quality assurance and safety metrics</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Our TBM (Technology Business Model) approach ensures NIST-aligned governance while delivering 
                measurable outcomes for federal agencies.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-2 rounded-full mr-4 mt-1">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Proven Experience</h4>
                    <p className="text-gray-600">Leadership team with extensive government contracting background</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-2 rounded-full mr-4 mt-1">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-Driven Innovation</h4>
                    <p className="text-gray-600">Cutting-edge technology integration for superior project outcomes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-orange-500 text-white p-2 rounded-full mr-4 mt-1">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Compliance Excellence</h4>
                    <p className="text-gray-600">NIST-aligned processes ensuring regulatory compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: "December 15, 2024",
                title: "AI in Government Contracting: The Future is Now",
                description: "Exploring how artificial intelligence is transforming government project management and compliance oversight.",
                link: "/news/ai-government-contracting"
              },
              {
                date: "December 10, 2024",
                title: "Sustainable Infrastructure: Building for Tomorrow",
                description: "How energy optimization and smart building systems are revolutionizing government facilities.",
                link: "/news/sustainable-infrastructure"
              },
              {
                date: "December 5, 2024",
                title: "Digital Transformation in Federal Programs",
                description: "The role of digital twins and BIM technology in modern construction project management.",
                link: "/news/digital-transformation"
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="text-orange-600 text-sm font-semibold mb-2">{article.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.description}</p>
                  <Link to={article.link} className="text-orange-600 hover:text-orange-700 font-semibold">
                    Read more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
