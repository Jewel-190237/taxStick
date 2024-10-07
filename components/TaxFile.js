import React from 'react';

const TaxFile = () => {
    return (
        <section
            className="relative bg-cover bg-center  " // Adjust padding as needed
            style={{ backgroundImage: "url('/taxfile/taxbg.png')" }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-80" />
         
            <div className="max-w-[1320px] mx-auto relative py-8 md:py-12 lg:py-24">
                <div className="flex flex-col md:flex-row items-center md:gap-5 lg:gap-10 px-4 md:px-8 lg:px-0">
                    <div className="flex-1 ">
                        <p className="tax-file">file tax</p>
                        <h2 className="header mt-6 md:mt-8 lg:!mt-10">how to file tax?</h2>
                        <p className="description !font-normal !text-justify mt-7 md:mt-9 lg:mt-12">There are many variations of passages available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages available but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                    <div className="flex-1">
                        <div className="w-full h-full mt-6 md:mt-0">
                            <video
                                controls
                                src="/taxfile/tax.mp4"
                                className="w-full h-full border rounded-3xl border-[#10B981] "
                            />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default TaxFile;