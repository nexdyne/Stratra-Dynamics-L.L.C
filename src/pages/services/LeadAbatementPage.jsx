import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Shield, CheckCircle, ArrowRight, ChevronRight, AlertTriangle, Zap, Building, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const LeadAbatementPage = () => {
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
            <span className="text-gray-800">Lead Abatement & Hazardous Materials Removal</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/Incident-and-Compliance-Management-for-Construction.webp')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lead Abatement & Hazardous Materials Removal
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              EPA-certified lead-safe practices for residential, commercial, and government facilities. We ensure compliance with HUD, EPA, and state regulations while protecting occupants and workers.
            </p>
            <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold transition-colors">
              Request Assessment
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
              <Shield className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lead-Based Paint Removal</h3>
              <p className="text-gray-600">
                Safe and compliant removal of lead-based paint from pre-1978 structures using EPA-certified methods.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <AlertTriangle className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Asbestos Abatement</h3>
              <p className="text-gray-600">
                Professional removal and encapsulation of asbestos-containing materials with full regulatory compliance.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Building className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mold Remediation</h3>
              <p className="text-gray-600">
                Comprehensive mold assessment and remediation to eliminate health hazards and prevent recurrence.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Zap className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">PCB Removal</h3>
              <p className="text-gray-600">
                Identification and safe removal of polychlorinated biphenyls from electrical equipment and structures.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <AlertTriangle className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mercury Abatement</h3>
              <p className="text-gray-600">
                Safe mercury removal from lighting fixtures, switches, and other fixtures with proper disposal.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <CheckCircle className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hazardous Waste Disposal</h3>
              <p className="text-gray-600">
                Proper transportation and certified disposal of all hazardous materials according to federal standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">EPA RRP Certified contractors with extensive field experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">State lead licenses and AHERA accreditation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Full compliance with HUD, EPA, and state regulations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Specialized expertise in residential, commercial, and government facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Advanced containment and air monitoring technology</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Certifications</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-orange-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">EPA RRP Certification</h4>
                  <p className="text-gray-600 text-sm">Renovate, Repair and Paint rule compliance for all lead-safe work</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-orange-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">State Lead Licenses</h4>
                  <p className="text-gray-600 text-sm">Full authorization to conduct lead-based paint activities</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-orange-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">AHERA Accreditation</h4>
                  <p className="text-gray-600 text-sm">Asbestos-containing materials assessment and management credentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Process</h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive testing and hazard identification of all materials</p>
            </div>

            <div className="relative">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Detailed remediation plan with containment and safety protocols</p>
            </div>

            <div className="relative">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Abatement</h3>
              <p className="text-gray-600 text-sm">EPA-certified removal using advanced safety and containment methods</p>
            </div>

            <div className="relative">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">4</div>
              <h3 className="font-bold text-gray-900 mb-2">Verification</h3>
              <p className="text-gray-600 text-sm">Post-abatement testing and clearance documentation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Protect Your Facility?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a comprehensive assessment of lead, asbestos, and hazardous material risks.
          </p>
          <Link to="/contact" className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded transition-colors">
            Schedule Your Assessment
          </Link>
        </div>
      </section>
  
  
    </div>
  
  
  Ý
  
eqÕÜY][XYX][Y[YÙN
