import React from 'react'
import headshot from "../assets/headshot-1.jpg"

const Testimonial = () => {
  return (
    <div className="flex-1 py-4">
        <h3 className="italic text-xl md:text-3xl font-semibold">The great design book powers our creative process and allows us to iterate on ideas for digital campaigns.</h3>
        <div className="flex flex-row items-center gap-3">
            <img src={headshot} className="w-12 h-12 object-cover" />

            <div className="my-10">
                <p className="text-sm font-medium md:font-semibold tracking-wider">MIKE BUTTON</p>
                <p className="text-xs">Art Director, Pixel & Nudge</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial