import React from 'react'
import Container from './Container'
import Hekto from "../assets/Hekto.png"


const Footer = () => {
  return (
    <>
    <section className='bg-[#EEEFFB] mt-[0px] py-[64px]'>
        <Container>
                <div className="grid lg:grid-cols-12 sm:grid-cols-2 px-4">

                        <div className="col-span-4">
                            <div className="">
                                <div className="">
                                    <img src={Hekto} alt="" />
                                </div>
                                <div className="mt-[30px] flex items-center">
                                    <div className="">
                                        <input type="text" placeholder='Enter Email Address'
                                            className='bg-[#fff] py-3 px-8 outline-none' />
                                    </div>
                                    <div className="">
                                        <button className='border-transparent py-3 px-8 font-Lato hover:bg-[#151875]
                                              bg-[#FB2E86] text-[#fff]'>Sign Up</button>
                                    </div>
                                </div>
                                <div className="">
                                    <h3 className='text-[16px] text-[#8A8FB9] font-Lato font-medium mt-[20px]'>Contact Info</h3>
                                    <h4 className='text-[16px] text-[#8A8FB9] font-Lato font-medium mt-[10px] pr-[100px]'>17 Princess Road, London, Greater London NW1 8JR, UK</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 sm:mt-[20px] lg:mt-0">
                            <div className="">
                                <div className="">
                                    <h2 className='text-[22px] text-[#000000] font-bold font-josefin'>Catagories</h2>
                                </div>
                            </div>
                            <div className="">
                                <ul>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Laptops & Computers</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Cameras & Photography</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Smart Phones & Tablets</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Video Games & Consoles</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Waterproof Headphones</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-span-2 sm:mt-[20px] lg:mt-0">
                            <div className="">
                                <div className="">
                                    <h2 className='text-[22px] text-[#000000] font-bold font-josefin'>Customer Care</h2>
                                </div>
                            </div>
                            <div className="">
                                <ul>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>My Account</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Discount</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Returns</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Orders History</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Order Tracking</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-span-2 sm:mt-[20px] lg:mt-0">
                            <div className="">
                                <div className="">
                                    <h2 className='text-[22px] text-[#000000] font-bold font-josefin'>Pages</h2>
                                </div>
                            </div>
                            <div className="">
                                <ul>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Blog</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Browse the Shop</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Category</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Pre-Built Pages</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>Visual Composer Elements</li>
                                    <li className='text-[16px] text-[#8A8FB9] font-Lato
                                     font-medium mt-[20px] py-1'>WooCommerce Pages</li>
                                </ul>
                            </div>
                        </div>
                    </div>
        </Container>
    </section>
    </>
  )
}

export default Footer

