import React from 'react';
import { Link } from 'react-router-dom';

export default function ContractVehiclesPage() {
  return (
    <div className="bg-white">
      {/* Header with Breadcrumb */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 xl:px-8 py-4">
          <nav className="flex items-center text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/about" className="hover:text-orange-600 transition-colors">
              About Us
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Contract Vehicles</span>
          </nav>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Government Contract Vehicles
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Centauri-Pro Consulting is positioned to support federal, state, and local government agencies through established contract vehicles that streamline procurement and ensure compliance with federal contracting requirements.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 xl:px-8 py-10 md:py-16 xl:py-20">

        {/* NAICS Codes Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">NAICS Codes</h2>
          <p className="text-gray-700 mb-6">
            Our firm operates under the following North American Industry Classification System (NAICS) codes, enabling us to serve diverse government contracting opportunities:
          </p>

          <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto">
            <table className="w-full">
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-900 font-semibold text-xs sm:text-base whitespace-nowrap">562910</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700 text-xs sm:text-base">
                    Environmental Remediation Services <span className="text-orange-600 font-medium">(Primary)</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-900 font-semibold text-xs sm:text-base whitespace-nowrap">562211</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700 text-xs sm:text-base">Hazardous Waste Treatment and Disposal</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-900 font-semibold text-xs sm:text-base whitespace-nowrap">541620</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700 text-xs sm:text-base">Environmental Consulting Services</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-900 font-semibold text-xs sm:text-base whitespace-nowrap">541330</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700 text-xs sm:text-base">Engineering Services</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-900 font-semibold text-xs sm:text-base whitespace-nowrap">236220</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700 text-xs sm:text-base">Commercial and Institutional Building Construction</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-900 font-semibold text-xs sm:text-base whitespace-nowrap">541350</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-gray-700 text-xs sm:text-base">Building Inspection Services</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Certifications & Set-Asides</h2>
          <p className="text-gray-700 mb-6">
            Centauri-Pro Consulting holds and pursues key business certifications and designations to serve government entities and maximize contracting opportunities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Small Business (SB)</h3>
                  <p className="text-gray-700">Certified and registered for small business set-asides at federal, state, and local levels.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Minority Business Enterprise (MBE)</h3>
                  <p className="text-gray-700">Currently pursuing certification to expand opportunities with government and private sector contracts.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">State of Michigan Licensed Lead Abatement Contractor</h3>
                  <p className="text-gray-700">Fully licensed and compliant with Michigan Department of Environment, Great Lakes, and Energy standards.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8">
              <div className="flex items-start">
                <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">EPA Lead-Safe Certified Firm</h3>
                  <p className="text-gray-700">Certified under EPA Lead-Safe Practices to ensure highest standards in lead remediation projects.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contract Vehicle Pursuit Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Active Contract Vehicle Pursuit</h2>
          <p className="text-gray-700 mb-6">
            We are actively pursuing and developing relationships with government procurement vehicles to enhance our capacity to serve federal, state, and local agencies:
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">GSA Multiple Award Schedule (MAS)</h3>
                <p className="text-gray-700 mt-1">General Services Administration contract to provide environmental services and construction management to federal agencies.</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">OASIS+ Small Business</h3>
                <p className="text-gray-700 mt-1">One Acquisition Solution for Integrated Services Plus for small business contractors supporting federal agencies.</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
              <div>
                <h3 className="text-lg font-bold text-gray-900">State and Local Environmental Remediation BPAs</h3>
                <p className="text-gray-700 mt-1">Blanket Purchase Agreements with state and municipal governments for environmental remediation and hazardous materials management.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partner With Us CTA */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Partner With Us</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Centauri-Pro Consulting is committed to supporting government missions through reliable, compliant, and expert environmental and construction management services. Contact us to discuss partnership opportunities and how we can meet your agency's needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-4 min-h-[48px] bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
          >
            Get in Touch
            <span>{String.fromCharCode(8594)}</span>
          </Link>
        </section>

      </div>
    </div>
  );
}
