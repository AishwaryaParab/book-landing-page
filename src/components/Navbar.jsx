import React from 'react'
import { FaTwitter } from "react-icons/fa"
import { AiFillLike } from "react-icons/ai"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-center md:justify-between lg:justify-between bg-transparent py-10">
        <div className="flex flex-row items-center gap-5">
            <div className="border-4 border-blue-950 rounded-full w-5 h-5">
            </div>

            <p>What's Inside</p>
            <p>Author</p>
            <p>Download</p>
        </div>

        <div className="hidden md:flex flex-row items-center gap-4">
            <p>Share on:</p>
            <div className="flex flex-row items-center text-white bg-[#1c9bef] px-4 py-1 gap-2 rounded-2xl text-sm font-bold">
                <FaTwitter />
                <p>Tweet</p>
            </div>

            <div className="flex flex-row items-center text-white bg-[#1977f2] px-4 py-1 gap-2 rounded-2xl text-sm font-bold">
                <AiFillLike />
                <p>Like</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar