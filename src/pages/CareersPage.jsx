import React from 'react';
import { Zap, Building, BarChart3 } from 'lucide-react';

const CareersPage = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Project Manager - Government Contracts",
      location: "Detroit, Michigan",
      type: "Full-time",
      description: "Lead complex government contracting projects with AI-driven oversight and compliance management."
    },
    {
      id: 2,
      title: "AI/ML Engineer - Federal Solutions",
      location: "Ann Arbor, Michigan",
      type: "Full-time",
      description: "Develop and implement AI solutions for government infrastructure and compliance automation."
    },
    {
      id: 3,
      title: "Compliance Specialist - Federal Programs",
      location: "Grand Rapids, Michigan",
      type: "Full-time",
      description: "Ensure regulatory compliance and audit readiness for federal contracting programs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">CAREERS</h1>
          <p className="text-xl text-gray-600">Join our mission to transform government contracting</p>
        </div>
      </div>

      {/* Company Culture */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Work at Centauri Pro?</h2>
              <p className="text-lg text-gray-700 mb-6">
                We're building the future of government contracting through innovation, integrity, and excellence. Join a team that values creativity, collaboration, and continuous learning.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-2 rounded-full mr-4">
                    <Zap className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700">Cutting-edge AI and automation projects</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-2 rounded-full mr-4">
                    <Building className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700">Mission-critical government programs</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-2 rounded-full mr-4">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <span className="text-gray-700">Professional growth and development</span>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Competitive salary and performance bonuses</li>
                <li>• Comprehensive health, dental, and vision insurance</li>
                <li>• 401(k) with company matching</li>
                <li>• Flexible work arrangements</li>
                <li>• Professional development opportunities</li>
                <li>• Cutting-edge technology and tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Job Openings */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Current Openings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <div className="text-gray-600 text-sm mb-4">
                  <span>{job.location}</span> • <span>{job.type}</span>
                </div>
                <p className="text-gray-700 mb-6">{job.description}</p>
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't see the perfect role? We're always looking for talented individuals to join our team.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Send Us Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
