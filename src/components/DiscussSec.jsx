import React from 'react'
import ThemeBtn from './ThemeBtn'
import { FaPhoneAlt } from 'react-icons/fa'
import DiscussBg from "../../public/images/discuss-bg.webp"


const DiscussSec = () => {
  return (
    <section style={{backgroundImage: `url(${DiscussBg.src})`}} className='discuss-sec sec-pd bg-center bg-cover bg-fixed'>
      <div className="max-w-3xl mx-3 lg:mx-auto">
        <h2 className="sec-hd capitalize! leading-15! mb-13">Let’s Discuss Your Next Project and Explore Limitless Opportunities</h2>
        <p className="para text-white! text-center mb-8!"> Our team is geared and ready to collaborate with you. Give us a call and let’s get started on your project and bring it to life.</p>
        <div className="flex items-center justify-center gap-5">
          <ThemeBtn className="py-5 px-19 rounded" textClass="text-center text-xl">Get A Free Quote</ThemeBtn>
          <ThemeBtn className="py-5 px-19 rounded bg-black!" textClass="text-center text-xl flex! items-center justify-center gap-5"><FaPhoneAlt className='theme-color'/> Get A Free Quote</ThemeBtn>
        </div>
      </div>
    </section>
  )
}

export default DiscussSec
