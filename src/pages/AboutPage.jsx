import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Zap, Monitor, BarChart3 } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">About</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ABOUT</h1>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-green-600 text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">CEO & Founder</h3>
              <p className="text-green-100">Strategic Leadership</p>
            </div>
            <div className="bg-orange-600 text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">VP of AI & Automation</h3>
              <p className="text-orange-100">Technology Innovation</p>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">VP of Compliance</h3>
              <p className="text-blue-100">Regulatory Excellence</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Centauri Pro Consulting was founded with a vision of transforming government contracting through intelligent automation and strategic innovation. Drawing from decades of experience in Fortune 500 companies and federal programs, we recognized the need for a new approach to government solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founders combined their expertise in business strategy, artificial intelligence, and regulatory compliance to create a firm that delivers both technical excellence and strategic value. We operate at the intersection of innovation and compliance—where cutting-edge technology meets the rigorous standards of government contracting.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Today, we attribute our success to a steadfast commitment to our core values: client-centered service, AI-driven innovation, regulatory excellence, and respect for our clients, partners, and stakeholders.
              </p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To deliver mission-ready execution across government, infrastructure, and logistics through intelligent automation, strategic partnerships, and unwavering compliance excellence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-1 rounded-full mr-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">AI-powered project intelligence</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-1 rounded-full mr-3">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Compliance-by-design approach</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-1 rounded-full mr-3">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Strategic partnership model</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Government Contracting Excellence */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Government Contracting Excellence</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our leadership team brings proven experience from OASIS+ programs, GSA schedule management, and federal contracting. We're actively pursuing contract vehicles to serve federal agencies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">OASIS+ Program Experience</h3>
              <p className="text-gray-600 text-sm">Team members with successful OASIS+ delivery history, pursuing new contract vehicles with comprehensive capabilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">GSA Schedule Pursuit</h3>
              <p className="text-gray-600 text-sm">Actively pursuing GSA schedule contracts with capabilities aligned with multiple federal procurement categories.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Small Business Certified</h3>
              <p className="text-gray-600 text-sm">Small business advantages with mentor-protégé program capabilities and socioeconomic goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Core NAICS Codes</h3>
              <div className="text-gray-600 text-sm space-y-1">
                <div>541330 - Engineering Services</div>
                <div>541611 - Management Consulting</div>
                <div>541512 - Computer Systems Design</div>
                <div>493110 - General Warehousing</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation is our advantage</h3>
              <p className="text-gray-600">As a modern government solutions firm, we leverage AI and automation to deliver capabilities that traditional contractors cannot match. Our technology-first approach improves outcomes while reducing costs and risks for our clients.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Putting missions first</h3>
              <p className="text-gray-600">We help our clients succeed by doing what's right, providing quality work, and producing results on time and within budget. Our compliance-by-design approach ensures audit-ready delivery from day one.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence is our standard</h3>
              <p className="text-gray-600">As a company and as individuals, we are driven by the principle that good enough is never good enough. We bring principled leadership and work closely with our clients to provide seamless service from inception to completion.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Partner with Centauri Pro?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI-driven approach and government contracting expertise can support your mission-critical objectives.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/contact" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </Link>
            <Link to="/contact" className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Company Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
