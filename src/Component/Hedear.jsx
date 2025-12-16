import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { IoIosArrowDown, IoMdMail } from 'react-icons/io'
import { LuPhoneCall } from 'react-icons/lu'
import { FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { productRemove } from './Slice/CountSlice'

const Hedear = () => {

    let data = useSelector((state) => state.product.carItem)
    let dispatch = useDispatch()

    let handleremove = (i) => {
        dispatch(productRemove(i))

    }

    let [cartt, setcartt] = useState(false)
    let carttref = useRef()

    useEffect(()=>{
    
    document.addEventListener("click", (e) => {
        
        
        if (carttref.current && carttref.current.contains(e.target)) { 
            setcartt(!cartt)
        }else{
            setcartt(false)
        }
        
    })
        
    },[ cartt])



    return (
        <section className='bg-[#7E33E0] py-2'>
            <Container>
                <div className="lg:flex justify-between items-center flex-wrap">

                    <div className="grid grid-cols-1 lg:flex gap-x-6 items-center">
                        <div className="">
                            <div className="sm:justify-center flex items-center gap-x-2">
                                <IoMdMail className='text-[#F1F1F1]' />
                                <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>mhhasanul@gmail.com</h2>
                            </div>
                        </div>
                        <div className="">
                            <div className="sm:justify-center sm:py-2 flex items-center gap-x-2">
                                <LuPhoneCall className='text-[#F1F1F1]' />
                                <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>(12345)67890</h2>
                            </div>
                        </div>
                    </div>

                    <div className="sm:justify-center flex items-center gap-x-4">
                        <div className="flex items-center gap-x-2">
                            <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>English</h2>
                            <IoIosArrowDown className='text-[#F1F1F1]' />
                        </div>
                        <div className="flex items-center gap-x-2">
                            <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>USD</h2>
                            <IoIosArrowDown className='text-[#F1F1F1]' />
                        </div>
                        <div className="flex items-center gap-x-2">
                            <Link to="/myaccount">
                            <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>Login</h2>
                            </Link>
                            <FaUser className='text-[#F1F1F1]' />
                        </div>
                        <div className="flex items-center gap-x-2">
                            <h2 className='text-[16px] font-Josefin text-[#F1F1F1]'>Wishlist</h2>
                            <FaHeart className='text-[#F1F1F1]' />
                        </div>
                       
                        <div className="pl-4 relative" ref={carttref}>

                            {data.length > 0  && 
                                <div className="absolute top-[-10px] left-0 h-[20px] w-[20px] rounded-full bg-[#FB2E86] text-[#fff] text-center leading-[20px]">
                                    {data.length}
                                </div>
                            }

                            <div className="">
                                <FaShoppingCart className='text-[#F1F1F1] text-[20px]' />
                            </div>

                            
                              {cartt && data.length > 0 &&
                            <div className="absolute top-[38px] left-0 z-100">

                                {data.map((item, i) => (
                                    <div className="grid grid-cols-12 w-[400px] ml-[-200px] items-center bg-[grey]">
                                        <div className="col-span-4">
                                            <div className="">
                                                <img src={item.thumbnail} alt="" />
                                            </div>
                                        </div>
                                        <div className="col-span-6">
                                            <div className="">
                                                <h2>{item.title}</h2>
                                                <p>${item.price}</p>
                                            </div>
                                        </div>
                                        <div className="col-span-2">
                                            <div className="" onClick={() => handleremove(i)}>
                                                <RxCross2 />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <div className="">
                                    <div className="flex justify-between gap-x-4 ml-[-200px] py-2 px-2 bg-[grey]">
                                        <Link to="/cart">
                                            <button className='bg-[#FB2E86] text-[16px] font-Josefin text-[#fff] h-[50px] w-[150px] rounded-[2px]'>View Cart</button>
                                        </Link>
                                        <Link to="/checkout">
                                            <button className='bg-[#FB2E86] text-[16px] font-Josefin text-[#fff] h-[50px] w-[150px] rounded-[2px]'>CheckOut</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                              } 
                              
                           


                        </div> 

                    </div>

                </div>
            </Container>
        </section>
    )
}

export default Hedear