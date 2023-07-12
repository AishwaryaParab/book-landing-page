import React from 'react'
import {IoIosArrowUp} from "react-icons/io"

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between sm:gap-0 text-[#182751] w-full px-7 sm:px-10 md:20 lg:px-24 bg-[#93acfb] py-20">
        <div className="flex flex-row gap-3 items-center">
            <div className="border-4 border-blue-950 rounded-full w-5 h-5">
            </div>

            <p className="text-xs">© 2018 Unbounce All rights reserved</p>
        </div>

        <div className="flex flex-row gap-3 items-center">
            <p className="tracking-wider text-xs font-medium">BACK TO TOP</p>
            <IoIosArrowUp className="text-lg" />
        </div>
    </div>
  )
}

export default Footer