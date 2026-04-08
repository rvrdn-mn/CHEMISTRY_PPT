import React, { useEffect, useState } from 'react';

const sectionLabels = [
  "Introduction", "Global Data", "Meta-Analysis", "Precious Metals", "Externalized Cost",
  "Seelampur Hero", "Operational Scale", "Blood Lead Crisis", "Midnight Economy",
  "Moradabad Hero", "Ramganga River", "Chemical Leaching", "Food Chain",
  "Agbogbloshie Hero", "Mortuary Road", "Environmental Collapse", "Dioxin Disaster",
  "Evidence Table", "Policy Framework", "Final Thought"
];

const Navigation = ({ totalSections }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const index = Math.round(scrollPosition / windowHeight);
      
      if (index >= 0 && index < totalSections) {
        setActiveIndex(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalSections]);

  const handleDotClick = (index) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="nav-dots">
      {Array.from({ length: totalSections }).map((_, i) => (
        <div 
          key={i} 
          className={`nav-dot-container ${i === activeIndex ? 'active' : ''}`}
          onClick={() => handleDotClick(i)}
        >
          <div className="nav-dot" />
          <span className="nav-label">{sectionLabels[i] || `Section ${i + 1}`}</span>
        </div>
      ))}
    </div>
  );
};

export default Navigation;
