import React from 'react'
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import DiscussSec from "@/components/DiscussSec";
import FormSec from "@/components/FormSec";
import Footer from "@/components/Footer";
import BrandsSec from '@/components/BrandsSec';
import LifeSec from '@/components/LifeSec';
import CenterSec from '@/components/CenterSec';

const SolutionsPage = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="Let Our Experts Be Your Technical Guide"
                descs={["Having walked in your shoes as startups, we empathize with the challenges of launching and funding your business. That's why we're dedicated to supporting startups of all sizes, offering comprehensive digital transformation and tech execution services tailored to your unique journey.",
                    "Our passionate team delivers innovative solutions, ranging from basic web and app development to creating vibrant e-commerce ecosystems, harnessing cloud computing, and crafting impactful branding and design. We specialize in startup app design, marketing, management, and support."
                ]}
                bgSrc="/images/solutions-bg.jpg"
            />
            <BrandsSec />
            <LifeSec />
            <CenterSec 
            title="Personalized Web Solutions for Mobile Apps and Cloud Services"
            descs={[
                "and deliver complex systems.",
                "Capture your audience's attention, boost revenue, and propel your business forward with our comprehensive ecommerce solutions. Our offerings include development, product data services, plugin development, integration services, and dependable hosting support and management.",
                "We create fully-featured mobile apps for iOS and Android platforms, complete with essential features such as location services, push notifications, in-app purchases, robust APIs, and seamless integration with third-party services."
            ]}
            imgSrc="/images/cloud-img.png"
            />
            <DiscussSec />
            <FormSec />
            <Footer />
        </>
    )
}

export default SolutionsPage