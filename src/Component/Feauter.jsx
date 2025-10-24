import React, { useContext } from 'react'
import Container from './Container'
import { ApiData } from './ContextApi'
import { PiShoppingCartThin } from 'react-icons/pi'
import { CiHeart } from 'react-icons/ci'
import { FaSearchPlus } from 'react-icons/fa'
import Slider from 'react-slick'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'


function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className="bg-[green] text-[#fff] absolute top-[50%] right-[20px] z-100 h-[30px] w-[30px] rounded-full"
      onClick={onClick}
    > <IoIosArrowForward  className='text-[20px] mx-auto mt-[50%] translate-y-[-50%]'/></div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className="bg-[green] text-[#fff] w-[30px] h-[30px] rounded-full absolute top-[50%] left-[20px] z-100"
      onClick={onClick}
    > <IoIosArrowBack className="absolute top-[50%] left-[10%] translate-y-[-50%] text-[20px]"/>
</div>
  );
}

const Feauter = () => {

    let data = useContext(ApiData)
    
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

   
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
    <section className='my-[64px]'>
        <Container>
            <div className="">
                <h2 className='font-Josefin text-[42px] font-bold text-center text-[#1A0B5B]'>Featured Products</h2>
            </div>
            <div className="mt-[64px]">
            <Slider {...settings}>
                {data.map((item)=>(
                <div className="bg-[#F6F7FB]">
                    <div className="">
                        <div className="my-2 mx-2 flex gap-x-2">
                            <div className="h-[30px] w-[30px] rounded-full flex justify-center hover:bg-[#808080ba]">
                                <PiShoppingCartThin className='text-[20px] mt-1 text-[#1389FF] hover:text-[#151875]'/>
                            </div>
                              <div className="h-[30px] w-[30px] rounded-full flex justify-center hover:bg-[#808080ba]">
                                <CiHeart className='text-[20px] mt-1 text-[#1389FF] hover:text-[#151875]'/>
                            </div>
                              <div className="h-[30px] w-[30px] rounded-full flex justify-center hover:bg-[#808080ba]">
                                <FaSearchPlus className='text-[20px] mt-1 text-[#1389FF] hover:text-[#151875]'/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center py-4">
                      <Link to="/product">
                    <img src={item.thumbnail} alt="" />
                      </Link>
                    </div>
                    <div className="text-center my-2">
                        <button className='text-[12px] font-Josefin font-medium bg-[#08D15F] py-2 px-4 text-[#fff] rounded-[2px] hover:text-[black] hover:bg-[#fff]'>View Details</button>
                    </div>
                    <div className="bg-[#ffffffbc] hover:bg-[#151875] py-4 group">
                        <h2 className='text-[#FB2E86] text-[18px] font-Lato font-bold text-center py-2 group-hover:!text-[#fff]'>Cantilever chair</h2>
                        <div className="flex gap-x-2 justify-center py-2">
                            <div className="h-[4px] w-[14px] bg-[#05E6B7] rounded-[10px]"></div>
                            <div className="h-[4px] w-[14px] bg-[#F701A8] rounded-[10px]"></div>
                            <div className="h-[4px] w-[14px] bg-[#00009D] rounded-[10px] group-hover:!bg-[yellow]"></div>
                        </div>
                        <h3 className='font-Josefin font-medium text-[#151875] text-[14px] text-center py-2 group-hover:!text-[#fff]'>Code - Y523201</h3>
                        <h4 className='font-Lato font-medium text-[#151875] text-[14px] text-center group-hover:!text-[#fff]'>$42.00</h4>
                    </div>
                </div>
                ))}
            </Slider>
            </div>
        </Container>
    </section>
   </>
  )
}

export default Feauter