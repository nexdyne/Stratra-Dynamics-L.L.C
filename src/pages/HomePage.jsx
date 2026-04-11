import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  FlaskConical,
  HardHat,
  Leaf,
  BarChart3,
  GraduationCap,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Protecting People. Restoring Environments.",
      subtitle: "Certified lead abatement and hazardous materials removal for federal, commercial, and residential facilities.",
      image: '/assets/hero1.jpeg?' + Date.now(),
    },
    {
      title: "Full-Lifecycle Environmental Solutions",
      subtitle: "From assessment through remediation â one partner, complete accountability.",
      image: '/assets/hero2.jpg?' + Date.now(),
    },
    {
      title: "Compliance-Driven. Safety-First.",
      subtitle: "EPA, OSHA, and HUD-aligned processes ensuring regulatory excellence on every project.",
      image: '/assets/hero3.webp?' + Date.now(),
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const services = [
    {
      icon: Shield,
      title: "Lead Abatement & Hazardous Materials Removal",
      description: "Safe, compliant removal of lead-based paint, asbestos, mold, PCBs, and other hazardous materials from federal, commercial, and residential facilities.",
      link: "/services/lead-abatement-hazardous-materials",
      image: "/assets/Incident-and-Compliance-Management-for-Construction.webp",
    },
    {
      icon: FlaskConical,
      title: "Environmental Consulting & Industrial Hygiene",
      description: "Comprehensive environmental surveys, air quality testing, industrial hygiene assessments, and risk evaluation by certified professionals.",
      link: "/services/environmental-consulting-industrial-hygiene",
      image: "/assets/iot.jpg",
    },
    {
      icon: HardHat,
      title: "Construction & Renovation Management",
      description: "Owner's representation, design management, and construction oversight for renovation and new-build projects requiring environmental compliance.",
      link: "/services/construction-renovation-management",
      image: "/assets/federal-pro.jpg",
    },
    {
      icon: Leaf,
      title: "Commissioning, Energy & Sustainability",
      description: "Smart building commissioning, energy optimization, and sustainable systems integration for government and commercial facilities.",
      link: "/services/commissioning-energy-sustainability",
      image: "/assets/enery.jpg",
    },
    {
      icon: BarChart3,
      title: "Estimating, Scheduling & Risk Management",
      description: "Project forecasting, cost estimating, schedule management, and predictive risk assessment for complex environmental and construction projects.",
      link: "/services/estimating-scheduling-risk-management",
      image: "/assets/est.jpg",
    },
    {
      icon: GraduationCap,
      title: "Training & Compliance Services",
      description: "HAZWOPER, Lead-Safe RRP, asbestos supervisor, and safety certification training with regulatory compliance program development.",
      link: "/services/training-compliance-services",
      image: "/assets/perdictive-analytics.webp",
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Carousel */}
      <section className="relative h-[75vh] min-h-[500px] overflow-hidden">
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
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded font-semibold transition-colors inline-flex items-center gap-2">
                      Request Consultation
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/#services" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded font-semibold transition-colors">
                      Our Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 w-4'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Tagline Bar */}
      <section className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">
            One partner. Full lifecycle environmental accountability.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl">
              We deliver a full range of environmental and construction services â from hazardous materials assessment through remediation, renovation, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-orange-500 text-white p-2 rounded">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Centauri-Pro Consulting</h2>
              <div className="w-16 h-1 bg-orange-500 mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are an environmental services and construction management firm specializing in
                hazardous materials abatement, industrial hygiene consulting, and compliance-driven
                project delivery for government and commercial clients.
              </p>
              <div className="bg-white border-l-4 border-orange-500 p-6 mb-6 rounded-r-lg shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Our Approach</h3>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    EPA, OSHA, and HUD regulatory compliance on every project
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Certified Industrial Hygienists and licensed abatement professionals
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Real-time project tracking with automated compliance documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                    Single-source accountability from assessment through remediation
                  </li>
                </ul>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors">
                Learn more about us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: Shield,
                      title: "Licensed & Certified",
                      desc: "EPA Lead-Safe certified, HAZWOPER trained, CIH-backed assessments"
                    },
                    {
                      icon: HardHat,
                      title: "Full-Service Capability",
                      desc: "Assessment, abatement, construction, and commissioning under one roof"
                    },
                    {
                      icon: BarChart3,
                      title: "Compliance Excellence",
                      desc: "NIST-aligned processes with automated audit readiness and documentation"
                    }
                  ].map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div className="bg-orange-50 text-orange-600 p-2.5 rounded-lg flex-shrink-0">
                          <ItemIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest News</h2>
              <div className="w-16 h-1 bg-orange-500"></div>
            </div>
            <Link to="/news" className="hidden md:inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors">
              View all news
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: "March 2026",
                title: "EPA Updates Lead-Safe RRP Rule: What Contractors Need to Know",
                description: "New regulations expand renovation, repair, and painting requirements for pre-1978 buildings. Here's how to stay compliant.",
                link: "/news/epa-lead-safe-rrp-update"
              },
              {
                date: "February 2026",
                title: "Centauri-Pro Achieves HAZWOPER Certification Milestone",
                description: "Our team completes advanced hazardous materials operations training, expanding our federal contracting capabilities.",
                link: "/news/hazwoper-certification"
              },
              {
                date: "January 2026",
                title: "Michigan Lead Abatement: Growing Demand for Certified Contractors",
                description: "State and federal funding is driving unprecedented demand for licensed lead abatement professionals across Michigan.",
                link: "/news/michigan-lead-abatement-demand"
              }
            ].map((article, index) => (
              <div key={index} className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-300">
                <div className="p-6">
                  <div className="text-orange-600 text-sm font-semibold mb-3">{article.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.description}</p>
                  <Link to={article.link} className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm">
                    Read more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/news" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors">
              View all news
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to start your project?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            From lead assessment to full remediation â let's discuss how we can help.
          </p>
          <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded font-semibold transition-colors inline-flex items-center gap-2">
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
