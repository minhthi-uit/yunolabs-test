'use client';
import React, { useEffect, useState } from 'react';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-16 sm:bottom-72 sm:right-16 right-5 z-50">
      {isVisible && (
        <button
          aria-label='scroll to top'
          type="button"
          onClick={scrollToTop}
          className="bg-beige h-8 w-8 rounded-full focus:outline-none flex items-center justify-center"
        >
          <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 15.2085L7 1.2085M7 1.2085L1 7.2085M7 1.2085L13 7.2085" stroke="#18191B" stroke-width="1.5" />
          </svg>
        </button>
      )
      }
    </div >
  );
};

export default BackToTopButton;
