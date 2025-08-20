import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Shield, BarChart3, CheckCircle, TrendingUp, AlertTriangle, Target, Zap, Building, Monitor, Package, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'

const RiskManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-[#F4A300]">Home</Link>
            <span>/</span>
            <Link to="/" className="hover:text-[#F4A300]">Services</Link>
            <span>/</span>
            <span className="text-gray-800">Estimating, Scheduling & Risk Management</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/est.jpg')`
          }}
        >
          <div className="absolute inset-0  bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Estimating, Scheduling & Risk Management
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
              AI-driven forecasting and intelligence-driven program controls with real-time risk modeling and compliance alignment.
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
            What Is Estimating, Scheduling & Risk Management?
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Estimating, Scheduling & Risk Management service transforms traditional project controls into predictive intelligence systems. We combine proven project management methodologies with AI-powered analytics to provide insights that keep your government programs on track, on budget, and compliant with all requirements.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From initial cost estimation through project completion, we provide continuous monitoring, predictive risk analysis, and automated reporting that enables proactive decision-making and ensures successful program outcomes.
              </p>
            </div>
            
            <div className="bg-[#f1f0ed] text-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Why Risk Management Matters</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart3 className="w-6 h-6 mr-3" />
                  <span>70% of government projects exceed original budgets</span>
                </div>
                <div className="flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  <span>Predictive analytics reduce overruns by 45%</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3" />
                  <span>AI-driven controls improve on-time delivery by 60%</span>
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
              {/* <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">AI-Powered Cost Estimation</h3>
              <p className="text-gray-600">
                Machine learning algorithms analyze historical data to provide accurate cost forecasting and budget planning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-[#F4A300] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Predictive Schedule Analytics</h3>
              <p className="text-gray-600">
                Advanced scheduling algorithms with critical path analysis and resource optimization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-[#2E6D4E] rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Real-Time Risk Monitoring</h3>
              <p className="text-gray-600">
                Continuous risk assessment with automated alerts and mitigation strategy recommendations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Compliance Risk Assessment</h3>
              <p className="text-gray-600">
                Automated compliance monitoring with regulatory risk scoring and corrective action planning.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Performance Dashboards</h3>
              <p className="text-gray-600">
                Executive-level dashboards with KPI tracking, trend analysis, and predictive insights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div> */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">Earned Value Management</h3>
              <p className="text-gray-600">
                Advanced EVM with AI-enhanced forecasting and automated variance analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Our Risk Management Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your project controls from reactive reporting to predictive intelligence.
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
                  <span className="text-gray-600">Budget overruns discovered too late to correct</span>
                </li>
                <li className="flex items-start">
                
                  <span className="text-gray-600">Schedule delays cascading across multiple projects</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Compliance risks leading to audit findings and penalties</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Poor visibility into project health and performance</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">What You Gain</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  
                  <span className="text-gray-600">45% reduction in cost overruns through predictive analytics</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">60% improvement in on-time delivery through AI-driven scheduling</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Real-time risk alerts enabling proactive mitigation</span>
                </li>
                <li className="flex items-start">
                  
                  <span className="text-gray-600">Executive dashboards providing complete program visibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Project Controls?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI-powered risk management solutions can improve your project outcomes while reducing costs and ensuring compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button className="bg-[#F4A300] hover:bg-[#e68f24] text-white px-8 py-3 text-lg">
              Schedule Risk Assessment
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
          </div>
        </div>
      </section>
    </div>
  )
}

export default RiskManagementPage
