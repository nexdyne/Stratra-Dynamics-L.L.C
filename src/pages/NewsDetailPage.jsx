import React from 'react';
import { Link, useParams } from 'react-router-dom';

const articleData = {
  'epa-lead-safe-rrp-update': {
    date: 'March 2026',
    category: 'Regulatory',
    title: 'EPA Updates Lead-Safe RRP Rule: What Contractors Need to Know',
    content: [
      'The Environmental Protection Agency has expanded its Lead-Safe Renovation, Repair, and Painting (RRP) Rule, significantly broadening the scope of buildings and activities covered under federal lead safety requirements. Effective immediately, contractors working on pre-1978 residential and non-residential buildings must comply with enhanced standards that reflect decades of research into lead dust exposure risks.',
      'The updated rule lowers the renovation area threshold from 6 square feet to 2 square feet for residential properties, and from 20 square feet to 5 square feet for non-residential buildings. This means that even minor renovation projects now trigger lead safety requirements in older structures. Contractors must conduct lead hazard assessments, use containment protocols, and ensure proper worker training before beginning work on affected properties.',
      'Certification requirements have also been strengthened. All renovators, dust samplers, and project managers must complete EPA-approved training within the past 12 months. The agency has implemented stricter record-keeping requirements and introduced enhanced verification protocols. Non-compliance can result in civil penalties up to $38,946 per violation, with potential criminal liability for egregious cases involving worker or occupant exposure.',
      'Property owners should understand that these requirements apply whether or not lead has been visually identified. The \"lead presumption\" rule means that in the absence of test results confirming the building was constructed without lead-based paint, all work on pre-1978 structures must be conducted under RRP protocols. Hiring an EPA-certified contractor is no longer optional\u2014it is a legal requirement.',
      'For property managers overseeing multi-unit housing, the implications are substantial. Bulk renovation projects now require meticulous planning and coordination with certified professionals. Many property owners have found that working with experienced environmental contractors early in the planning phase reduces delays and ensures compliance from the outset.',
      'Centauri-Pro Consulting maintains current EPA certification for all team members and stays ahead of regulatory changes. We provide lead hazard assessments, train contractors on compliance protocols, and oversee projects to ensure all work meets current standards. Understanding these regulations is critical for protecting occupant health and avoiding costly penalties.'
    ]
  },
  'hazwoper-certification': {
    date: 'February 2026',
    category: 'Company News',
    title: 'Centauri-Pro Achieves Advanced HAZWOPER Certification',
    content: [
      'Centauri-Pro Consulting is proud to announce that our field operations team has successfully completed advanced HAZWOPER (Hazardous Waste Operations and Emergency Response) certification. This intensive 40-hour training program, delivered by OSHA-approved instructors, qualifies our personnel to safely and effectively respond to hazardous materials incidents and manage contaminated site operations.',
      'HAZWOPER certification is a significant achievement that expands our service capabilities considerably. The comprehensive training covers hazard recognition, personal protective equipment protocols, decontamination procedures, and emergency response procedures. Our team additionally completed specialized site supervisor certification, which authorizes them to direct operations on active contaminated sites and make real-time safety decisions.',
      'This certification opens new opportunities for Centauri-Pro to support federal agencies, state environmental programs, and private industry in hazardous materials response and remediation projects. We can now take on assignments that require advanced technical expertise in handling lead, asbestos, PCBs, petroleum products, and other regulated substances. Many government contracts explicitly require HAZWOPER-certified personnel, and this credential strengthens our proposal competitiveness.',
      'The training reflects our commitment to operational excellence and worker safety. Every team member completed not only the technical content but also demonstrated proficiency through hands-on exercises and written examinations. Beyond meeting regulatory requirements, our staff now possesses the judgment and experience to recognize hazards that untrained personnel might miss.',
      'Moving forward, Centauri-Pro maintains an annual training schedule to keep certifications current and deepen expertise in emerging hazardous materials challenges. We view HAZWOPER certification as foundational to our ability to deliver protective, high-quality services to clients in sensitive and complex environments.',
      'If you are managing contaminated sites, planning remediation projects, or need environmental professionals qualified to handle hazardous materials, we encourage you to contact us. Our HAZWOPER-certified team brings the expertise and professionalism your project requires.'
    ]
  },
  'michigan-lead-abatement-demand': {
    date: 'January 2026',
    category: 'Industry',
    title: 'Michigan Lead Abatement: Growing Demand for Certified Contractors',
    content: [
      'Michigan is experiencing unprecedented demand for lead abatement services, driven by a convergence of federal funding initiatives and state regulatory action. The HUD Lead Hazard Control Program, American Rescue Plan investments, and Michigan Department of Environmental Quality initiatives have allocated hundreds of millions of dollars to address lead hazards in residential properties, particularly in older housing stock.',
      'The state of Michigan has identified over 400,000 housing units constructed before 1978 where lead-based paint hazards are likely to exist. Historic industrial areas including Detroit, Flint, Gary, and other post-industrial communities have elevated lead exposure in both soil and housing structures. Federal agencies recognize that accelerated lead remediation directly improves public health outcomes, particularly for children under age six, who face the most significant neurological risks from lead exposure.',
      'Lead abatement contractors across Michigan report order backlogs extending 12-18 months. Property owners seeking to participate in HUD grant programs, state remediation initiatives, or responding to occupant health concerns are competing for limited professional resources. This shortage has driven up project costs and extended timelines. For property managers and owners, the challenge is not only identifying qualified contractors but also planning projects within realistic delivery windows.',
      'The workforce shortage is acute. Licensed lead abatement supervisors require specialized EPA certification, practical field experience, and documented competency. Michigan currently has insufficient trained personnel to meet market demand. Educational institutions and workforce development programs are expanding training capacity, but qualified professionals remain scarce. This has created genuine economic opportunity for contractors willing to invest in certification and maintain rigorous safety protocols.',
      'Property owners should understand that lead abatement is not a commodity service. Quality of work, attention to containment and decontamination procedures, and compliance with EPA standards vary significantly among contractors. The cheapest bid often reflects inexperience or corner-cutting. Working with certified, experienced professionals protects property occupants, ensures lasting results, and provides documentation that regulatory requirements were satisfied.',
      'Centauri-Pro Consulting is actively engaged in Michigan\'s lead abatement market, supporting both public agencies and private property owners. We maintain experienced, certified teams ready to move quickly when projects are approved. As demand continues to grow and funding windows remain open, we encourage property owners and managers to plan assessment and abatement work now rather than facing extended delays later.'
    ]
  }
};

export default function NewsDetailPage() {
  const { slug } = useParams();
  const article = articleData[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <section className="bg-gray-50 py-4">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-sm text-gray-600">
              <Link to="/" className="hover:text-orange-600 transition">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/news" className="hover:text-orange-600 transition">News</Link>
              <span className="mx-2">/</span>
              <span>Not Found</span>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-lg text-gray-700 mb-8">
              The article you are looking for does not exist or has been removed.
            </p>
            <Link
              to="/news"
              className="inline-block text-orange-600 font-semibold hover:text-orange-700 transition"
            >
              Back to News
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600 transition">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/news" className="hover:text-orange-600 transition">News</Link>
            <span className="mx-2">/</span>
            <span>{article.title}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Link */}
          <Link
            to="/news"
            className="text-orange-600 font-semibold hover:text-orange-700 transition mb-8 inline-block"
          >
            Back to News
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-orange-600 font-semibold">
                {article.date}
              </span>
              <span className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-medium">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {article.title}
            </h1>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-5">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-gray-50 p-8 rounded-lg mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Ready to Address Environmental Challenges?
            </h3>
            <p className="text-gray-700 mb-6">
              Connect with Centauri-Pro Consulting to discuss how we can support your facility or project. Our team of certified professionals is ready to help.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded font-semibold hover:bg-orange-700 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
