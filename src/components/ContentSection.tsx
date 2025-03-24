
import React, { useEffect, useRef } from 'react';

interface ContentSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  reversed?: boolean;
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "",
  reversed = false
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id={id} className={`py-20 px-6 lg:px-10 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <div ref={sectionRef} className={`w-full md:w-1/2 space-y-6`}>
            {subtitle && (
              <div className="inline-block mb-2 px-3 py-1 bg-cyber-light text-cyber-dark text-xs rounded-full">
                {subtitle}
              </div>
            )}
            <h2 className="text-3xl md:text-4xl font-mono-bold tracking-tight mb-4">
              {title}
            </h2>
            {children}
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-video bg-cyber-light rounded-md overflow-hidden">
              {/* Placeholder for content image */}
              <div className="w-full h-full flex items-center justify-center text-cyber-medium">
                [Content Image]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
