import React from 'react';
import TestimonialCard from '@/card/testimonialCard';
import SectionHeader from '@/components/sectionHeader';
const Testimonials = () => {
  const testimonialsDate = [
    { name: 'Mr. Dorothy', title: 'Chief Executive', rate: 4, image: '/testimonials/person.png', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. There are' },
    { name: 'Mr. Dorothy', title: 'Chief Executive', rate: 4, image: '/testimonials/person.png', speech: 'There are many variations of passages available but the majority have the suffered alteration in some form, by injected humour, or randomised words which don not look even slightly believable. There are' },
  ]
  return (
    <section className=' mt-40'>
      <SectionHeader heading='TESTIMONIAL' title='What Our Client Says about us' />
      <div className='flex justify-end '>
        {/* <img className='hidden md:flex md:w-[140px] md:h-[140px] lg:w-[277px] lg:h-[277px] relative right-0 top-40 z-0' src='/testimonials/circle.png' alt="circle" /> */}
      </div>
      <div className="mt-8 md:mt-10 lg:mt-[50px] max-w-[1320px] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center space-x-0 md:space-x-3 lg:space-x-6">
          {testimonialsDate.map((data) => (
            <TestimonialCard key={data.rate} name={data.name} title={data.title} image={data.image} rate={data.rate} speech={data.speech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;