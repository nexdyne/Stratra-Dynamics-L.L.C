import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Beaker, CheckCircle, BarChart3, Microscope, Wind, ClipboardList, Award, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const EnvironmentalConsultingPage = () => {
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
            <span className="text-gray-800">Environmental Consulting & Industrial Hygiene</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/iot.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Environmental Consulting & Industrial Hygiene
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              CIH-backed environmental assessments and industrial hygiene surveys to ensure workplace safety and regulatory compliance.
            </p>
            <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold transition-colors">
              Request Consultation
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
              <Beaker className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Site Assessments</h3>
              <p className="text-gray-600">
                Phase I and Phase II ESA services to identify potential environmental liabilities and contamination risks.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Wind className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Air Quality Testing</h3>
              <p className="text-gray-600">
                Comprehensive indoor and outdoor air quality monitoring with detailed analysis and remediation recommendations.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Microscope className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial Hygiene Surveys</h3>
              <p className="text-gray-600">
                Workplace exposure assessments and hazard evaluations to ensure OSHA and regulatory compliance.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <ClipboardList className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hazardous Materials Surveys</h3>
              <p className="text-gray-600">
                Detailed identification and documentation of asbestos, lead, PCB, and other hazardous substances.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Beaker className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Radon Testing</h3>
              <p className="text-gray-600">
                Professional radon measurement and mitigation recommendations for residential and commercial properties.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <BarChart3 className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">MSDS/SDS Program Development</h3>
              <p className="text-gray-600">
                Comprehensive safety data sheet management and regulatory documentation programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Expertise</h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">CIH-Backed Assessments</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Certified Industrial Hygienist (CIH) led assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Phase I & II environmental site assessments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Indoor air quality analysis and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Workplace exposure monitoring and controls</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Regulatory compliance consulting and reporting</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Certifications</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-orange-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">CIH Certification</h4>
                  <p className="text-gray-600 text-sm">Certified Industrial Hygiene for comprehensive workplace assessments</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-orange-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">CHMM Credential</h4>
                  <p className="text-gray-600 text-sm">Certified Hazardous Materials Manager for waste management oversight</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <Award className="w-6 h-6 text-orange-600 mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">State Environmental Licenses</h4>
                  <p className="text-gray-600 text-sm">Full authorization for environmental consulting and assessment work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Comprehensive Services</h3>
              <p className="text-gray-600 mb-4">
                From Phase I assessments to post-remediation verification, we provide complete environmental and hygiene solutions. Our integrated approach ensures all environmental hazards are identified and properly managed.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Rapid turnaround on assessments</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">State-of-the-art testing equipment</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Actionable recommendations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Regulatory Compliance</h3>
              <p className="text-gray-600 mb-4">
                We stay current with all EPA, OSHA, and state environmental regulations, ensuring your facility remains compliant with all applicable standards and requirements.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">EPA and OSHA compliance expertise</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Detailed documentation and reporting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Ongoing regulatory monitoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ensure Workplace Safety & Environmental Compliance
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact our environmental consulting team for comprehensive assessments and compliance solutions.
          </p>
          <Link to="/contact" className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded transition-colors">
            Start Your Assessment
          </Link>
        </div>
      </section>
    </div>
  )
}

export default EnvironmentalConsultingPage
