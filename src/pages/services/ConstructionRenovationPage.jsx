import React from 'react'
import { Link } from 'react-router-dom'

const ConstructionRenovationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-12 md:py-20 xl:py-24">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-10">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">Services</span>
            <span className="mx-2">/</span>
            <span className="text-white">Construction & Renovation Management</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Construction & Renovation Management</h1>
            <p className="text-lg text-gray-300 leading-relaxed">Expert owner's representation integrating environmental compliance with construction excellence for pre-1978 buildings and federal facilities.</p>
          </div>
        </div>
      </section>

      {/* Narrative Intro */}
      <section className="py-10 md:py-16 xl:py-20">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Construction management with built-in environmental expertise</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Renovating aging buildings, especially those constructed before 1978, presents unique challenges. Lead-based paint, asbestos, mold, and other hazardous materials can disrupt schedules and inflate budgets if not identified and managed early. Centauri-Pro integrates environmental compliance into every phase of construction management, preventing costly surprises and ensuring regulatory adherence.</p>
              <p className="text-gray-700 leading-relaxed">Our teams combine construction oversight with hazardous materials expertise, providing a single point of accountability for project delivery. From pre-construction assessments through final clearance, we manage the intersection of construction and environmental compliance so our clients don't have to.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Key Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">Integrated Environmental + Construction</p><p className="text-gray-600 text-sm">Single-source management for remediation and renovation projects</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">Federal Contracting Experience</p><p className="text-gray-600 text-sm">HUD, GSA, and DoD project delivery and compliance expertise</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">Pre-1978 Building Specialization</p><p className="text-gray-600 text-sm">Deep expertise managing hazardous materials in older structures</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">Budget & Schedule Certainty</p><p className="text-gray-600 text-sm">Proactive hazard identification prevents change orders and delays</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Construction Management Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">We manage the full lifecycle of construction and renovation projects, with environmental compliance built into every phase.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Owner's Representation</h3><p className="text-gray-600 text-sm leading-relaxed">Dedicated oversight ensuring your interests are protected throughout construction and renovation projects, from procurement through closeout.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Pre-Construction Planning</h3><p className="text-gray-600 text-sm leading-relaxed">Comprehensive project planning including budget development, scheduling, environmental assessments, and procurement strategy.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Environmental Compliance Integration</h3><p className="text-gray-600 text-sm leading-relaxed">Seamless integration of lead-safe, asbestos-safe, and environmental compliance protocols into construction workflows and schedules.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Demolition Management</h3><p className="text-gray-600 text-sm leading-relaxed">Safe and compliant demolition oversight with proper environmental protocols, waste characterization, and disposal management.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Renovation Oversight</h3><p className="text-gray-600 text-sm leading-relaxed">Comprehensive project management ensuring quality standards, timeline adherence, and regulatory compliance throughout renovation activities.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Post-Remediation Verification</h3><p className="text-gray-600 text-sm leading-relaxed">Final clearance testing, air monitoring, and documentation ensuring all environmental hazards have been properly addressed before reoccupancy.</p></div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-10 md:py-16 xl:py-20">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">An integrated, compliance-first approach</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">Our process ensures environmental compliance is addressed proactively, not reactively, throughout the construction lifecycle.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative"><span className="text-4xl sm:text-5xl font-bold text-gray-200 mb-4 block">01</span><h3 className="text-lg font-bold text-gray-900 mb-2">Pre-Construction Assessment</h3><p className="text-gray-600 text-sm leading-relaxed">Comprehensive hazard assessment, Phase I ESA, and environmental survey to identify all regulated materials before work begins.</p></div>
            <div className="relative"><span className="text-4xl sm:text-5xl font-bold text-gray-200 mb-4 block">02</span><h3 className="text-lg font-bold text-gray-900 mb-2">Integrated Planning</h3><p className="text-gray-600 text-sm leading-relaxed">Budget and schedule integration of environmental remediation into the construction plan with proper sequencing and contingencies.</p></div>
            <div className="relative"><span className="text-4xl sm:text-5xl font-bold text-gray-200 mb-4 block">03</span><h3 className="text-lg font-bold text-gray-900 mb-2">Coordinated Execution</h3><p className="text-gray-600 text-sm leading-relaxed">Parallel management of construction and remediation activities with continuous environmental monitoring and quality oversight.</p></div>
            <div className="relative"><span className="text-4xl sm:text-5xl font-bold text-gray-200 mb-4 block">04</span><h3 className="text-lg font-bold text-gray-900 mb-2">Clearance & Closeout</h3><p className="text-gray-600 text-sm leading-relaxed">Final clearance testing, compliance documentation, and project closeout with complete regulatory record-keeping.</p></div>
          </div>
        </div>
      </section>
      {/* Sectors & Hazards */}
      <section className="py-10 md:py-16 bg-gray-900">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Sectors we serve</h2>
              <p className="text-gray-300 leading-relaxed mb-8">Our construction management teams deliver integrated environmental and renovation oversight for clients with the most demanding compliance and schedule requirements.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Federal Government Facilities', 'Public Housing Authorities', 'K-12 Schools & Universities', 'Healthcare & Hospitals', 'Commercial & Industrial', 'State & Municipal Buildings'].map((s,i) => (<div key={i} className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span><span className="text-gray-300 text-sm">{s}</span></div>))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-bold text-white mb-6">Pre-1978 Building Hazards</h3>
              <div className="space-y-4">
                {[{hazard:'Lead-Based Paint',desc:'Found in majority of pre-1978 buildings, requires EPA-certified abatement'},{hazard:'Asbestos',desc:'Common in insulation, tiles, roofing materials requiring specialized removal'},{hazard:'Mold & Moisture',desc:'Often discovered during renovation of older structures, requires remediation'},{hazard:'PCBs & Mercury',desc:'In electrical equipment and fixtures requiring proper characterization and disposal'}].map((h,i) => (<div key={i} className="flex items-start border-b border-gray-700 pb-3 last:border-0 last:pb-0"><span className="text-orange-500 font-bold text-sm w-32 flex-shrink-0">{h.hazard}</span><span className="text-gray-400 text-sm">{h.desc}</span></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-16 bg-gray-100">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 xl:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to plan your construction or renovation project?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contact us to discuss how we can integrate environmental compliance into your project from day one, preventing delays and ensuring regulatory adherence.</p>
          <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-semibold rounded transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  )
}

export default ConstructionRenovationPage
