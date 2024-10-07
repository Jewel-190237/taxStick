import { Rate } from 'antd';
import React from 'react';

const TestimonialCard = ({ name, title, rate, image, speech }) => {
    return (
        <div className="w-full shadow-lg mt-6 md:mt-0 p-5 md:p-6 lg:p-10 z-50">
            <div className="w-full flex items-center justify-between">
                <img src='/testimonials/coma.png' alt="coma" />
                <Rate disabled defaultValue={rate} />
            </div>
            <p className="speech mt-3 md:mt-5 lg:mt-[30px] text-justify">{speech}</p>
            <div className="mt-6 md:mt-9 lg:mt-[50px] flex items-center space-x-10">
                <img className="rounded-full" src={image} alt="coma" />
                <div className=''>
                    <p className="text-xl font-bold">{name}</p>
                    <p className="speech mt-2">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;