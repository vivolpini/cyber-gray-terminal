
import React from 'react';
import ContentSection from './ContentSection';

const About: React.FC = () => {
  return (
    <ContentSection 
      id="about"
      title="About Ricardo Beat"
      subtitle="EXPERTISE"
      reversed={true}
    >
      <p className="text-cyber-medium mb-4">
        With over a decade of experience in cybersecurity, I specialize in protecting businesses from emerging digital threats through proactive security measures and strategic planning.
      </p>
      
      <p className="text-cyber-medium mb-6">
        My approach combines technical expertise with a deep understanding of business operations, ensuring security solutions that not only protect your assets but also support your organizational goals.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div className="bg-cyber-light bg-opacity-50 p-4 rounded">
          <h4 className="font-mono-bold mb-2">Certifications</h4>
          <ul className="text-sm space-y-1">
            <li>Certified Information Systems Security Professional (CISSP)</li>
            <li>Certified Ethical Hacker (CEH)</li>
            <li>Offensive Security Certified Professional (OSCP)</li>
          </ul>
        </div>
        
        <div className="bg-cyber-light bg-opacity-50 p-4 rounded">
          <h4 className="font-mono-bold mb-2">Specializations</h4>
          <ul className="text-sm space-y-1">
            <li>Advanced Threat Detection</li>
            <li>Secure Architecture Design</li>
            <li>Critical Infrastructure Protection</li>
            <li>Security Compliance and Regulations</li>
          </ul>
        </div>
      </div>
    </ContentSection>
  );
};

export default About;
