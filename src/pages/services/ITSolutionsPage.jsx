import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Monitor, Shield, Cloud, Wifi, CheckCircle, Building, Zap, Package, Truck, BarChart3 } from 'lucide-react'
import { Link } from 'react-router-dom'

const ITSolutionsPage = () => {
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
              <Link to="/" className="text-gray-700 hover:text-[#F4A300] transition-colors">Services</Link>
              <Link to="/projects" className="text-gray-700 hover:text-[#F4A300] transition-colors">Projects</Link>
              <Link to="/about" className="text-gray-700 hover:text-[#F4A300] transition-colors">About</Link>
              <Link to="/news" className="text-gray-700 hover:text-[#F4A300] transition-colors">News</Link>
              <Link to="/careers" className="text-gray-700 hover:text-[#F4A300] transition-colors">Careers</Link>
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
            <Link to="/" className="hover:text-[#F4A300]">Services</Link>
            <span>/</span>
            <span className="text-gray-800">Smart City & Government IT Solutions</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/smart-city.jpg')`
          }}
        >
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center">
            <Monitor className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Smart City & Government IT Solutions
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              Technology management and data-driven program support with AI/ML integration and digital twin ecosystems.
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            What Are Smart City & Government IT Solutions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Smart City & Government IT Solutions transform traditional government technology infrastructure into intelligent, interconnected systems that improve citizen services while reducing operational costs. We combine cloud-native architectures with AI/ML capabilities to create scalable, secure, and citizen-centric digital government platforms.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From IoT sensor networks to digital twin city models, we help government agencies leverage cutting-edge technology to make data-driven decisions, improve service delivery, and build more resilient communities.
              </p>
            </div>
            
            <div className="bg-[#f1f0ed] text-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Smart City IT Matters</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Monitor className="w-6 h-6 mr-3" />
                  <span>68% of global population will live in cities by 2050</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  <span>Smart city tech can reduce costs by 30%</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3" />
                  <span>AI-driven insights improve decision-making by 45%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Key Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Digital Twin Development</h3>
              <p className="text-gray-600">
                Create virtual replicas of city infrastructure for real-time monitoring and predictive analytics.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-[#F4A300] rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI/ML Platform Integration</h3>
              <p className="text-gray-600">
                Implement machine learning algorithms for traffic optimization, resource allocation, and predictive maintenance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-[#2E6D4E] rounded-lg flex items-center justify-center mb-4">
                <Cloud className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cloud Infrastructure & Migration</h3>
              <p className="text-gray-600">
                Secure, scalable cloud solutions with FedRAMP compliance and hybrid cloud architectures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Cybersecurity & Compliance</h3>
              <p className="text-gray-600">
                Zero-trust security frameworks with continuous monitoring and FISMA compliance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">IoT Sensor Networks</h3>
              <p className="text-gray-600">
                Deploy and manage IoT infrastructure for environmental monitoring, traffic management, and asset tracking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Citizen Service Platforms</h3>
              <p className="text-gray-600">
                User-friendly digital platforms that improve citizen engagement and service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Smart City IT Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your government technology from legacy systems to intelligent, citizen-centric platforms.
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
                  <span className="text-gray-600">Legacy system maintenance consuming 80% of IT budgets</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Data silos preventing informed decision-making</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Cybersecurity vulnerabilities in outdated systems</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Poor citizen experience with government services</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Gain</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  
                  <span className="text-gray-600">30% cost reduction through cloud-native architectures</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Real-time insights from integrated data platforms</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Zero-trust security with continuous compliance monitoring</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Improved citizen satisfaction through digital-first services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Build Your Smart City Platform?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI-powered government IT solutions can transform your citizen services and operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-[#F4A300] hover:bg-[#e68f24] text-white px-8 py-3 text-lg">
              Schedule IT Assessment
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Explore Our Other Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
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

            <Link to="/services/government-supply-procurement-solutions" className="group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-600 transition-colors">
                Supply & Procurement
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

export default ITSolutionsPage
