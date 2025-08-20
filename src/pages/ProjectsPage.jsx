import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Federal Building IoT Monitoring System",
      location: "Detroit, Michigan",
      service: "Smart City & Government IT Solutions",
      description: "In partnership with Southwest APEX Accelerator, developed IoT monitoring solutions for federal facility energy optimization",
      image: "/assets/iot.jpg?" + Date.now(),
      serviceColor: "bg-gray-500"
    },
    {
      id: 2,
      title: "Predictive Analytics for Construction Risk",
      location: "Ann Arbor, Michigan",
      service: "Estimating, Scheduling & Risk Management",
      description: "Research collaboration with University of Michigan to develop AI-powered risk assessment tools for government construction projects",
      image: "/assets/perdictive-analytics.webp?" + Date.now(),
      serviceColor: "bg-gray-500"
    },
    {
      id: 3,
      title: "Federal Procurement Efficiency Analysis",
      location: "Grand Rapids, Michigan",
      service: "Government Supply & Procurement Solutions",
      description: "Consulting support for regional government agencies on supply chain optimization and procurement process improvement",
      image: "/assets/federal-pro.jpg?" + Date.now(),
      serviceColor: "bg-gray-500"
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
                    onError={(e) => {
                      console.log(`Failed to load image: ${project.image}`);
                      e.target.style.backgroundColor = '#f3f4f6';
                      e.target.style.display = 'flex';
                      e.target.style.alignItems = 'center';
                      e.target.style.justifyContent = 'center';
                      e.target.innerHTML = 'Image not found';
                    }}
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
              { 
                name: "CONSTRUCTION MANAGEMENT", 
                color: "bg-gray-600",
                link: "/services/construction-infrastructure-management"
              },
              { 
                name: "COMMISSIONING, CONTROLS & ENERGY", 
                color: "bg-gray-600",
                link: "/services/commissioning-energy-sustainability"
              },
              { 
                name: "TECHNOLOGY MANAGEMENT", 
                color: "bg-gray-600",
                link: "/services/smart-city-government-it-solutions"
              },
              { 
                name: "ESTIMATING, SCHEDULING & RISK MANAGEMENT", 
                color: "bg-gray-600",
                link: "/services/estimating-scheduling-risk-management"
              }
            ].map((category, index) => (
              <Link 
                key={index} 
                to={category.link}
                className={`${category.color} hover:bg-orange-600 text-white p-6 rounded-lg text-center transition-opacity group`}
              >
                <h3 className="font-bold text-sm group-hover:scale-105 transition-transform">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
