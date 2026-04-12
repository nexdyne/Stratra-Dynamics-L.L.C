import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsPage() {
  const articles = [
    {
      slug: 'epa-lead-safe-rrp-update',
      date: 'March 2026',
      title: 'EPA Updates Lead-Safe RRP Rule: What Contractors Need to Know',
      excerpt: 'New regulations expand renovation, repair, and painting requirements for pre-1978 buildings. Our team breaks down the key changes and compliance implications.',
    },
    {
      slug: 'hazwoper-certification',
      date: 'February 2026',
      title: 'Centauri-Pro Achieves Advanced HAZWOPER Certification',
      excerpt: 'Our field team completes 40-hour HAZWOPER training and site supervisor certification, expanding our capabilities for federal hazardous materials response projects.',
    },
    {
      slug: 'michigan-lead-abatement-demand',
      date: 'January 2026',
      title: 'Michigan Lead Abatement: Growing Demand for Certified Contractors',
      excerpt: 'State and federal funding is driving unprecedented demand for licensed lead abatement professionals. We examine the current landscape and what it means for property owners.',
    },
    {
      slug: null,
      date: 'December 2025',
      title: 'Understanding Phase I Environmental Site Assessments',
      excerpt: 'A practical guide to ASTM E1527-21 Phase I ESAs \u2014 what they cover, when you need one, and how to prepare for the assessment process.',
    },
    {
      slug: null,
      date: 'November 2025',
      title: 'OSHA Industrial Hygiene Standards: 2025 Update Summary',
      excerpt: 'Key changes to OSHA permissible exposure limits and industrial hygiene monitoring requirements that affect workplace health assessments.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-10 md:py-16 xl:py-20">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 xl:px-8">
          <div className="text-sm text-gray-300 mb-4">
            <Link to="/" className="hover:text-orange-600 transition">Home</Link>
            <span className="mx-2">/</span>
            <span>News</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">News & Insights</h1>
          <p className="text-lg text-gray-300">
            Industry updates, regulatory changes, and company announcements.
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="bg-white py-10 md:py-16 xl:py-20">
        <div className="max-w-4xl xl:max-w-5xl mx-auto px-4 xl:px-6">
          {articles.map((article, index) => (
            <article
              key={index}
              className={`pb-8 mb-8 ${index !== articles.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              <div className="text-sm text-orange-600 font-semibold mb-2">
                {article.date}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {article.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {article.excerpt}
              </p>
              {article.slug ? (
                <Link
                  to={`/news/${article.slug}`}
                  className="text-orange-600 font-semibold hover:text-orange-700 transition"
                >
                  Read More
                </Link>
              ) : (
                <span className="text-gray-400 text-sm">Full article coming soon</span>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-10 md:py-16 xl:py-20">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-4 xl:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact us to learn how regulatory changes may affect your facility or project.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
