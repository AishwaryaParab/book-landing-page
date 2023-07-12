import React from 'react'

const Form = () => {
  return (
    <div className="sm:flex sm:flex-row">
        <input placeholder='Enter your email' className="p-6 placeholder:text-gray-400 bg-[#182751] w-full sm:w-4/6 lg:w-3/5 rounded-md sm:rounded-r-none" />
        <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold p-6 rounded-md sm:rounded-l-none w-full sm:w-auto my-5 sm:my-0">GET THE BOOK</button>
    </div>
  )
}

export default Form