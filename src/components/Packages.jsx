"use client";
import React, { useState } from 'react'
import packages from "@/data/packages.json"
import ThemeBtn from './ThemeBtn';
import { FaCheckCircle, FaSearch } from 'react-icons/fa';

const Packages = () => {
    const [tab, setTab] = useState("Logo Design");
    const handleClick = (e) => {
        setTab(e.target.textContent);
    }
    return (
        <section className='packages-sec sec-pd'>
            <div className="max-w-6xl mx-3 lg:mx-auto">
                <h2 className="sec-hd">EXPLORE OUR PACKAGES</h2>
                <div className="packages">
                    <div className="tab-links flex items-center gap-5 justify-center mt-15">
                        {packages.map((item, index) => (
                            <button className={`link hover-link tab-link ${tab === item.title ? "active" : ""}`} onClick={(e) => handleClick(e)} key={index}>{item.title}</button>
                        ))}
                    </div>
                    {packages.map((item, index) => (
                        tab === item.title ?
                            <div className="grid grid-cols-4 gap-x-7 gap-y-15 mt-15" key={index}>
                                {item.cards.map((c, i) => (
                                    <div className="card-container" key={i}>
                                        <div className="card package-card flex flex-col items-center bg-white! py-8 px-6 rounded-xl">
                                            <h3 className="card-title-sm pkg-name text-[#464c51] text-center mb-9">{c.title}</h3>
                                            <p className="card-para text-center m-0! text-[#a6b0ba]!">Starting at</p>
                                            <h5 className="card-title text-3xl! font-semibold! text-[#333a3f] text-center mb-3">{c.price}</h5>
                                            <p className="card-para text-xs! text-center text-[#757a7e]">Suitable for potential super-startups and brand revamps for companies.</p>
                                            <ThemeBtn
                                                link={c.link}
                                                title="Start"
                                                className="py-2.5 w-full max-w-44 block mx-auto rounded after:bg-black! before:bg-black! hover:[&_.text]:text-white!"
                                                textClass="font-semibold text-center"
                                            />
                                            <p className="para">Features</p>
                                            <div className="w-full mt-5 space-y-2 h-48 overflow-auto">
                                                {c.features.map((f, k) => (
                                                    <div className="flex items-center gap-2" key={k}>
                                                        <FaCheckCircle />
                                                        <p className="card-para text-[#63686c] m-0!">{f}</p>
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="card-para text-xs! text-center text-[#a6b0ba] mt-4! mb-0!">ADD ON : $500 for 24 hours rush delivery
                                            </p>
                                        </div>
                                        <a href='#' className='link text-center block mt-5'>
                                            <FaSearch className="text-2xl inline-block me-4" />
                                            See Details
                                        </a>
                                    </div>

                                ))

                                }
                            </div>
                            : ""
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Packages
