import React from 'react'
import Container from './Container'
import ten1 from "../assets/ten1.png"
import ten2 from "../assets/ten2.png"
import ten3 from "../assets/ten3.png"
import ten4 from "../assets/ten4.png"
import ten5 from "../assets/ten5.png"
import ten66 from "../assets/ten66.png"
import ten6 from "../assets/ten6.png"
import ten7 from "../assets/ten7.png"

const TrenDing = () => {
    return (
        <>
            <section>
                <Container>
                    <div className="mt-[64px]">
                        <h2 className='text-[42px] text-[#1A0B5B] font-josefin font-bold text-center'>Trending Products</h2>
                    </div>
                    <div className="mt-[20px] grid sm:grid-cols-2 lg:grid-cols-4">
                        <div className="">
                            <img src={ten1} alt="" className='w-full' />
                        </div>
                        <div className="">
                            <img src={ten2} alt="" className='w-full' />
                        </div>
                        <div className="">
                            <img src={ten3} alt="" className='w-full' />
                        </div>
                        <div className="">
                            <img src={ten4} alt="" className='w-full' />
                        </div>
                    </div>

                    <div className=" gap-x-4 my-[64px] grid sm:grid-cols-2 lg:grid-cols-3">

                        <div className=" h-[270px] bg-[#FFF6FB]">
                            <div className="">
                                <h2 className='text-[26px] text-[#151875] font-josefin font-bold  mt-4 px-4'>23% off in all products</h2>
                                <h3 className='text-[14px] text-[#FB2E86] font-Lato mt-2 font-medium px-4'>Shop Now</h3>
                            </div>
                            <div className="flex  justify-end mt-[-20px]">
                                <img src={ten5} alt="" />
                            </div>
                        </div>

                        <div className=" h-[270px] bg-[#EEEFFB]">
                            <div className="">
                                <h2 className='text-[26px] text-[#151875] font-josefin font-bold  mt-4 px-4'>23% off in all products</h2>
                                <h3 className='text-[14px] text-[#FB2E86] font-Lato mt-2 font-medium px-4'>View Collection</h3>
                            </div>
                            <div className="flex  justify-end mt-6">
                                <img src={ten66} alt="" />
                            </div>
                        </div>

                        <div className=" h-[270px] bg-[#fff]">
                            <div className="flex gap-x-4 items-center my-3 mx-2">
                                <div className="relative">
                                    <img src={ten7} alt="" />
                                    <div className="absolute top-0 left-[5%]">
                                        <img src={ten6} alt="" />
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className='text-[14px] font-josefin font-bold text-[#151875]'>Executive Seat chair</h2>
                                    <h2 className='text-[17px] font-josefin font-bold text-[#151875]'>$32.00</h2>
                                </div>
                            </div>

                            <div className="flex gap-x-4 items-center my-3 mx-2">
                                <div className="relative">
                                    <img src={ten7} alt="" />
                                    <div className="absolute top-0 left-[5%]">
                                        <img src={ten6} alt="" />
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className='text-[14px] font-josefin font-bold text-[#151875]'>Executive Seat chair</h2>
                                    <h2 className='text-[17px] font-josefin font-bold text-[#151875]'>$32.00</h2>
                                </div>
                            </div>

                            <div className="flex gap-x-4 items-center my-3 mx-2">
                                <div className="relative">
                                    <img src={ten7} alt="" />
                                    <div className="absolute top-0 left-[5%]">
                                        <img src={ten6} alt="" />
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className='text-[14px] font-josefin font-bold text-[#151875]'>Executive Seat chair</h2>
                                    <h2 className='text-[17px] font-josefin font-bold text-[#151875]'>$32.00</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default TrenDing


