import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Home, 
  Facebook, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin, 
  Menu,
  X
} from 'lucide-react';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

// Import page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import CareersPage from './pages/CareersPage';
import LegalNoticesPage from './pages/LegalNoticesPage';
import ConstructionManagementPage from './pages/services/ConstructionManagementPage';
import LogisticsPage from './pages/services/LogisticsPage';
import EnergySustainabilityPage from './pages/services/EnergySustainabilityPage';
import RiskManagementPage from './pages/services/RiskManagementPage';
import ITSolutionsPage from './pages/services/ITSolutionsPage';
import SupplyProcurementPage from './pages/services/SupplyProcurementPage';
import ContactPage from './pages/ContactPage';



// Main App Component with Navigation
const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        {/* Top Social Bar */}
        <div className="bg-orange-500 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-end items-center space-x-4">
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Home className="w-5 h-5" />
            </a>
            <span className="text-orange-200">|</span>
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <span className="text-orange-200">|</span>
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="text-orange-200">|</span>
            <a href="tel:+1234567890" className="hover:text-orange-200 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo - Positioned to the left */}
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold" onClick={closeMobileMenu}>
                  <span className="text-gray-800">Centauri-</span>
                  <span className="text-orange-500">Pro</span>
                  <span className="text-gray-600 text-lg ml-2 hidden sm:inline">Consulting</span>
                </Link>
                <div className="ml-4 text-sm text-gray-600 hidden lg:block">
                  Proximity to the Future. Precision for Today.
                </div>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/#services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  Services
                </Link>
                <Link to="/projects" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  Projects
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  About
                </Link>
                <Link to="/news" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  News
                </Link>
                <Link to="/careers" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  Careers
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  Contact
                </Link>
              </div>

              {/* Mobile Hamburger Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-orange-600 focus:outline-none focus:text-orange-600 transition-colors"
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
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                  <Link 
                    to="/#services" 
                    className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                  <Link 
                    to="/projects" 
                    className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Projects
                  </Link>
                  <Link 
                    to="/about" 
                    className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                  <Link 
                    to="/news" 
                    className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    News
                  </Link>
                  <Link 
                    to="/careers" 
                    className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Careers
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium transition-colors rounded-md"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/legal-notices" element={<LegalNoticesPage />} />
          <Route path="/services/construction-infrastructure-management" element={<ConstructionManagementPage />} />
          <Route path="/services/commissioning-energy-sustainability" element={<EnergySustainabilityPage />} />
          <Route path="/services/smart-city-government-it-solutions" element={<ITSolutionsPage />} />
          <Route path="/services/government-supply-procurement-solutions" element={<SupplyProcurementPage />} />
          <Route path="/services/public-sector-logistics-distribution" element={<LogisticsPage />} />
          <Route path="/services/estimating-scheduling-risk-management" element={<RiskManagementPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold mb-4">
                  <span className="text-white">Centauri-</span>
                  <span className="text-orange-500">Pro</span>
                  <span className="text-gray-400 text-lg ml-2">Consulting</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Proximity to the Future. Precision for Today.
                </p>
                <p className="text-gray-400">
                  Delivering innovative government solutions with AI-driven excellence.
                </p>
              </div>
              
              <div id="services">
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/services/construction-infrastructure-management" className="hover:text-white transition-colors">Construction Management</Link></li>
                  <li><Link to="/services/commissioning-energy-sustainability" className="hover:text-white transition-colors">Energy & Sustainability</Link></li>
                  <li><Link to="/services/smart-city-government-it-solutions" className="hover:text-white transition-colors">IT Solutions</Link></li>
                  <li><Link to="/services/government-supply-procurement-solutions" className="hover:text-white transition-colors">Supply & Procurement</Link></li>
                  <li><Link to="/services/public-sector-logistics-distribution" className="hover:text-white transition-colors">Logistics</Link></li>
                  <li><Link to="/services/estimating-scheduling-risk-management" className="hover:text-white transition-colors">Risk Management</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/news" className="hover:text-white transition-colors">News</Link></li>
                  <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link to="/legal-notices" className="hover:text-white transition-colors">Legal Notices</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>info@centauripro.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Detroit, Michigan</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Centauri-Pro Consulting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
