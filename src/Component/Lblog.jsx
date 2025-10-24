import React from 'react'
import Container from './Container'
import lblog1 from "../assets/lblog1.png"
import lblog2 from "../assets/lblog2.png"
import lblog3 from "../assets/lblog3.png"
import lblog4 from "../assets/lblog4.png"
import lblog5 from "../assets/lblog5.png"

const Lblog = () => {
    return (
        <section>
            <Container>
                <div className="mt-[64px]">
                    <h2 className='text-[42px] text-[#1A0B5B] font-josefin font-bold text-center'>Leatest Blog</h2>
                </div>
                <div className="my-[64px] grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 justify-center">

                    <div className=" bg-[#FFFF]">
                        <div className="">
                            <img src={lblog1} alt="" />

                            <div className="flex gap-x-8">

                                <div className="flex gap-x-2 items-center my-4">
                                    <div className="">
                                        <img src={lblog4} alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[14px] text-[#151875] font-josefin'>Saber Ali</h2>
                                    </div>
                                </div>

                                <div className="flex gap-x-2 items-center my-4">
                                    <div className="">
                                        <img src={lblog5} alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[14px] text-[#151875] font-josefin'>21 August,2020</h2>
                                    </div>
                                </div>

                            </div>


                            <div className="">
                                <h2 className='text-[18px] font-bold my-2 text-[#151875] font-josefin hover:text-[red]'>Top esssential Trends in 2021</h2>
                                <p className='text-[16px] font-medium my-4 text-[#72718F] font-Lato pr-[80px]'>More off this less hello samlande lied much
                                    over tightly circa horse taped mightly</p>
                                <div className="w-[80px]">
                                    <h3 className='text-[16px] hover:!text-red-500 hover:!border-b-red-500 font-medium my-4 text-[#151875] font-Lato border-b border-b-[#151875]'>Read More</h3>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className=" bg-[#FFFF]">
                        <div className="">
                            <img src={lblog2} alt="" />

                            <div className="flex gap-x-8">

                                <div className="flex gap-x-2 items-center my-4">
                                    <div className="">
                                        <img src={lblog4} alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[14px] text-[#151875] font-josefin'>Saber Ali</h2>
                                    </div>
                                </div>

                                <div className="flex gap-x-2 items-center my-4">
                                    <div className="">
                                        <img src={lblog5} alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[14px] text-[#151875] font-josefin'>21 August,2020</h2>
                                    </div>
                                </div>

                            </div>


                            <div className="">
                                <h2 className='text-[18px] font-bold my-2 text-[#151875] font-josefin hover:text-[red]'>Top esssential Trends in 2021</h2>
                                <p className='text-[16px] font-medium my-4 text-[#72718F] font-Lato pr-[80px]'>More off this less hello samlande lied much
                                    over tightly circa horse taped mightly</p>
                                <div className="w-[80px]">
                                    <h3 className='text-[16px] hover:!text-red-500 hover:!border-b-red-500 font-medium my-4 text-[#151875] font-Lato border-b border-b-[#151875]'>Read More</h3>
                                </div>
                            </div>

                        </div>
                    </div>




                    <div className=" bg-[#FFFFFF] sm:mt-[20px] lg:mt-0">
                        <div className="">
                            <img src={lblog3} alt="" />

                            <div className="flex gap-x-8">

                                <div className="flex gap-x-2 items-center my-4">
                                    <div className="">
                                        <img src={lblog4} alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[14px] text-[#151875] font-josefin'>Saber Ali</h2>
                                    </div>
                                </div>

                                <div className="flex gap-x-2 items-center my-4">
                                    <div className="">
                                        <img src={lblog5} alt="" />
                                    </div>
                                    <div className="">
                                        <h2 className='text-[14px] text-[#151875] font-josefin'>21 August,2020</h2>
                                    </div>
                                </div>

                            </div>


                            <div className="">
                                <h2 className='text-[18px] font-bold my-2 text-[#151875] font-josefin hover:text-[red]'>Top esssential Trends in 2021</h2>
                                <p className='text-[16px] font-medium my-4 text-[#72718F] font-Lato pr-[80px]'>More off this less hello samlande lied much
                                    over tightly circa horse taped mightly</p>
                                <div className="w-[80px]">
                                    <h3 className='text-[16px] hover:!text-red-500 hover:!border-b-red-500 font-medium my-4 text-[#151875] font-Lato border-b border-b-[#151875]'>Read More</h3>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
}

export default Lblog


