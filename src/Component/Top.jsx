import React from 'react'
import Container from './Container'
import topcate from "../assets/topcate.png"
import Slider from 'react-slick'


const Top = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
   

   
     responsive: [
        {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
}

    return (
        <>
            <section>
                <Container>
                    <div className="mt-[50px]">
                        <h2 className='text-[42px] text-[#1A0B5B] font-Josefin font-bold text-center'>Top Categories</h2>
                    </div>

                    <div className="my-[64px]">
                        <Slider {...settings}>

                        <div className="">
                            <div className="h-[269px] w-[269px] hover:bg-[#151875] bg-transparent rounded-full">
                                <div className="h-[269px] w-[269px] bg-[#F6F7FB] rounded-full ml-4">
                                    <div className="flex justify-center pt-[20px]">
                                        <img src={topcate} alt="" />
                                    </div>
                                    <div className="text-center my-2">
                                        <button className='text-[12px] font-Josefin font-medium bg-[#08D15F] py-2 px-4 text-[#fff]
                                     rounded-[2px] hover:text-[black] hover:bg-[#fff]'>View Shop</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <h2 className='text-[20px] text-[#151875] font-Josefin font-normal text-center'>Mini LCW Chair</h2>
                                <h3 className='text-[16px] text-[#151875] font-Josefin font-bold text-center py-2' >$56.00</h3>
                            </div>
                        </div>

                        <div className="">
                            <div className="h-[269px] w-[269px] hover:bg-[#151875] bg-transparent rounded-full">
                                <div className="h-[269px] w-[269px] bg-[#F6F7FB] rounded-full ml-4">
                                    <div className="flex justify-center pt-[20px]">
                                        <img src={topcate} alt="" />
                                    </div>
                                    <div className="text-center my-2">
                                        <button className='text-[12px] font-Josefin font-medium bg-[#08D15F] py-2 px-4 text-[#fff]
                                     rounded-[2px] hover:text-[black] hover:bg-[#fff]'>View Shop</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <h2 className='text-[20px] text-[#151875] font-Josefin font-normal text-center'>Mini LCW Chair</h2>
                                <h3 className='text-[16px] text-[#151875] font-Josefin font-bold text-center py-2' >$56.00</h3>
                            </div>
                        </div>

                        <div className="">
                            <div className="h-[269px] w-[269px] hover:bg-[#151875] bg-transparent rounded-full">
                                <div className="h-[269px] w-[269px] bg-[#F6F7FB] rounded-full ml-4">
                                    <div className="flex justify-center pt-[20px]">
                                        <img src={topcate} alt="" />
                                    </div>
                                    <div className="text-center my-2">
                                        <button className='text-[12px] font-Josefin font-medium bg-[#08D15F] py-2 px-4 text-[#fff]
                                     rounded-[2px] hover:text-[black] hover:bg-[#fff]'>View Shop</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <h2 className='text-[20px] text-[#151875] font-Josefin font-normal text-center'>Mini LCW Chair</h2>
                                <h3 className='text-[16px] text-[#151875] font-Josefin font-bold text-center py-2' >$56.00</h3>
                            </div>
                        </div>


                        <div className="">
                            <div className="h-[269px] w-[269px] hover:bg-[#151875] bg-transparent rounded-full">
                                <div className="h-[269px] w-[269px] bg-[#F6F7FB] rounded-full ml-4">
                                    <div className="flex justify-center pt-[20px]">
                                        <img src={topcate} alt="" />
                                    </div>
                                    <div className="text-center my-2">
                                        <button className='text-[12px] font-Josefin font-medium bg-[#08D15F] py-2 px-4 text-[#fff]
                                     rounded-[2px] hover:text-[black] hover:bg-[#fff]'>View Shop</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <h2 className='text-[20px] text-[#151875] font-Josefin font-normal text-center'>Mini LCW Chair</h2>
                                <h3 className='text-[16px] text-[#151875] font-Josefin font-bold text-center py-2' >$56.00</h3>
                            </div>
                        </div>

                         <div className="">
                            <div className="h-[269px] w-[269px] hover:bg-[#151875] bg-transparent rounded-full">
                                <div className="h-[269px] w-[269px] bg-[#F6F7FB] rounded-full ml-4">
                                    <div className="flex justify-center pt-[20px]">
                                        <img src={topcate} alt="" />
                                    </div>
                                    <div className="text-center my-2">
                                        <button className='text-[12px] font-Josefin font-medium bg-[#08D15F] py-2 px-4 text-[#fff]
                                     rounded-[2px] hover:text-[black] hover:bg-[#fff]'>View Shop</button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <h2 className='text-[20px] text-[#151875] font-Josefin font-normal text-center'>Mini LCW Chair</h2>
                                <h3 className='text-[16px] text-[#151875] font-Josefin font-bold text-center py-2' >$56.00</h3>
                            </div>
                        </div>

                        </Slider>


                    </div>
                </Container>
            </section>
        </>
    )
}

export default Top


