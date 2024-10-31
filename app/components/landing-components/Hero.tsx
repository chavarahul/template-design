'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
    const textRef = useRef<(HTMLParagraphElement | null)[]>([]);

    const splitText = (text: string) => {
        return text.split('').map((letter, index) => (
            <span className="inline-block" key={index}>
                {letter.split(' ')}
            </span>
        ));
    };

    useEffect(() => {
        const tl = gsap.timeline();

        const validRefs = textRef.current.filter(Boolean) as HTMLParagraphElement[];

        tl.fromTo(validRefs, {
            y: 250,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.4,
        });
    }, []);

    return (
        <section className='w-full relative max-sm:px-5 px-10 pt-10'>
            <div className="flex items-start sm:w-[64.5%] justify-between overflow-hidden flex-col md:flex-row">
                <p ref={(el) => { textRef.current[0] = el }} className='font-normal text-[9.8vw] max-md:text-[60px]'>
                    {splitText('DESIGN')}
                </p>
                <p ref={(el) => { textRef.current[1] = el }} className='font-normal text-[9.8vw] max-md:text-[60px]'>
                    {splitText('THIS')}
                </p>
            </div>
            <div className="flex justify-between w-[98%] lg:-mt-10 overflow-hidden flex-col md:flex-row">
                <p ref={(el) => { textRef.current[2] = el }} className='font-normal text-[9.8vw] relative max-md:text-[60px]'>
                    {splitText('ELEVATES')}
                    <span className='h-full w-[20%] absolute max-xl:hidden -right-40 flex items-center bottom-0 '>
                        <img 
                         alt='HeroImage'
                         src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeMrtXbj94ZWlC2Gh45_h7YJ5lF66OEbO9Q&s'} 
                         className='w-full h-1/2'
                         />
                    </span>
                </p>
                <p ref={(el) => { textRef.current[3] = el }} className='font-normal text-[9.8vw] max-md:text-[60px]'>
                    {splitText('YOURSS')}
                </p>
            </div>
            <div className="relative w-full flex items-end  justify-end px-10 max-md:px-5">
                <p className='text-left w-1/6 '>
                Iure amet voluptatum reprehenderit  wvwv wvwv wv wv rwenwvriwn
                </p>
            </div>
            <div className="relative w-full  flex h-20 mt-20 items-center justify-evenly flex-col">
                <p className='font-medium text-sm'>Scroll down</p>
                <ChevronDown className='text-sm -mt-2 h-4 animate-bounce' />
            </div>
        </section>
    );
};

export default Hero;
