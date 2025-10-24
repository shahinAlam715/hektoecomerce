import React from 'react'
import Container from './Container'
import { BsArrowsMove } from 'react-icons/bs'
import disitem from "../assets/disitem.png"
import disitem1 from "../assets/disitem1.png"

const DisCount = () => {
  return (
   <>
   <section>
        <Container>
                 <div className="">
                        <h2 className='text-[42px] text-[#1A0B5B] font-josefin
                        font-bold text-center'>Discount Item</h2>

                        <div className="flex justify-center gap-x-4 my-3">
                            <h3 className='text-[18px] text-[#262626] hover:text-[#FB2E86]
                            font-Lato font-medium'>Wood Chair</h3>
                            <h3 className='text-[18px] text-[#262626] hover:text-[#FB2E86]
                            font-Lato font-medium'>Plastic Chair</h3>
                            <h3 className='text-[18px] text-[#262626] hover:text-[#FB2E86]
                            font-Lato font-medium'>Sofa Colletion</h3>
                        </div>
                    </div>

                    <div className="my-[50px] grid sm:grid-cols-1 lg:grid-cols-2 px-4">
                        <div className="">
                            <div className="">
                                <h2 className='text-[35px] font-josefin font-bold text-[#151875]'>20% Discount Of All Products</h2>
                                <h3 className='text-[21px] font-josefin font-medium text-[#FB2E86] my-4'>Eams Sofa Compact</h3>
                                <p className='text-[17px] text-[#B7BACB] leading-[30px] font-Lato font-medium my-2 pr-[50px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                                    eget feugiat habitasse nec, bibendum condimentum.</p>

                                    <div className="">

                                <div className="mt-2 flex gap-x-[60px]">
                                    <div className="flex gap-x-3 items-center my-2">
                                        <BsArrowsMove />
                                        <h4 className='text-[16px] text-[#B7BACB] font-Lato
                                        font-medium'>Material expose like metals</h4>
                                    </div>
                                    <div className="flex gap-x-3 items-center my-2">
                                        <BsArrowsMove />
                                        <h4 className='text-[16px] text-[#B7BACB] font-Lato
                                        font-medium'>Material expose like metals</h4>
                                    </div>
                                </div>

                                 <div className="mt-2 flex gap-x-[60px]">
                                    <div className="flex gap-x-3 items-center my-2">
                                        <BsArrowsMove />
                                        <h4 className='text-[16px] text-[#B7BACB] font-Lato
                                        font-medium'>Material expose like metals</h4>
                                    </div>
                                    <div className="flex gap-x-3 items-center my-2">
                                        <BsArrowsMove />
                                        <h4 className='text-[16px] text-[#B7BACB] font-Lato
                                        font-medium'>Material expose like metals</h4>
                                    </div>
                                </div>

                                    </div>


                            </div>

                            <div className="my-[30px]">
                                <button className='border-2 py-3 px-8 font-Lato hover:bg-[transparent] hover:text-[#262626] bg-[#FB2E86] text-[#fff]'>Shop Now</button>
                            </div>

                        </div>
                        <div className="">
                            <div className="relative">
                                <div className="">
                                    <img src={disitem1} alt="" />
                                </div>
                                <div className="absolute top-[-70px] left-[-110px]">
                                    <img src={disitem} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
        </Container>
   </section>
   </>
  )
}

export default DisCount



