'use client';

import { cn } from '@/lib/utils';
import Spline from '@splinetool/react-spline/next';

export default function Abstract({
    className
}:{
    className:string
}) {
    return (
        <div className={cn('absolute w-[530px] h-[530px] animateRandom overflow-hidden flex items-center justify-center animateSpin',className)}>
            <Spline
                scene="https://prod.spline.design/wW9GXeijOXlj-cLV/scene.splinecode"
            />
            {/* <div className="h-10 overflow-hidden z-50 w-full absolute bottom-10 left-0 bg-black"></div> */}
        </div>
    );
}
