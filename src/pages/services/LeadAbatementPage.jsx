import React from 'react'
import { Link } from 'react-router-dom'

const LeadAbatementPage = () => {
  const services = [
    {
      title: 'Lead-Based Paint Removal',
      desc: 'Safe and compliant removal of lead-based paint from pre-1978 structures using EPA-certified methods. Our teams employ advanced containment systems to protect occupants and workers throughout the process.'
    },
    {
      title: 'Asbestos Abatement',
      desc: 'Professional removal and encapsulation of asbestos-containing materials with full regulatory compliance. We handle everything from initial surveys through final air clearance testing.'
    },
    {
      title: 'Mold Remediation',
      desc: 'Comprehensive mold assessment and remediation to eliminate health hazards and prevent recurrence. Our approach addresses root causes including moisture intrusion and ventilation deficiencies.'
    },
    {
      title: 'PCB Removal',
      desc: 'Identification and safe removal of polychlorinated biphenyls from electrical equipment, caulking, and building materials in compliance with TSCA regulations.'
    },
    {
      title: 'Mercury Abatement',
      desc: 'Safe mercury removal from lighting fixtures, thermostats, switches, and laboratory equipment with proper containment, decontamination, and disposal protocols.'
    },
    {
      title: 'Hazardous Waste Disposal',
      desc: 'Proper characterization, transportation, and certified disposal of all hazardous materials according to RCRA, DOT, and state regulatory standards.'
    }
  ]

  const processSteps = [
    {
      num: '01',
      title: 'Assessment',
      desc: 'Comprehensive site survey, materials testing, and hazard identification using XRF analysis and laboratory sampling.'
    },
    {
      num: '02',
      title: 'Planning',
      desc: 'Detailed work plan development including containment design, safety protocols, air monitoring strategy, and regulatory notifications.'
    },
    {
      num: '03',
      title: 'Abatement',
      desc: 'Controlled removal using EPA-certified methods with continuous air monitoring, worker protection, and waste tracking documentation.'
    },
    {
      num: '04',
      title: 'Verification',
      desc: 'Post-abatement clearance testing, final air monitoring, waste manifests, and project closeout documentation for regulatory compliance.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20 xl:py-24">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8">
          <nav className="flex items-center text-sm text-gray-400 mb-10">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">Services</span>
            <span className="mx-2">/</span>
            <span className="text-white">Lead Abatement & Hazardous Materials</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Lead Abatement & Hazardous Materials Removal
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              EPA-certified lead-safe practices for residential, commercial, and government facilities. We ensure compliance with HUD, EPA, and state regulations while protecting occupants and workers.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Introduction */}
      <section className="py-16 xl:py-20">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Protecting people and property from hazardous materials</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hazardous materials in aging buildings pose serious health and regulatory risks. Lead-based paint, asbestos, mold, PCBs, and mercury require specialized expertise to identify, contain, and safely remove. Centauri-Pro delivers full-scope abatement services that keep projects on schedule while maintaining strict compliance with federal and state standards.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our field teams hold EPA RRP certifications, state lead licenses, and AHERA accreditations. Every project is executed under detailed work plans with continuous air monitoring, proper containment, and documented chain-of-custody for all waste streams.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Key Credentials</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <p className="font-semibold text-gray-900">EPA RRP Certified Firm</p>
                    <p className="text-gray-600 text-sm">Renovate, Repair and Paint rule compliance for all lead-safe work</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <p className="font-semibold text-gray-900">State Lead Abatement Licenses</p>
                    <p className="text-gray-600 text-sm">Michigan EGLE licensed for lead-based paint activities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <p className="font-semibold text-gray-900">AHERA Accreditation</p>
                    <p className="text-gray-600 text-sm">Asbestos Hazard Emergency Response Act certified inspectors and supervisors</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <div>
                    <p className="font-semibold text-gray-900">40-Hour HAZWOPER Trained</p>
                    <p className="text-gray-600 text-sm">Field personnel certified under OSHA 29 CFR 1910.120</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Abatement & Remediation Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            We provide end-to-end hazardous materials management, from initial assessment through final clearance and documentation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 xl:py-20">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A disciplined, safety-first approach</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Every abatement project follows a structured lifecycle that prioritizes worker safety, regulatory compliance, and thorough documentation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="relative">
                <span className="text-5xl font-bold text-gray-200 mb-4 block">{step.num}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Sectors we serve</h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our abatement teams operate across a range of facility types, delivering compliant hazardous materials management for clients with the most demanding safety and schedule requirements.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Federal Government Facilities', 'Public Housing Authorities', 'K-12 Schools & Universities', 'Healthcare & Hospitals', 'Commercial & Industrial', 'State & Municipal Buildings'].map((sector, i) => (
                  <div key={i} className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-300 text-sm">{sector}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-bold text-white mb-6">Regulatory Framework</h3>
              <div className="space-y-4">
                {[
                  { agency: 'EPA', rule: 'RRP Rule, TSCA, NESHAP, RCRA' },
                  { agency: 'OSHA', rule: '29 CFR 1926.62 (Lead), 1926.1101 (Asbestos)' },
                  { agency: 'HUD', rule: 'Lead Safe Housing Rule (24 CFR Part 35)' },
                  { agency: 'DOT', rule: 'Hazardous Materials Transportation (49 CFR)' },
                  { agency: 'State', rule: 'Michigan EGLE Lead Abatement Standards' }
                ].map((reg, i) => (
                  <div key={i} className="flex items-start border-b border-gray-700 pb-3 last:border-0 last:pb-0">
                    <span className="text-orange-500 font-bold text-sm w-14 flex-shrink-0">{reg.agency}</span>
                    <span className="text-gray-400 text-sm">{reg.rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-6 xl:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to address hazardous materials in your facility?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a comprehensive site assessment. Our team will develop a compliant remediation plan tailored to your facility, schedule, and regulatory requirements.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-semibold rounded transition-colors"
          >
            Request an Assessment
          </Link>
        </div>
      </section>
    </div>
  )
}

export default LeadAbatementPage
