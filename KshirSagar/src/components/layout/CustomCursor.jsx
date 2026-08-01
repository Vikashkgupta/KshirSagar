import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    // Hide on touch devices (mobile/tablet)
    if (window.innerWidth <= 768) return;

    let mx = 0, my = 0, cx = 0, cy = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      cx += (mx - cx) * 0.11;
      cy += (my - cy) * 0.11;
      
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.style.transform = `translate(calc(${cx}px - 50%), calc(${cy}px - 50%))`;
        dotRef.current.style.transform = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
      }
      animationFrameId = requestAnimationFrame(loop);
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '54px';
        cursorRef.current.style.height = '54px';
        cursorRef.current.style.borderColor = 'rgba(212,175,55,0.9)';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.width = '38px';
        cursorRef.current.style.height = '38px';
        cursorRef.current.style.borderColor = 'rgba(212,175,55,0.65)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(loop);

    // Attach hover effects to clickable elements dynamically
    const attachHoverEvents = () => {
      const interactables = document.querySelectorAll('button, a, .cursor-pointer');
      interactables.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Delay attachment slightly to let React render the DOM
    const timeoutId = setTimeout(attachHoverEvents, 1000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        id="cursor" 
        className="hidden md:block fixed w-[38px] h-[38px] border-[1.5px] border-gold/65 rounded-full pointer-events-none z-[9999] transition-[width,height,border-color] duration-150 mix-blend-exclusion top-0 left-0"
      />
      <div 
        ref={dotRef} 
        id="cdot" 
        className="hidden md:block fixed w-[7px] h-[7px] bg-gold rounded-full pointer-events-none z-[9999] top-0 left-0"
      />
    </>
  );
};

export default CustomCursor;