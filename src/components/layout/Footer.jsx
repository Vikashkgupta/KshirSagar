import React, { useState } from 'react';

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 2500);
  };

  return (
    <footer id="footer" className="bg-[#FDFBF5] border-t border-gold/20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-gold/35 to-transparent"></div>
      
      <div className="max-w-[1140px] mx-auto pt-[4.5rem] px-5 md:px-10 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.4fr] gap-8 md:gap-12 mb-[3.5rem]">
          
          <div className="flex flex-col items-start">
            <div className="text-[1.7rem] font-black text-gold mb-3 -tracking-[0.01em]">Kshirsagar</div>
            <p className="text-[#454545] text-[0.82rem] leading-[1.85] font-inter max-w-[230px] mb-2">
              Mairwa's most beloved sweet shop & multi-cuisine restaurant, crafting unforgettable memories through flavors since 1998.
            </p>
            <p className="text-[#454545] text-[0.82rem] leading-[1.85] font-inter max-w-[230px] mb-2">
              📍 Nai Bazar, Mairwa (Siwan)— 841239
            </p>
            <a href="https://wa.me/919931890824" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 px-[1.1rem] py-[0.52rem] border border-gold/40 rounded-full font-inter text-[0.75rem] text-gold no-underline transition-colors hover:bg-gold/10">
              📞 +91 99318 90824
            </a>
          </div>

          <div>
            <div className="text-[#111] font-bold text-[0.72rem] tracking-[0.14em] font-inter mb-5 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[22px] after:h-[1.5px] after:bg-gradient-to-r after:from-gold after:to-saffron after:rounded-sm">OUR MENU</div>
            <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
              {['Premium Mithai', 'South Indian Dosa', 'Chinese & Fast Food', 'Pizza & Burgers', 'Gallery & Specials'].map(item => (
                <li key={item}>
                  <a href="#menu" className="group text-[#484848] font-inter text-[0.8rem] no-underline inline-flex items-center gap-1.5 transition-all hover:text-gold hover:translate-x-1.5">
                    <span className="text-[0.65rem] text-gold opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[#111] font-bold text-[0.72rem] tracking-[0.14em] font-inter mb-5 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[22px] after:h-[1.5px] after:bg-gradient-to-r after:from-gold after:to-saffron after:rounded-sm">QUICK LINKS</div>
            <ul className="list-none flex flex-col gap-2.5 m-0 p-0">
              {[
                { name: 'Track Order', link: 'https://wa.me/919931890824' },
                { name: 'About Us', link: '#legacy' },
                { name: 'Terms of Service', link: '#' },
                { name: 'Privacy Policy', link: '#' },
              ].map(item => (
                <li key={item.name}>
                  <a href={item.link} className="group text-[#484848] font-inter text-[0.8rem] no-underline inline-flex items-center gap-1.5 transition-all hover:text-gold hover:translate-x-1.5">
                    <span className="text-[0.65rem] text-gold opacity-0 -translate-x-1.5 transition-all group-hover:opacity-100 group-hover:translate-x-0">→</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[#111] font-bold text-[0.72rem] tracking-[0.14em] font-inter mb-5 pb-3 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[22px] after:h-[1.5px] after:bg-gradient-to-r after:from-gold after:to-saffron after:rounded-sm">STAY CONNECTED</div>
            <p className="font-inter text-[0.72rem] text-[#454545] mb-4 leading-[1.7]">
              Get exclusive offers & updates directly to your inbox.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <input type="email" className="w-full bg-[#f9f9f9] border border-gold/30 rounded-[9px] text-[#333] font-inter text-[0.8rem] px-3.5 py-2.5 outline-none transition-colors focus:border-gold/60 placeholder:text-[#888]" placeholder="your@email.com" />
              <button onClick={handleSubscribe} className={`p-2.5 rounded-[9px] border-none font-inter text-[0.78rem] font-extrabold tracking-wide cursor-pointer transition-all ${subscribed ? 'bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white' : 'bg-gradient-to-br from-gold to-saffron text-white'}`}>
                {subscribed ? '✓ Subscribed!' : 'SUBSCRIBE'}
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 py-4 text-center">
          <p className="text-[0.68rem] text-[#555] font-inter leading-[1.8]">
            Best Sweets in Mairwa &nbsp;·&nbsp; Masala Dosa Mairwa &nbsp;·&nbsp; Kaju Katli &nbsp;·&nbsp; Rasgulla
          </p>
        </div>

        <div className="border-t border-gold/20 pt-5 pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[#555] text-[0.75rem] font-inter">
            © {new Date().getFullYear()} Kshirsagar. All rights reserved.
          </p>
          <p className="text-[#555] text-[0.75rem] font-inter">
            Designed & Developed by <a href="https://linktr.ee/vikashgupta" target="_blank" rel="noopener noreferrer" className="text-gold font-bold no-underline hover:text-[#111]">Vikash</a>
          </p>
        </div>
      </div>
      <br />
      <br />
    </footer>
  );
};

export default Footer;       