import React from 'react';
import { Link } from 'react-router-dom';

const LegalNoticesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Legal Notices</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">LEGAL NOTICES</h1>
          
          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
            <p className="text-lg font-medium text-gray-900">
              PLEASE READ THE FOLLOWING TERMS AND POLICIES CAREFULLY. WHEN YOU USE THIS WEBSITE YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS AND POLICIES.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            {/* Terms of Service */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Service</h2>
              <p className="text-gray-700 mb-4">
                These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Centauri Pro Consulting, LLC ("Company," "we," "us," or "our"). By accessing, browsing, or utilizing this website or any services provided herein, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree to these Terms, you are expressly prohibited from using this website and must discontinue use immediately.
              </p>
            </section>

            {/* Acceptable Use Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use Policy</h2>
              <p className="text-gray-700 mb-4">
                Users shall conduct themselves in accordance with all applicable laws, regulations, and professional standards. Prohibited activities include, but are not limited to: (a) engaging in any unlawful, fraudulent, or deceptive practices; (b) transmitting harmful, threatening, or defamatory content; (c) attempting to gain unauthorized access to our systems or networks; (d) interfering with the proper functioning of our website; and (e) violating any applicable federal, state, or local laws or regulations.
              </p>
              <p className="text-gray-700 mb-4">
                The Company reserves the right, in its sole discretion, to terminate or suspend access to any User who violates this Acceptable Use Policy, without prior notice and without liability to such User.
              </p>
            </section>

            {/* Electronic Communications Consent */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Electronic Communications Consent</h2>
              <p className="text-gray-700 mb-4">
                By utilizing this website, you hereby consent to receive electronic communications from the Company. You acknowledge and agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing. Electronic communications shall include, without limitation, email correspondence, website notifications, electronic documents, and digital transmissions.
              </p>
              <p className="text-gray-700 mb-4">
                You further acknowledge that your consent to receive electronic communications is voluntary and that you may withdraw such consent at any time by providing written notice to the Company at the address specified herein.
              </p>
            </section>

            {/* Proprietary Rights and Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Proprietary Rights and Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, materials, and intellectual property contained on this website, including but not limited to text, graphics, logos, images, audio clips, video content, software, source code, proprietary methodologies, trade secrets, and compilation of data (collectively, the "Content"), are the exclusive property of Centauri Pro Consulting, LLC and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                No Content may be copied, reproduced, republished, uploaded, posted, transmitted, distributed, or used for commercial purposes without the express written consent of the Company. Any unauthorized use of the Content may violate copyright laws, trademark laws, privacy and publicity laws, and other applicable regulations and statutes.
              </p>
            </section>

            {/* Government Contracting Compliance and Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Government Contracting Compliance and Security</h2>
              <p className="text-gray-700 mb-4">
                Centauri Pro Consulting, LLC operates in strict compliance with all applicable federal acquisition regulations, including but not limited to the Federal Acquisition Regulation (FAR), Defense Federal Acquisition Regulation Supplement (DFARS), and agency-specific acquisition regulations. Users accessing information related to government contracts, classified materials, or sensitive government information acknowledge and agree to maintain appropriate security clearances and handle all information in accordance with applicable security protocols, classification guidelines, and federal regulations.
              </p>
              <p className="text-gray-700 mb-4">
                Users further acknowledge that unauthorized disclosure of sensitive government information may result in civil and criminal penalties under federal law, including but not limited to the Espionage Act, the Computer Fraud and Abuse Act, and other applicable statutes.
              </p>
            </section>

            {/* Disclaimers and Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers and Limitation of Liability</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <p className="text-gray-700 mb-4 font-medium">
                  THIS WEBSITE AND ALL INFORMATION, CONTENT, MATERIALS, PRODUCTS, AND SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THIS WEBSITE ARE PROVIDED BY THE COMPANY ON AN "AS IS" AND "AS AVAILABLE" BASIS, UNLESS OTHERWISE SPECIFIED IN WRITING.
                </p>
                <p className="text-gray-700 mb-4">
                  THE COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THIS WEBSITE OR THE INFORMATION, CONTENT, MATERIALS, PRODUCTS, OR SERVICES INCLUDED ON OR OTHERWISE MADE AVAILABLE TO YOU THROUGH THIS WEBSITE, UNLESS OTHERWISE SPECIFIED IN WRITING.
                </p>
                <p className="text-gray-700 mb-4">
                  TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, THE COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-gray-700 mb-4">
                  IN NO EVENT SHALL THE COMPANY BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OF THIS WEBSITE, WHETHER BASED ON CONTRACT, TORT, STRICT LIABILITY, OR OTHERWISE, EVEN IF THE COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                </p>
              </div>
            </section>

            {/* Legal Correspondence */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Legal Correspondence</h2>
              <p className="text-gray-700 mb-4">
                All legal notices, demands, and other formal communications regarding these Terms or your use of this website should be directed to our legal counsel:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Centauri Pro Consulting, LLC</strong><br />
                  <strong>Legal Department</strong><br />
                  Email: legal@centauripro.com<br />
                  Telephone: (555) 123-4567<br />
                  Business Hours: Monday through Friday, 9:00 AM to 5:00 PM Eastern Standard Time<br />
                  <em>All legal correspondence must be in writing and delivered via certified mail or electronic mail to the addresses specified above.</em>
                </p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNoticesPage;
