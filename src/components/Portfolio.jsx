"use client";
import React, { useEffect, useState } from 'react'
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import services from "@/data/services.json"

const portfolio = () => {
    const [tab, setTab] = useState("Website Development");
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});
    }, []);


    const handleClick = (e) => {
        setTab(e.target.textContent);
    }


    return (
        <section className='portfolio-sec sec-pd'>
            <div className="max-w-11/12 mx-3 lg:mx-auto">
                <h2 className="sec-hd">Portfolio</h2>
                <div className="portfolio">
                    <div className="tab-links flex items-center gap-20 justify-center mt-15">
                        {services.map((item, index) => (
                            <button className={`link hover-link tab-link ${tab === item.title ? "active" : ""}`} onClick={(e) => handleClick(e)} key={index}>{item.title}</button>
                        ))}
                    </div>
                    {services.map((item, index) => (
                        tab === item.title ?
                            <div className="grid grid-cols-3 gap-10 mt-15" key={index}>
                                {item.portfolioUrls.map((i, index) => (
                                    <a href={item.title === "Animations" ? i.videoUrl : i.imageUrl} data-fancybox data-caption="Single image" key={index}>
                                        <div className="card port-card h-85 rounded" style={{
                                            background: `url(${i.imageUrl})`
                                        }}>
                                        </div>
                                    </a>
                                ))}
                            </div>
                            : ""
                    ))}
                </div>
            </div>
        </section>
    )
}

export default portfolio
