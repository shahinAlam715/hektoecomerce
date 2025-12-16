import React, { use, useContext, useState } from 'react'
import Container from './Container'
import Hekto from "../assets/Hekto.png"
import { FaBars, FaSearch } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import { ApiData } from './ContextApi'

const Navbar = () => {

    let info = useContext(ApiData)
    let [menu, setmenu] = useState(false)
    let [search, setsearch] = useState("")
    let [searchfilter, setsearchfilter] = useState([])
    let navigate = useNavigate()



    let handlebar = () => {

        setmenu(!menu)

    }

    let handlesearch = (e) => {
        setsearch(e.target.value);

        if (e.target.value == "") {
            setsearchfilter([])
        } else {

            let Filtersearch = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))

            setsearchfilter(Filtersearch);
        }



    }

    let handlecartpage = (item) => {
        navigate(`/product/${item.id}`);
        setsearchfilter([])
        setsearch("")
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

                                <input type="search" onChange={handlesearch} value={search} className='w-full py-2 bg-[#D9D9D9] outline-none pl-2' />
                                <div className="">

                                </div>

                                {searchfilter.length > 0 &&
                                <div className="absolute z-[999] bg-[grey] w-full px-4 h-[400px] overflow-y-scroll">

                                    {searchfilter.map((item) => (
                                        <div className="flex justify-between flex-wrap cursor-pointer my-4" onClick={() => handlecartpage(item)}>
                                            <div className="">
                                                <h2 className='py-2'>{item.title}</h2>
                                            </div>
                                            <div className="">
                                                <img className='h-[50px] w-[60px]' src={item.thumbnail} alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                }


                                <div className="bg-[#FB2E86] h-[40px] w-[40px] pt-2 absolute top-0 right-0">
                                    <FaSearch className='text-[#fff] text-[20px] mx-auto' />
                                </div>
                            </div>
                        </div>

                        <div className="px-4 lg:hidden" onClick={handlebar}>
                            {menu == true ? <RxCross2 /> : <FaBars />}
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Navbar