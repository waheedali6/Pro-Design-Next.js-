import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer sec-pd bg-black">
            <div className="max-w-5xl mx-3 lg:mx-auto">
                <div className="grid grid-cols-12 gap-15 mb-30">
                    <div className="col-span-3">
                        <img src="/images/logo-white.webp" alt="Footer logo" className="w-60 block m-auto mb-4" />
                        <div className="social-icons flex items-center justify-center gap-4 mb-4">
                            <FaInstagram size={30} />
                            <FaLinkedinIn size={30} />
                            <FaFacebookF size={25} />
                        </div>
                        <img src="/images/dmca-badge.png" alt="Dmca badge" className="block m-auto mb-4" />
                        <img src="/images/card-brands.webp" alt="payment options" className="block m-auto" />
                    </div>
                    <div className="col-span-3 flex flex-col gap-3">
                        <h5 className="footer-title card-title uppercase mb-1">Services</h5>
                        <a href="#" className="link">Website Development</a>
                        <a href="#" className="link">Ecommerce Solutions</a>
                        <a href="#" className="link">Branding</a>
                        <a href="#" className="link">Web Applications</a>
                        <a href="#" className="link">Mobile Applications</a>
                        <a href="#" className="link">Video Animations</a>
                    </div>
                    <div className="col-span-3 flex flex-col gap-3">
                        <h5 className="footer-title card-title uppercase mb-1">Quick links</h5>
                        <a href="#" className="link">About</a>
                        <a href="#" className="link">Contact</a>
                    </div>
                    <div className="col-span-3 flex flex-col gap-3">
                        <h5 className="footer-title card-title uppercase mb-1">Address</h5>
                        <p className="link m-0! grey-color">2626 S LOOP W STE
                            130 Houston, TX 77054</p>
                        <a href="#" className="link">(833) 390-1481</a>
                    </div>
                </div>
                <div className="footer-bottom flex justify-between">
                    <p className="para grey-color text-sm!">Free call <a href="#">(833) 390-1481</a></p>
                    <div className="flex gap-3">
                        <p className="para grey-color text-sm!">© 2026 Pro Designers Agency</p>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
