import React from 'react'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import DiscussSec from "@/components/DiscussSec";
import FormSec from "@/components/FormSec";
import Footer from "@/components/Footer";
import IndusSec from '@/components/IndusSec';

const IndustriesPage = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="Providing Exceptional Services Across Industries Worldwide"
                descs={["From local industries to global powerhouses."]}
                bgSrc="/images/industries-bg.jpg"
            />
            <IndusSec />
            <DiscussSec />
            <FormSec />
            <Footer />
        </>
    )
}

export default IndustriesPage