import React from 'react'
import { Link } from 'react-router-dom'

const TrainingCompliancePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-900 py-20 xl:py-24">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-10">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2">/</span><span className="text-gray-500">Services</span>
            <span className="mx-2">/</span><span className="text-white">Training & Compliance Services</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Training & Compliance Services</h1>
            <p className="text-lg text-gray-300 leading-relaxed">OSHA-aligned training programs and compliance support ensuring your workforce is certified, prepared, and compliant with all federal and state regulatory requirements.</p>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-20">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Building a certified, compliant workforce</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Environmental remediation and construction projects demand workers with current, verifiable certifications. OSHA, EPA, and state regulations require specific training for anyone working with hazardous materials, and non-compliance exposes organizations to significant penalties, project shutdowns, and liability.</p>
              <p className="text-gray-700 leading-relaxed">Centauri-Pro delivers hands-on, field-relevant training programs led by certified instructors with real-world experience. We also provide ongoing compliance program development, safety audits, and certification tracking to ensure your organization maintains continuous compliance.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Training Standards</h3>
              <div className="space-y-4">
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">OSHA-Authorized Provider</p><p className="text-gray-600 text-sm">Certified training under OSHA 29 CFR 1910.120 and construction standards</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">EPA-Approved RRP Curriculum</p><p className="text-gray-600 text-sm">Renovate, Repair and Paint certification per 40 CFR 745</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">AHERA-Accredited Programs</p><p className="text-gray-600 text-sm">Asbestos Hazard Emergency Response Act certified training</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">State-Specific Requirements</p><p className="text-gray-600 text-sm">Michigan EGLE and other state certification programs</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Training & Compliance Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">We deliver certification training, compliance program development, and ongoing support to keep your workforce qualified and your organization audit-ready.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">HAZWOPER Training</h3><p className="text-gray-600 text-sm leading-relaxed">40-hour initial, 24-hour limited, and 8-hour refresher HAZWOPER training for hazardous waste operations and emergency response per OSHA 29 CFR 1910.120.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Lead-Safe RRP Certification</h3><p className="text-gray-600 text-sm leading-relaxed">EPA-approved Renovate, Repair and Paint certification training covering lead-safe work practices, containment setup, and cleaning verification for pre-1978 structures.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Asbestos Awareness & Certification</h3><p className="text-gray-600 text-sm leading-relaxed">Contractor and supervisor certification for asbestos-containing materials identification, handling, and removal in compliance with AHERA and OSHA standards.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Compliance Program Development</h3><p className="text-gray-600 text-sm leading-relaxed">Custom compliance program design and implementation tailored to your organization's operations, hazards, and regulatory requirements.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Safety Audits & Gap Analysis</h3><p className="text-gray-600 text-sm leading-relaxed">Comprehensive workplace safety assessments to identify compliance gaps, evaluate program effectiveness, and develop corrective action plans.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Documentation & Record-Keeping</h3><p className="text-gray-600 text-sm leading-relaxed">Certification tracking, renewal management, regulatory documentation, and record-keeping systems to maintain continuous compliance.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-20">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">From assessment to ongoing compliance</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">Our training process is designed to build lasting competency and maintain continuous certification compliance.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">01</span><h3 className="text-lg font-bold text-gray-900 mb-2">Needs Assessment</h3><p className="text-gray-600 text-sm leading-relaxed">Evaluate your workforce's current certifications, identify gaps, and determine training requirements based on job roles and regulatory obligations.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">02</span><h3 className="text-lg font-bold text-gray-900 mb-2">Curriculum Development</h3><p className="text-gray-600 text-sm leading-relaxed">Customize training content to your specific operations, hazards, and compliance requirements with hands-on practical components.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">03</span><h3 className="text-lg font-bold text-gray-900 mb-2">Training Delivery</h3><p className="text-gray-600 text-sm leading-relaxed">Expert-led classroom and field training with competency verification, practical exercises, and certification examination.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">04</span><h3 className="text-lg font-bold text-gray-900 mb-2">Certification & Follow-Up</h3><p className="text-gray-600 text-sm leading-relaxed">Issue certifications, establish tracking systems, schedule refresher training, and provide ongoing compliance monitoring support.</p></div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Who we train</h2>
              <p className="text-gray-300 leading-relaxed mb-8">Our training programs serve professionals across the environmental, construction, and facility management industries who need current certifications and compliance knowledge.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Environmental Remediation Contractors', 'Construction & Renovation Workers', 'Building Maintenance Personnel', 'Government Facility Managers', 'Property Management Teams', 'Industrial Hygiene Staff'].map((s,i) => (<div key={i} className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span><span className="text-gray-300 text-sm">{s}</span></div>))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-bold text-white mb-6">Regulatory Standards</h3>
              <div className="space-y-4">
                {[{std:'OSHA',desc:'29 CFR 1910.120, 1926.62, 1926.1101'},{std:'EPA',desc:'40 CFR 745 (RRP Rule)'},{std:'AHERA',desc:'Asbestos Hazard Emergency Response Act'},{std:'HUD',desc:'Lead Safe Housing Rule (24 CFR 35)'},{std:'State',desc:'Michigan EGLE training requirements'}].map((s,i) => (<div key={i} className="flex items-start border-b border-gray-700 pb-3 last:border-0 last:pb-0"><span className="text-orange-500 font-bold text-sm w-14 flex-shrink-0">{s.std}</span><span className="text-gray-400 text-sm">{s.desc}</span></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to certify your workforce?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contact us to schedule training for your team and ensure compliance with all regulatory requirements.</p>
          <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-semibold rounded transition-colors">Schedule Training</Link>
        </div>
      </section>
    </div>
  )
}

export default TrainingCompliancePage
