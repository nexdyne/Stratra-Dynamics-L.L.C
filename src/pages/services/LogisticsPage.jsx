import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ArrowLeft, CheckCircle, Truck, MapPin, Clock, BarChart3, Building, Zap, Monitor, Package, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

const LogisticsPage = () => {
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
            <span className="text-gray-800">Public Sector Logistics & Distribution</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/log.jpg')`
          }}
        >
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <Truck className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Public Sector Logistics & Distribution
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Strategic operations with real-time tracking, regulatory alignment, and stakeholder reporting for government programs.
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Is Public Sector Logistics & Distribution?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Public Sector Logistics & Distribution service transforms traditional government logistics 
                into intelligent, responsive supply networks. We combine advanced logistics management with 
                AI-powered optimization to ensure critical resources reach their destinations on time, 
                within budget, and with full accountability.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From emergency response coordination to routine supply distribution, we provide end-to-end 
                logistics solutions that improve efficiency while maintaining the transparency and compliance 
                required for government operations.
              </p>
            </div>
            
            <div className="bg-[#f1f0ed] text-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Logistics Excellence Matters</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3" />
                  <span>Logistics costs represent 15-20% of government budgets</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 mr-3" />
                  <span>AI optimization reduces delivery time by 30%</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-3" />
                  <span>Real-time tracking improves accountability by 85%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Transportation Management Systems</h3>
              <p className="text-gray-600">
                AI-optimized routing and scheduling with real-time tracking and automated reporting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-[#F4A300] rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Warehouse & Distribution Management</h3>
              <p className="text-gray-600">
                Automated inventory management with predictive restocking and quality control systems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-[#2E6D4E] rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Emergency Response Logistics</h3>
              <p className="text-gray-600">
                Rapid deployment capabilities with pre-positioned resources and crisis coordination protocols.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Performance Analytics & Reporting</h3>
              <p className="text-gray-600">
                Real-time dashboards with KPI tracking, cost analysis, and stakeholder reporting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Regulatory Compliance & Documentation</h3>
              <p className="text-gray-600">
                Automated compliance tracking with chain-of-custody documentation and audit trails.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Multi-Modal Transportation</h3>
              <p className="text-gray-600">
                Integrated air, ground, and sea transportation with seamless handoff coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Logistics Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your logistics from cost center to strategic capability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Avoid</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Supply chain disruptions causing mission-critical delays</span>
                </li>
                <li className="flex items-start">
                  {/* <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div> */}
                  <span className="text-gray-600">Excessive transportation costs from inefficient routing</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Inventory shortages and overstock situations</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Poor visibility into supply chain performance and costs</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Gain</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  {/* <CheckCircle className="w-6 h-6 text-[#2E6D4E] mt-1 mr-3" /> */}
                  <span className="text-gray-600">30% reduction in delivery times through AI-optimized routing</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">20% cost savings through intelligent transportation management</span>
                </li>
                <li className="flex items-start">
                  {/* <CheckCircle className="w-6 h-6 text-[#2E6D4E] mt-1 mr-3" /> */}
                  <span className="text-gray-600">Real-time visibility into all logistics operations and costs</span>
                </li>
                <li className="flex items-start">
                  {/* <CheckCircle className="w-6 h-6 text-[#2E6D4E] mt-1 mr-3" /> */}
                  <span className="text-gray-600">Automated compliance documentation and audit-ready reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
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

export default LogisticsPage
