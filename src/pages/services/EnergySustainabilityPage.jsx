import React from 'react'
import { Link } from 'react-router-dom'

const EnergySustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center text-sm text-gray-400 mb-10">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2">/</span><span className="text-gray-500">Services</span>
            <span className="mx-2">/</span><span className="text-white">Commissioning, Energy & Sustainability</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Commissioning, Energy & Sustainability</h1>
            <p className="text-lg text-gray-300 leading-relaxed">Building commissioning, energy performance optimization, and sustainability compliance services for government and commercial facilities.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimizing building performance and sustainability compliance</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Buildings consume nearly 40% of total U.S. energy. Federal mandates require agencies to achieve net-zero emissions by 2050, driving demand for commissioning, retro-commissioning, and continuous energy optimization. Centauri-Pro delivers these services with a focus on measurable performance improvements and regulatory compliance.</p>
              <p className="text-gray-700 leading-relaxed">Our commissioning teams verify that building systems perform as designed, identify energy waste, and implement optimization strategies that reduce operating costs while improving occupant comfort and indoor environmental quality.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Key Focus Areas</h3>
              <div className="space-y-4">
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">Federal Net-Zero Compliance</p><p className="text-gray-600 text-sm">EO 14057 Federal Sustainability Plan alignment and reporting</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">ASHRAE Commissioning Standards</p><p className="text-gray-600 text-sm">Guideline 0 and Standard 202 commissioning process compliance</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">LEED & Green Building Support</p><p className="text-gray-600 text-sm">Green building certification credit documentation and verification</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">Energy Star Benchmarking</p><p className="text-gray-600 text-sm">Portfolio Manager benchmarking and performance tracking</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commissioning & Energy Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">We deliver end-to-end building performance services from initial commissioning through ongoing energy optimization and sustainability reporting.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Building Commissioning</h3><p className="text-gray-600 text-sm leading-relaxed">New construction and retro-commissioning services verifying that HVAC, lighting, controls, and building envelope systems perform as designed and meet owner requirements.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Energy Performance Monitoring</h3><p className="text-gray-600 text-sm leading-relaxed">Real-time energy analytics, utility benchmarking, and automated reporting to identify waste, track savings, and support continuous improvement initiatives.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Building Automation Systems</h3><p className="text-gray-600 text-sm leading-relaxed">BAS optimization, controls programming, and integration services to maximize system efficiency and occupant comfort through automated building management.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Sustainability Compliance</h3><p className="text-gray-600 text-sm leading-relaxed">Federal sustainability mandate tracking, greenhouse gas reporting, and compliance documentation for Executive Orders and agency-specific requirements.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Indoor Environmental Quality</h3><p className="text-gray-600 text-sm leading-relaxed">Continuous monitoring and optimization of air quality, thermal comfort, lighting levels, and acoustics to support occupant health and productivity.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Predictive Maintenance</h3><p className="text-gray-600 text-sm leading-relaxed">Equipment health monitoring, trend analysis, and predictive failure detection to reduce unplanned downtime and extend system service life.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A performance-driven commissioning process</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">Our commissioning process follows ASHRAE guidelines to verify system performance and deliver measurable energy savings.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">01</span><h3 className="text-lg font-bold text-gray-900 mb-2">Systems Assessment</h3><p className="text-gray-600 text-sm leading-relaxed">Comprehensive review of building systems, design documents, and operational performance against owner project requirements.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">02</span><h3 className="text-lg font-bold text-gray-900 mb-2">Performance Benchmarking</h3><p className="text-gray-600 text-sm leading-relaxed">Energy use analysis, utility benchmarking, and comparison against industry standards to identify optimization opportunities.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">03</span><h3 className="text-lg font-bold text-gray-900 mb-2">Optimization Implementation</h3><p className="text-gray-600 text-sm leading-relaxed">Controls adjustments, sequence modifications, and system tuning to achieve design intent and maximize energy efficiency.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">04</span><h3 className="text-lg font-bold text-gray-900 mb-2">Ongoing Monitoring</h3><p className="text-gray-600 text-sm leading-relaxed">Continuous performance tracking, seasonal recommissioning, and reporting to sustain savings and maintain compliance.</p></div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Sectors we serve</h2>
              <p className="text-gray-300 leading-relaxed mb-8">Our commissioning and energy teams serve facility owners and managers across sectors with demanding performance and sustainability requirements.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Federal Government Buildings', 'Military Installations', 'Healthcare Facilities', 'K-12 Schools & Universities', 'Commercial Office Buildings', 'Municipal Infrastructure'].map((s,i) => (<div key={i} className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span><span className="text-gray-300 text-sm">{s}</span></div>))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-bold text-white mb-6">Standards & Mandates</h3>
              <div className="space-y-4">
                {[{std:'ASHRAE',desc:'Guideline 0, Standard 202 Commissioning'},{std:'DOE',desc:'Federal Building Performance Standards'},{std:'EPA',desc:'Energy Star Portfolio Manager'},{std:'LEED',desc:'Green Building Certification Credits'},{std:'EO 14057',desc:'Federal Sustainability Plan'}].map((s,i) => (<div key={i} className="flex items-start border-b border-gray-700 pb-3 last:border-0 last:pb-0"><span className="text-orange-500 font-bold text-sm w-16 flex-shrink-0">{s.std}</span><span className="text-gray-400 text-sm">{s.desc}</span></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to optimize your building performance?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contact us to discuss commissioning, energy optimization, and sustainability compliance for your facility.</p>
          <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-semibold rounded transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  )
}

export default EnergySustainabilityPage
