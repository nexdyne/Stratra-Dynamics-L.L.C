import React from 'react';
import { Link } from 'react-router-dom';

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Lead Abatement Project Supervisor',
      location: 'Detroit, MI',
      type: 'Full-time',
      description: 'Oversee lead-based paint abatement projects, ensure EPA RRP compliance, manage field crews'
    },
    {
      id: 2,
      title: 'Environmental Consultant / Industrial Hygienist',
      location: 'Detroit, MI',
      type: 'Full-time',
      description: 'Conduct Phase I/II ESAs, air quality testing, industrial hygiene surveys, prepare technical reports'
    },
    {
      id: 3,
      title: 'Construction Project Coordinator',
      location: 'Detroit, MI',
      type: 'Full-time',
      description: 'Support construction and renovation management projects, coordinate with environmental teams, track schedules and budgets'
    }
  ];

  const benefits = [
    'Competitive salary and performance bonuses',
    'Comprehensive health, dental, and vision insurance',
    '401(k) with company matching',
    'Professional development and certification support',
    'Field and office flexibility',
    'EPA, OSHA, and HAZWOPER training provided'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <span>Careers</span>
          </div>

          {/* Hero Content */}
          <h1 className="text-5xl font-bold mb-4">Careers at Centauri-Pro</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Join a team dedicated to environmental protection and public health. Help us build safer communities through expert environmental services and construction management.
          </p>
        </div>
      </section>

      {/* Why Work Here Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Editorial Content */}
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Centauri-Pro Consulting, you will be part of an environmental services and construction management firm committed to protecting communities and advancing public health. Our work spans lead abatement, industrial hygiene, environmental assessments, and comprehensive construction management.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We are a Michigan-based firm with a track record of government contracts and certified professionals. Our team understands the importance of getting details right and maintaining the highest standards of compliance and safety. When you work here, you are contributing to tangible improvements in environmental health and safety.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The environmental services sector is growing rapidly, and so is the demand for skilled professionals. Whether you are building your career or expanding your expertise, Centauri-Pro offers the professional development, certifications, and real-world experience to help you advance.
                </p>
              </div>
            </div>

            {/* Right Column - Benefits Card */}
            <div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">What We Offer</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Current Openings</h2>

          <div className="grid md:grid-cols-1 gap-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 mb-4 text-sm text-gray-600">
                  <span>{job.location}</span>
                  <span className="hidden sm:inline">\u2022</span>
                  <span>{job.type}</span>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>
                <Link
                  to="/contact"
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See the Right Role?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            We are always looking for talented professionals who share our commitment to environmental excellence and public health. Send us your resume and let us talk about how you can grow with Centauri-Pro.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Send Your Resume
          </Link>
        </div>
      </section>
    </div>
  );
}
