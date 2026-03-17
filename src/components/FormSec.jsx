import React from 'react'

const FormSec = () => {
    return (
        <section className='form-sec sec-pd'>
            <div className="max-w-3xl mx-3 lg:mx-auto">
                <h2 className="card-title text-3xl! theme-color mb-4">We’re Just a Message Away</h2>
                <p className="para mb-7!">In a hurry? Write to us and give us the details. Our experts will get back to you at a time convenient for you to discuss all your business needs. We’re always ready to help you grow your business!</p>
                <form action="">
                    <div className="grid grid-cols-2 gap-7 mb-7">
                        <div className="input-box">
                            <input type="text" className="py-3 px-4 border w-full rounded" placeholder='Enter your name' />
                        </div>
                        <div className="input-box">
                            <input type="email" className="py-3 px-4 border w-full rounded" placeholder='Enter your email' />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-7 mb-7">
                        <div className="input-box">
                            <input type="number" className="py-3 px-4 border w-full rounded" placeholder='(999) 999 9999' />
                        </div>
                        <div className="input-box">
                            <input type="text" className="py-3 px-4 border w-full rounded" placeholder='Enter business name' />
                        </div>
                    </div>
                    <div className="input-box mb-7">
                        <input type="url" className="py-3 px-4 border w-full  rounded" placeholder='http://' />
                    </div>
                    <div className="grid grid-cols-3 mb-7">
                        <div>
                            <div className="input-box flex items-center gap-3 mb-2">
                                <input id='website-development' type="checkbox" />
                                <label htmlFor="website-development" className='para text-sm!'>Website Development</label>
                            </div>
                            <div className="input-box flex items-center gap-3">
                                <input id='branding' type="checkbox" />
                                <label htmlFor="branding" className='para text-sm!'>Branding</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-box flex items-center gap-3 mb-2">
                                <input id='website-development' type="checkbox" />
                                <label htmlFor="website-development" className='para text-sm!'>Ecommerce</label>
                            </div>
                            <div className="input-box flex items-center gap-3">
                                <input id='branding' type="checkbox" />
                                <label htmlFor="branding" className='para text-sm!'>Animations</label>
                            </div>
                        </div>
                        <div>
                            <div className="input-box flex items-center gap-3 mb-2">
                                <input id='website-development' type="checkbox" />
                                <label htmlFor="website-development" className='para text-sm!'>Web Applications</label>
                            </div>
                            <div className="input-box flex items-center gap-3">
                                <input id='branding' type="checkbox" />
                                <label htmlFor="branding" className='para text-sm!'>Mobile Applications</label>
                            </div>
                        </div>
                    </div>
                     <div className="input-box mb-7" >
                        <textarea name="message" id="message" rows="4" className='py-3 px-4 w-full border rounded' placeholder='Message'></textarea>
                     </div>
                     <p className="para text-sm! mb-7!">By clicking submit you agree to our <a href="#" className='theme-color'>Privacy policy</a></p>
                     <button type="submit" className="card-title w-full cursor-pointer theme-color-bg rounded py-3 hover:bg-[#1e8d85]!">Submit</button>

                </form>
            </div>
        </section>
    )
}

export default FormSec
