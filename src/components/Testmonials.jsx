import React from 'react'
import Testimonial from './Testimonial'
import author from "../assets/author.jpg"

const Testmonials = () => {
  return (
    <div className="bg-gradient-to-b from-[#b690e1] to-[#93acfb] px-7 sm:px-10 md:20 lg:px-24">
        <h3 className="text-md text-center tracking-widest font-semibold py-5 lg:py-20">DON’T JUST TAKE OUR WORD FOR IT</h3>

        <div className="flex flex-col mt-5 md:flex-row md:justify-between md:gap-12 md:mt-0">
            <Testimonial />
            <Testimonial />
        </div>
        
        <div className="flex flex-col md:flex-row items-center text-[#182751] py-10">
            <div className="flex-1">
                <img src={author} className="flex-1 sm:w-5/6 md:w-4/5" />
            </div>

            <div className="flex-1">
                <h3 className="text-4xl font-medium py-6">About The Author</h3>
                <p className="text-md py-5 lg:w-4/5">Morbi egestas ultricies est. Proin eu odio nibh. Praesent venenatis mi vitae pharetra porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed dolor pulvinar, dapibus augue non, tincidunt nibh. Curabitur et elit commodo, dictum diam sed, dapibus enim. Integer et pulvinar leo, condimentum maximus diam. Phasellus imperdiet urna in tortor vestibulum porta eget ac metus.</p>
            </div>
        </div>
    </div>
  )
}

export default Testmonials