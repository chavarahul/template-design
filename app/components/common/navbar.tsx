import React from 'react'
import { ThemeToggle } from '../ui/index'
import AuthModel from '../auth/authModel'

const Navbar = () => {
  return (
    <header className=' p-3 h-[11vh]'>
      <div className="flex justify-between w-full h-full  px-10">
        <h1 className='font-semibold text-2xl flex items-center'>
          LogoName
        </h1>
        <nav className=" w-1/6 h-full relative flex items-center justify-between">
          <ThemeToggle />
          <div className="max-md:hidden">
          <AuthModel />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar