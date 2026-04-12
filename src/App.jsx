import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Menu,
  X,
  ChevronDown
} from 'lucide-react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

// Import page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LeadershipPage from './pages/LeadershipPage';
import ContractVehiclesPage from './pages/ContractVehiclesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import CareersPage from './pages/CareersPage';
import LegalNoticesPage from './pages/LegalNoticesPage';
import ContactPage from './pages/ContactPage';

// Import new service pages
import LeadAbatementPage from './pages/services/LeadAbatementPage';
import EnvironmentalConsultingPage from './pages/services/EnvironmentalConsultingPage';
import ConstructionRenovationPage from './pages/services/ConstructionRenovationPage';
import EnergySustainabilityPage from './pages/services/EnergySustainabilityPage';
import RiskManagementPage from './pages/services/RiskManagementPage';
import TrainingCompliancePage from './pages/services/TrainingCompliancePage';
import ITSolutionsPage from './pages/services/ITSolutionsPage';
import LogisticsPage from './pages/services/LogisticsPage';
import SupplyProcurementPage from './pages/services/SupplyProcurementPage';
import ConstructionManagementPage from './pages/services/ConstructionManagementPage';

const serviceLinks = [
  { name: "Lead Abatement & Hazardous Materials", path: "/services/lead-abatement-hazardous-materials" },
  { name: "Environmental Consulting & Industrial Hygiene", path: "/services/environmental-consulting-industrial-hygiene" },
  { name: "Construction & Renovation Management", path: "/services/construction-renovation-management" },
  { name: "Commissioning, Energy & Sustainability", path: "/services/commissioning-energy-sustainability" },
  { name: "Estimating, Scheduling & Risk Management", path: "/services/estimating-scheduling-risk-management" },
  { name: "Training & Compliance Services", path: "/services/training-compliance-services" },
  { name: "IT Solutions & Cybersecurity", path: "/services/it-solutions-cybersecurity" },
  { name: "Logistics & Fleet Management", path: "/services/logistics-fleet-management" },
  { name: "Supply Chain & Procurement", path: "/services/supply-chain-procurement" },
  { name: "Construction & Program Management", path: "/services/construction-program-management" },
];

// Main App Component with Navigation
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileServicesOpen(false);
    setIsMobileAboutOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileAboutOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        {/* Main Navigation */}
        <nav className="bg-white sticky top-0 z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Utility Row */}
            <div className="hidden lg:flex justify-end items-center py-2 text-sm border-b border-gray-100">
              <Link to="/careers" className="text-gray-500 hover:text-gray-900 transition-colors py-1">
                Careers
              </Link>
              <span className="text-gray-300 mx-3">|</span>
              <Link to="/contact" className="text-gray-500 hover:text-gray-900 transition-colors py-1">
                Contact Us
              </Link>
            </div>

            <div className="flex justify-between items-center py-5">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link to="/" className="flex flex-col" onClick={closeMobileMenu}>
                  <span className="text-3xl font-bold tracking-tight text-gray-900 leading-none">
                    CENTAURI-PRO
                  </span>
                  <span className="w-8 h-1 bg-orange-500 mt-1"></span>
                </Link>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center space-x-10">
                {/* About Us Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsAboutOpen(true)}
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <button className="text-sm font-semibold text-gray-700 hover:text-orange-600 tracking-wider uppercase transition-colors flex items-center gap-1">
                    About Us
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isAboutOpen && (
                    <div className="absolute top-full left-0 mt-0 pt-2">
                      <div className="bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[220px]">
                        <Link
                          to="/about/leadership"
                          className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-600 transition-colors"
                          onClick={() => setIsAboutOpen(false)}
                        >
                          Leadership
                        </Link>
                        <Link
                          to="/about/contract-vehicles"
                          className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-600 transition-colors"
                          onClick={() => setIsAboutOpen(false)}
                        >
                          Contract Vehicles
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
                {/* Services Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button className="text-sm font-semibold text-gray-700 hover:text-orange-600 tracking-wider uppercase transition-colors flex items-center gap-1">
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-0 pt-2">
                      <div className="bg-white border border-gray-200 rounded shadow-lg py-2 min-w-[340px]">
                        {serviceLinks.map((service, i) => (
                          <Link
                            key={i}
                            to={service.path}
                            className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-600 transition-colors"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link to="/projects" className="text-sm font-semibold text-gray-700 hover:text-orange-600 tracking-wider uppercase transition-colors">
                  Projects
                </Link>
                <Link to="/news" className="text-sm font-semibold text-gray-700 hover:text-orange-600 tracking-wider uppercase transition-colors">
                  News & Events
                </Link>
              </div>

              {/* Mobile Hamburger Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-orange-600 focus:outline-none transition-colors p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden border-t border-gray-100">
                <div className="py-3 space-y-0.5">
                  {/* Mobile About Us Accordion */}
                  <div>
                    <button
                      onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                      className="w-full flex items-center justify-between px-3 py-3 min-h-[48px] text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-semibold text-sm uppercase tracking-wider transition-colors rounded-md"
                    >
                      About Us
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileAboutOpen && (
                      <div className="pl-4 pb-2 space-y-0.5">
                        <Link
                          to="/about/leadership"
                          className="block px-3 py-3 min-h-[44px] text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors flex items-center"
                          onClick={closeMobileMenu}
                        >
                          Leadership
                        </Link>
                        <Link
                          to="/about/contract-vehicles"
                          className="block px-3 py-3 min-h-[44px] text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 rounded-md transition-colors flex items-center"
                          onClick={closeMobileMenu}
                        >
                          Contract Vehicles
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Mobile Services Accordion */}
                  <div>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-3 min-h-[48px] text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-semibold text-sm uppercase tracking-wider transition-colors rounded-md"
                    >
                      Services
                      <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="pl-6 space-y-0.5">
                        {serviceLinks.map((service, i) => (
                          <Link
                            key={i}
                            to={service.path}
                            className="block px-3 py-3 min-h-[44px] text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50 transition-colors rounded-md flex items-center"
                            onClick={closeMobileMenu}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <Link to="/projects" className="block px-3 py-3 min-h-[48px] text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-semibold text-sm uppercase tracking-wider transition-colors rounded-md flex items-center" onClick={closeMobileMenu}>
                    Projects
                  </Link>
                  <Link to="/news" className="block px-3 py-3 min-h-[48px] text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-semibold text-sm uppercase tracking-wider transition-colors rounded-md flex items-center" onClick={closeMobileMenu}>
                    News & Events
                  </Link>
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link to="/careers" className="block px-3 py-3 min-h-[44px] text-gray-500 hover:text-orange-600 hover:bg-gray-50 text-sm transition-colors rounded-md flex items-center" onClick={closeMobileMenu}>
                      Careers
                    </Link>
                    <Link to="/contact" className="block px-3 py-3 min-h-[44px] text-gray-500 hover:text-orange-600 hover:bg-gray-50 text-sm transition-colors rounded-md flex items-center" onClick={closeMobileMenu}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/leadership" element={<LeadershipPage />} />
          <Route path="/about/contract-vehicles" element={<ContractVehiclesPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/legal-notices" element={<LegalNoticesPage />} />
          <Route path="/services/lead-abatement-hazardous-materials" element={<LeadAbatementPage />} />
          <Route path="/services/environmental-consulting-industrial-hygiene" element={<EnvironmentalConsultingPage />} />
          <Route path="/services/construction-renovation-management" element={<ConstructionRenovationPage />} />
          <Route path="/services/commissioning-energy-sustainability" element={<EnergySustainabilityPage />} />
          <Route path="/services/estimating-scheduling-risk-management" element={<RiskManagementPage />} />
          <Route path="/services/training-compliance-services" element={<TrainingCompliancePage />} />
          <Route path="/services/it-solutions-cybersecurity" element={<ITSolutionsPage />} />
          <Route path="/services/logistics-fleet-management" element={<LogisticsPage />} />
          <Route path="/services/supply-chain-procurement" element={<SupplyProcurementPage />} />
          <Route path="/services/construction-program-management" element={<ConstructionManagementPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8">
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="text-2xl font-bold mb-4">
                  <span className="text-white">Centauri-</span>
                  <span className="text-orange-500">Pro</span>
                  <span className="text-gray-400 text-lg ml-2">Consulting</span>
                </div>
                <p className="text-gray-400 mb-4 text-sm">
                  Proximity to the Future. Precision for Today.
                </p>
                <p className="text-gray-500 text-sm">
                  Environmental services, hazardous materials abatement, and construction management for government and commercial clients.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">Services</h3>
                <ul className="space-y-1 text-gray-400 text-sm">
                  {serviceLinks.map((service, i) => (
                    <li key={i}>
                      <Link to={service.path} className="hover:text-white transition-colors inline-flex items-center py-2 min-h-[44px] leading-snug">
                        {service.name.split(' & ')[0]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">Company</h3>
                <ul className="space-y-1 text-gray-400 text-sm">
                  <li><Link to="/about/leadership" className="hover:text-white transition-colors inline-flex items-center py-2 min-h-[44px]">Leadership</Link></li>
                  <li><Link to="/about/contract-vehicles" className="hover:text-white transition-colors inline-flex items-center py-2 min-h-[44px]">Contract Vehicles</Link></li>
                  <li><Link to="/projects" className="hover:text-white transition-colors inline-flex items-center py-2 min-h-[44px]">Projects</Link></li>
                  <li><Link to="/news" className="hover:text-white transition-colors inline-flex items-center py-2 min-h-[44px]">News</Link></li>
                  <li><Link to="/careers" className="hover:text-white transition-colors inline-flex items-center py-2 min-h-[44px]">Careers</Link></li>
                  <li><Link to="/legal-notices" className="hover:text-white transition-colors inline-flex items-center py-2 min-h-[44px]">Legal Notices</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gray-300">Contact</h3>
                <div className="space-y-3 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>info@centauripro.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0" />
                    <span>Detroit, Michigan</span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="text-gray-500 hover:text-white transition-colors p-1 min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-white transition-colors p-1 min-w-[44px] min-h-[44px] flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Centauri-Pro Consulting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
