
import React, { useState, useEffect, useRef } from 'react';

interface TerminalTextProps {
  text: string;
  typingSpeed?: number;
  className?: string;
  showCursor?: boolean;
  startDelay?: number;
}

const TerminalText: React.FC<TerminalTextProps> = ({ 
  text, 
  typingSpeed = 30, 
  className = "", 
  showCursor = true,
  startDelay = 0
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, typingSpeed);
      
      return () => clearInterval(typingInterval);
    }, startDelay);
    
    return () => clearTimeout(timeout);
  }, [text, typingSpeed, startDelay]);

  return (
    <div ref={textRef} className={`terminal-text-container ${className}`}>
      <span>{displayedText}</span>
      {(isTyping || showCursor) && <span className="terminal-cursor"></span>}
    </div>
  );
};

export default TerminalText;
