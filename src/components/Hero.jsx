import React from 'react'
import ThemeBtn from './ThemeBtn'

const Hero = () => {
    return (
        <section className='hero-sec sec-pd bg-[#00001a]'>
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-2">
                    <div className="text-sec flex flex-col justify-center space-y-8.5 lg:pr-2">
                        <h1 className='title lg:text-start! sec-hd'>From Branding to Designing and In-House Development!</h1>
                        <p className="para text-white">A web design company that delivers impactful digital solutions!</p>
                        <ThemeBtn title="Get A Free Quote" className='hero-btn rounded px-8 py-3.5' textClass="font-medium"/>
                    </div>
                    <div className="img sec">
                        <img src="images/hero-img.webp" alt="" className='w-full h-auto'/>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Hero
