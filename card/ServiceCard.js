import React from 'react';
import Link from "next/link";
const ServiceCard = ({ index, title, description, serviceImage, iconImage }) => {
    return (
        <div className="w-full border rounded-tl-[40px] group rounded-tr-[40px] transform transition-transform duration-300 hover:scale-105">
            <img className='rounded-tl-[40px] rounded-tr-[40px]' src={serviceImage} alt='serviceImage' />
            <div className="relative -top-10 py-3 mx-auto w-20 shadow-lg rounded-full bg-white group-hover:text-white group-hover:bg-[#10B981] transition-all duration-300">
                {iconImage}
            </div>
            <p className="capitalize text-center text-[16px] md:text-xl lg:text-2xl font-semibold -mt-4">{title}</p>
            <p className="mt-4 md:mt-5 lg:mt-6 description !font-normal !text-center !text-[#5D666F]">{description}</p>
            <div className="mt-6 md:mt-8 lg:mt-10 flex justify-between border-t p-4 md:p-5 lg:p-6 group-hover:bg-[#10B981] group-hover:text-white transition-colors duration-300">
                <p className="number">0{index}</p>
                <div className="flex items-center gap-2">
                    <Link href='' className="read group-hover:text-white">Read More</Link>
                    <svg
                        className="mx-auto fill-current text-black group-hover:text-white transition-colors duration-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                    >

                        <path d="M0 16L5 8L-1.4687e-06 9.53674e-07L3 8.91229e-07L8 8L3 16L0 16Z" />
                        <path d="M8 16L13 8L8 9.53674e-07L11 8.66252e-07L16 8L11 16L8 16Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;