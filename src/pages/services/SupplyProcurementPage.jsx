import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Package, ShoppingCart, FileCheck, BarChart3, CheckCircle, Users, Building, Zap, Monitor, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

const SupplyProcurementPage = () => {
  return (
    <div className="min-h-screen bg-white">
     

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#F4A300]">Home</Link>
            <span>/</span>
            <Link to="/" className="hover:text-[#F4A300]">Services</Link>
            <span>/</span>
            <span className="text-gray-800">Government Supply & Procurement Solutions</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/gove.webp')`
          }}
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <Package className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Government Supply & Procurement Solutions
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Comprehensive procurement and supply chain management with vendor compliance and quality assurance services.
            </p>
            <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
              Request Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* What Are Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-12">
            What Are Government Supply & Procurement Solutions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Government Supply & Procurement Solutions streamline the complex world of federal procurement with AI-powered vendor management, automated compliance tracking, and intelligent sourcing strategies. We transform traditional procurement processes into strategic advantages that reduce costs while ensuring full regulatory compliance.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From small business set-aside requirements to complex multi-vendor procurements, we provide end-to-end support that maximizes value while minimizing risk and administrative burden.
              </p>
            </div>
            
            <div className="bg-[#f1f0ed] text-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Procurement Excellence Matters</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3" />
                  <span>Government spends $600B annually on procurement</span>
                </div>
                <div className="flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  <span>Strategic sourcing reduces costs by 15-25%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span>25% of small business contracting goal mandate</span>
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
              {/* <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Strategic Sourcing & Market Analysis</h3>
              <p className="text-gray-600">
                AI-powered market intelligence and vendor analysis to identify optimal sourcing strategies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-[#F4A300] rounded-lg flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compliance & Regulatory Management</h3>
              <p className="text-gray-600">
                Automated tracking of FAR, DFARS, and agency-specific requirements with real-time compliance monitoring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-[#2E6D4E] rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Vendor Management & Performance</h3>
              <p className="text-gray-600">
                Comprehensive vendor lifecycle management with performance tracking and risk assessment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Small Business Program Management</h3>
              <p className="text-gray-600">
                Specialized support for small business set-asides, mentor-protégé programs, and socioeconomic goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Contract Administration & Oversight</h3>
              <p className="text-gray-600">
                Full lifecycle contract management with automated milestone tracking and performance monitoring.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Supply Chain Risk Management</h3>
              <p className="text-gray-600">
                Proactive identification and mitigation of supply chain vulnerabilities and disruptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Why Choose Our Procurement Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your procurement from administrative burden to strategic advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Avoid</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  {/* <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div> */}
                  <span className="text-gray-600">Procurement protests and bid challenges from poor documentation</span>
                </li>
                <li className="flex items-start">
                  {/* <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div> */}
                  <span className="text-gray-600">Cost overruns from inadequate vendor performance management</span>
                </li>
                <li className="flex items-start">
                  {/* <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div> */}
                  <span className="text-gray-600">Compliance violations and audit findings</span>
                </li>
                <li className="flex items-start">
                  {/* <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div> */}
                  <span className="text-gray-600">Supply chain disruptions and vendor failures</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Gain</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  {/* <CheckCircle className="w-6 h-6 text-[#2E6D4E] mt-1 mr-3" /> */}
                  <span className="text-gray-600">15-25% cost savings through strategic sourcing and vendor optimization</span>
                </li>
                <li className="flex items-start">
                  {/* <CheckCircle className="w-6 h-6 text-[#2E6D4E] mt-1 mr-3" /> */}
                  <span className="text-gray-600">Automated compliance tracking with audit-ready documentation</span>
                </li>
                <li className="flex items-start">
                  {/* <CheckCircle className="w-6 h-6 text-[#2E6D4E] mt-1 mr-3" /> */}
                  <span className="text-gray-600">Proactive risk management and vendor performance monitoring</span>
                </li>
                <li className="flex items-start">
                  {/* <CheckCircle className="w-6 h-6 text-[#2E6D4E] mt-1 mr-3" /> */}
                  <span className="text-gray-600">Streamlined processes reducing procurement cycle time by 40%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#f5f5f5] py-8">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Ready to Optimize Your Procurement Strategy?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI-powered procurement solutions can reduce costs while ensuring full compliance and vendor performance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
              Schedule Procurement Review
            </Button>
            <input 
              type="email" 
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg text-gray-800 w-80 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
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
            <Link to="/services/construction-infrastructure-management" className="group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* <div className="w-12 h-12 bg-[#2E6D4E] rounded-lg flex items-center justify-center mb-4">
                <Building className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-600 transition-colors">
                Construction Management
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
                Energy & Sustainability
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
                IT Solutions
              </h3>
              {/* <p className="text-gray-600">
                Technology management and data-driven program support with AI/ML integration.
              </p> */}
            </Link>

            <Link to="/services/public-sector-logistics-distribution" className="group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-600 transition-colors">
                Logistics
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
                Risk Management
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

export default SupplyProcurementPage
