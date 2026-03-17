import React from 'react'
import technologies from "@/data/technologies.json"
import Card from './Card'

const TechSec = () => {
    return (
        <section className="tech-sec sec-pd">
            <div className="mx-auto max-w-6xl">
                <h2 className="sec-hd capitalize!">We have complete knowledge of these technologies.</h2>
                <div className="grid grid-cols-3 gap-10 mt-20">
                    {technologies.map((item, i) => (
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

export default TechSec
