import React, { use, useState } from 'react'
import Container from './Container'
import Hekto from "../assets/Hekto.png"
import { FaBars, FaSearch } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = () => {

    let [menu, setmenu] = useState(false)

    let handlebar = ()=>{

        setmenu(!menu)
        
    }

  return (
    <>
        <section>
            <Container>
                <div className="flex items-center py-2">
                    <div className="w-1/6">
                        <div className="">
                            <img src={Hekto} alt="" />
                        </div>
                    </div>
                    <div className="w-3/6 px-2 relative">
                        <div className="">
                            <ul className={`sm:text-center lg:flex lg:static items-center gap-x-6 flex-wrap duration-500 ease-in-out ${menu == true ? "bg-[red] absolute top-[20px] left-0 w-full py-2 z-[999]" : " absolute top-[20px] left-[-500px] w-full py-2"}`}>
                                <Link to="/">
                                <li className='text-[16px] font-Lato text-[#0D0E43] hover:text-[#FB2E86] cursor-pointer'>Home</li>
                                </Link>
                                <li className='text-[16px] font-Lato text-[#0D0E43] hover:text-[#FB2E86] cursor-pointer'>Pages</li>
                                <Link to="/product">
                                <li className='text-[16px] font-Lato text-[#0D0E43] hover:text-[#FB2E86] cursor-pointer'>Products</li>
                                </Link>
                                <li className='text-[16px] font-Lato text-[#0D0E43] hover:text-[#FB2E86] cursor-pointer'>Blog </li>
                                <li className='text-[16px] font-Lato text-[#0D0E43] hover:text-[#FB2E86] cursor-pointer'>Shop</li>
                                <li className='text-[16px] font-Lato text-[#0D0E43] hover:text-[#FB2E86] cursor-pointer'>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-2/6">
                        <div className="lg:justify-end relative">
                           
                            <input type="search" className='w-full py-2 bg-[#D9D9D9] outline-none pl-2'/>
                          
                            <div className="bg-[#FB2E86] h-[40px] w-[40px] pt-2 absolute top-0 right-0">
                                <FaSearch className='text-[#fff] text-[20px] mx-auto'/>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 lg:hidden" onClick={handlebar}>
                        {menu == true ?  <RxCross2 /> : <FaBars />}
                    </div>
                </div>
            </Container>
        </section>
    </>
  )
}

export default Navbar