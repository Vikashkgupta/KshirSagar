import React, { useEffect, useRef, useState } from 'react';

const Legacy = () => {
  const [legacyYears, setLegacyYears] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [dishes, setDishes] = useState(0);
  
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.15 });

    const revealEls = document.querySelectorAll('.reveal-el');
    revealEls.forEach(el => revealObs.observe(el));

    const handleScroll = () => {
      if (sectionRef.current) {
        sectionRef.current.style.backgroundPosition = `center ${window.scrollY * 0.15}px`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const currentYear = new Date().getFullYear();
          animateCounter(setLegacyYears, currentYear - 1998, 2000);
          animateCounter(setHappyCustomers, 500000, 2500);
          animateCounter(setDishes, 120, 1800);
        }
      });
    }, { threshold: 0.2 });

    if (sectionRef.current) counterObs.observe(sectionRef.current);

    return () => {
      revealObs.disconnect();
      counterObs.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  const animateCounter = (setter, target, duration) => {
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setter(ease * target);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const fmt = (n) => n >= 1000 ? Math.floor(n).toLocaleString() : Math.floor(n);

  return (
    <section 
      id="legacy" 
      ref={sectionRef}
      className="py-[3rem] md:py-[5rem] px-4 md:px-[2.5rem] relative overflow-hidden bg-[#FDFBF5]"
      style={{ backgroundImage: 'radial-gradient(circle at center, rgba(212, 175, 55, .06), transparent 70%)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
    >
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,.035)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-[1100px] mx-auto relative z-10">
        <div className="text-center mb-[3.5rem]">
          <div className="text-saffron text-[0.7rem] tracking-[0.25em] font-inter mb-[0.65rem] uppercase">— OUR LEGACY —</div>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] text-[#111]">
            Serving Mairwa's <span className="bg-clip-text text-transparent bg-gradient-to-br from-gold to-saffron">Best</span>
          </h2>
          <p className="text-[#444] mt-[0.9rem] text-[0.88rem] max-w-[480px] mx-auto leading-[1.85] font-inter">
            From a humble sweet shop to Mairwa's most beloved destination — our journey is seasoned with passion and the finest ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.3rem] mb-[4rem]">
          {[
            { value: fmt(legacyYears), label: 'Years of Legacy', sub: 'Since 1998' },
            { value: fmt(happyCustomers), label: 'Happy Customers', sub: 'And counting' },
            { value: fmt(dishes), label: 'Dishes & Varieties', sub: 'On our menu' },
          ].map((item, i) => (
            <div key={i} className="reveal-el opacity-0 translate-y-[24px] transition-all duration-700 ease-out text-center py-[1.8rem] px-[1.2rem] bg-white border border-gold/20 rounded-[15px] hover:shadow-md">
              <div className="text-[clamp(2.2rem,5vw,3.8rem)] font-black leading-none bg-clip-text text-transparent bg-gradient-to-br from-gold to-saffron mb-1">
                {item.value}+
              </div>
              <div className="text-[#111] font-inter text-[0.9rem] font-semibold my-[0.35rem]">{item.label}</div>
              <div className="text-[#555] font-inter text-[0.76rem]">{item.sub}</div>
            </div>
          ))}
        </div>

        <div className="reveal-el opacity-0 translate-y-[24px] transition-all duration-700 ease-out grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] md:gap-[3rem] items-center">
          <div>
            <h3 className="text-[1.75rem] text-gold mb-[1.1rem]">A Tradition of Excellence</h3>
            <p className="text-[#5a5a5a] leading-[1.95] text-[0.9rem] mb-[0.7rem] font-inter">
              Born in the heart of Mairwa, Kshirsagar has been crafting memories through flavors for over two decades. Every mithai carries the essence of traditional recipes passed down through generations.
            </p>
            <p className="text-[#5a5a5a] leading-[1.95] text-[0.9rem] mb-[0.7rem] font-inter">
              From the finest saffron in our Kaju Katli to the perfectly balanced sweetness of our Rasgullas — quality is not just our promise, it's our identity.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-[0.9rem]">
            {[
              { emoji: '🏆', title: 'Award Winning', desc: 'Best Mithai Shop, Siwan' },
              { emoji: '🌿', title: 'Pure Ingredients', desc: 'No artificial colors' },
              { emoji: '👨‍🍳', title: 'Master Chefs', desc: '15+ years experience' },
              { emoji: '🛵', title: 'Home Delivery', desc: 'Mairwa & 15km radius' },
            ].map((feat, i) => (
              <div key={i} className="reveal-el opacity-0 translate-y-[24px] transition-all duration-700 ease-out p-[1.15rem] bg-white border border-gold/20 rounded-[13px] hover:shadow-md">
                <span className="text-[1.5rem] block mb-[0.55rem]">{feat.emoji}</span>
                <div className="text-[#111] font-semibold text-[0.85rem] font-inter">{feat.title}</div>
                <div className="text-[#555] text-[0.75rem] font-inter">{feat.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Legacy;