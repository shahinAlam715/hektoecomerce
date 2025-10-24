import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import { FaPlus, FaRegWindowMinimize } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../Slice/CountSlice'

const Cart = () => {

    let data = useSelector((state) => state.product.carItem)

    let { totallprice, totalquantity } = data.reduce((acc, item) => {

        acc.totallprice += item.price * item.quntity
        acc.totalquantity += item.quntity

        return acc;

    }, { totallprice: 0, totalquantity: 0 })



    let dispatch = useDispatch()

    let handleincrement = (i)=>{
        dispatch(increment(i))
    }



    return (
        <>
            <section className='bg-[#F6F5FF] py-[64px]'>
                <Container>
                    <div className="">
                        <h2 className='text-[36px] font-Josefin font-bold text-[#101750] py-4'>Shop Grid Default</h2>
                        <div className="flex items-center py-2 gap-x-2">
                            <Link to="/productdetails">
                                <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>ProductDetails .</h3>
                            </Link>
                            <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Pages .</h3>
                            <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Shop Grid Default</h3>
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="grid grid-cols-12 my-[64px]">

                        <div className="col-span-3">
                            <h2 className='text-[20px] text-[#1D3178] font-Josefin font-bold'>Product</h2>
                            {data.map((item, i) => (
                                <div className="grid grid-cols-12 gap-x-2 mt-[64px]">
                                    <div className="col-span-4 bg-[purple]">
                                        <img src={item.thumbnail} alt="" />
                                    </div>
                                    <div className="col-span-8">
                                        <h2>{item.title}</h2>
                                        <h2 className='my-2'>{item.id}</h2>
                                        <h2>{item.tags}</h2>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-1">
                            <h2 className='text-[20px] text-[#1D3178] font-Josefin font-bold'>Price</h2>
                            {data.map((item, i) => (
                                <div className="mt-[110px]">
                                    <h2 className='text-[14px] font-Josefin text-[#15245E]'>{item.price}</h2>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-2">
                            <h2 className='text-[20px] text-[#1D3178] font-Josefin font-bold'>Quantity</h2>
                            {data.map((item, i) => (
                                <div className="flex gap-x-2 mt-[120px]">
                                    <div className="border-1 h-[30px] w-[40px] text-center leading-[0px] pt-1" onClick={()=>handleincrement(i)}><FaPlus className='text-[18px] mx-auto' /></div>
                                    <div className="border-1 h-[30px] w-[40px] text-center leading-[30px] text-[18px]">{item.quntity}</div>
                                    <div className="border-1 h-[30px] w-[40px] text-center leading-[0px]"><FaRegWindowMinimize className='text-[18px] mx-auto' /></div>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-2">
                            <h2 className='text-[20px] text-[#1D3178] font-Josefin font-bold'>Total</h2>
                            {data.map((item, i) => (
                                <div className="mt-[115px]">
                                    <h2 className='text-[14px] font-Josefin text-[#15245E]'>{item.price * item.quntity}</h2>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-4">
                            <h2 className='text-[20px] text-[#1D3178] font-Josefin font-bold text-center'>Cart Totals</h2>
                           
                                <div className="px-[20px] py-[20px] bg-[#F4F4FC] mt-[64px]">
                                    <div className="flex justify-between mt-8">
                                        <div className="">
                                            <h2 className='text-[18px] text-[#1D3178] font-Lato font-bold'>Subtotals :</h2>
                                        </div>
                                        <div className="">
                                            <h2 className='text-[18px] font-Josefin text-[#15245E]'>{totalquantity}</h2>
                                        </div>
                                    </div>
                                    <hr className='text-[#E8E6F1] my-2' />

                                    <div className="flex justify-between mt-8">
                                        <div className="">
                                            <h2 className='text-[18px] text-[#1D3178] font-Lato font-bold'>Totals :</h2>
                                        </div>
                                        <div className="">
                                            <h2 className='text-[18px] font-Josefin text-[#15245E]'>{totallprice}</h2>
                                        </div>
                                    </div>
                                    <hr className='text-[#E8E6F1] my-2' />

                                    <div className=" flex items-center gap-x-3 mt-8">
                                        <div className="h-[30px] w-[30px] bg-[#19D16F] rounded-full pt-1 ">
                                            <MdOutlineKeyboardArrowDown className='text-[24px] mx-auto text-[#fff]' />
                                        </div>
                                        <div className="">
                                            <h2 className='text-[14px] font-Lato text-[#8A91AB] '>Shipping & taxes calculated at checkout</h2>
                                        </div>
                                    </div>

                                    <div className="mt-8">
                                        <button className='text-[16px] font-Lato text-[#fff] bg-[#19D16F] h-[50px] rounded-[3px] w-full'>Proceed To Checkout</button>
                                    </div>

                                </div>
                          
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Cart