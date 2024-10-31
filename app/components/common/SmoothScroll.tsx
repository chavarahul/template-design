'use client'
import { ChildrenProps } from '@/app/constants/type'
import { ReactLenis } from '@studio-freight/react-lenis'
import React from 'react'

const SmoothScroll:React.FC<ChildrenProps> = ({children})=> {

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}
export default SmoothScroll
