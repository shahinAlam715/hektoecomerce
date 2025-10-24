import React from 'react'
import Container from './Container'
import uniq from "../assets/uniq.png"
import uniq1 from "../assets/uniq1.png"

const Uniq = () => {
  return (
    <>
    <section className='bg-[#F1F0FF] my-[64px] py-[64px] px-4'>
        <Container>
                  <div className="grid sm:grid-cols-1 lg:grid-cols-2">
                        <div className="">
                            <div className="relative">
                                <div className="">
                                    <img src={uniq1} alt="" />
                                </div>
                                <div className="absolute top-0 left-[40px]">
                                    <img src={uniq} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className=" mt-[64px]">

                            <div className="">
                                <h2 className='text-[35px] font-josefin font-bold text-[#151875] pr-[100px]'>Unique Features Of leatest &
                                    Trending Poducts</h2>
                            </div>

                            <div className="flex gap-x-4 items-center my-4">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#F52B70]"></div>
                                <div className="">
                                    <p className='text-[16px] font-Lato font-medium '>All frames constructed with hardwood solids and laminates</p>
                                </div>
                            </div>

                            <div className="flex gap-x-4 my-4">
                                <div className="w-[11px] h-[11px] mt-2 rounded-full bg-[#2B2BF5]"></div>
                                <div className="">
                                    <p className='text-[16px] font-Lato font-medium pr-8'>Reinforced with double wood dowels, glue, screw - nails corner
                                        blocks and machine nails</p>
                                </div>
                            </div>

                            <div className="flex gap-x-4 items-center my-4">
                                <div className="w-[11px] h-[11px] rounded-full bg-[#2BF5CC]"></div>
                                <div className="">
                                    <p className='text-[16px] font-Lato font-medium '>All frames constructed with hardwood solids and laminates</p>
                                </div>
                            </div>


                            <div className="flex gap-x-4 items-center mt-[64px]">
                                <div className="">
                                    <button className='py-3 px-8 bg-[#F52B70] hover:bg-[#fff] hover:text-[black] text-[#fff] text-[17px] font-josefin font-medium'>Add To Cart</button>
                                </div>
                                <div className="">
                                    <h2 className='text-[14px] font-josefin font-bold text-[#151875]'>B&B Italian Sofa</h2>
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

export default Uniq


