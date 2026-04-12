import React from 'react'
import { Link } from 'react-router-dom'

const RiskManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center text-sm text-gray-400 mb-10">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="mx-2">/</span><span className="text-gray-500">Services</span>
            <span className="mx-2">/</span><span className="text-white">Estimating, Scheduling & Risk Management</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Estimating, Scheduling & Risk Management</h1>
            <p className="text-lg text-gray-300 leading-relaxed">Rigorous project controls, cost estimation, and risk analysis to keep government and commercial construction programs on budget, on schedule, and fully compliant.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data-driven project controls that protect your investment</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Government construction programs demand precise cost estimation, realistic scheduling, and proactive risk management. Budget overruns, schedule delays, and unforeseen risks can derail critical projects and trigger audit findings. Centauri-Pro provides the project controls expertise needed to deliver predictable outcomes.</p>
              <p className="text-gray-700 leading-relaxed">Our project controls professionals use industry-standard tools including Primavera P6, RS Means cost databases, and Monte Carlo simulation to develop accurate estimates, realistic schedules, and comprehensive risk registers that enable informed decision-making throughout the project lifecycle.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Key Strengths</h3>
              <div className="space-y-4">
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">Primavera P6 & MS Project</p><p className="text-gray-600 text-sm">Advanced CPM scheduling, resource loading, and baseline management</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">RS Means & Historical Databases</p><p className="text-gray-600 text-sm">Industry cost data for accurate estimation and benchmarking</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">Monte Carlo Risk Simulation</p><p className="text-gray-600 text-sm">Quantitative risk analysis for schedule and cost contingency planning</p></div></div>
                <div className="flex items-start"><span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span><div><p className="font-semibold text-gray-900">FAR Compliance</p><p className="text-gray-600 text-sm">Federal Acquisition Regulation cost principles and contracting standards</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Project Controls Services</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">We provide comprehensive estimating, scheduling, and risk management services across the full project lifecycle.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Cost Estimation & Budgeting</h3><p className="text-gray-600 text-sm leading-relaxed">Detailed cost analysis using RS Means data and historical benchmarks for conceptual estimates, budget development, and independent cost reviews at every project phase.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Schedule Development</h3><p className="text-gray-600 text-sm leading-relaxed">CPM scheduling with resource loading, baseline management, and critical path analysis using Primavera P6 and MS Project for projects of all scales.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Risk Assessment & Mitigation</h3><p className="text-gray-600 text-sm leading-relaxed">Qualitative and quantitative risk analysis including Monte Carlo simulation, risk register development, and mitigation strategy planning.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Earned Value Management</h3><p className="text-gray-600 text-sm leading-relaxed">Cost and schedule performance tracking using ANSI/EIA-748 compliant EVM systems with variance analysis and estimate-at-completion forecasting.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Change Order Management</h3><p className="text-gray-600 text-sm leading-relaxed">Scope change evaluation, pricing analysis, schedule impact assessment, and negotiation support to protect project budgets and timelines.</p></div>
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-md transition-shadow"><h3 className="text-lg font-bold text-gray-900 mb-3">Claims & Dispute Resolution</h3><p className="text-gray-600 text-sm leading-relaxed">Delay analysis, damages quantification, and expert support for construction claims using CPM schedule analysis and forensic cost review.</p></div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">A structured approach to project controls</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">Our methodology follows industry best practices to deliver reliable cost, schedule, and risk data throughout the project lifecycle.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">01</span><h3 className="text-lg font-bold text-gray-900 mb-2">Data Collection & Analysis</h3><p className="text-gray-600 text-sm leading-relaxed">Gather project documents, historical data, and stakeholder input to establish the foundation for estimates and schedules.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">02</span><h3 className="text-lg font-bold text-gray-900 mb-2">Baseline Development</h3><p className="text-gray-600 text-sm leading-relaxed">Create detailed cost estimates, CPM schedules, and risk registers that serve as the performance measurement baseline.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">03</span><h3 className="text-lg font-bold text-gray-900 mb-2">Performance Monitoring</h3><p className="text-gray-600 text-sm leading-relaxed">Track cost and schedule performance against baselines, identify variances, and assess risk triggers throughout execution.</p></div>
            <div className="relative"><span className="text-5xl font-bold text-gray-200 mb-4 block">04</span><h3 className="text-lg font-bold text-gray-900 mb-2">Forecasting & Reporting</h3><p className="text-gray-600 text-sm leading-relaxed">Generate estimate-at-completion forecasts, trend analysis, and executive reports to support proactive decision-making.</p></div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Sectors we serve</h2>
              <p className="text-gray-300 leading-relaxed mb-8">Our project controls professionals support construction and infrastructure programs across government and commercial sectors.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Federal Construction Programs', 'State DOT Infrastructure', 'Military Construction (MILCON)', 'Public Housing Renovation', 'Healthcare Facility Modernization', 'Educational Institution Upgrades'].map((s,i) => (<div key={i} className="flex items-center"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span><span className="text-gray-300 text-sm">{s}</span></div>))}
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-lg font-bold text-white mb-6">Methodologies & Standards</h3>
              <div className="space-y-4">
                {[{std:'AACE',desc:'Total Cost Management Framework'},{std:'PMI',desc:'PMBOK Risk Management Standards'},{std:'GAO',desc:'Cost Estimating Best Practices'},{std:'EIA-748',desc:'Earned Value Management Systems'},{std:'FAR 31',desc:'Cost Principles for Contracts'}].map((s,i) => (<div key={i} className="flex items-start border-b border-gray-700 pb-3 last:border-0 last:pb-0"><span className="text-orange-500 font-bold text-sm w-16 flex-shrink-0">{s.std}</span><span className="text-gray-400 text-sm">{s.desc}</span></div>))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to strengthen your project controls?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Contact us to discuss cost estimation, scheduling, and risk management support for your construction program.</p>
          <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-semibold rounded transition-colors">Schedule a Consultation</Link>
        </div>
      </section>
    </div>
  )
}

export default RiskManagementPage
