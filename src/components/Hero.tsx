
import React, { useEffect, useRef } from 'react';
import TerminalText from './TerminalText';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 lg:px-10">
      <div 
        ref={heroRef} 
        className="max-w-4xl mx-auto text-center transition-all duration-700 opacity-0 translate-y-10"
      >
        <div className="inline-block mb-3 px-3 py-1 bg-cyber-light text-cyber-dark text-xs rounded-full">
          <TerminalText text="CYBERSECURITY SPECIALIST" typingSpeed={20} />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono-bold mb-6 tracking-tight">
          <TerminalText 
            text="Securing digital landscapes with precision and expertise" 
            typingSpeed={40}
            startDelay={800}
          />
        </h1>
        
        <p className="text-cyber-medium text-lg md:text-xl max-w-2xl mx-auto mb-10">
          <TerminalText 
            text="Specialized in advanced threat detection, vulnerability assessment, and implementing robust security solutions for businesses and organizations." 
            typingSpeed={15}
            startDelay={2500}
          />
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
          <a 
            href="#contact" 
            className="px-6 py-3 bg-cyber-dark text-white rounded hover:bg-cyber-accent transition-colors duration-200 min-w-40 text-center"
          >
            Get in touch
          </a>
          <a 
            href="#services" 
            className="px-6 py-3 border border-cyber-dark text-cyber-dark rounded hover:bg-cyber-light transition-colors duration-200 min-w-40 text-center"
          >
            Explore services
          </a>
        </div>
      </div>
      
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-0 animate-fade-in" 
        style={{ animationDelay: '4s', animationFillMode: 'forwards' }}
        onClick={scrollToNext}
      >
        <ChevronDown className="text-cyber-medium" />
      </div>
    </section>
  );
};

export default Hero;
