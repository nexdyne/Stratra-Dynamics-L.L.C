import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, CheckCircle, Zap, Leaf, Settings, BarChart3, Building, Monitor, Package, Truck, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const EnergySustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-gray-800">
                <span className="text-[#2E6D4E]">Centauri</span>
                <span className="text-[#F4A300]">-Pro</span>
                <span className="text-gray-600 ml-2 text-lg">Consulting</span>
              </div>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/#services" className="text-gray-700 hover:text-[#F4A300] transition-colors">Services</Link>
              <Link to="/#projects" className="text-gray-700 hover:text-[#F4A300] transition-colors">Projects</Link>
              <Link to="/#about" className="text-gray-700 hover:text-[#F4A300] transition-colors">About</Link>
              <Link to="/#news" className="text-gray-700 hover:text-[#F4A300] transition-colors">News</Link>
              <Link to="/#careers" className="text-gray-700 hover:text-[#F4A300] transition-colors">Careers</Link>
            </nav>
            
            <div className="hidden lg:block text-sm text-gray-600">
              Phone: (555) 123-4567
            </div>
          </div>
        </div>
      </header> */}

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#F4A300]">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-[#F4A300]">Services</Link>
            <span>/</span>
            <span className="text-gray-800">Commissioning, Energy & Sustainability</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/enery.jpg')`
          }}
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* <Leaf className="w-16 h-16 text-white mx-auto mb-6" /> */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Commissioning, Energy & Sustainability
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Ensuring smarter, safer, and more sustainable environments with AI-powered diagnostics and automated compliance validation.
            </p>
            <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Is Commissioning, Energy & Sustainability?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Commissioning, Energy & Sustainability service transforms building performance from reactive 
                maintenance to proactive optimization. We combine traditional commissioning expertise with 
                AI-powered building analytics to ensure your government facilities operate at peak efficiency 
                while meeting all sustainability mandates.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Beyond standard commissioning, we provide continuous monitoring, predictive maintenance, and 
                automated energy optimization that reduces operational costs while improving occupant comfort 
                and environmental performance.
              </p>
            </div>
            
            <div className="bg-[#f1f0ed] text-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Energy & Sustainability Matters</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3" />
                  <span>Buildings consume 40% of total US energy</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 mr-3" />
                  <span>Smart commissioning reduces energy costs by 25%</span>
                </div>
                <div className="flex items-center">
                  <Leaf className="w-6 h-6 mr-3" />
                  <span>Federal mandate: Net-zero emissions by 2050</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-[#F4A300] rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Building Automation Systems (BAS)</h3>
              <p className="text-gray-600">
                AI-enhanced BAS optimization with predictive controls and automated energy management.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-[#2E6D4E] rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Performance Monitoring</h3>
              <p className="text-gray-600">
                Real-time energy analytics with automated reporting and optimization recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability Compliance</h3>
              <p className="text-gray-600">
                Automated tracking of sustainability metrics with regulatory compliance reporting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Predictive Maintenance</h3>
              <p className="text-gray-600">
                AI-driven equipment health monitoring with predictive failure analysis and maintenance scheduling.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Commissioning & Retro-commissioning</h3>
              <p className="text-gray-600">
                Comprehensive system commissioning with ongoing performance verification and optimization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Indoor Environmental Quality</h3>
              <p className="text-gray-600">
                Continuous monitoring and optimization of air quality, lighting, and thermal comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Energy & Sustainability Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your facilities from energy consumers to intelligent, sustainable environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Avoid</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  {/* <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div> */}
                  <span className="text-gray-600">Excessive energy costs from inefficient building operations</span>
                </li>
                <li className="flex items-start">
                 
                  <span className="text-gray-600">Equipment failures and costly emergency repairs</span>
                </li>
                <li className="flex items-start">
                 
                  <span className="text-gray-600">Non-compliance with federal sustainability mandates</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Poor indoor air quality affecting occupant health and productivity</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Gain</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                 
                  <span className="text-gray-600">25% reduction in energy costs through AI-optimized operations</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Predictive maintenance reducing equipment downtime by 40%</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Automated compliance reporting for all sustainability requirements</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Improved occupant comfort and productivity through optimal environments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore Our Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link to="/services/construction-infrastructure-management" className="group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* <div className="w-12 h-12 bg-[#2E6D4E] rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-600 transition-colors">
                Construction & Infrastructure Management
              </h3>
              {/* <p className="text-gray-600">
                Modern representation and future-ready delivery for government construction projects.
              </p> */}
            </Link>

            <Link to="/services/smart-city-government-it-solutions" className="group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-600 transition-colors">
                Smart City & Government IT Solutions
              </h3>
              {/* <p className="text-gray-600">
                Technology management and data-driven program support with AI/ML integration.
              </p> */}
            </Link>

            <Link to="/services/government-supply-procurement-solutions" className="group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-600 transition-colors">
                Government Supply & Procurement Solutions
              </h3>
              {/* <p className="text-gray-600">
                Comprehensive procurement and supply chain management with vendor compliance.
              </p> */}
            </Link>

            <Link to="/services/public-sector-logistics-distribution" className="group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-600 transition-colors">
                Public Sector Logistics & Distribution
              </h3>
              {/* <p className="text-gray-600">
                Strategic operations with real-time tracking and regulatory alignment.
              </p> */}
            </Link>

            <Link to="/services/estimating-scheduling-risk-management" className="group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-600 transition-colors">
                Estimating, Scheduling & Risk Management
              </h3>
              {/* <p className="text-gray-600">
                AI-driven forecasting and intelligence-driven program controls.
              </p> */}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EnergySustainabilityPage
