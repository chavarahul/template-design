'use client'
import React, { useEffect, useState } from 'react'

const Loader = () => {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount >= 100) {
                    clearInterval(timer);
                    return prevCount;
                }
                return prevCount + 1
            })
        }, 50);
        return () => clearInterval(timer);
    }, [])

    return (
        <section className={`bg-black hidden h-screen w-full opacity-1  items-end justify-start z-[999] fixed top-0`}>
            <h3 className='text-[10vw] ml-5'>
                {count}%
            </h3>
        </section>
    )
}

export default Loader