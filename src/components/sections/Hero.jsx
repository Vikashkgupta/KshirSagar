import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleCustomRequest } from '../../store/uiSlice';

const Hero = () => {
  const dispatch = useDispatch();

  const scrollToMenu = () => {
    const menu = document.getElementById('menu');
    if (menu) menu.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-auto md:min-h-[92vh] overflow-hidden flex items-center pt-[6.5rem] px-[1.2rem] pb-[3rem] md:pt-[clamp(6.5rem,10vw,8rem)] md:px-[clamp(1.5rem,5vw,4.5rem)] md:pb-[clamp(3rem,6vw,4.5rem)]"
      style={{
        background: 'linear-gradient(90deg, rgba(255, 255, 255, .98) 0%, rgba(255, 255, 255, .94) 38%, rgba(255, 248, 238, .72) 58%, rgba(255, 248, 238, .18) 100%), url("/hero.png") right center / cover no-repeat'
      }}
    >
      {/* Decorative Gold Glows */}
      <div className="absolute -top-[20%] -right-[12%] w-[55%] h-[70%] bg-[radial-gradient(circle,rgba(212,175,55,.18)_0%,transparent_70%)] pointer-events-none z-0" />
      <div className="absolute -bottom-[18%] -left-[10%] w-[42%] h-[55%] bg-[radial-gradient(circle,rgba(212,175,55,.1)_0%,transparent_70%)] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.92fr] items-center gap-[2.2rem] md:gap-[clamp(2.5rem,5vw,5rem)]">
        
        {/* Left Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          
          <div className="inline-flex items-center gap-2 py-[0.45rem] px-[1.4rem] border border-gold/30 rounded-full mb-[1.2rem] bg-transparent animate-[fadeUp_0.9s_ease_both]">
            <span className="text-[0.72rem] text-[#6b0f1a] font-inter font-bold tracking-[0.12em]">SINCE 1998</span>
          </div>

          <div className="font-inter text-[0.75rem] text-[#c88a2e] font-bold tracking-[0.16em] mb-2 uppercase animate-[fadeUp_0.9s_ease_0.08s_both]">
            TRADITION OF EXCELLENCE
          </div>
          
          <h1 className="font-playfair text-[clamp(2.4rem,11vw,3.2rem)] md:text-[clamp(2.8rem,5.2vw,4.8rem)] font-black leading-[1.12] md:leading-[1.05] tracking-[0.03em] mb-[0.8rem] text-[#6b0f1a] uppercase animate-[fadeUp_0.9s_ease_0.16s_both]">
            क्षीर सागर
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-[1.2rem] mb-[1.8rem] animate-[fadeUp_0.9s_ease_0.24s_both]">
            <span className="font-inter text-[clamp(0.95rem,1.8vw,1.15rem)] text-[#333] font-semibold tracking-[0.1em] uppercase">स्वीट्स एंड बेकर्स</span>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-[0.7rem] mb-[1.8rem] text-[#a35d25] text-[1.25rem] font-semibold font-inter animate-[fadeUp_0.9s_ease_0.32s_both]">
            <span className="text-[1rem] text-[#c48a29]">➞</span>
            <span>हमेशा कुछ नया</span>
            <span className="text-[1rem] text-[#c48a29]">⬅</span>
          </div>

          <div className="font-inter text-[0.95rem] text-[#c88a2e] font-semibold mb-[2.8rem] flex items-center justify-center lg:justify-start gap-[0.6rem] animate-[fadeUp_0.9s_ease_0.40s_both]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
            </svg>
            Nai bazar, Mairwa (Siwan)
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col lg:flex-row flex-wrap gap-[0.9rem] lg:gap-[1.2rem] w-full lg:w-auto mb-[2rem] lg:mb-[3.5rem] justify-center lg:justify-start animate-[fadeUp_0.9s_ease_0.48s_both]">
            <button 
              onClick={scrollToMenu}
              className="w-full lg:w-auto py-[0.95rem] px-[2.2rem] bg-gradient-to-r from-[#d88114] to-[#df901a] border-none rounded-full text-white font-inter text-[0.95rem] font-semibold cursor-pointer inline-flex items-center justify-center gap-[0.8rem] shadow-[0_6px_18px_rgba(216,129,20,0.25)] transition-all duration-250 hover:-translate-y-[2px] hover:shadow-[0_10px_24px_rgba(216,129,20,0.35)]"
            >
              Explore Menu <span className="text-[1.1rem]">→</span>
            </button>
            <button 
              onClick={() => dispatch(toggleCustomRequest(true))}
              className="w-full lg:w-auto py-[0.95rem] px-[2.2rem] bg-white border border-gold/30 rounded-full text-[#6b0f1a] font-inter text-[0.95rem] font-semibold cursor-pointer inline-flex items-center justify-center gap-[0.8rem] shadow-[0_4px_14px_rgba(0,0,0,0.02)] transition-all duration-250 hover:bg-gold/5 hover:border-gold/50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
                <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
                <path d="M2 21h20" />
                <path d="M7 8v2" />
                <path d="M12 8v2" />
                <path d="M17 8v2" />
                <path d="M7 4h.01" />
                <path d="M12 4h.01" />
                <path d="M17 4h.01" />
              </svg>
              Order Custom Cake
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1.5rem] lg:gap-[1.2rem] w-full max-w-[400px] lg:max-w-[520px] mx-auto lg:mx-0 animate-[fadeUp_0.9s_ease_0.56s_both]">
            {[
              { title: "100%", desc: "Pure Ingredients", path: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z", path2: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" },
              { title: "Hygienic", desc: "Preparation", path: "M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z", line: true },
              { title: "Premium", desc: "Quality", isCircle: true },
              { title: "5000+", desc: "Happy Customers", path: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-[0.6rem]">
                <div className="w-[52px] h-[52px] border border-gold/30 rounded-full flex items-center justify-center bg-white shadow-[0_4px_10px_rgba(0,0,0,0.02)]">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c48a29" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {item.path && <path d={item.path} />}
                    {item.path2 && <path d={item.path2} />}
                    {item.line && <line x1="6" y1="17" x2="18" y2="17" />}
                    {item.isCircle && (
                      <>
                        <circle cx="12" cy="8" r="7" />
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                      </>
                    )}
                  </svg>
                </div>
                <div className="flex flex-col gap-[0.2rem]">
                  <div className="font-inter text-[0.85rem] font-bold text-[#222] leading-[1.1]">{item.title}</div>
                  <div className="font-inter text-[0.68rem] text-[#777] leading-[1.2]">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
           {/* Placeholder for Hero Right to maintain grid layout */}
        </div>
      </div>
    </section>
  );
};

export default Hero;