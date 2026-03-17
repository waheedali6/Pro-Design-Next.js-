import React from 'react'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import DiscussSec from "@/components/DiscussSec";
import FormSec from "@/components/FormSec";
import Footer from "@/components/Footer";
import TechSec from '@/components/TechSec';

const PortfolioPage = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="We Take Pride In Offering The Most Innovative and Advanced Technological Solutions in the Design Industry"
                bgSrc="/images/technologies.jpg"
            />
            <TechSec />
            <DiscussSec />
            <FormSec />
            <Footer />
        </>
    )
}

export default PortfolioPage