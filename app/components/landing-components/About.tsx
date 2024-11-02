'use client'
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
    const text: string = " Lorem ipsum,borum animi ipsa obcaecati, rerum, ipsum laboriosam? Facilis quisquam repellat temporibus porro voluptates provident modi reiciendis neque ratione debitis nihil saepe autem repudiandae harum vitae, pariatur nobis quos?";

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add(
            {
                isDesktop: "(min-width: 1024px)",
                isTablet: "(min-width: 768px) and (max-width: 1023px)",
                isMobile: "(max-width: 767px) and (min-width:500px)",
                others:"(max-width:499px)"
            },
            (context) => {
                const { isDesktop, isTablet, isMobile, others } = context.conditions;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.about',
                        start: isDesktop ? '20% 95%' : isTablet ? 'top 90%' : 'top 85%',
                        end: '70% 50%',
                        scrub: true,
                        
                    }
                });

                let top, left;

                if (isDesktop) {
                    top = '370%';
                    // left = '30%';
                } else if (isTablet) {
                    top = '1750%';
                    // left = '20%';  
                } else if (isMobile) {
                    top = '800%';
                    left = '9%';
                }else if(others){
                    top='440%'
                    left = '-19%'
                }

                tl.to('.ab-1', {
                    top: top,
                    left: left,
                    duration: 0.8,
                });
            }
        );

        gsap.fromTo('.heading',
            {
                scale:0,
                opacity:0,
            }
            , {
                scale:1.5,
                duration:4,
                opacity:1,
                scrollTrigger: {
                    trigger:'.heading',
                    start:'top 40%',
                    end: '+=600px',
                    pin:true,
                    // markers:true,
                    scrub:true
                }
            })

        const reveal = gsap.to(lettersRef.current, {
            scrollTrigger: {
                trigger: triggerRef.current,
                scrub: true,
                start: 'top 70%',
                end: 'bottom bottom'
            },
            color: 'var(--final-color)',
            duration: 3,
            stagger: 1
        });

        const animate = () => {
            const randomX = Math.random() * 100 - 50;
            const randomY = Math.random() * 100 - 50;
            const randomRotation = Math.random() * 360;

            document.documentElement.style.setProperty('--random-x', `${randomX}px`);
            document.documentElement.style.setProperty('--random-y', `${randomY}px`);
            document.documentElement.style.setProperty('--random-rotation', `${randomRotation}deg`);
        }

        animate();

        setTimeout(animate, 1000)

        return () => {
            reveal.kill();
            mm.revert();
        };
    }, []);

    return (
        <div className='h-[90vh] z-[99] relative w-full px-10 max-lg:px-5 pt-36 flex  about max-md:pt-24 flex-col md:flex-row justify-evenly'>
            <div className="relative w-[40%] h-full max-lg:h-10 "></div>
            <p ref={triggerRef} className='w-1/2 max-md:w-full max-md:text-center text-left max-lg:leading-[60px] leading-[68px] text-3xl max-md:text-2xl'>
                {text.split("").map((letter, index) => (
                    <span
                        className='z-[999]'
                        ref={(el) => { lettersRef.current[index] = el; }}
                        key={index}
                        style={{ color: 'var(--initial-color)' }}
                    >
                        {letter}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default About;
