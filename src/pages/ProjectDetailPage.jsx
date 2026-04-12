import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProjectDetailPage() {
  const { id } = useParams();

  const projectData = {
    1: {
      title: 'HUD Lead-Safe Housing Initiative',
      location: 'Detroit, Michigan',
      serviceTag: 'Lead Abatement',
      description: 'Comprehensive lead-based paint assessment and abatement for over 200 residential units under HUD Lead Hazard Control grant program. Full compliance with 24 CFR 35 and EPA RRP standards.',
      fullDescription: 'This project involved a complete lead hazard reduction initiative across multiple residential buildings in Detroit. Our team conducted detailed risk assessments, designed and managed abatement work, and ensured full compliance with federal regulations throughout the process.',
      scopeItems: [
        'Lead-based paint risk assessments (XRF testing)',
        'Abatement design and specifications',
        'Contractor oversight and quality assurance',
        'Occupant protection and relocation coordination',
        'Post-abatement clearance testing',
        'HUD compliance documentation and reporting'
      ],
      outcome: 'Successfully completed lead hazard reduction in 200+ residential units, achieving full HUD clearance standards. All work completed within grant timeline and budget, with zero safety incidents.'
    },
    2: {
      title: 'Federal Building Environmental Assessment',
      location: 'Lansing, Michigan',
      serviceTag: 'Environmental Consulting',
      description: 'Phase I and Phase II Environmental Site Assessments for a federal government facility, including industrial hygiene surveys, air quality monitoring, and hazardous materials identification.',
      fullDescription: 'A comprehensive environmental assessment of a major federal facility to establish baseline environmental conditions and identify potential contamination or hazardous materials. This work provided critical information for facility planning and renovation projects.',
      scopeItems: [
        'Phase I ESA (ASTM E1527-21)',
        'Phase II subsurface investigation',
        'Indoor air quality monitoring',
        'Asbestos and lead-based paint surveys',
        'Industrial hygiene exposure assessments',
        'Regulatory compliance reporting'
      ],
      outcome: 'Delivered comprehensive environmental baseline documentation enabling facility renovation planning. Identified and characterized all regulated materials, providing actionable remediation recommendations.'
    },
    3: {
      title: 'K-12 School District Asbestos & Lead Program',
      location: 'Grand Rapids, Michigan',
      serviceTag: 'Hazardous Materials',
      description: 'District-wide AHERA inspections, asbestos management planning, and lead-based paint risk assessments across 45 school buildings with full regulatory compliance documentation.',
      fullDescription: 'Established a comprehensive hazardous materials management program for a large school district covering 45 buildings and hundreds of staff members. The program ensures ongoing compliance with federal requirements and protects student and staff health.',
      scopeItems: [
        'AHERA three-year reinspections',
        'Asbestos management plan updates',
        'Lead-based paint risk assessments',
        'Staff awareness training',
        'Operations and maintenance procedures',
        'Regulatory documentation and record-keeping'
      ],
      outcome: 'Established district-wide hazardous materials management program with updated AHERA plans for all 45 buildings. Delivered staff training to 500+ employees on hazard awareness and emergency procedures.'
    }
  };

  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <section className="bg-gray-900 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Not Found</h1>
            <p className="text-lg text-gray-300 mb-8">
              The project you are looking for does not exist.
            </p>
            <Link
              to="/projects"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
            >
              Back to Projects
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link> / <Link to="/projects" className="hover:text-orange-600">Projects</Link> / {project.title}
          </div>
        </div>
      </section>

      {/* Project Header */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
          <div className="mb-6 flex flex-wrap gap-6 items-center">
            <div>
              <p className="text-sm text-gray-600 font-semibold">Location</p>
              <p className="text-lg text-gray-900">{project.location}</p>
            </div>
            <div>
              <span className="inline-block bg-orange-50 text-orange-700 text-sm font-semibold px-4 py-2 rounded">
                {project.serviceTag}
              </span>
            </div>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            {project.fullDescription}
          </p>
        </div>
      </section>

      {/* Scope of Work */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Scope of Work</h2>
          <ul className="space-y-4">
            {project.scopeItems.map((item, index) => (
              <li key={index} className="flex items-start text-lg text-gray-700">
                <span className="inline-flex items-center justify-center w-2 h-2 bg-orange-600 rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Project Outcomes */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Project Outcomes</h2>
          <div className="bg-gray-100 p-8 rounded-lg">
            <p className="text-lg text-gray-900 leading-relaxed">
              {project.outcome}
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/projects"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            View All Projects
          </Link>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
