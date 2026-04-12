import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, CheckCircle, Building, Zap, Shield, BarChart3, Monitor, Package, Truck, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const ConstructionManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
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
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#F4A300]">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-[#F4A300]">Services</Link>
            <span>/</span>
            <span className="text-gray-800">Construction & Infrastructure Management</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/Incident-and-Compliance-Management-for-Construction.webp')`
          }}
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <Building className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Construction & Infrastructure Management
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Modern representation and future-ready delivery for government construction projects with AI-driven oversight and compliance.
            </p>
            <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
            What Is Construction & Infrastructure Management?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Construction & Infrastructure Management service transforms traditional project oversight into 
                intelligent, data-driven program execution. We combine field-proven construction expertise with 
                cutting-edge AI analytics to ensure your government projects are delivered on time, on budget, 
                and with full regulatory compliance.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Unlike conventional construction management, we provide real-time visibility into project health, 
                predictive risk modeling, and automated compliance tracking that keeps your programs audit-ready 
                from day one.
              </p>
            </div>
            
            <div className="bg-[#f1f0ed] text-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Construction Management Matters</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3" />
                  <span>73% of government construction projects exceed budget</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  <span>AI oversight reduces compliance violations by 60%</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 mr-3" />
                  <span>Real-time monitoring improves delivery speed by 35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">Key Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-gray-800" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Powered Project Oversight</h3>
              <p className="text-gray-600">
                Real-time monitoring with predictive analytics to identify risks before they impact your timeline or budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gray-800" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compliance-by-Design</h3>
              <p className="text-gray-600">
                Built-in regulatory compliance tracking with automated documentation and audit trail generation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-gray-800" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Twin Integration</h3>
              <p className="text-gray-600">
                BIM-enabled digital twins provide real-time project visualization and performance analytics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-gray-800" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assurance Automation</h3>
              <p className="text-gray-600">
                Automated quality checkpoints with photo documentation and deficiency tracking systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-gray-800" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Subcontractor Management</h3>
              <p className="text-gray-600">
                Comprehensive subcontractor oversight with performance tracking and compliance verification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-gray-800" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Field Operations Support</h3>
              <p className="text-gray-600">
                On-site coordination with mobile-enabled reporting and real-time communication systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Why Choose Our Construction Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your construction projects from reactive management to proactive intelligence-driven execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Avoid</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                 
                  <span className="text-gray-600">Budget overruns due to poor visibility and reactive management</span>
                </li>
                <li className="flex items-start">
                 
                  <span className="text-gray-600">Schedule delays from unidentified risks and coordination failures</span>
                </li>
                <li className="flex items-start">
                 
                  <span className="text-gray-600">Compliance violations and audit findings from manual processes</span>
                </li>
                <li className="flex items-start">
                 
                  <span className="text-gray-600">Quality issues discovered too late in the construction process</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Gain</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                 
                  <span className="text-gray-600">Predictive analytics that identify risks before they impact your project</span>
                </li>
                <li className="flex items-start">
                
                  <span className="text-gray-600">Real-time dashboards providing complete project visibility</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Automated compliance tracking with audit-ready documentation</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Quality assurance built into every phase of construction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-12">
            Explore Our Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link to="/services/commissioning-energy-sustainability" className="group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* <div className="w-12 h-12 bg-[#F4A300] rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-600 transition-colors">
                Commissioning, Energy & Sustainability
              </h3>
                {/* <p className="text-gray-600">
                  Ensuring smarter, safer, and more sustainable environments with AI-powered diagnostics.
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

export default ConstructionManagementPage
