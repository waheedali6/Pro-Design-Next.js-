import React from 'react'
import ThemeBtn from './ThemeBtn'

const CenterSec = ({title, descs = [], src, imgSrc, reverse = false, children}) => {
    return (
        <section className='center-sec sec-pd'>
            <div className="max-w-6xl mx-3 lg:mx-auto">
                <div className={`flex gap-4 ${reverse ? "flex-row-reverse" : ""}`}>
                    <div className="w-1/2 img-sec flex items-center justify-center">
                        <img src={imgSrc} alt="vision image" />
                    </div>
                    <div className={`w-1/2 text-sec ${reverse ? "pe-30" : "ps-30"}`}>
                        <h2 className="sec-hd text-start! mb-10">{title}</h2>
                        {descs.map((d) => (
                            <p className="para">{d}</p>
                        ))}
                        {src ? <ThemeBtn title="Find out More" link={src} className='rounded py-3 px-10 mt-4' textClass="font-medium"/> : ""}
                        
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CenterSec
