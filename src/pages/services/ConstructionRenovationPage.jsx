import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Building, CheckCircle, Hammer, Shield, ClipboardList, BarChart3, Zap, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const ConstructionRenovationPage = () => {
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
            <span className="text-gray-800">Construction & Renovation Management</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/federal-pro.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Construction & Renovation Management
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Expert owner's representation integrating environmental compliance with construction excellence for pre-1978 buildings and federal facilities.
            </p>
            <Link to="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold transition-colors">
              Request Project Consultation
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
              <Building className="v-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Owner's Representation</h3>
              <p className="text-gray-600">
                Dedicated oversight ensuring your interests are protected throughout construction and renovation projects.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <ClipboardList className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pre-Construction Planning</h3>
              <p className="text-gray-600">
                Comprehensive project planning including budget development, scheduling, and environmental assessments.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Shield className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Compliance Integration</h3>
              <p className="text-gray-600">
                Seamless integration of lead-safe, asbestos-safe, and environmental compliance into construction workflows.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <Hammer className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Demolition Management</h3>
              <p className="text-gray-600">
                Safe and compliant demolition oversight with proper environmental protocols and waste management.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <TrendingUp className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Renovation Oversight</h3>
              <p className="text-gray-600">
                Comprehensive project management ensuring quality, timeline adherence, and compliance throughout renovation.
              </p>
            </div>

            <div className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <CheckCircle className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Post-Remediation Verification</h3>
              <p className="text-gray-600">
                Final clearance and verification testing ensuring all environmental hazards have been properly addressed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-1978 Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Pre-1978 Building Expertise</h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Buildings constructed before 1978 commonly contain lead-based paint, asbestos, and other hazardous materials. Our specialized expertise ensures these challenges are managed efficiently while maintaining project timelines and budgets.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We integrate environmental assessments into the earliest planning stages, allowing for accurate budgeting and sequencing. When lead or asbestos is discovered during construction, our team ensures seamless remediation without disrupting your project.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Integration Benefits:</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Accurate budget planning for environmental remediation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Avoided construction delays and change orders</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Full regulatory compliance and certification</span>
                </li>
              </ul>
            </div>

            <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Pre-1978 Hazards</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Lead-Based Paint</h4>
                    <p className="text-gray-600 text-sm">Found in majority of pre-1978 buildings, requires EPA-certified abatement</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Asbestos</h4>
                    <p className="text-gray-600 text-sm">Common in insulation, tiles, roofingârequires specialized removal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mold & Moisture</h4>
                    <p className="text-gray-600 text-sm">Often discovered during renovation of older structures</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-orange-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">PCBs & Mercury</h4>
                    <p className="text-gray-600 text-sm">In electrical equipment and fixtures requiring proper disposal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Integrated Approach</h2>
            <div className="w-16 h-1 bg-orange-500"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">Comprehensive pre-construction hazard assessments and Phase I ESA</p>
            </div>

            <div className="relative">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="font-bold text-gray-900 mb-2">Planning</h3>
              <p className="text-gray-600 text-sm">Budget and schedule integration of environmental work into construction</p>
            </div>

            <div className="relative">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="font-bold text-gray-900 mb-2">Execution</h3>
              <p className="text-gray-600 text-sm">Coordinated construction and remediation with continuous oversight</p>
            </div>

            <div className="relative">
              <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mb-4">4</div>
              <h3 className="font-bold text-gray-900 mb-2">Verification</h3>
              <p className="text-gray-600 text-sm">Final certification and clearance with all compliance documentation</p>
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
              <h3 className="text-xl font-bold text-gray-900 mb-6">Integrated Expertise</h3>
              <p className="text-gray-600 mb-4">
                Unlike traditional construction managers, we bring environmental compliance expertise to every project. This integration prevents delays, reduces change orders, and ensures smooth project delivery.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Construction + Environmental expertise</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Proactive hazard identification</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Budget accuracy and timeline certainty</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Federal & Government Experience</h3>
              <p className="text-gray-600 mb-4">
                Extensive experience managing construction and remediation projects for federal agencies and government facilities. We understand complex compliance requirements and reporting.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Federal contracting experience</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">HUD and GSA compliance expertise</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                  <span className="text-gray-600">Complex government project management</span>
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
            Ready to Plan Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how we can integrate environmental compliance into your construction project from day one.
          </p>
          <Link to="/contact" className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded transition-colors">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ConstructionRenovationPage
