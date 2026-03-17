import React from 'react'
import { FaAward, FaTrophy } from 'react-icons/fa'

const AwardSec = () => {
    return (
        <section className='award-sec sec-pd'>
            <div className="max-w-7xl mx-auto">
                <h2 className="sec-hd capitalize! mb-15">Award Winning Performance is excluded</h2>
                <p className="para text-center mb-10!">We prioritize delivering impressive and sustainable ROI for our clients. Our commitment to innovation and excellence has earned us recognition from our peers. We are proud to have received several accolades for our efforts.</p>
                <div className="trophy-box flex gap-5">
                    <div className="card rounded flex flex-col items-center justify-center hover-card px-6 py-7">
                        <FaTrophy size={55} className='theme-color'/>
                        <h4 className="card-title py-2">Winner 2021</h4>
                        <h5 className="card-title-sm">“Digital Agency of the Year”</h5>
                        <p className="para">Campaign Brief Awards WA</p>
                    </div>
                    <div className="card rounded flex flex-col items-center justify-center hover-card px-6 py-7">
                        <FaTrophy size={55} className='theme-color'/>
                        <h4 className="card-title py-2">Winner 2021</h4>
                        <h5 className="card-title-sm">“Digital Agency of the Year”</h5>
                        <p className="para">Campaign Brief Awards WA</p>
                    </div>
                    <div className="card rounded flex flex-col items-center justify-center hover-card px-6 py-7">
                        <FaTrophy size={55} className='theme-color'/>
                        <h4 className="card-title py-2">Winner 2021</h4>
                        <h5 className="card-title-sm">“Digital Agency of the Year”</h5>
                        <p className="para">Campaign Brief Awards WA</p>
                    </div>
                    <div className="card rounded flex flex-col items-center justify-center hover-card px-6 py-7">
                        <FaTrophy size={55} className='theme-color'/>
                        <h4 className="card-title py-2">Winner 2021</h4>
                        <h5 className="card-title-sm">“Digital Agency of the Year”</h5>
                        <p className="para">Campaign Brief Awards WA</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AwardSec
