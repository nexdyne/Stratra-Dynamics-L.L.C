import React from 'react';
import { Link } from 'react-router-dom';

const NewsPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Centauri Pro Announces Strategic Partnership with Southwest APEX Accelerator",
      date: "January 8, 2024",
      content: `Advancing key government contracting capabilities and mentor-strategic support functions for small businesses and emerging contractors.

Centauri Pro Consulting has formed an innovative strategic partnership with Southwest APEX Accelerator, strengthening our commitment to building high-performing contracting partnership entities.

This collaboration represents our ability to provide comprehensive support to emerging contractors while expanding our talent pipeline. Southwest APEX serves as the catalyst to bolster our commitment to building high-performance contracting networks.

"This partnership reinforces our talent need for fostering growth in the government contracting marketplace," said the CEO of Southwest Pro. "By combining resources, we can eliminate barriers to entry and improve systems and client contracting performance."

The partnership will focus on "Market analysis program development • Government contract bidding and support services • Field and support specifications • Compliance and regulatory guidance

Southwest APEX supports the small business ecosystem in supporting small businesses required federal contracting within the emerging federal contracting niche of the technology opportunity.`
    },
    {
      id: 2,
      title: "AI-Driven Project Management: Centauri Pro's Innovation in Federal Construction Oversight",
      date: "December 18, 2023",
      content: `How artificial intelligence and automation are transforming government project delivery and compliance oversight in the federal construction sector.

As federal agencies increasingly embrace digital transformation, Centauri Pro Consulting is leading the charge in AI-driven project management solutions that deliver enhanced regulatory compliance, cost effectiveness and high performance.

Our AI-driven oversight delivers automated data collection including real-time scheduling, activity scoring and quality control solutions. These innovations significantly streamline construction processes while enhancing client satisfaction.

Strategic features of our platform include predictive analytics that help identify cost references before they become overruns:

Risk AI capabilities include : Predictive risk modeling; project scheduling; and fiscal analytics that leverage significant construction information technologies for enhanced project planning, project scheduling delivery and cost controls.

The platform was built from significant state-of-the-art innovations: risk mitigation; detecting 5% improvement reduces cost risk levels as well as government modernized management methods; estimated lifecycle improvement of project innovation.

Our development activity involves USA clinical and electronic access multiple categories, emerging supply programs; enhanced quality control measures.`
    },
    {
      id: 3,
      title: "Centauri Pro Achieves Small Business Certification and OASIS+ Readiness",
      date: "December 10, 2023",
      content: `Company completes certification process and positions for major federal contracting opportunities with comprehensive service capabilities.

Centauri Pro Consulting has achieved its anticipated small business certification, positioning the company for enhanced opportunities in federal procurement with significant growth in small business performance.

The company has expanded its capabilities in government contracting operations including strategic sourcing and subcontract management including OASIS+ readiness certification preparation.

"This small business certification and OASIS+ readiness speaks to our government contracting game plan positioning from strong decades of experience from successful OASIS+ operations," said company leadership.

OASIS+ represents the most significant federal contracting vehicle offering billions in professional services and technical services sector opportunities.

Business within technology support flow with the competitive size capabilities for contracts at the highest levels.

Our certification enables access to: • Small scale contracting opportunities • Federal and large program procurement, • OASIS+ procurement capabilities • Federal agency management

The company is actively pursuing USA clinical and electronic access multiple categories, emerging supply programs; special service offerings."

The company plans to enhance small procurement approaches to deploy developments in value federal innovation delivery.`
    },
    {
      id: 4,
      title: "Smart City Infrastructure: The Future of Government Technology Integration",
      date: "November 15, 2023",
      content: `Exploring how IoT sensor technology and AI manufacturing are revolutionizing government infrastructure and federal operations.

As the role of smart technology grows in government infrastructure and increasing demands for efficiency, smart city technologies are essential as the solution for multi-channel government operations.

Centauri Pro's Data Hub & Procurement IT Solutions service is at the forefront of these transformations, integrating IoT sensors, database management systems and AI processing functionalities.

"Smart city technology has been early, quality and smart IT global modern integrated business that provide innovative management approach in these development process," commented the technology chief.

Federal buildings and infrastructure systems that need to adapt to a complete digital solutions for enhanced citizen services as well as operational efficiency:

Key smart city capabilities include: • IoT sensor operation for real-time monitoring • Online interconnection for population database technology • Process efficiency • Municipal and utility optimization • Transportation security systems

These smart city systems technology infrastructure components provide digital transformation services in transportation, security technologies, energy efficiency, advanced public services. • Predictive facility operations • HVAC automated management

Key smart city capabilities include: • IoT sensor operation for real-time monitoring • Online interconnection for population database technology • Process efficiency • Municipal and utility optimization • Transportation security systems • Public facility infrastructure • Strategic overwatch is in real estate infrastructure • Management solutions and operations

Central agencies are increasingly recognizing the value of smart infrastructure will deliver new incentive services derived by service delivery-centered access to deliver smart infrastructure with real automation technology development.

Many federal agencies are in data protection administration to facilitate overwatch and operations under key's vision for smart city facilities.`
    },
    {
      id: 5,
      title: "AI in Government Contracting: The Future is Now",
      date: "December 15, 2024",
      slug: "ai-government-contracting",
      content: `Exploring how artificial intelligence is transforming government project management and compliance oversight.

The landscape of government contracting is undergoing a revolutionary transformation, driven by the rapid adoption of artificial intelligence technologies.`
    },
    {
      id: 6,
      title: "Sustainable Infrastructure: Building for Tomorrow",
      date: "December 10, 2024",
      slug: "sustainable-infrastructure",
      content: `How energy optimization and smart building systems are revolutionizing government facilities.

As climate change concerns intensify and energy costs continue to rise, government agencies are responding with innovative approaches to building design and construction. Modern sustainable infrastructure architecture leverages emerging technologies to reduce environmental impact, improve operational efficiency, and enhance service delivery.`
    },
    {
      id: 7,
      title: "Digital Transformation in Federal Programs",
      date: "December 5, 2024",
      slug: "digital-transformation",
      content: `The role of digital twins and BIM technology in modern construction project management.

Federal agencies and related federal properties are undergoing a profound digital transformation, driven by the adoption of advanced technologies like Building Information Modeling (BIM) and digital twin systems. These innovations are revolutionizing how government projects are planned, executed, and monitored throughout their lifecycles.`
    }
  ];

  const latestUpdates = [
    "Government Construction Strategies announced new Southwest and Central Government",
    "AI-Driven Project Management: Complex high-Performance analytics",
    "Centauri Pro Achieves Small Business Certification",
    "Smart City Infrastructure",
    "Categories",
    "AI-Driven",
    "Quality Reports",
    "Technology",
    "Project Management",
    "Technical Support"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span>/</span>
            <span className="text-gray-800">News</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900">NEWS</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* News Articles - Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-12">
                {newsArticles.map((article) => (
                  <article key={article.id} className="bg-white">
                    {/* Article Header with Orange Background */}
                    <div className=" text-gray-800 font-bold p-4 rounded-t-lg">
                      <h2 className="text-xl font-bold">{article.title}</h2>
                    </div>
                    
                    {/* Article Content */}
                    <div className="border border-gray-200 border-t-0 rounded-b-lg p-6">
                      <div className="mb-4">
                        <span className="text-gray-600 text-sm">{article.date}</span>
                      </div>
                      
                      <div className="prose prose-gray max-w-none">
                        {article.content.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        {article.slug ? (
                          <Link 
                            to={`/news/${article.slug}`}
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                          >
                            Continue Reading
                          </Link>
                        ) : (
                          <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                            Continue Reading
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Latest Updates</h3>
                  <ul className="space-y-2">
                    {latestUpdates.map((update, index) => (
                      <li key={index} className="text-sm text-gray-700 border-b border-gray-200 pb-2">
                        {update}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
