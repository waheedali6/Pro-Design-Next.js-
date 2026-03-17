import React from 'react'
import ThemeBtn from './ThemeBtn'

const Banner = ({ title, descs = [], bgSrc }) => {
    return (
        <section className='banner banner-pd' style={{
            background: `#00000082 url(${bgSrc})`,
            backgroundBlendMode: "overlay",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }}>
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                <h1 className="banner-title sec-hd mb-22">{title}</h1>
                <div className="w-4/5 m-auto">
                    {descs?.map((d) => (
                        <p className="para text-center mb-7!">{d}</p>
                    ))}
                </div>
                <ThemeBtn className="py-6 px-9 rounded lg:text-xl mt-4">Get A Free Quote</ThemeBtn>
            </div>
        </section>
    )
}

export default Banner
