import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  Home, 
  Facebook, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';
import './App.css';

// Import page components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import LegalNoticesPage from './pages/LegalNoticesPage';
import ConstructionManagementPage from './pages/services/ConstructionManagementPage';

// Temporary service page components (these can be extracted later)

// Simple service page components (to be extracted later)
const EnergySustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Commissioning, Energy & Sustainability</span>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Commissioning, Energy & Sustainability</h1>
          <p className="text-xl text-gray-600 mb-8">
            Ensuring smarter, safer, and more sustainable environments with AI-powered diagnostics and automated compliance validation.
          </p>
        </div>
      </div>
    </div>
  );
};

const ITSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Smart City & Government IT Solutions</span>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart City & Government IT Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Technology management and data-driven program support with AI/ML integration and digital twin ecosystems.
          </p>
        </div>
      </div>
    </div>
  );
};

const SupplyProcurementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Government Supply & Procurement Solutions</span>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Supply & Procurement Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive procurement and supply chain management with vendor compliance and quality assurance services.
          </p>
        </div>
      </div>
    </div>
  );
};

const LogisticsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Public Sector Logistics & Distribution</span>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Public Sector Logistics & Distribution</h1>
          <p className="text-xl text-gray-600 mb-8">
            Strategic operations with real-time tracking, regulatory alignment, and stakeholder reporting for government programs.
          </p>
        </div>
      </div>
    </div>
  );
};

const RiskManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Estimating, Scheduling & Risk Management</span>
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Estimating, Scheduling & Risk Management</h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-driven forecasting and intelligence-driven program controls with real-time risk modeling and compliance alignment.
          </p>
        </div>
      </div>
    </div>
  );
};

// ProjectsPage already extracted - remove this inline definition
const TempProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Federal Building IoT Monitoring System",
      location: "Detroit, Michigan",
      service: "Smart City & Government IT Solutions",
      description: "In partnership with Southwest APEX Accelerator, developed IoT monitoring solutions for federal facility energy optimization",
      image: "/home/ubuntu/upload/search_images/NKCAxW5AQfGr.webp",
      serviceColor: "bg-purple-500"
    },
    {
      id: 2,
      title: "Predictive Analytics for Construction Risk",
      location: "Ann Arbor, Michigan",
      service: "Estimating, Scheduling & Risk Management",
      description: "Research collaboration with University of Michigan to develop AI-powered risk assessment tools for government construction projects",
      image: "/home/ubuntu/upload/search_images/etqUHyjqG5N9.jpg",
      serviceColor: "bg-gray-500"
    },
    {
      id: 3,
      title: "Federal Procurement Efficiency Analysis",
      location: "Grand Rapids, Michigan",
      service: "Government Supply & Procurement Solutions",
      description: "Consulting support for regional government agencies on supply chain optimization and procurement process improvement",
      image: "/home/ubuntu/upload/search_images/hHFqGF4BV1lF.webp",
      serviceColor: "bg-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">PROJECTS</h1>
          <p className="text-xl text-gray-600">Strategic partnerships and innovative solutions</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id}
                to={`/project/${project.id}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute top-4 left-4 ${project.serviceColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {project.service.split(' ')[0]} {project.service.split(' ')[1]}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 italic">{project.location}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "CONSTRUCTION MANAGEMENT", color: "bg-green-600" },
              { name: "COMMISSIONING, CONTROLS & ENERGY", color: "bg-orange-600" },
              { name: "TECHNOLOGY MANAGEMENT", color: "bg-purple-600" },
              { name: "ESTIMATING, SCHEDULING & RISK MANAGEMENT", color: "bg-gray-600" }
            ].map((category, index) => (
              <div key={index} className={`${category.color} text-white p-6 rounded-lg text-center`}>
                <h3 className="font-bold text-sm">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Project Page Component
const ProjectDetailPage = () => {
  const { id } = useParams();
  
  const projectDetails = {
    1: {
      title: "Federal Building IoT Monitoring System",
      location: "Detroit, Michigan",
      service: "Smart City & Government IT Solutions",
      image: "/home/ubuntu/upload/search_images/NKCAxW5AQfGr.webp",
      description: "In partnership with Southwest APEX Accelerator, developed IoT monitoring solutions for federal facility energy optimization.",
      fullDescription: "Through a strategic partnership with the Southwest APEX Accelerator program, Centauri Pro contributed innovative IoT monitoring solutions designed to optimize energy efficiency in federal facilities. This pilot program demonstrated our capability to integrate cutting-edge sensor technology with AI-driven analytics to provide real-time facility management insights.",
      keyResponsibilities: [
        "Developed prototype IoT sensor network for building systems monitoring",
        "Created AI-powered dashboard for energy consumption analysis", 
        "Established data collection protocols compliant with federal security standards",
        "Demonstrated 15% potential energy savings through predictive maintenance",
        "Integrated real-time environmental monitoring sensors",
        "Implemented machine learning algorithms for predictive maintenance"
      ],
      partnership: "Southwest APEX Accelerator",
      outcomes: "15% potential energy savings, NIST-compliant security protocols, real-time monitoring capabilities"
    },
    2: {
      title: "Predictive Analytics for Construction Risk",
      location: "Ann Arbor, Michigan", 
      service: "Estimating, Scheduling & Risk Management",
      image: "/home/ubuntu/upload/search_images/etqUHyjqG5N9.jpg",
      description: "Research collaboration with University of Michigan to develop AI-powered risk assessment tools for government construction projects.",
      fullDescription: "Through a research partnership with the University of Michigan's College of Engineering, Centauri Pro contributed to the development of AI-powered risk assessment tools specifically designed for government construction projects. This academic collaboration allowed us to validate our predictive analytics capabilities in a controlled research environment.",
      keyResponsibilities: [
        "Developed machine learning models for construction risk prediction",
        "Analyzed historical government project data for pattern recognition",
        "Created automated risk scoring algorithms",
        "Validated predictive accuracy against actual project outcomes",
        "Integrated weather data, supply chain factors, and workforce availability",
        "Developed early warning systems for project delays"
      ],
      partnership: "University of Michigan College of Engineering",
      outcomes: "Validated predictive models, academic publication opportunities, proof-of-concept for government applications"
    },
    3: {
      title: "Federal Procurement Efficiency Analysis", 
      location: "Grand Rapids, Michigan",
      service: "Government Supply & Procurement Solutions",
      image: "/home/ubuntu/upload/search_images/hHFqGF4BV1lF.webp",
      description: "Consulting support for regional government agencies on supply chain optimization and procurement process improvement.",
      fullDescription: "Centauri Pro provided specialized consulting support to regional government agencies in West Michigan, focusing on supply chain optimization and procurement process improvement. This engagement allowed us to demonstrate our analytical capabilities and process improvement expertise in a government context.",
      keyResponsibilities: [
        "Comprehensive analysis of existing procurement workflows",
        "Identification of bottlenecks and inefficiencies in current processes",
        "Development of digital transformation recommendations", 
        "Creation of performance metrics and tracking systems",
        "Streamlined vendor qualification procedures",
        "Automated compliance checking systems"
      ],
      partnership: "West Michigan Regional Government Agencies",
      outcomes: "25% potential reduction in procurement cycle times, improved vendor diversity tracking, enhanced compliance documentation"
    }
  };

  const project = projectDetails[id];
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/projects" className="hover:text-orange-600">Projects</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Project Header */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-6 italic">{project.location}</p>
              <div className="bg-orange-100 border-l-4 border-orange-500 p-4 mb-6">
                <p className="text-orange-800 font-medium">Partnership: {project.partnership}</p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {project.fullDescription}
              </p>
            </div>
            <div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Key Responsibilities */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Responsibilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.keyResponsibilities.map((responsibility, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-orange-500 text-white p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <p className="text-gray-700">{responsibility}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Outcomes */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Outcomes</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-8">
            <p className="text-lg text-green-800 leading-relaxed">
              {project.outcomes}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation to Other Projects */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Other Projects</h3>
          <div className="flex justify-center space-x-8">
            <Link to="/projects" className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              View All Projects
            </Link>
            <Link to="/services" className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Page Component
const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">About</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ABOUT</h1>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-green-600 text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">CEO & Founder</h3>
              <p className="text-green-100">Strategic Leadership</p>
            </div>
            <div className="bg-orange-600 text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">VP of AI & Automation</h3>
              <p className="text-orange-100">Technology Innovation</p>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">VP of Compliance</h3>
              <p className="text-blue-100">Regulatory Excellence</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Centauri Pro Consulting was founded with a vision of transforming government contracting through intelligent automation and strategic innovation. Drawing from decades of experience in Fortune 500 companies and federal programs, we recognized the need for a new approach to government solutions.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founders combined their expertise in business strategy, artificial intelligence, and regulatory compliance to create a firm that delivers both technical excellence and strategic value. We operate at the intersection of innovation and compliance—where cutting-edge technology meets the rigorous standards of government contracting.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Today, we attribute our success to a steadfast commitment to our core values: client-centered service, AI-driven innovation, regulatory excellence, and respect for our clients, partners, and stakeholders.
              </p>
            </div>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-6">
                To deliver mission-ready execution across government, infrastructure, and logistics through intelligent automation, strategic partnerships, and unwavering compliance excellence.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-1 rounded-full mr-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">AI-powered project intelligence</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-1 rounded-full mr-3">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Compliance-by-design approach</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-orange-500 text-white p-1 rounded-full mr-3">
                    <Building className="w-4 h-4" />
                  </div>
                  <span className="text-gray-700">Strategic partnership model</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Government Contracting Excellence */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Government Contracting Excellence</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our leadership team brings proven experience from OASIS+ programs, GSA schedule management, and federal contracting. We're actively pursuing contract vehicles to serve federal agencies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">OASIS+ Program Experience</h3>
              <p className="text-gray-600 text-sm">Team members with successful OASIS+ delivery history, pursuing new contract vehicles with comprehensive capabilities.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">GSA Schedule Pursuit</h3>
              <p className="text-gray-600 text-sm">Actively pursuing GSA schedule contracts with capabilities aligned with multiple federal procurement categories.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Small Business Certified</h3>
              <p className="text-gray-600 text-sm">Small business advantages with mentor-protégé program capabilities and socioeconomic goals.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Core NAICS Codes</h3>
              <div className="text-gray-600 text-sm space-y-1">
                <div>541330 - Engineering Services</div>
                <div>541611 - Management Consulting</div>
                <div>541512 - Computer Systems Design</div>
                <div>493110 - General Warehousing</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-orange-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation is our advantage</h3>
              <p className="text-gray-600">As a modern government solutions firm, we leverage AI and automation to deliver capabilities that traditional contractors cannot match. Our technology-first approach improves outcomes while reducing costs and risks for our clients.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Putting missions first</h3>
              <p className="text-gray-600">We help our clients succeed by doing what's right, providing quality work, and producing results on time and within budget. Our compliance-by-design approach ensures audit-ready delivery from day one.</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-500 text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excellence is our standard</h3>
              <p className="text-gray-600">As a company and as individuals, we are driven by the principle that good enough is never good enough. We bring principled leadership and work closely with our clients to provide seamless service from inception to completion.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Partner with Centauri Pro?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our AI-driven approach and government contracting expertise can support your mission-critical objectives.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Consultation
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Download Company Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// News Page Component
const NewsPage = () => {
  const newsArticles = [
    {
      id: 1,
      title: "AI in Government Contracting: The Future is Now",
      date: "December 15, 2024",
      excerpt: "Exploring how artificial intelligence is transforming government project management and compliance oversight.",
      content: "Artificial intelligence is revolutionizing the government contracting landscape, offering unprecedented opportunities for efficiency, accuracy, and innovation. As federal agencies increasingly embrace digital transformation, AI-powered solutions are becoming essential tools for modern contractors."
    },
    {
      id: 2,
      title: "Sustainable Infrastructure: Building for Tomorrow",
      date: "December 10, 2024",
      excerpt: "How energy optimization and smart building systems are revolutionizing government facilities.",
      content: "The push for sustainable infrastructure in government facilities is driving innovation in energy optimization and smart building technologies. From IoT sensors to predictive maintenance systems, the future of government buildings is intelligent and efficient."
    },
    {
      id: 3,
      title: "Digital Transformation in Federal Programs",
      date: "December 5, 2024",
      excerpt: "The role of digital twins and BIM technology in modern construction project management.",
      content: "Digital transformation is reshaping how federal construction projects are planned, executed, and maintained. Building Information Modeling (BIM) and digital twin technologies are providing unprecedented visibility into project lifecycles."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">LATEST NEWS</h1>
          <p className="text-xl text-gray-600">Industry insights and company updates</p>
        </div>
      </div>

      {/* News Articles */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-12">
            {newsArticles.map((article) => (
              <article key={article.id} className="border-b border-gray-200 pb-12">
                <div className="mb-4">
                  <span className="text-orange-600 text-sm font-medium">{article.date}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-orange-600 transition-colors">
                  <Link to={`/news/${article.id}`}>{article.title}</Link>
                </h2>
                <p className="text-lg text-gray-600 mb-6">{article.excerpt}</p>
                <p className="text-gray-700 mb-6">{article.content}</p>
                <Link 
                  to={`/news/${article.id}`}
                  className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Careers Page Component
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

// Service Page Components
const ConstructionManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Construction & Infrastructure Management</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Construction & Infrastructure Management</h1>
              <p className="text-xl text-gray-600 mb-6">
                Modern representation and future-ready delivery for government construction projects with AI-driven oversight and compliance.
              </p>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Request Consultation
              </button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Construction Management"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Is Construction & Infrastructure Management?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Our Construction & Infrastructure Management service transforms traditional project oversight into intelligent, data-driven program execution. We combine field-proven construction expertise with cutting-edge AI analytics to ensure your government projects are delivered on time, on budget, and with full regulatory compliance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-green-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Powered Project Oversight</h3>
              <p className="text-gray-600">Real-time monitoring with predictive analytics to identify risks before they impact your timeline or budget.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-orange-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance-by-Design</h3>
              <p className="text-gray-600">Built-in regulatory compliance tracking with automated documentation and audit trail generation.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="bg-purple-500 text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Twin Integration</h3>
              <p className="text-gray-600">BIM-enabled digital twins provide real-time project visualization and performance analytics.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EnergySustainabilityPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Similar structure for Energy & Sustainability */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Commissioning, Energy & Sustainability</span>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Commissioning, Energy & Sustainability</h1>
          <p className="text-xl text-gray-600 mb-8">
            Ensuring smarter, safer, and more sustainable environments with AI-powered diagnostics and automated compliance validation.
          </p>
        </div>
      </div>
    </div>
  );
};

const ITSolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Smart City & Government IT Solutions</span>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart City & Government IT Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Technology management and data-driven program support with AI/ML integration and digital twin ecosystems.
          </p>
        </div>
      </div>
    </div>
  );
};

const SupplyProcurementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Government Supply & Procurement Solutions</span>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Government Supply & Procurement Solutions</h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive procurement and supply chain management with vendor compliance and quality assurance services.
          </p>
        </div>
      </div>
    </div>
  );
};

const LogisticsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Public Sector Logistics & Distribution</span>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Public Sector Logistics & Distribution</h1>
          <p className="text-xl text-gray-600 mb-8">
            Strategic operations with real-time tracking, regulatory alignment, and stakeholder reporting for government programs.
          </p>
        </div>
      </div>
    </div>
  );
};

const RiskManagementPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-sm text-gray-600">
            <Link to="/" className="hover:text-orange-600">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/services" className="hover:text-orange-600">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Estimating, Scheduling & Risk Management</span>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Estimating, Scheduling & Risk Management</h1>
          <p className="text-xl text-gray-600 mb-8">
            AI-driven forecasting and intelligence-driven program controls with real-time risk modeling and compliance alignment.
          </p>
        </div>
      </div>
    </div>
  );
};

// Legal Notices Page Component
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

            {/* Trademark Notice */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Trademark Notice</h2>
              <p className="text-gray-700 mb-4">
                "Centauri Pro Consulting," the Company logo, and all related names, logos, product and service names, designs, and slogans are trademarks, service marks, or registered marks of Centauri Pro Consulting, LLC (collectively, the "Marks"). You are not granted any right or license to use any Marks without the prior written permission of the Company. Any unauthorized use of the Marks is strictly prohibited and may constitute trademark infringement under federal and state law.
              </p>
              <p className="text-gray-700 mb-4">
                All other trademarks, service marks, and trade names referenced on this website are the property of their respective owners and are used solely for identification purposes.
              </p>
            </section>

            {/* Limited License and Restrictions */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limited License and Restrictions</h2>
              <p className="text-gray-700 mb-4">
                Subject to your compliance with these Terms, the Company grants you a limited, non-exclusive, non-transferable, revocable license to access and use this website solely for your personal, non-commercial use. This license does not permit you to: (a) resell or make commercial use of this website or its contents; (b) make derivative uses of this website or its contents; (c) use any data mining, robots, or similar data gathering and extraction tools; or (d) download (other than page caching) any portion of this website except as expressly permitted.
              </p>
              <p className="text-gray-700 mb-4">
                You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information of the Company without express written consent. Any unauthorized use shall result in immediate termination of the license granted herein.
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

            {/* User Account Obligations */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Account Obligations</h2>
              <p className="text-gray-700 mb-4">
                If you create an account on this website, you are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to immediately notify the Company of any unauthorized use of your account or any other breach of security. The Company shall not be liable for any loss or damage arising from your failure to comply with these security obligations.
              </p>
              <p className="text-gray-700 mb-4">
                The Company reserves the right, in its sole discretion, to refuse service, terminate accounts, remove or edit content, or cancel orders without prior notice and without liability.
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
                <p className="text-gray-700">
                  BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IN SUCH STATES OR JURISDICTIONS, THE COMPANY'S LIABILITY SHALL BE LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.
                </p>
              </div>
            </section>

            {/* Privacy and Data Protection */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data Protection</h2>
              <p className="text-gray-700 mb-4">
                The Company is committed to protecting the privacy and security of personal information collected through this website. Given the nature of our government contracting work, we maintain enhanced security protocols and data protection measures in compliance with applicable federal requirements, including but not limited to the Federal Information Security Management Act (FISMA), the Privacy Act of 1974, and other applicable privacy and security regulations.
              </p>
              <p className="text-gray-700 mb-4">
                For detailed information regarding our data collection, use, and protection practices, please refer to our Privacy Policy, which is incorporated herein by reference and forms an integral part of these Terms.
              </p>
            </section>

            {/* Governing Law and Jurisdiction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the State of Michigan, without regard to its conflict of laws principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Michigan, and the parties hereby irrevocably consent to the personal jurisdiction and venue of such courts.
              </p>
              <p className="text-gray-700 mb-4">
                If any provision of these Terms is deemed invalid, illegal, or unenforceable, the validity, legality, and enforceability of the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            {/* Indemnification */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to defend, indemnify, and hold harmless the Company, its officers, directors, employees, agents, licensors, and suppliers from and against any claims, actions, or demands, including, without limitation, reasonable legal and accounting fees, arising or resulting from your breach of these Terms or your violation of any law or the rights of any third party.
              </p>
            </section>

            {/* Modification of Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Modification of Terms</h2>
              <p className="text-gray-700 mb-4">
                The Company reserves the right, in its sole discretion, to modify these Terms at any time without prior notice. Any modifications shall be effective immediately upon posting on this website. Your continued use of this website following the posting of any modifications constitutes acceptance of such modifications.
              </p>
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

// Main App Component with Navigation
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Top Social Bar */}
        <div className="bg-orange-500 text-white py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-end items-center space-x-4">
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Home className="w-5 h-5" />
            </a>
            <span className="text-orange-200">|</span>
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <span className="text-orange-200">|</span>
            <a href="#" className="hover:text-orange-200 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <span className="text-orange-200">|</span>
            <a href="tel:+1234567890" className="hover:text-orange-200 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo - Positioned to the left */}
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold">
                  <span className="text-gray-800">Centauri-</span>
                  <span className="text-orange-500">Pro</span>
                  <span className="text-gray-600 text-lg ml-2">Consulting</span>
                </Link>
                <div className="ml-4 text-sm text-gray-600">
                  Proximity to the Future. Precision for Today.
                </div>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/services" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  Services
                </Link>
                <Link to="/projects" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  Projects
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  About
                </Link>
                <Link to="/news" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  News
                </Link>
                <Link to="/careers" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          <Route path="/legal-notices" element={<LegalNoticesPage />} />
          <Route path="/services/construction" element={<ConstructionManagementPage />} />
          <Route path="/services/energy" element={<EnergySustainabilityPage />} />
          <Route path="/services/it-solutions" element={<ITSolutionsPage />} />
          <Route path="/services/supply" element={<SupplyProcurementPage />} />
          <Route path="/services/logistics" element={<LogisticsPage />} />
          <Route path="/services/risk" element={<RiskManagementPage />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold mb-4">
                  <span className="text-white">Centauri-</span>
                  <span className="text-orange-500">Pro</span>
                  <span className="text-gray-400 text-lg ml-2">Consulting</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Proximity to the Future. Precision for Today.
                </p>
                <p className="text-gray-400">
                  Delivering innovative government solutions with AI-driven excellence.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/services/construction" className="hover:text-white transition-colors">Construction Management</Link></li>
                  <li><Link to="/services/energy" className="hover:text-white transition-colors">Energy & Sustainability</Link></li>
                  <li><Link to="/services/it-solutions" className="hover:text-white transition-colors">IT Solutions</Link></li>
                  <li><Link to="/services/supply" className="hover:text-white transition-colors">Supply & Procurement</Link></li>
                  <li><Link to="/services/logistics" className="hover:text-white transition-colors">Logistics</Link></li>
                  <li><Link to="/services/risk" className="hover:text-white transition-colors">Risk Management</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/news" className="hover:text-white transition-colors">News</Link></li>
                  <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                  <li><Link to="/legal-notices" className="hover:text-white transition-colors">Legal Notices</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>info@centauripro.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>Detroit, Michigan</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 Centauri-Pro Consulting. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;

