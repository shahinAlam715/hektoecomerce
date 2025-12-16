import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import { FaPlus, FaRegWindowMinimize } from 'react-icons/fa'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, productRemove } from '../Slice/CountSlice'
import { ImCross } from 'react-icons/im'

const Cart = () => {

    let data = useSelector((state) => state.product.carItem)

    let { totallprice, totalquantity } = data.reduce((acc, item) => {

        acc.totallprice += item.price * item.quntity
        acc.totalquantity += item.quntity

        return acc;

    }, { totallprice: 0, totalquantity: 0 })



    let dispatch = useDispatch()

    let handleincrement = (i) => {

        dispatch(increment(i))

    }

    let handledecrement = (i) => {

        dispatch(decrement(i))


    }

    let handleRemove = (i) => {
        dispatch(productRemove(i))
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


            {data.length > 0 ?
                <section className='mt-[64px]'>
                    <Container>
                        <div className="">
                            <div className="grid grid-cols-12 my-4">
                                <div className="col-span-3">
                                    <h2 className='text-[20px] text-[#1D3178] font-Josefin font-bold'>Product</h2>
                                </div>
                                <div className="col-span-2">
                                    <h2 className='text-[20px] text-[#1D3178] text-center font-Josefin font-bold'>Price</h2>
                                </div>
                                <div className="col-span-2">
                                    <h2 className='text-[20px] text-[#1D3178] text-center font-Josefin font-bold'>Quantity</h2>
                                </div>
                                <div className="col-span-2">
                                    <h2 className='text-[20px] text-[#1D3178] text-center font-Josefin font-bold'>Total</h2>
                                </div>
                                <div className="col-span-3">
                                    <h2 className='text-[20px] text-[#1D3178] text-center font-Josefin font-bold'>Cart Totals</h2>
                                </div>
                            </div>

                            <div className="grid grid-cols-12 my-[64px]">
                                <div className="col-span-9">
                                    {data.map((item, i) => (
                                        <div className="grid grid-cols-12 items-center my-8">
                                            <div className="col-span-5">
                                                <div className="grid grid-cols-12 items-center gap-x-3">
                                                    <div className="col-span-5 bg-[#8080805e] relative">
                                                        <img src={item.thumbnail} alt="" />
                                                        <div className="absolute top-[-10px] right-[-15px]" onClick={() => handleRemove(i)}>
                                                            <div className="px-2 py-2 w-[33px] rounded-full bg-[#000000]">
                                                                <ImCross className='text-[#fff]' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-span-7">
                                                        <h2>{item.title}</h2>
                                                        <h4 className='my-2'>{item.id}</h4>
                                                        <h5>{item.category}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <div className="">
                                                    <h2 className='ml-1'>{item.price}</h2>
                                                </div>
                                            </div>
                                            <div className="col-span-3">
                                                <div className="flex mx-2 gap-x-3">
                                                    <div className="border-1 h-[40px] w-[40px]" onClick={() => handleincrement(i)}>
                                                        <FaPlus className='mx-auto mt-3' />
                                                    </div>
                                                    <div className="border-1 h-[40px] w-[40px]">
                                                        <h2 className='text-center leading-[40px] text-[20px]'>{item.quntity}</h2>
                                                    </div>
                                                    <div className="border-1 h-[40px] w-[40px]" onClick={() => handledecrement(i)}>
                                                        <FaRegWindowMinimize className='mx-auto mt-1.5' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-2">
                                                <div className="">
                                                    <h2 className='ml-[25%]'>{(item.price * item.quntity).toFixed(2)}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    <div className="flex justify-between px-4">
                                        <div className="">
                                            <button className='bg-[#FB2E86] text-[16px] font-Josefin text-[#fff] h-[50px] w-[150px] rounded-[2px]'>Update Curt</button>
                                        </div>
                                        <div className="">
                                            <button className='bg-[#FB2E86] text-[16px] font-Josefin text-[#fff] h-[50px] w-[150px] rounded-[2px]'>Clear Curt</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-3 mt-8">
                                    <div className="bg-[#F4F4FC] px-4 py-2 rounded-[10px] h-[300px] w-full">
                                        <div className="flex justify-between items-center mt-[30px]">
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
                                                <h2 className='text-[18px] font-Josefin text-[#15245E]'>{(totallprice).toFixed(2)}</h2>
                                            </div>
                                        </div>
                                        <hr className='text-[#E8E6F1] my-2' />

                                        <div className=" flex items-center gap-x-3 mt-8">
                                            <div className="h-[30px] w-[30px] bg-[#19D16F] rounded-full pt-1 ">
                                                <MdOutlineKeyboardArrowDown className='text-[24px] mx-auto text-[#fff]' />
                                            </div>
                                            <div className="">
                                                <h2 className='text-[12px] font-Lato text-[#8A91AB] '>Shipping & taxes calculated at checkout</h2>
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <Link to="/checkout">
                                            <button className='text-[16px] font-Lato text-[#fff] bg-[#19D16F] h-[50px] rounded-[3px] w-full'>Proceed To Checkout</button>
                                            </Link>
                                        </div>


                                    </div>


                                    <div className="">
                                        <div className=" mt-[30px]">
                                            <h2 className='text-[#1D3178] text-[20px] font-Josefin font-bold text-center'>Calculate Shopping</h2>
                                        </div>
                                        <div className="mt-[30px] bg-[#F4F4FC] px-4 py-2 rounded-[10px] h-[300px] w-full">

                                            <div className="">
                                                <div className="">
                                                    <h3 className='mt-[30px] text-[14px] font-Josefin text-[#C5CBE3] my-2'>Bangladesh</h3>
                                                </div>
                                                <hr className='text-[#C5CBE3]' />
                                            </div>
                                            <div className="">
                                                <div className="">
                                                    <h3 className='mt-[30px] text-[14px] font-Josefin text-[#C5CBE3] my-2'>Mirpur Dhaka - 1200</h3>
                                                </div>
                                                <hr className='text-[#C5CBE3]' />
                                            </div>
                                            <div className="">
                                                <div className="">
                                                    <h3 className='mt-[30px] text-[14px] font-Josefin text-[#C5CBE3] my-2'>Postal Code</h3>
                                                </div>
                                                <hr className='text-[#C5CBE3]' />
                                            </div>

                                            <div className="mt-[40px]">
                                                <button className='py-2 px-6 rounded-[2px] bg-[#FB2E86] text-[#fff]'>Calculate Shiping</button>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </Container>
                </section>
                : <div className="w-full h-[400px] bg-[red]">
                    <h2 className='text-[#fff] text-center leading-[400px] text-[70px] font-Josefin'>No Data</h2>
                </div>
            }

        </>
    )
}

export default Cart
