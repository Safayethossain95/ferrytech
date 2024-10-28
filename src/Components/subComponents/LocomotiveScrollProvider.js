// LocomotiveScrollProvider.js
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';



const LocomotiveScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);
  const scroll = useRef(null);

  useEffect(() => {
    // Initialize AOS
   

    // Initialize Locomotive Scroll
    scroll.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,  // Enable smooth scrolling
      lerp: 0.1,     // Adjust scroll smoothing effect
    });

    // Update AOS on scroll
   

    // Cleanup function
    return () => {
      if (scroll.current) {
        scroll.current.destroy();
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
};

export default LocomotiveScrollProvider;
