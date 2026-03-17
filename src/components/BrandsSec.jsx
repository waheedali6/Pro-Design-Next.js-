import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const BrandsSec = () => {
    return (
        <section className='sec-pd'>
            <div className="m-auto max-w-6xl">
                <h2 className="sec-hd capitalize! mb-29">Your Brand Deserves Only The Best!</h2>
                <div className="max-w-4/5 mx-auto mb-20">
                    <h3 className="sec-hd text-5xl! capitalize!">We’re Here to Help Entrepreneurs, Funded Startups, and Business Owners!</h3>
                </div>
                <p className="para text-center mb-7!">Whether you're at the inception stage or already in progress, we're here to support you. Our app funding approach aids companies in securing essential funds and sponsors, transforming your app concepts into reality. We conduct thorough research and craft compelling business proposals for potential investors.</p>
                <div className="grid grid-cols-2">
                    <div>
                        <div className="flex items-center gap-4">
                            <FaCheckCircle size={20} className='theme-color' />
                            <p className="para m-0!">Complimentary consultation for your project ideas</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCheckCircle size={20} className='theme-color' />
                            <p className="para m-0!">Rigorous testing and flawless launching of product</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCheckCircle size={20} className='theme-color' />
                            <p className="para m-0!">Aligning your ideas with architectural flow</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCheckCircle size={20} className='theme-color' />
                            <p className="para m-0!">Deliver ready-to-use product to your customers</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-4">
                            <FaCheckCircle size={20} className='theme-color' />
                            <p className="para m-0!">Creations of visually appealing designs that engage your audience</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCheckCircle size={20} className='theme-color' />
                            <p className="para m-0!">On-going support and maintenance services</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaCheckCircle size={20} className='theme-color' />
                            <p className="para m-0!">Integrating essential and benefitting features</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default BrandsSec
