import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function LeadershipPage() {
  const leaders = [
    {
      id: 1,
      name: 'David Seyaker',
      title: 'CEO & Founder',
      bio: 'Environmental services veteran with expertise in hazardous materials management, federal contracting, and construction oversight. Founded Centauri-Pro to deliver compliance-driven project solutions for government and commercial clients.'
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      title: 'VP of Operations',
      bio: 'Background in industrial hygiene, HAZWOPER operations, and field project management across federal remediation programs. Dedicated to operational excellence and sustainable project delivery.'
    },
    {
      id: 3,
      name: 'Marcus Chen',
      title: 'Director of Compliance',
      bio: 'Specialist in EPA/OSHA regulatory compliance, lead-safe certification programs, and environmental audit readiness. Ensures all projects meet or exceed regulatory standards.'
    }
  ];

  const values = [
    'Client-Centered Service',
    'Compliance Excellence',
    'Accountability & Transparency'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-100 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/about" className="hover:text-orange-600 transition-colors">About Us</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Leadership</span>
          </nav>

          {/* Page Title and Subtitle */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Leadership</h1>
            <p className="text-lg text-gray-700">Meet the experienced professionals driving Centauri-Pro's mission to deliver compliant, sustainable solutions in environmental services and construction management.</p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Leadership Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leaders.map((leader) => (
              <div key={leader.id} className="border border-gray-300 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                {/* Photo Placeholder */}
                <div className="w-full h-64 bg-gray-300"></div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{leader.title}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start">
                <div className="w-3 h-3 bg-orange-600 rounded-full mt-1.5 mr-4 flex-shrink-0"></div>
                <p className="text-lg font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-orange-600 rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-orange-100 text-lg mb-8">Let's discuss how Centauri-Pro can support your next environmental or construction project.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-colors">
              Get in Touch
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
