import React from 'react'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import DiscussSec from "@/components/DiscussSec";
import FormSec from "@/components/FormSec";
import Footer from "@/components/Footer";
import Packages from '@/components/Packages';

const PackagesPage = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="See Our Packages"
                bgSrc="/images/packages-bg.jpg"
            />
            <Packages />
            <DiscussSec />
            <FormSec />
            <Footer />
        </>
    )
}

export default PackagesPage