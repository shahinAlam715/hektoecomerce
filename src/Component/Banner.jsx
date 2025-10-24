import React from 'react'
import Container from './Container'
import banlefimg from "../assets/banlefimg.png"
import banrigimg from "../assets/banrigimg.png"
import round1 from "../assets/round1.png"
import round2 from "../assets/round2.png"
import offer from "../assets/offer.png"
import Slider from 'react-slick'

const Banner = () => {

 const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    arrows:false
  };
  return (
   <>
   <div className="slider-container">

        <Slider {...settings}>
   
    <section className='bg-[#F2F0FF] py-3 w-full'>

       
            <div className="grid grid-cols-12 px-4 sm:pb-6">
      <div className="col-span-2">
            <img src={banlefimg} alt="" />
        </div>
                <div className="col-span-5 sm:mt-[100px] md:mt-[120px] lg:mt-[160px] xl:mt-[180px] 2xl:mt-[200px]">
                    <div className="">
                        <h5 className='font-Lato  text-[#FB2E86] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>Best Furniture For Your Castle....</h5>
                        <h2 className='font-Josefin text-[#000000] font-bold py-2 sm:text-[16px] md:text-[20px] lg:text-[28px] xl:text-[36px] 2xl:text-[48px]'>New Furniture Collection
                            Trends in 2020</h2>
                        <p className='font-Lato font-bold text-[#8A8FB9] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] 2xl:pr-[50px]'>Lorem ipsum dolor sit amet,
                             consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.</p>
                        <button className='bg-[#FB2E86] text-[#fff] my-3 py-2 px-4 hover:bg-[#fff] hover:text-[black]'>Shop Now</button>
                    </div>
                </div>
                <div className="col-span-5">

                    <div className="relative">
                        <div className="sm:mt-[50px]">
                            <img src={round1} alt=""/>
                        </div>
                         <div className="absolute top-[0px] left-[0px] sm:mt-[30px]">
                            <img src={round2} alt="" />
                        </div>
                        <div className="absolute top-[0px] left-[0px] sm:mt-[40px]">
                            <img src={banrigimg} alt="" />
                        </div>
                        <div className="absolute top-0  right-0">
                            <img className='sm:w-[70px] lg:w-[100px] xl:w-[120px] 2xl:w-full' src={offer} alt="" />
                        </div>
                    </div>
                
                </div>
            </div>
       
    </section>


     <section className='bg-[#F2F0FF] py-3 w-full'>

       
            <div className="grid grid-cols-12 px-4 sm:pb-6">
      <div className="col-span-2">
            <img src={banlefimg} alt="" />
        </div>
                <div className="col-span-5 sm:mt-[100px] md:mt-[120px] lg:mt-[160px] xl:mt-[180px] 2xl:mt-[200px]">
                    <div className="">
                        <h5 className='font-Lato  text-[#FB2E86] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px]'>Best Furniture For Your Castle....</h5>
                        <h2 className='font-Josefin text-[#000000] font-bold py-2 sm:text-[16px] md:text-[20px] lg:text-[28px] xl:text-[36px] 2xl:text-[48px]'>New Furniture Collection
                            Trends in 2020</h2>
                        <p className='font-Lato font-bold text-[#8A8FB9] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[24px] 2xl:text-[28px] 2xl:pr-[50px]'>Lorem ipsum dolor sit amet,
                             consectetur adipiscing elit. Magna in est adipiscing
                            in phasellus non in justo.</p>
                        <button className='bg-[#FB2E86] text-[#fff] my-3 py-2 px-4 hover:bg-[#fff] hover:text-[black]'>Shop Now</button>
                    </div>
                </div>
                <div className="col-span-5">

                    <div className="relative">
                        <div className="sm:mt-[50px]">
                            <img src={round1} alt=""/>
                        </div>
                         <div className="absolute top-[0px] left-[0px] sm:mt-[30px]">
                            <img src={round2} alt="" />
                        </div>
                        <div className="absolute top-[0px] left-[0px] sm:mt-[40px]">
                            <img src={banrigimg} alt="" />
                        </div>
                        <div className="absolute top-0  right-0">
                            <img className='sm:w-[70px] lg:w-[100px] xl:w-[120px] 2xl:w-full' src={offer} alt="" />
                        </div>
                    </div>
                
                </div>
            </div>
       
    </section>

     
        </Slider>
   </div>
   </>
  )
}

export default Banner