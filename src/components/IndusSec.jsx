import React from 'react'
import industries from "@/data/industries.json"
import Card from './Card'

const IndusSec = () => {
    return (
        <section className="tech-sec sec-pd">
            <div className="mx-auto max-w-6xl">
                <h2 className="sec-hd capitalize!">Industries We Serve</h2>
                <div className="grid grid-cols-3 gap-10 mt-20">
                    {industries.map((item, i) => (
                        <Card
                            iconSrc={item.iconSrc}
                            className="min-h-70 p-3"
                            title={item.title}
                            content={item.cardContent}
                            key={i}
                        />
                    ))

                    }
                </div>
            </div>
        </section>
    )
}

export default IndusSec
