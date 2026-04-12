import React from 'react';
import { Link } from 'react-router-dom';

const EnvironmentalConsultingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-sm text-gray-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-500">Services</span>
            <span className="mx-2">/</span>
            <span>Environmental Consulting & Industrial Hygiene</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Environmental Consulting & Industrial Hygiene</h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">CIH-backed environmental assessments and industrial hygiene surveys to ensure workplace safety, protect public health, and maintain regulatory compliance.</p>
        </div>
      </section>

      {/* Narrative Intro */}
      <section className="py-16 xl:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Science-driven assessments that protect people and property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Environmental contamination and workplace health hazards pose serious risks to occupants, employees, and communities. Our environmental consulting and industrial hygiene services provide the expertise needed to identify, assess, and mitigate these risks through rigorous scientific analysis and regulatory compliance.</p>
              <p className="text-gray-700 leading-relaxed">From Phase I and Phase II Environmental Site Assessments to comprehensive industrial hygiene surveys and hazardous materials identification, our certified professionals deliver thorough, actionable insights using NIOSH-accredited sampling methods and industry-leading analytical protocols.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Key Credentials</h3>
              <div className="space-y-4">
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">Certified Industrial Hygienist (CIH)</p><p className="text-gray-600 text-sm">CIH-led workplace exposure assessments and environmental evaluations</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">CHMM Credential</p><p className="text-gray-600 text-sm">Certified Hazardous Materials Manager for waste management oversight</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">State Environmental Licenses</p><p className="text-gray-600 text-sm">Michigan EGLE licensed for environmental consulting activities</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">NIOSH-Accredited Methods</p><p className="text-gray-600 text-sm">Sampling and analytical protocols per NIOSH Manual of Analytical Methods</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Consulting & Assessment Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">We provide comprehensive environmental and occupational health assessments to help organizations manage risk, maintain compliance, and protect their people.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Environmental Site Assessments</h3><p className="text-gray-600 text-sm leading-relaxed">Phase I and Phase II ESA services to identify potential environmental liabilities, assess historical land use, and evaluate subsurface conditions for transactions and regulatory compliance.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Air Quality Testing</h3><p className="text-gray-600 text-sm leading-relaxed">Comprehensive indoor and outdoor air quality monitoring to assess pollutant levels, identify contamination sources, and provide actionable remediation recommendations.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Industrial Hygiene Surveys</h3><p className="text-gray-600 text-sm leading-relaxed">Workplace exposure assessments evaluating chemical, biological, and physical hazards to ensure OSHA compliance and implement effective worker protection controls.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Hazardous Materials Surveys</h3><p className="text-gray-600 text-sm leading-relaxed">Identification and documentation of asbestos, lead-based paint, PCBs, and other regulated materials in buildings with detailed management and remediation recommendations.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Radon Testing & Mitigation</h3><p className="text-gray-600 text-sm leading-relaxed">Professional radon measurement in residential and commercial properties with design and implementation of cost-effective mitigation systems meeting EPA guidelines.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">SDS & Chemical Management</h3><p className="text-gray-600 text-sm leading-relaxed">Comprehensive Safety Data Sheet management and chemical inventory programs ensuring OSHA HazCom compliance with organized, accessible records and employee training.</p></div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 xl:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A rigorous, science-based approach</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">Every assessment follows established scientific protocols and regulatory standards to deliver reliable, defensible results.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">01</span><h3 className="text-lg font-bold text-gray-900 mb-2">Site Evaluation</h3><p className="text-gray-600 text-sm leading-relaxed">Comprehensive site assessment, historical records review, and identification of potential environmental concerns and workplace hazards.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">02</span><h3 className="text-lg font-bold text-gray-900 mb-2">Sampling & Analysis</h3><p className="text-gray-600 text-sm leading-relaxed">Collection of environmental and workplace samples using NIOSH-accredited methods with laboratory analysis following established protocols.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">03</span><h3 className="text-lg font-bold text-gray-900 mb-2">Risk Assessment</h3><p className="text-gray-600 text-sm leading-relaxed">Detailed evaluation of findings against regulatory standards and industry guidelines to determine risk levels and potential health impacts.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">04</span><h3 className="text-lg font-bold text-gray-900 mb-2">Recommendations & Reporting</h3><p className="text-gray-600 text-sm leading-relaxed">Clear, actionable recommendations with detailed technical reports and implementation guidance for compliance and risk mitigation.</p></div>
          </div>
        </div>
      </section>
      {/* Sectors & Regulatory */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Sectors we serve</h2>
              <p className="text-gray-300 leading-relaxed mb-8">Our consulting teams deliver environmental and occupational health assessments across diverse facility types for clients with demanding compliance and safety requirements.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Federal Government', 'Healthcare Facilities', 'K-12 Schools & Universities', 'Commercial Real Estate', 'Industrial & Manufacturing', 'Public Housing'].map((sector, i) => (<div key={i} className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span><span className="text-gray-300 text-sm">{sector}</span></div>))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-bold text-white mb-6">Regulatory Framework</h3>
              <div className="space-y-4">
                {[{agency:'EPA',rule:'CERCLA, SARA, RCRA'},{agency:'OSHA',rule:'PELs, RELs, TLVs'},{agency:'ASTM',rule:'E1527, E1528 ESA Standards'},{agency:'NIOSH',rule:'Exposure Assessment Methods'},{agency:'State',rule:'Michigan EGLE Environmental Standards'}].map((reg,i) => (<div key={i} className="flex items-start border-b border-gray-700 pb-3 last:border-0 last:pb-0"><span className="text-orange-500 font-bold text-sm w-14 flex-shrink-0">{reg.agency}</span><span className="text-gray-400 text-sm">{reg.rule}</span></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to assess your environmental and workplace health risks?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contact our team of certified professionals to discuss your environmental consulting and industrial hygiene needs.</p>
          <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-semibold rounded transition-colors">Request a Consultation</Link>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalConsultingPage;
