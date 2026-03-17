import React from 'react'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import Portfolio from '@/components/Portfolio'
import DiscussSec from "@/components/DiscussSec";
import FormSec from "@/components/FormSec";
import Footer from "@/components/Footer";

const PortfolioPage = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="Explore Our Portfolio"
                descs={["Our portfolio highlights our proficiency in various areas including e-commerce, web and mobile applications, SEO, Google AdWords, email marketing, branding, and social media marketing. It demonstrates the significant value we offer to businesses like yours."]}
                bgSrc="/images/portfolio-bg.jpg"
            />
            <Portfolio />
            <DiscussSec />
            <FormSec />
            <Footer />
        </>
    )
}

export default PortfolioPage