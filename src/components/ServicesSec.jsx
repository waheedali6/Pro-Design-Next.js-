import React from 'react'
import Card from './Card'
import services from "@/data/services.json"

const ServicesSec = () => {

    const allServices = [
        ...services,
        {
        "title": "Web Applications",
        "cardContent": "Pro Designers Agency understands the importance of web applications in today’s competitive digital marketplace. This is why we help businesses maximize their reach while boosting customer engagement through innovative web applications.",
        "iconSrc": "/images/web-application.svg",
    }
     ]
    return (
        <section className='services-sec sec-pd'>
            <div className="max-w-6xl mx-3 lg:mx-auto">
                <h2 className="sec-hd">OUR SERVICES</h2>
                <div className="grid grid-cols-3 gap-10 mt-15">
                    {allServices.map((item, i) => (
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

export default ServicesSec
