
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-10 py-4 
        ${scrolled ? 'bg-white bg-opacity-80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/" className="text-cyber-dark font-mono-bold text-xl tracking-tighter">
          ricardo<span className="text-cyber-medium">beat</span>.com
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {['Home', 'Services', 'About', 'Content', 'Contact'].map((item) => (
              <li key={item}>
                {item === 'Content' ? (
                  <Link 
                    to="/content" 
                    className="text-cyber-dark hover:text-cyber-medium transition-colors duration-200 text-sm tracking-wide"
                  >
                    {item}
                  </Link>
                ) : (
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-cyber-dark hover:text-cyber-medium transition-colors duration-200 text-sm tracking-wide"
                  >
                    {item}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        <button
          className="md:hidden text-cyber-dark"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white bg-opacity-95 backdrop-blur-sm pt-20">
          <nav className="p-6">
            <ul className="flex flex-col space-y-6">
              {['Home', 'Services', 'About', 'Content', 'Contact'].map((item) => (
                <li key={item} className="border-b border-cyber-light pb-2">
                  {item === 'Content' ? (
                    <Link
                      to="/content"
                      className="text-cyber-dark hover:text-cyber-medium transition-colors duration-200 text-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ) : (
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-cyber-dark hover:text-cyber-medium transition-colors duration-200 text-xl"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
