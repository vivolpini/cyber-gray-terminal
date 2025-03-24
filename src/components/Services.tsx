
import React from 'react';
import { Shield, Search, Lock, Server, Code, BookOpen } from 'lucide-react';

const services = [
  {
    icon: <Shield size={24} />,
    title: 'Security Audits',
    description: 'Comprehensive assessment of your systems to identify vulnerabilities and security gaps.'
  },
  {
    icon: <Search size={24} />,
    title: 'Penetration Testing',
    description: 'Simulated attacks to evaluate the security of your IT infrastructure.'
  },
  {
    icon: <Lock size={24} />,
    title: 'Incident Response',
    description: 'Rapid resolution of security breaches with minimal impact on operations.'
  },
  {
    icon: <Server size={24} />,
    title: 'Network Security',
    description: 'Protection of your data and infrastructure from unauthorized access and attacks.'
  },
  {
    icon: <Code size={24} />,
    title: 'Secure Development',
    description: 'Implementation of security best practices in your software development lifecycle.'
  },
  {
    icon: <BookOpen size={24} />,
    title: 'Security Training',
    description: 'Education for your team on cybersecurity awareness and best practices.'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6 lg:px-10 bg-cyber-light bg-opacity-30">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-block mb-3 px-3 py-1 bg-white text-cyber-dark text-xs rounded-full">
          SERVICES
        </div>
        <h2 className="text-3xl md:text-4xl font-mono-bold tracking-tight mb-4">
          Cybersecurity Solutions
        </h2>
        <p className="text-cyber-medium max-w-2xl mx-auto">
          Comprehensive security services tailored to protect your digital assets and infrastructure.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="glass-card p-6 rounded-md transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] opacity-0 animate-fade-in"
            style={{ animationDelay: `${0.1 * index}s`, animationFillMode: 'forwards' }}
          >
            <div className="p-3 bg-cyber-light inline-block rounded-md mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl font-mono-bold mb-2">{service.title}</h3>
            <p className="text-cyber-medium">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
