import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    serviceOfInterest: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        organization: '',
        serviceOfInterest: '',
        subject: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 xl:py-20">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 xl:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-gray-300">
            <Link to="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </div>

          {/* Hero Content */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Get in touch with our team of certified environmental and construction management professionals.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 xl:py-20">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 xl:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 xl:gap-16">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question about our environmental consulting or construction management services? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <p className="text-green-800 font-semibold">Thank you for reaching out!</p>
                  <p className="text-green-700 text-sm mt-2">
                    We've received your message and will respond within one business day.
                  </p>
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                {/* Email and Phone */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-900 mb-2">
                    Organization/Agency
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                    placeholder="Your Organization Name"
                  />
                </div>

                {/* Service of Interest */}
                <div>
                  <label htmlFor="serviceOfInterest" className="block text-sm font-medium text-gray-900 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="serviceOfInterest"
                    name="serviceOfInterest"
                    value={formData.serviceOfInterest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="lead-abatement">Lead Abatement & Hazardous Materials</option>
                    <option value="environmental-consulting">Environmental Consulting & Industrial Hygiene</option>
                    <option value="construction-management">Construction & Renovation Management</option>
                    <option value="commissioning-energy">Commissioning Energy & Sustainability</option>
                    <option value="estimating-scheduling">Estimating Scheduling & Risk Management</option>
                    <option value="training-compliance">Training & Compliance Services</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
                    placeholder="What is this regarding?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors resize-none"
                    placeholder="Tell us more about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column - Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Get In Touch</h3>

                <div className="space-y-6 mb-8">
                  {/* Phone */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Phone</p>
                    <p className="text-lg text-gray-900">(313) 555-0100</p>
                  </div>

                  {/* Email */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Email</p>
                    <p className="text-lg text-gray-900">info@centauri-pro.com</p>
                  </div>

                  {/* Location */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Location</p>
                    <p className="text-lg text-gray-900">Detroit, Michigan</p>
                  </div>

                  {/* Hours */}
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">Hours</p>
                    <p className="text-lg text-gray-900">Monday - Friday, 8:00 AM - 5:00 PM EST</p>
                  </div>
                </div>

                {/* Emergency Services */}
                <div className="pt-8 border-t border-gray-200">
                  <p className="font-semibold text-gray-900 mb-2">Emergency Services</p>
                  <p className="text-sm text-gray-700">
                    For urgent environmental or safety concerns, call our 24/7 emergency line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16 xl:py-20">
        <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 xl:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prefer to discuss your project directly?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to schedule a consultation and discuss your environmental or construction management needs.
          </p>
          <a
            href="tel:(313)555-0100"
            className="inline-block bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors duration-200"
          >
            Call Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
