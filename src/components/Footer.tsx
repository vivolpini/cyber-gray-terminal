
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-cyber-dark text-white py-16 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-mono-bold mb-6">ricardobeat.com</h3>
            <p className="text-cyber-light mb-6 max-w-md">
              Providing expert cybersecurity insights to protect your digital assets and infrastructure against evolving threats.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyber-light hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-cyber-light hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cyber-light hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-cyber-light hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-mono-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-cyber-light hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-mono-bold mb-6">Contact</h3>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="ricardo@ricardobeat.com" 
                  className="w-full bg-cyber-accent text-white placeholder-cyber-medium p-3 rounded border-none focus:outline-none focus:ring-1 focus:ring-white"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={3}
                  className="w-full bg-cyber-accent text-white placeholder-cyber-medium p-3 rounded border-none focus:outline-none focus:ring-1 focus:ring-white"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="px-6 py-2 bg-white text-cyber-dark rounded hover:bg-cyber-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-cyber-accent mt-12 pt-6 text-center text-cyber-medium text-sm">
          <p>© {new Date().getFullYear()} ricardobeat.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
