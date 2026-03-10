"use client";
import React, { useEffect, useState } from 'react'
import { Fancybox } from "@fancyapps/ui/dist/fancybox/";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const portfolio = () => {
    const [tab, setTab] = useState("Website Development");
    useEffect(() => {
        Fancybox.bind("[data-fancybox]", {});
    }, []);
    const tabs = [
        {
            title: "Website Development",
            imagesUrl: [
                {imageUrl: "/images/port-web-1.jpg"},
                {imageUrl: "/images/port-web-2.jpg"},
                {imageUrl: "/images/port-web-3.jpg"},
                {imageUrl: "/images/port-web-4.jpg"},
                {imageUrl: "/images/port-web-5.png"},
                {imageUrl: "/images/port-web-6.png"},
                {imageUrl: "/images/port-web-7.png"},
                {imageUrl: "/images/port-web-8.jpg"},
                {imageUrl: "/images/port-web-9.png"},
                {imageUrl: "/images/port-web-10.jpg"},
                {imageUrl: "/images/port-web-11.png"},
                {imageUrl: "/images/port-web-12.png"},
            ]

        },
        {
            title: "Ecommerce",
            imagesUrl: [
                {imageUrl: "/images/port-ecommrce-1.png"},
                {imageUrl: "/images/port-ecommrce-2.jpg"},
                {imageUrl: "/images/port-ecommrce-3.jpg"},
                {imageUrl: "/images/port-ecommrce-4.jpg"},
                {imageUrl: "/images/port-ecommrce-5.jpg"},
                {imageUrl: "/images/port-ecommrce-6.jpg"},
                {imageUrl: "/images/port-ecommrce-7.png"},
                {imageUrl: "/images/port-ecommrce-8.png"},
                {imageUrl: "/images/port-ecommrce-9.png"},
            ]

        },
        {
            title: "Animations",
            imagesUrl: [
                {
                    imageUrl: "/images/port-animation-1.png",
                    videoUrl: "/videos/port-animation-1.mp4"
                },
                {
                    imageUrl: "/images/port-animation-2.png",
                    videoUrl: "/videos/port-animation-2.mp4"
                },
                {
                    imageUrl: "/images/port-animation-3.png",
                    videoUrl: "/videos/port-animation-3.mp4"
                },
                {
                    imageUrl: "/images/port-animation-4.png",
                    videoUrl: "/videos/port-animation-4.mp4"
                },
                {
                    imageUrl: "/images/port-animation-5.png",
                    videoUrl: "/videos/port-animation-5.mp4"
                },
                {
                    imageUrl: "/images/port-animation-6.png",
                    videoUrl: "/videos/port-animation-6.mp4"
                },
                {
                    imageUrl: "/images/port-animation-7.png",
                    videoUrl: "/videos/port-animation-7.mp4"
                },
                {
                    imageUrl: "/images/port-animation-8.png",
                    videoUrl: "/videos/port-animation-8.mp4"
                }
                
            ],

        },
        {
            title: "Branding",
            imagesUrl: [
                {imageUrl: "/images/port-branding-1.png"},
                {imageUrl: "/images/port-branding-2.png"},
                {imageUrl: "/images/port-branding-4.png"},
                {imageUrl: "/images/port-branding-3.png"},
                {imageUrl: "/images/port-branding-5.png"},
                {imageUrl: "/images/port-branding-6.png"},
                {imageUrl: "/images/port-branding-7.png"}
            ]

        },
        {
            title: "Mobile Applications",
            imagesUrl: [
                {imageUrl: "/images/port-web-1.jpg"}
            ]

        }
    ]


    const handleClick = (e) => {
        setTab(e.target.textContent);
    }


    return (
        <section className='portfolio-sec sec-pd'>
            <div className="max-w-11/12 mx-3 lg:mx-auto">
                <h2 className="sec-hd">Portfolio</h2>
                <div className="portfolio">
                    <div className="tab-links flex items-center gap-20 justify-center mt-15">
                        {tabs.map((item) => (
                            <button className={`link hover-link tab-link ${tab === item.title ? "active" : ""}`} onClick={(e) => handleClick(e)}>{item.title}</button>
                        ))}
                    </div>
                    {tabs.map((item, index) => (
                        tab === item.title ?
                            <div className="grid grid-cols-3 gap-10 mt-15" key={index}>
                                {!item.title === "Animations" ? (item.imagesUrl.map((i) => (
                                    <a href={i.imageUrl} data-fancybox data-caption="Single image">
                                        <div className="card port-card h-85" style={{
                                            background: `url(${i.imageUrl})`
                                        }}>
                                        </div>
                                    </a>
                                ))) : (item.imagesUrl.map((i) => (
                                    <a href={i.videoUrl} data-fancybox data-caption="Single image">
                                        <div className="card port-card h-85" style={{
                                            background: `url(${i.imageUrl})`
                                        }}>
                                        </div>
                                    </a>
                                )))}
                            </div>
                            : ""
                    ))}
                </div>
            </div>
        </section>
    )
}

export default portfolio
