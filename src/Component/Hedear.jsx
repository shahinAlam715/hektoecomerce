import React, { useContext } from 'react'
import Container from './Container'
import { IoIosArrowDown, IoMdMail } from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'

const Hedear = () => { 
  return (
    <section className='bg-[#7E33E0] py-2'>
        <Container>
            <div className="lg:flex justify-between items-center flex-wrap">

            <div className="grid grid-cols-1 lg:flex gap-x-6 items-center">
                <div className="">
                    <div className="sm:justify-center flex items-center gap-x-2">
                        <IoMdMail className='text-[#F1F1F1]'/>
                        <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>mhhasanul@gmail.com</h2>
                    </div>
                </div>
                <div className="">
                     <div className="sm:justify-center sm:py-2 flex items-center gap-x-2">
                        <LuPhoneCall className='text-[#F1F1F1]'/>
                        <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>(12345)67890</h2>
                    </div>
                </div>
            </div>

            <div className="sm:justify-center flex items-center gap-x-4">
                    <div className="flex items-center gap-x-2">
                        <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>English</h2>
                        <IoIosArrowDown className='text-[#F1F1F1]'/>
                    </div>
                     <div className="flex items-center gap-x-2">
                        <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>USD</h2>
                        <IoIosArrowDown className='text-[#F1F1F1]'/>
                    </div>
                     <div className="flex items-center gap-x-2">
                        <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>Login</h2>
                        <FaUser className='text-[#F1F1F1]'/>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>Wishlist</h2>
                       <FaHeart className='text-[#F1F1F1]'/>
                    </div>
                    <div className="pl-4">
                        <FaShoppingCart className='text-[#F1F1F1] text-[20px]'/>
                    </div>

            </div>

            </div>
        </Container>
    </section>
  )
}

export default Hedear