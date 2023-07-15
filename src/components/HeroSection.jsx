import React from 'react'
import bookCover from "../assets/book-cover.png";
import Form from './Form';
import { logos } from "../utils/logo";

const HeroSection = () => {
  return (
    <div className="lg:flex lg:flex-row items-center">
        <img src={bookCover} className="w-fit h-fit lg:flex-1 mx-auto lg:mx-0" />

        <div className="flex flex-col gap-7 lg:flex-1 lg:py-20 text-[#182751]">
            <h3 className="text-4xl font-medium lg:w-4/5">Success starts with a great design book</h3>
            <p className="text-lg md:w-5/6 lg:w-4/5 text-justify font-roboto">Morbi leo tortor, fermentum sed orci vitae, tempor auctor turpis. Fusce bibendum accumsan fringilla. Nulla aliquam luctus sem, at posuere nibh lobortis et. Ut ac mollis risus, eu congue libero. Nulla vestibulum ultricies tortor at ultrices.</p>
            <p className="text-lg mt-2 md:w-5/6 lg:w-4/5 text-justify font-roboto">Available in these formats. Enter your email and we will send you the book.</p>
            <Form />

            <div className="hidden xl:block">
                <h3 className="text-md font-semibold">DESIGN AND OPTIMIZATION ADVICE FEATURED ON</h3>
                <div className="py-4 flex flex-wrap flex-row gap-10 2xl:w-4/5 mt-2">
                    {logos.map((logo) => (
                        <img className="w-1/5 h-14 m-2" key={logo.id} src={logo.img} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection