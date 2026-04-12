import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'HUD Lead-Safe Housing Initiative',
      location: 'Detroit, Michigan',
      serviceTag: 'Lead Abatement',
      description: 'Comprehensive lead-based paint assessment and abatement for over 200 residential units under HUD Lead Hazard Control grant program. Full compliance with 24 CFR 35 and EPA RRP standards.'
    },
    {
      id: 2,
      title: 'Federal Building Environmental Assessment',
      location: 'Lansing, Michigan',
      serviceTag: 'Environmental Consulting',
      description: 'Phase I and Phase II Environmental Site Assessments for a federal government facility, including industrial hygiene surveys, air quality monitoring, and hazardous materials identification.'
    },
    {
      id: 3,
      title: 'K-12 School District Asbestos & Lead Program',
      location: 'Grand Rapids, Michigan',
      serviceTag: 'Hazardous Materials',
      description: 'District-wide AHERA inspections, asbestos management planning, and lead-based paint risk assessments across 45 school buildings with full regulatory compliance documentation.'
    }
  ];

  const services = [
    'Lead Abatement',
    'Environmental Consulting',
    'Construction Management',
    'Industrial Hygiene',
    'Training & Compliance',
    'Energy & Sustainability'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-6 text-sm text-gray-400">
            <Link to="/" className="hover:text-white">Home</Link> / Projects
          </div>
          <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-300">
            Environmental remediation, construction management, and compliance solutions delivered with precision.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group"
              >
                <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-2 bg-orange-600"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{project.location}</p>
                    <span className="inline-block bg-orange-50 text-orange-700 text-xs font-semibold px-3 py-1 rounded mb-4">
                      {project.serviceTag}
                    </span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Services Across Our Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white border border-gray-200 px-6 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:border-orange-600 hover:text-orange-600 transition-colors"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Project?
          </h2>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
