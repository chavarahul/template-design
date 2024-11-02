'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  useEffect(() => {
    const container = document.querySelector('.slide');

    gsap.to(container, {
      x: '-100vw',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top 10%',      
        end: '+=100%',    
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <section className='new -mt-10 relative'>
      <div className="heading text-center">
        weivkjq3prwijqbvp3rwimbqr
      </div>
      <div className="h-screen w-[200vw] flex overflow-hidden mt-20 slide">
        <div className="w-screen h-full relative shrink-0 bg-red-500">dd</div>
        <div className="w-screen h-full relative shrink-0 bg-blue-500">qfcwwcwvesrv</div>
      </div>
    </section>
  );
};

export default Features;
