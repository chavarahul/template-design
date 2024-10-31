import React from 'react'
import { ThemeToggle } from '../ui/index'

const Navbar = () => {
  return (
    <header className='borders p-3 h-[11vh]'>
      <div className="flex justify-between w-full h-full borders px-10">
        <h1 className='font-semibold text-2xl flex items-center'>
          LogoName
        </h1>
        <nav className="borders w-1/5 h-full relative flex items-center justify-evenly">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}

export default Navbar