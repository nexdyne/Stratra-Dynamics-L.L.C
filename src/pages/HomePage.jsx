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

  // Project showcase data
  const projectsTop = [
    { image: "/assets/hero1.jpeg", title: "Federal Building Remediation", category: "Lead Abatement" },
    { image: "/assets/Incident-and-Compliance-Management-for-Construction.webp", title: "Industrial Compliance Overhaul", category: "Environmental Consulting" },
    { image: "/assets/iot.jpg", title: "Smart Monitoring Systems", category: "Industrial Hygiene" },
    { image: "/assets/federal-pro.jpg", title: "Government Facility Renovation", category: "Construction Management" },
    { image: "/assets/enery.jpg", title: "Energy Systems Commissioning", category: "Sustainability" },
  ];
  const projectsBottom = [
    { image: "/assets/est.jpg", title: "Cost Forecasting Platform", category: "Risk Management" },
    { image: "/assets/perdictive-analytics.webp", title: "Predictive Analytics Integration", category: "Scheduling" },
    { image: "/assets/hero1.jpeg", title: "Municipal Water Treatment", category: "Environmental" },
    { image: "/assets/Incident-and-Compliance-Management-for-Construction.webp", title: "HAZWOPER Training Campus", category: "Training" },
    { image: "/assets/federal-pro.jpg", title: "Federal Compliance Audit", category: "Compliance" },
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
      <section className="relative h-[85vh] min-h-[500px] max-h-[780px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20000ms] ease-linear"
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-[1.1] transition-all duration-1000 delay-200 ease-out"
                style={{
                  opacity: heroLoaded ? 1 : 0,
                  transform: heroLoaded ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                Built to protect people
                <span className="block text-orange-400">and restore environments.</span>
              </h1>

              {/* Subtitle - brief */}
              <p
                className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-xl transition-all duration-1000 delay-400 ease-out"
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
                  className="group bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded font-semibold transition-all duration-300 inline-flex items-center gap-3 text-lg"
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
      <section ref={parallaxRef} className="relative bg-gray-950 py-24 overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="relative z-10">
          {/* Section heading */}
          <div
            ref={showcaseTextRef}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 transition-all duration-800 ease-out"
            style={{
              opacity: showcaseTextVisible ? 1 : 0,
              transform: showcaseTextVisible ? 'translateY(0)' : 'translateY(40px)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-orange-500"></div>
              <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Built to move the industry
              <span className="block text-orange-400">forward.</span>
            </h2>
          </div>

          {/* Top row - scrolls LEFT as user scrolls down */}
          <div className="mb-6 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-100 ease-out"
              style={{
                transform: `translateX(${-scrollProgress * 250}px)`,
                paddingLeft: '2rem',
              }}
            >
              {projectsTop.map((project, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[340px] md:w-[420px] lg:w-[480px] h-[260px] md:h-[300px] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.category}</span>
                    <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row - scrolls RIGHT as user scrolls down */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-100 ease-out"
              style={{
                transform: `translateX(${scrollProgress * 250 - 300}px)`,
                paddingLeft: '2rem',
              }}
            >
              {projectsBottom.map((project, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-[340px] md:w-[420px] lg:w-[480px] h-[260px] md:h-[300px] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-orange-400 text-xs font-semibold tracking-wider uppercase mb-1 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">{project.category}</span>
                    <h3 className="text-white text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insight Section */}
      <section className="bg-gray-900 py-20 relative overflow-hidden">
        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"></div>

        <div
          ref={insightRef}
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-800 ease-out"
          style={{
            opacity: insightVisible ? 1 : 0,
            transform: insightVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-px bg-orange-500"></div>
            <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Insight</span>
            <div className="w-8 h-px bg-orange-500"></div>
          </div>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed mb-8">
            Every project we deliver is a commitment to
            <span className="text-orange-400 font-semibold"> safer communities</span>,
            <span className="text-orange-400 font-semibold"> healthier buildings</span>, and
            <span className="text-orange-400 font-semibold"> lasting environmental impact</span>.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-orange-500/50"></div>
            <p className="text-gray-400 text-sm tracking-wider uppercase">Centauri-Pro Consulting</p>
            <div className="w-12 h-px bg-orange-500/50"></div>
          </div>
        </div>
      </section>

      {/* Services Section - with scroll reveal */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={servicesRef}
            className="mb-16 transition-all duration-700 ease-out"
            style={{
              opacity: servicesVisible ? 1 : 0,
              transform: servicesVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">What We Do</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Our Services</h2>
            <div className="w-16 h-1 bg-orange-500 mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl">
              We deliver a full range of environmental and construction services,
              from hazardous materials assessment through remediation, renovation, and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

      {/* About Section - with scroll reveal */}
      <section className="py-20 bg-gray-50">
        <div
          ref={aboutRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out"
          style={{
            opacity: aboutVisible ? 1 : 0,
            transform: aboutVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">Who We Are</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">About Centauri-Pro Consulting</h2>
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
                          <h4 className="font-semibob-6 leading-relaxed">
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

      {/* Latest News Section - with scroll reveal */}
      <section className="py-20 bg-white">
        <div
          ref={newsRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out"
          style={{
            opacity: newsVisible ? 1 : 0,
            transform: newsVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-orange-600 text-sm font-semibold tracking-widest uppercase">Insights</span>
              <h2 className="text-4xl font-bold text-gray-900 mt-3 mb-4">Latest News</h2>
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
            From lead assessment to full remediation — let's discuss how we can help.
          </p>
          <Link to="/contact" className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded font-semibold transition-all duration-300 inline-flex items-center gap-2 text-lg group">
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
