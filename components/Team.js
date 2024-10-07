'use client'
import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Navigation } from 'swiper/modules';
import TeamCard from '@/card/TeamCard';

const Team = () => {
    const swipperRef = useRef(null);
    useEffect(() => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.update();
        }
    }, []);
    const Next = () => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.slideNext();
        }
    };
    const Previous = () => {
        if (swipperRef.current && swipperRef.current.swiper) {
            swipperRef.current.swiper.slidePrev();
        }
    };

    const image = '/Team/expert1.svg'
    const name = 'Mr. Dorothy'
    const title = 'Chief Executive'

    const teamData = [
        { image: '/Team/expert1.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/Team/expert1.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/Team/expert1.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/Team/expert1.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/Team/expert1.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/Team/expert1.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
        { image: '/Team/expert1.svg', name: 'Mr. Dorothy', title: 'Chief Executive' },
    ]
    return (
        <section className='grid grid-cols-1 md:grid-cols-3 relative max-w-[1320px] mx-auto mt-40'>
            <div className='team-slider px-4 md:px-8 lg:px-0 '>
                <div className='team-gradient w-[150px] md:w-[160px] lg:w-[190px] rounded-md '>
                    <p className='text-[#090909] font-medium text-[18px] px-3 lg:px-4 py-2 lg:py-3'>Expert Team</p>
                </div>
                <h1 className='header !text-[#191919] !mt-10'>Meet Our Expert Member</h1>
                <div className='flex items-center space-x-6 mt-10'>
                    <button onClick={Previous} className='swipper-button group'>
                        <svg
                            className="mx-auto fill-current text-[#7D7D7D] group-hover:text-white transition-colors duration-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30"
                            height="30"
                        >
                            <path d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" />
                        </svg>
                    </button>
                    <button onClick={Next} className='swipper-button group'>
                        <svg
                            className="rotate-180 mx-auto fill-current text-[#7D7D7D] group-hover:text-white transition-colors duration-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="30"
                            height="30"
                        >
                            <path d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" />
                        </svg>
                    </button>
                </div>
                <img className='hidden md:flex left-40 relative lg:left-80' src='/Team/shape.svg' alt='shape' />
            </div>
            <div className='col-span-2'>
                <Swiper
                    slidesPerView={2}
                    keyboard={{
                        enabled: true,
                    }}
                    // breakpoints={{
                    //     0: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 24,
                    //     },
                    //     668: {
                    //         slidesPerView: 2,
                    //         spaceBetween: 24,
                    //     },
                    //     1024: {
                    //         slidesPerView: 3,
                    //         spaceBetween: 24,
                    //     },
                    //     1280: {
                    //         slidesPerView: 3,
                    //         spaceBetween: 24,
                    //     },
                    // }}

                    pagination={{
                        clickable: true,
                    }}
                    modules={[Keyboard, Navigation]}
                    ref={swipperRef}
                >
                    {teamData.map((data) => (
                        <SwiperSlide className=''>
                            <TeamCard image={data.image} name={data.name} title={data.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Team;