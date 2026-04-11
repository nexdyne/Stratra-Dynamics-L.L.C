import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { BookOpen, CheckCircle, Award, Users, Shield, Zap, ClipboardCheck, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const TrainingCompliancePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-500">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-orange-500">Services</Link>
            <span>/</span>
            <span className="text-gray-800">Training & Compliance Services</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/perdictive-analytics.webp')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Training & Compliance Services
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              OSHA-aligned training programs and compliance support ensuring your workforce is certified, prepared, and compliant with all regulatory requirements.
            </p>
            <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold transition-colors">
              Schedule Training
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">What We Do</h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <BookOpen className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">HAZWOPER Training</h3>
              <p className="text-gray-600">
                40-hour, 24-hour, and 8-hour HAZWOPER training for hazardous waste operations and emergency response.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Award className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead-Safe RRP Certification</h3>
              <p className="text-gray-600">
                EPA-approved Renovate, Repair and Paint certification training for all lead-safe work requirements.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Shield className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Asbestos Training</h3>
              <p className="text-gray-600">
                Contractor and supervisor certification for asbestos-containing materials identification and handling.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <ClipboardCheck className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance Program Development</h3>
              <p className="text-gray-600">
                Custom compliance program design and implementation for your organization's specific needs.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Zap className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Audits</h3>
              <p className="text-gray-600">
                Comprehensive safety audits and assessments to identify gaps and improve compliance.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Users className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Documentation</h3>
              <p className="text-gray-600">
                Complete regulatory documentation, record-keeping, and certification management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Training Programs</h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">HAZWOPER 40/24/8-hour</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive hazardous waste operations training meeting OSHA requirements. 40-hour initial training for workers with potential exposure to hazardous substances.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">40-hour initial certification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">24-hour supervisor training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">8-hour refresher courses</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Site-specific training available</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lead-Safe RRP Certification</h3>
              <p className="text-gray-600 mb-6">
                EPA-approved training for Renovate, Repair and Paint rule compliance. Essential for anyone working on pre-1978 structures.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">EPA RRP certification training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Lead-safe work practices</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Hands-on practical training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Ongoing refresher updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Asbestos Training</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive training for asbestos awareness, identification, and safe handling. Available for contractors and supervisors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Asbestos awareness training</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Contractor certification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Supervisor qualification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">AHERA compliance training</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Compliance & Safety Support</h3>
              <p className="text-gray-600 mb-6">
                Ongoing compliance program development and safety audits to ensure your organization remains current with all requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Compliance program development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Regulatory safety audits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Documentation and record-keeping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Certification management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Our Training</h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Expert Instructors</h3>
              <p className="text-gray-600 mb-4">
                Our instructors are field-experienced professionals with EPA, OSHA, and state certifications. They bring real-world expertise to every training session.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Certified EPA and OSHA trainers</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Field experience and practical knowledge</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Engaging hands-on instruction</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Real-world case studies and scenarios</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Flexible Training Options</h3>
              <p className="text-gray-600 mb-4">
                We offer flexible scheduling and delivery options to meet your organization's training needs, including on-site customized training.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Public and private training sessions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">On-site customized training</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Flexible scheduling for your team</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Complete certification documentation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Ongoing Compliance Support</h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <p className="text-lg text-gray-600 mb-6">
              Training is just the beginning. We provide ongoing support to ensure your organization maintains compliance with all regulatory requirements and keeps certifications current.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Certification Tracking</h3>
                <p className="text-gray-600 text-sm">
                  We maintain records of all certifications and notify you before renewals are due, preventing compliance gaps.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Regulatory Updates</h3>
                <p className="text-gray-600 text-sm">
                  We keep you informed of changes to EPA, OSHA, and state regulations, updating training content accordingly.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Safety Audits</h3>
                <p className="text-gray-600 text-sm">
                  Regular safety audits identify gaps and opportunities for improvement in your compliance programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Certify Your Workforce Today
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us to schedule training for your team and ensure compliance with all regulatory requirements.
          </p>
          <Link to="/contact" className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded transition-colors">
            Schedule Training
          </Link>
        </div>
      </section>
    </div>
  )
}

export default TrainingCompliancePage
