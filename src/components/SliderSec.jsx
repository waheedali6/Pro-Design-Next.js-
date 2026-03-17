"use client";
import React from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


const SliderSec = () => {
    return (
        <section className='slider-sec sec-pd'>
            <div className="mx-auto max-w-11/12">
                <div className="max-w-4xl mx-auto mb-15">
                    <h2 className="sec-hd text-4xl! mb-5">“A brand without trust is just a product and advertising without trust is just a noise”</h2>
                    <h3 className="sec-hd text-4xl! theme-color">Keith Weed</h3>
                </div>
                <div className="slider">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={20}
                        slidesPerView={4}
                        loop={true}
                    >
                        <SwiperSlide>
                            <div className="card flex flex-col relative rounded gap-4 h-90 items-center justify-center bg-[#231F20]! hover:bg-[#2BB1A9]! hover:border-white! cursor-pointer">
                                <img src="/images/excel.svg" alt="" height="60" width="60" className='mb-5' />
                                <h5 className="card-title uppercase">STANDOUT</h5>
                                <p className="para text-center"> Helping brands steal the spotlight through innovative solutions</p>
                                <div className="num">01</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card flex flex-col relative rounded gap-4 h-90 py-20 items-center justify-center bg-[#231F20]! hover:bg-[#2BB1A9]! hover:border-white! cursor-pointer">
                                <img src="/images/impress.svg" alt="" height="60" width="60" className='mb-5' />
                                <h5 className="card-title uppercase">Gratify Partners</h5>
                                <p className="para text-center">Using data-driven strategies and solutions</p>
                                <div className="num">02</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card flex flex-col relative rounded gap-4 h-90 py-20 items-center justify-center bg-[#231F20]! hover:bg-[#2BB1A9]! hover:border-white! cursor-pointer">
                                <img src="/images/evolve.svg" alt="" height="60" width="60" className='mb-5' />
                                <h5 className="card-title uppercase">STRIVING FOR EXCELLENCE</h5>
                                <p className="para text-center">Through innovation and service excellence</p>
                                <div className="num">03</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card flex flex-col relative rounded gap-4 h-90 py-20 items-center justify-center bg-[#231F20]! hover:bg-[#2BB1A9]! hover:border-white! cursor-pointer">
                                <img src="/images/we.svg" alt="" height="60" width="60" className='mb-5' />
                                <h5 className="card-title uppercase">COLLABORATE</h5>
                                <p className="para text-center">Fostering teamwork among peers</p>
                                <div className="num">04</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="card flex flex-col relative rounded gap-4 h-90 py-20 items-center justify-center bg-[#231F20]! hover:bg-[#2BB1A9]! hover:border-white! cursor-pointer">
                                <img src="/images/we.svg" alt="" height="60" width="60" className='mb-5' />
                                <h5 className="card-title uppercase">COLLABORATE</h5>
                                <p className="para text-center">Fostering teamwork among peers</p>
                                <div className="num">05</div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                 <div className="max-w-4xl mx-auto mb-15">
                    <h2 className="card-title-sm text-center mt-13">Our Code of Ethics Helps Pro Designers Agency to excel and outperform competitors by delivering service excellence for web solutions, digital marketing, design, strategic development.</h2>
                </div>
            </div>
        </section>
    )
}

export default SliderSec
