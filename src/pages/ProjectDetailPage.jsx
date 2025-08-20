import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Building } from 'lucide-react';

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

export default ProjectDetailPage;
