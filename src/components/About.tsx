
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
        With several decades of experience in cybersecurity, specialized in protecting businesses from emerging digital threats through proactive security measures and strategic planning.
      </p>
      
      <p className="text-cyber-medium mb-6">
        I love to produce contents that  combines technical expertise with a deep understanding of what is happening under the covers, explaining security solutions and sharing experiences.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div className="bg-cyber-light bg-opacity-50 p-4 rounded">
          <h4 className="font-mono-bold mb-2">Certifications</h4>
          <ul className="text-sm space-y-1">
            <li>Certified Information Systems Security Professional (CISSP)</li>
            <li>Certified Ethical Hacker (CEH)</li>
            <li>Offensive Security Certified Professional (OSCP)</li>
            <li>Certifies Security Security manager (CISM)</li>
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
