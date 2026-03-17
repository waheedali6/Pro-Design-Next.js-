import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import PageSection from '@/components/PageSection'
import SliderSec from '@/components/SliderSec'
import CenterSec from '@/components/CenterSec'
import React from 'react'
import AwardSec from '@/components/AwardSec'
import DiscussSec from '@/components/DiscussSec'
import FormSec from '@/components/FormSec'
import Footer from '@/components/Footer'

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Banner 
      title="Helping Brands Achieve Beyond Extraordinary Through Innovative Digital Designs and Development Solutions"
      descs={[
        "We are your partners that deliver top-notch website solutions to help you expand your business horizons. Driven by creativity, passion, and innovation, our strategists provide personalized solutions that help elevate your brand to new heights while giving it a competitive edge. We strive to create unique solutions that not only breathe life into a project but also pushes right into the spotlight of the digital marketplace",
        "We are dedicated to empowering businesses, startups, and large-scale organizations achieve success by connecting them with their ideal audience. We foster meaningful connections that drive us forward to do our best and deliver solutions that are worth the efforts."

      ]}
        bgSrc="/images/about-us-bg.jpg"
      />
      <CenterSec
        title="OUR VISION"
        descs={["“We constantly strive to learn, adapt, and become better at what we do. We dive deep into every project to fully understand the client’s vision, brand goals, before harnessing the power of our creativity and innovation to deliver results that deliver. We take our core values to the heart and abide by these to ensure we deliver the best solutions every single time. Our goal isn’t just to offer the best services – It is to become the best at what we do. We pride ourselves for our integrity, commitment, passion, excellence, and our need for continuous improvement. It is because of these values that we continue to deliver services beyond exceptional."]}
        imgSrc="/images/vision-img.webp"
      />
      <SliderSec />
      <PageSection
        title="Our Expertise"
        descs={["Our team is a diverse group of experts, each with their unique strengths ranging from brand specialists to e-commerce enthusiasts. We work in a collaborative and creative environment to produce quality results that help our clients achieve brand exposure, customers, and access to global digital marketplace. We adhere to the following principles:"]} imgSrc="/images/our-expertise.webp"
        reverse={false}
      >

        <ul className='ps-5!'>
          <li style={{ listStyle: "disc" }}><p className="para mb-2!">THE HICK–HYMAN LAW - Streamlining visitors choice for improved user experience</p></li>
          <li style={{ listStyle: "disc" }}><p className="para mb-2!">NEGATIVE SPACING - Creative use of white space to enhance visual appeal</p></li>
          <li style={{ listStyle: "disc" }}><p className="para mb-2!">RULE OF THIRDS - – Placing essential elements at core visual areas of maximum impact</p></li>
          <li style={{ listStyle: "disc" }}><p className="para mb-2!">HIERARCHY BUILDING - Utilizing color and contrast creatively to establish visual hierarchy.</p></li>
        </ul>
      </PageSection>
      <PageSection
        title="SIGNIFICANCE OF DATA"

        descs={[
          "At Pro Designers Agency, leveraging data effectively is a cornerstone of our approach to launching digital marketing campaigns, creating compelling websites, and executing strategic web development projects",
          "Our team of data analysts utilizes statistical summaries and micro data to enhance the efficacy of our digital services, including SEO, Google AdWords, web development, and digital advertising. Moreover, our dedicated data experts continuously study Google algorithms to stay ahead of industry trends. Consequently, our digital performance team develops intelligent e-marketing strategies using both structured and unstructured data, ensuring that our clients receive data-driven solutions that deliver impactful results."

        ]} imgSrc="/images/depth-of-data.webp"
        reverse={true}
      />
      <PageSection
        title="TRUSTED BY CLIENTS"

        descs={[
          "Pro Designers Agency is a trusted name by leading entrepreneurs and business owners alike. They place their trust in us for our data-driven design and development strategies that help them achieve their goals. Our team of experts are always ready to outperform domestic and global competitors by delivering results that lift your brand to newer heights."

        ]} imgSrc="/images/trusted.webp"
        reverse={false}
      />
      <CenterSec
        title="Google Premier Partner"
        descs={["As an independent Google Premier Partner, Pro Designers Agency has garnered exceptional recognition through our dedication to quality, innovation, and streamlined processes, as reflected in our glowing client reviews and extensive clientele. Our partnership with Google provides our clients with exclusive access to valuable data insights, digital campaign support, and a range of other beneficial features."]}
        imgSrc="/images/google-logo.png"
      >
        <img src='/images/google-badge.png' alt='google-badge' className='mt-6' />
      </CenterSec>
      <AwardSec />
      <DiscussSec />
      <FormSec />
      <Footer />
    </>
  )
}

export default AboutPage
