import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'

const MainContainer = () => {
  return (
    <div className="bg-gradient-to-b from-orange-200 from-20% via-[#f79caa] to-pink-400 w-full px-7 sm:px-10 md:20 lg:px-24 font-poppins">
        <Navbar />
        <HeroSection />
    </div>
  )
}

export default MainContainer