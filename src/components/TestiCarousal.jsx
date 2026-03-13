"use client";
import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const TestiCarousal = () => {
    return (
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={3}
            slidesPerView={1}
            loop={true}
        >
            <SwiperSlide>
                <div className='w-full max-w-4/5 m-auto space-y-7!'> 
                    <p className="para text-center text-[26px]!">Pro Designers Agency is phenomenal! Their web design and development skills are top-notch. They revamped our ecommerce site, making it more user-friendly and visually appealing. Our sales have increased significantly since the redesign. Highly recommend!</p>
                    <h5 className="card-title text-center">Jake Waltz</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full max-w-4/5 m-auto space-y-7!'> 
                    <p className="para text-center text-[26px]!">Our experience with Pro Designers Agency  was outstanding! They developed a mobile app for us that is both functional and beautiful. The team was professional, responsive, and truly understood our needs. We couldn’t be happier with the result.</p>
                    <h5 className="card-title text-center">Mary Anne</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full max-w-4/5 m-auto space-y-7!'> 
                    <p className="para text-center text-[26px]!">Pro Designers Agency  delivered exceptional branding services for our startup. Their creative team crafted a unique brand identity that perfectly represents our mission. The process was smooth, and the final product was beyond our expectations. Highly recommended! </p>
                    <h5 className="card-title text-center">Laura Johnson</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full max-w-4/5 m-auto space-y-7!'> 
                    <p className="para text-center text-[26px]!">Choosing Pro Designers Agency  for our digital marketing needs was the best decision we made. Their strategies have dramatically increased our online presence and customer engagement. The team is knowledgeable, friendly, and results-driven. Excellent service!</p>
                    <h5 className="card-title text-center">Timothy Baker</h5>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='w-full max-w-4/5 m-auto space-y-7!'> 
                    <p className="para text-center text-[26px]!">Pro Designers Agency  created stunning animations for our promotional campaign. Their attention to detail and artistic skills were evident in every frame. The animations have garnered a lot of positive feedback from our audience. We highly recommend their creative services!</p>
                    <h5 className="card-title text-center">Gerald J.</h5>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default TestiCarousal
