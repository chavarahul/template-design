'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import Abstract from '../3d/abstract1';

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
            delay:0.3
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.4,
        })
        .fromTo('.nav',{
            y:-80,
            delay:0.2
        },{
            y:0
        },"<")
        .fromTo('.hide',{
            opacity:0,
        },{
            opacity:1
        });
    }, []);

    return (
        <section className='relative w-full min-h-[87vh] max-sm:px-5 px-10 pt-10'>
            <div className=" z20  relative flex items-start sm:w-[64.5%] justify-between overflow-hidden flex-col md:flex-row">
                <p ref={(el) => { textRef.current[0] = el }} className='font-normal text-[9.8vw] max-md:text-[60px]'>
                    {splitText('DESIGN')}
                </p>
                <p ref={(el) => { textRef.current[1] = el }} className='font-normal text-[9.8vw] max-md:text-[60px]'>
                    {splitText('THIS')}
                </p>
            </div>
            {/* <Abstract className='-top-52 right-20 max-lg:hidden hide' /> */}
            <div className="z0 relative flex justify-between w-full lg:-mt-10 flex-col overflow-hidden md:flex-row">
                <p ref={(el) => { textRef.current[2] = el }} className='font-normal text-[9.8vw] relative max-md:text-[60px]'>
                    {splitText('ELEVATES')}
                    <span className='h-full w-[20%] absolute max-xl:hidden -right-36 flex items-center bottom-0 '>
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
            <div className="relative w-full flex items-end justify-end hide max-lg:justify-start max-lg:mt-4 -mt-5 max-md:px-0">
                <p className='text-left w-1/6 max-lg:w-2/3'>
                    Iure amet voluptatum reprehenderit wvwv wvwv wv wv rwenwvriwn
                </p>
                <Abstract className='-top-52 left-1 ab-1 z-50  max-lg:-left-40 max-lg:-top-28 hide max-sm:-left-40 max-sm:-top-24' />
            </div>
            <div className="absolute bottom-0 w-full flex h-20 mt-28 items-center justify-evenly flex-col hide">
                <p className='font-medium text-sm'>Scroll down</p>
                <ChevronDown className='text-sm -mt-2 h-4 animate-bounce' />
            </div>
        </section>
    );
};

export default Hero;
