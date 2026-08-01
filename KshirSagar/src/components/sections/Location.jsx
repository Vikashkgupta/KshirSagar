import React, { useEffect, useRef } from 'react';

const Location = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const revealObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.15 });

    const revealEls = document.querySelectorAll('.reveal-loc');
    revealEls.forEach(el => revealObs.observe(el));
    return () => revealObs.disconnect();
  }, []);

  const infoCards = [
    { icon: '📍', label: 'ADDRESS', detail: 'Nai Bazar, Mairwa<br/>Siwan, Bihar — 841239' },
    { icon: '📞', label: 'PHONE', detail: '+91 99318 90824<br/>6:00 AM – 10:00 PM' },
    { icon: '🕐', label: 'HOURS', detail: 'Mon – Sun: 6:00 AM – 10:00 PM<br/>Festival Days: Extended Hours' },
    { icon: '🛵', label: 'DELIVERY', detail: 'Mairwa & 15km radius<br/>Call to confirm availability' }
  ];

  return (
    <section id="location" ref={sectionRef} className="py-[3rem] md:py-[5rem] px-4 md:px-[2.5rem] bg-white">
      <div className="max-w-[1100px] mx-auto">
        
        <div className="text-center mb-[3.5rem]">
          <div className="text-saffron text-[0.7rem] tracking-[0.25em] font-inter mb-[0.65rem] uppercase">— FIND US —</div>
          <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.1] text-[#111]">
            Visit <span className="bg-clip-text text-transparent bg-gradient-to-br from-gold to-saffron">Kshirsagar</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.45fr] gap-[2rem] lg:gap-[3rem] items-center">
          <div>
            {infoCards.map((item, idx) => (
              <div key={idx} className="reveal-loc opacity-0 translate-y-[24px] transition-all duration-700 ease-out flex gap-[1.1rem] p-[1.15rem] bg-white border border-gold/30 rounded-[13px] mb-[0.9rem] shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
                <span className="text-[1.3rem] shrink-0">{item.icon}</span>
                <div>
                  <div className="text-gold font-bold text-[0.76rem] tracking-[0.05em] font-inter mb-[0.28rem]">{item.label}</div>
                  <div className="text-[#5a5a5a] text-[0.82rem] font-inter leading-[1.65]" dangerouslySetInnerHTML={{ __html: item.detail }}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-loc opacity-0 translate-y-[24px] transition-all duration-700 ease-out relative h-[260px] md:h-[430px] rounded-[18px] overflow-hidden border border-gold/30 shadow-[0_0_50px_rgba(0,0,0,0.04)]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.4920029665986!2d84.15081690000001!3d26.2373274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399253b11832e8db%3A0x88f735f0ec8e1283!2sKshirsagar!5e0!3m2!1sen!2sin!4v1775750507131!5m2!1sen!2sin" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kshirsagar Mairwa Location"></iframe>
            <div className="absolute top-[1.1rem] left-[1.1rem] bg-white/95 backdrop-blur-md border border-gold/30 rounded-[11px] py-[0.6rem] px-[0.95rem] shadow-sm">
              <div className="text-gold font-bold text-[0.9rem]">Kshirsagar</div>
              <div className="text-[#444] text-[0.68rem] font-inter">Mairwa, Siwan</div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-[14px] h-[14px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-[14px] h-[14px] bg-gold rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-[30px] h-[30px] border-2 border-gold rounded-full -translate-x-1/2 -translate-y-1/2 animate-[ping_2s_ease_infinite] opacity-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;