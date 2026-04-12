import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 xl:py-24">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 xl:px-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-300 mb-8">
            <Link to="/" className="hover:text-orange-500 transition">Home</Link>
            {' / '}
            <span className="text-gray-100">About Us</span>
          </div>

          {/* Hero Content */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Centauri-Pro Consulting</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Leading environmental services and construction management solutions for government and commercial clients across the Great Lakes region.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-white py-16 xl:py-20">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
            {/* Left Column - Company Story */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Founded by David Seyaker, Centauri-Pro Consulting has established itself as a trusted partner in environmental services and construction management. Based in Michigan, our firm brings together specialized expertise and practical experience to deliver comprehensive solutions for hazardous materials abatement, environmental consulting, and industrial hygiene projects.
              </p>
              <p>
                We understand the complexities of regulatory compliance and the critical importance of environmental stewardship in industrial and commercial operations. Our team combines scientific rigor with practical field knowledge to ensure every project meets or exceeds the highest standards of environmental protection and worker safety.
              </p>
              <p>
                Whether managing large-scale construction initiatives or conducting detailed environmental assessments, we approach each engagement with the same commitment to excellence and compliance that has defined our reputation. We work with government agencies, commercial enterprises, and institutions to transform environmental challenges into manageable, compliant operations.
              </p>
            </div>

            {/* Right Column - Mission & Values */}
            <div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  To deliver comprehensive environmental and construction management solutions that protect public health, ensure regulatory compliance, and support sustainable industrial operations.
                </p>

                {/* Core Values */}
                <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">Core Values</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Environmental Protection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Regulatory Excellence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Community Safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Professional Integrity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What Sets Us Apart */}
      <section className="bg-gray-50 py-16 xl:py-20">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 xl:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Sets Us Apart</h2>
            <p className="text-gray-600 mt-2">Specialized capabilities and credentials that drive client confidence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-orange-500 transition">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Licensed & Certified</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                EPA recognized, OSHA certified, and HUD lead-safe certified. Our credentials ensure compliance with federal environmental standards.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-orange-500 transition">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Full-Service Capability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From initial environmental assessment through construction completion. We manage the entire project lifecycle with integrated expertise.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-orange-500 transition">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Compliance Excellence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                NIST-aligned processes and audit-ready documentation. Every project is built on a foundation of regulatory precision and transparency.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 p-6 rounded-lg hover:border-orange-500 transition">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Government Contracting</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Small business certified with GSA and OASIS+ pursuit capabilities. Trusted partner for federal and state agency projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-900 text-white py-16 xl:py-20">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 xl:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-100">Environmental Protection \u2013 Advancing sustainable practices that minimize ecological impact</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-100">Regulatory Excellence \u2013 Exceeding compliance requirements through continuous expertise development</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-100">Community Safety \u2013 Protecting workers and communities through rigorous health and safety protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-100">Professional Integrity \u2013 Building lasting relationships through transparency and accountability</span>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6">Our Commitment</h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                We are committed to delivering exceptional results that go beyond regulatory compliance. Safety, quality, and environmental stewardship are embedded in everything we do\u2014from project planning through post-completion verification.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Our team works closely with clients to understand their unique challenges and develop tailored solutions. We believe that the best outcomes come from partnership, transparency, and a shared commitment to doing things the right way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16 xl:py-20">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 xl:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how Centauri-Pro Consulting can support your environmental and construction management needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
