import React from 'react'
import ImageCard from './ImageCard'

const BrightsMindSec = () => {
    return (

        <section className='brights-sec sec-pd'>
            <div className="max-w-6xl mx-3 lg:mx-auto">
                <div className="grid gap-y-8 gap-x-3 lg:grid-cols-2 grid-rows-1">
                    <div className="img sec">
                        <img src="images/rocket-img.webp" alt="" className='w-full h-auto lg:-ml-9 lg:max-h-171' />
                    </div>
                    <div className="text-sec flex flex-col justify-center space-y-10 lg:pr-2">
                        <h2 className='sec-hd bright-title lg:text-start! font-extrabold'>All Your Design Solutions Under One Roof</h2>
                        <p className="para">At Pro Designers Agency, we turn your ideas into reality. Utilizing our extensive industry expertise, we are committed to delivering captivating websites that align with your brand's essence. Our goal is to align your business services with the preferences of your target audience to maximize your online presence.</p>
                        <p className="para">Our digital experts pay close attention to your requirements, meticulously analyze your brand data, and thoroughly research your audience to provide seamless digital services, including web design and development, digital marketing, website applications, e-commerce solutions, animations, and more. Our strategists specialize in personalized approaches to enhance your brand's competitiveness across all fronts.</p>
                    </div>
                    <div>
                        <h4 className="card-title mb-3">CORE INSIGHTS</h4>
                        <div className="card py-2 flex gap-7 items-center mb-5">
                            <div className="card-head">
                                <div className="icon-box flex items-center justify-center">
                                    <img src="/images/person-icon.webp" alt="" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title-sm">Unleash Your Business Potential</h5>
                                <p className="para card-para m-0!">Let your business potential flow with our innovative digital strategies and solutions</p>
                            </div>
                        </div>
                        <div className="card flex gap-7 items-center mb-5">
                            <div className="card-head">
                                <div className="icon-box flex items-center justify-center">
                                    <img src="/images/hands-icon.webp" alt="" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title-sm">Future-Proof Your Long-term Success</h5>
                                <p className="para card-para m-0!">Give your users a top-notch user experience with ease of navigation</p>
                            </div>
                        </div>
                        <div className="card flex gap-7 items-center mb-5">
                            <div className="card-head">
                                <div className="icon-box flex items-center justify-center">
                                    <img src="/images/g-icon.webp" alt="" />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title-sm">Establish a Solid Digital Foundation</h5>
                                <p className="para card-para m-0!">A responsive design agency ready to help you unlock your business’s maximum potential</p>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <ImageCard src={"/images/bright-card-img.webp"} className="rounded" content="We're more than just another Digital Marketing Agency. Discover the Pro Designers Agency difference. "/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BrightsMindSec
