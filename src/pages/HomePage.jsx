import React, { useState, useEffect, useRef } from 'react';
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

// Scroll-reveal hook
const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, isVisible];
};

// Parallax scroll hook - tracks scroll position within an element
const useParallaxScroll = () => {
  const ref = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far through the viewport the section has scrolled
      // 0 = just entering from bottom, 1 = fully past the top
      const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0), 1);
      setScrollProgress(progress);
      setIsInView(rect.bottom > 0 && rect.top < windowHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [ref, scrollProgress, isInView];
};

const HomePage = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      icon: Shield,
      title: "Lead Abatement & Hazardous Materials Removal",
      description: "Safe, compliant removal of lead-based paint, asbestos, mold, PCBs, and other hazardous materials from federal, commercial, and residential facilities.",
      link: "/services/lead-abatement-hazardous-materials",
      image: "https://images.pexels.com/photos/36553071/pexels-photo-36553071.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      icon: FlaskConical,
      title: "Environmental Consulting & Industrial Hygiene",
      description: "Comprehensive environmental surveys, air quality testing, industrial hygiene assessments, and risk evaluation by certified professionals.",
      link: "/services/environmental-consulting-industrial-hygiene",
      image: "https://images.pexels.com/photos/8533061/pexels-photo-8533061.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      icon: HardHat,
      title: "Construction & Renovation Management",
      description: "Owner's representation, design management, and construction oversight for renovation and new-build projects requiring environmental compliance.",
      link: "/services/construction-renovation-management",
      image: "https://images.pexels.com/photos/2217214/pexels-photo-2217214.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      icon: Leaf,
      title: "Commissioning, Energy & Sustainability",
      description: "Smart building commissioning, energy optimization, and sustainable systems integration for government and commercial facilities.",
      link: "/services/commissioning-energy-sustainability",
      image: "https://images.pexels.com/photos/16586151/pexels-photo-16586151.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      icon: BarChart3,
      title: "Estimating, Scheduling & Risk Management",
      description: "Project forecasting, cost estimating, schedule management, and predictive risk assessment for complex environmental and construction projects.",
      link: "/services/estimating-scheduling-risk-management",
      image: "https://images.pexels.com/photos/8482865/pexels-photo-8482865.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      icon: GraduationCap,
      title: "Training & Compliance Services",      description: "HAZWOPER, Lead-Safe RRP, asbestos supervisor, and safety certification training with regulatory compliance program development.",
      link: "/services/training-compliance-services",
      image: "https://images.pexels.com/photos/35082108/pexels-photo-35082108.jpeg?auto=compress&cs=tinysrgb&w=1200",
    }
  ];&cs=tinysrgb&w=1200", title: "Municipal Water Treatment", category: "Environmental" },
    { image: "https://images.pexels.com/photos/8960942/pexels-photo-8960942.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "HAZWOPER Training Campus", category: "Training" },
    { image: "https://images.pexels.com/photos/8293680/pexels-photo-8293680.jpeg?auto=compress&cs=tinysrgb&w=1200", title: "Federal Compliance Audit", category: "Compliance" },
  ];

  // Parallax refs
  const [parallaxRef, scrollProgress, parallaxInView] = useParallaxScroll();
  const [showcaseTextRef, showcaseTextVisible] = useInView(0.2);
  const [insightRef, insightVisible] = useInView(0.2);

  // Scroll reveal refs for services
  const [servicesRef, servicesVisible] = useInView(0.1);
  const [aboutRef, aboutVisible] = useInView(0.1);
  const [newsRef, newsVisible] = useInView(0.1);

  return (
    <div className="bg-white">
      {/* Hero Section - Single powerful image */}
      <section className="relative h-[75vh] sm:h-[75vh] md:h-[85vh] min-h-[500px] sm:min-h-[400px] md:min-h-[500px] max-h-[700px] sm:max-h-[600px] md:max-h-[700px] lg:max-h-[780px] xl:max-h-[860px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-[85%_center] bg-no-repeat transition-transform duration-[20000ms] ease-linear"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8961070/pexels-photo-8961070.jpeg?auto=compress&cs=tinysrgb&w=2400)',
            transform: heroLoaded ? 'scale(1.08)' : 'scale(1)',
          }}
        >
          {/* Gradient overlay - lighter, more professional */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-gray-900/20"></div>
        </div>

        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full">
            <div className="max-w-2xl xl:max-w-3xl">
              {/* Eyebrow */}
              <div
                className="transition-all duration-1000 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-px bg-orange-500"></div>
                  <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
                    Environmental Services & Construction Management
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1
                className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 sm:mb-6 text-white leading-[1.15] sm:leading-[1.1] transition-all duration-1000 delay-200 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                Built to protect people{' '}
                <span className="block text-orange-400">and restore environments.</span>
              </h1>

              {/* Subtitle - brief */}
              <p
                className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 text-gray-300 leading-relaxed max-w-xl xl:max-w-2xl transition-all duration-1000 delay-400 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                From hazardous materials assessment through full remediation
                and construction closeout. One partner, complete accountability.
              </p>

              {/* Single CTA */}
              <div
                className="transition-all duration-1000 delay-500 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <Link
                  to="/contact"
                  className="group bg-orange-600 hover:bg-orange-500 text-white px-6 sm:px-8 py-4 rounded font-semibold transition-all duration-300 inline-flex items-center justify-center gap-3 text-base sm:text-lg min-h-[52px] w-full sm:w-auto"
                >
                  Start a Conversation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-all duration-1000 delay-700"
          style={{ opacity: heroLoaded ? 1 : 0 }}
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* Project Showcase - Parallax Scroll */}
      <section ref={parallaxRef} className="relative bg-white py-10 md:py-16 overflow-hidden">
        <div className="relative z-10">
          {/* Section heading */}
          <div
            ref={showcaseTextRef}
            className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 mb-12 transition-all duration-800 ease-out"
            style={{
              opacity: showcaseTextVisible ? 1 : 0,
              transform: showcaseTextVisible ? 'translateY(0)' : 'translateY(40px)',
            }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Safe environments. Smart construction.
            </h2>
          </div>

          {/* Top row - scrolls LEFT as user scrolls down */}
          <div className="mb-6 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-100 ease-out"
              style={{
                transform: `translateX(${-(scrollProgress - 0.3) * (window.innerWidth < 640 ? 150 : 350)}px)`,
          paddingLeft: '2rem',
              }}
            >
              {projectsTop.map((project, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[240px] sm:w-[340px] md:w-[420px] lg:w-[480px] xl:w-[560px] h-[160px] sm:h-[200px] md:h-[240px] xl:h-[280px] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500">
                    <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1 block opacity-70 group-hover:opacity-100 transition-opacity duration-500">{project.category}</span>
                    <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row - scrolls RIGHT as user scrolls down */}
          <div className="-mt-4 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-100 ease-out"
              style={{
                transform: `translateX(${(scrollProgress - 0.3) * (window.innerWidth < 640 ? 150 : 350) - (window.innerWidth < 640 ? 60 : 150)}px)`,
                paddingLeft: '2rem',
              }}
            >
              {projectsBottom.map((project, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[240px] sm:w-[340px] md:w-[420px] lg:w-[480px] xl:w-[560px] h-[160px] sm:h-[200px] md:h-[240px] xl:h-[280px] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-transfor construction.
            </h2>
          </div>

          {/* Top row - scrolls LEFT as user scrolls down */}
          <div className="mb-6 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-100 ease-out"
              style={{
                transform: `translateX(${-(scrollProgress - 0.3) * (window.innerWidth < 640 ? 150 : 350)}px)`,
          paddingLeft: '2rem',
              }}
            >
              {projectsTop.map((project, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[240px] sm:w-[340px] md:w-[420px] lg:w-[480px] xl:w-[560px] h-[160px] sm:h-[200px] md:h-[240px] xl:h-[280px] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500">
                    <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1 block opacity-70 group-hover:opacity-100 transition-opacity duration-500">{project.category}</span>
                    <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row - scrolls RIGHT as user scrolls down */}
          <div className="-mt-4 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-100 ease-out"
              style={{
                transform: `translateX(${(scrollProgress - 0.3) * (window.innerWidth < 640 ? 150 : 350) - (window.innerWidth < 640 ? 60 : 150)}px)`,
                paddingLeft: '2rem',
              }}
            >
              {projectsBottom.map((project, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[240px] sm:w-[340px] md:w-[420px] lg:w-[480px] xl:w-[560px] h-[160px] sm:h-[200px] md:h-[240px] xl:h-[280px] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500">
                    <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1 block opacity-70 group-hover:opacity-100 transition-opacity duration-500">{project.category}</span>
                    <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="bg-gray-100 relative overflow-hidden">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto">
          <div
            ref={insightRef}
            className="grid grid-cols-1 md:grid-cols-2 transition-all duration-800 ease-out"
            style={{
              opacity: insightVisible ? 1 : 0,
              transform: insightVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            {/* Left - Content */}
            <div className="bg-gray-800 px-5 sm:px-8 md:px-14 xl:px-20 py-10 md:py-16 flex flex-col justify-center">
              <span className="text-orange-400 text-sm font-bold tracking-widest uppercase mb-6 block">Insights</span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-white leading-snug mb-8">
                Every project we deliver is a commitment to safer communities, healthier buildings, and lasting environmental impact.
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-orange-500/60"></div>
                <p className="text-gray-400 text-sm tracking-wider uppercase">Centauri-Pro Consulting</p>
              </div>
            </div>

            {/* Right - Featured Card */}
            <div className="bg-gray-200 px-5 sm:px-8 md:px-14 xl:px-20 py-10 md:py-16 flex flex-col justify-center">
              <span className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-4 block">Featured</span>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="mb-4">
                  <p className="text-gray-900 font-bold text-sm">Environmental Safety</p>
                  <p className="text-gray-500 text-xs">Latest from our team</p>
                </div>
                <h3 className="text-gray-900 text-lg font-bold mb-2">Why proactive environmental assessments save federal agencies millions</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">Early identification of hazardous materials during pre-renovation surveys reduces project timelines by an average of 40% and prevents costly change orders.</p>
                <Link to="/services" className="text-orange-600 text-sm font-semibold hover:text-orange-500 transition-colors inline-flex items-center gap-1 py-2 min-h-[44px]">
                  Read more <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - with scroll reveal */}
      <section id="services" className="py-12 sm:py-20 xl:py-24 bg-white">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div
            ref={servicesRef}
            className="mb-16 transition-all duration-700 ease-out"
            style={{
              opacity: servicesVisible ? 1 : 0,
              transform: servicesVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">What We Do</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl">
              We deliver a full range of environmental and construction services,
              from hazardous materials assessment through remediation, renovation, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-500"
                  style={{
                    opacity: servicesVisible ? 1 : 0,
                    transform: servicesVisible ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: `${200 + index * 100}ms`,
                  }}
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 xl:h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all py-2 min-h-[44px]">
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

      {/* About Section - with scroll reveal */}
      <section className="py-12 sm:py-20 xl:py-24 bg-gray-50">
        <div
          ref={aboutRef}
          className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 transition-all duration-700 ease-out"
          style={{
            opacity: aboutVisible ? 1 : 0,
            transform: aboutVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-center">
            <div>
              <span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">Who We Are</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 mb-4">About Centauri-Pro Consulting</h2>
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
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    EPA, OSHA, and HUD regulatory compliance on every project
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    Certified Industrial Hygienists and licensed abatement professionals
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    Real-time project tracking with automated compliance documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    Single-source accountability from assessment through remediation
                  </li>
                </ul>
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors py-2 min-h-[44px]">
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
                      title: "Licensed & Certified",
                      desc: "EPA Lead-Safe certified, HAZWOPER trained, CIH-backed assessments"
                    },
                    {
                      title: "Full-Service Capability",
                      desc: "Assessment, abatement, construction, and commissioning under one roof"
                    },
                    {
                      title: "Compliance Excellence",
                      desc: "NIST-aligned processes with automated audit readiness and documentation"
                    }
                  ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section - with scroll reveal */}
      <section className="py-12 sm:py-20 xl:py-24 bg-white">
        <div
          ref={newsRef}
          className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 transition-all duration-700 ease-out"
          style={{
            opacity: newsVisible ? 1 : 0,
            transform: newsVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">Insights</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 mb-4">Latest News</h2>
              <div className="w-16 h-1 bg-orange-500"></div>
            </div>
            <Link to="/news" className="hidden md:inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors py-2 min-h-[44px]">
              View all news
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
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
              <div
                key={index}
                className="group border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-500"
                style={{
                  opacity: newsVisible ? 1 : 0,
                  transform: newsVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: `${200 + index * 150}ms`,
                }}
              >
                <div className="p-6">
                  <div className="text-orange-600 text-sm font-semibold mb-3">{article.date}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{article.description}</p>
                  <Link to={article.link} className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold text-sm py-2 min-h-[44px]">
                    Read more
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/news" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors py-2 min-h-[44px]">
              View all news
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 xl:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Ready to start your project?</h2>
          <p className="text-gray-400 mb-8 text-base sm:text-lg">
            From lead assessment to full remediation â let's discuss how we can help.
          </p>
          <Link to="/contact" className="bg-orange-600 hover:bg-orange-500 text-white px-6 sm:px-8 py-4 rounded font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2 text-base sm:text-lg group min-h-[52px] w-full sm:w-auto">
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
