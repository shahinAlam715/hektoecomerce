import React from 'react'
import soffer1 from "../assets/soffer1.png"
import soffer2 from "../assets/soffer2.png"
import soffer3 from "../assets/soffer3.png"
import soffer4 from "../assets/soffer4.png"
import Container from './Container'

const Offer = () => {
  return (
    <>
    <section>
        <Container>
                    <div className="">
                        <h2 className='text-[42px] text-[#1A0B5B] font-Josefin font-bold text-center'>What Shopex Offer!</h2>
                    </div>

                    <div className="mt-[40px] my-2 gap-x-4 grid sm:grid-cols-2 lg:grid-cols-4">


                        <div className=" h-[320px] bg-[rgba(128,128,128,0.05)] hover:bg-[purple] hover:text-[#fff] my-2">
                            <div className="">
                                <div className="flex justify-center py-6 pt-[50px]">
                                    <img src={soffer1} alt="" />
                                </div>
                                <div className="">
                                    <h2 className='text-[22px] font-Josefin text-center'>24/7 Support</h2>
                                    <p className='text-[16px] font-Lato text-center py-4 px-4 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        . Massa purus gravida.</p>
                                </div>
                            </div>
                        </div>

                        <div className=" h-[320px] bg-[rgba(128,128,128,0.05)] hover:bg-[purple] hover:text-[#fff] my-2">
                            <div className="">
                                <div className="flex justify-center py-6 pt-[50px]">
                                    <img src={soffer2} alt="" />
                                </div>
                                <div className="">
                                    <h2 className='text-[22px] font-josefin text-center'>24/7 Support</h2>
                                    <p className='text-[16px] font-Lato text-center py-4 px-4 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        . Massa purus gravida.</p>
                                </div>
                            </div>
                        </div>

                        <div className=" h-[320px] bg-[rgba(128,128,128,0.05)] hover:bg-[purple] hover:text-[#fff]  my-2">
                            <div className="">
                                <div className="flex justify-center py-6 pt-[50px]">
                                    <img src={soffer3} alt="" />
                                </div>
                                <div className="">
                                    <h2 className='text-[22px] font-josefin text-center'>24/7 Support</h2>
                                    <p className='text-[16px] font-Lato text-center py-4 px-4 leading-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        . Massa purus gravida.</p>
                                </div>
                            </div>
                        </div>


                        <div className=" h-[320px] bg-[rgba(128,128,128,0.05)] hover:bg-[purple] hover:text-[#fff] my-2">
                            <div className="">
                                <div className="flex justify-center py-6 pt-[50px]">
                                    <img src={soffer4} alt="" />
                                </div>
                                <div className="">
                                    <h2 className='text-[22px] font-josefin text-center'>24/7 Support</h2>
                                    <p className='text-[16px] font-Lato text-center py-4 px-4 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                        . Massa purus gravida.</p>
                                </div>
                            </div>
                        </div>


                    </div>

        </Container>
    </section>
    </>
  )
}

export default Offer





