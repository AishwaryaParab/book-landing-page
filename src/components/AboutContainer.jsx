import React from 'react'
import bookpage from "../assets/bookpage.png"

const AboutContainer = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-gradient-to-b from-pink-400 to-[#b690e1] px-7 sm:px-10 md:20 lg:px-24 font-poppins py-20">
        <div className="flex-1 flex flex-col gap-7 text-[#182751] mt-16">
            <h3 className="text-4xl font-medium">What's Inside</h3>
            <p className="text-md lg:w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer est tellus, pulvinar ac iaculis vel, varius eu arcu. Integer id lectus posuere nisi dignissim gravida at ac justo. Ut nec dui rutrum, cursus mauris sed, ullamcorper orci.</p>
            <p className="text-md lg:w-4/5">Morbi egestas ultricies est. Proin eu odio nibh. Praesent venenatis mi vitae pharetra porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sed dolor pulvinar, dapibus augue non, tincidunt nibh. Curabitur et elit commodo, dictum diam sed, dapibus enim. Integer et pulvinar leo, condimentum maximus diam. Phasellus imperdiet urna in tortor vestibulum porta eget ac metus senectus et netus.</p>
        </div>

        <div className="flex-1 flex items-center justify-center">
            <div className="mx-auto w-72 h-96 rounded-lg relative my-auto">
                <img src={bookpage} className="rounded-md relative z-30" />

                <div className="w-72 h-96 bg-[#2868ed] rounded-md absolute left-3 top-3 z-20">
                </div>

                <div className="w-72 h-96 bg-[#182751] rounded-md absolute left-6 top-6 z-10">
                </div>
            </div>
            

            
        </div>
    </div>
  )
}

export default AboutContainer