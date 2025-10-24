import React, { useEffect, useState } from 'react'
import Container from './Container'
import { PiShoppingCartThin } from 'react-icons/pi'
import { CiHeart } from 'react-icons/ci'
import { FaSearchPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Post = ({ allpage, filltercate, listitem}) => {

  
  

  let [show, setshow] = useState(true)

  let [filtershow, setfiltershow] = useState([])

  useEffect(() => {
    let showslice = filltercate.slice(0, 8)
    setfiltershow(showslice);

  }, [filltercate])

  let handleshowall = () => {
    setfiltershow(filltercate)
    setshow(false)
  }

  let handlenomore = () => {
    let showslice = filltercate.slice(0, 8)
    setfiltershow(showslice);
    setshow(true)

  }



  return (
    <>
      <section className='mt-[64px]'>
        <Container>

          <div className="">


            {filltercate.length > 0 ?


              <div className="">

                <div className="grid sm:grid-cols-2 lg:grid-cols-4">
                  {filtershow.map((item) => (

                    <div className="bg-[#F6F7FB] mt-4 mx-3">
                      <div className="">
                        <div className="my-2 mx-2 flex gap-x-2">
                          <div className="h-[30px] w-[30px] rounded-full flex justify-center hover:bg-[#808080ba]">
                            <PiShoppingCartThin className='text-[20px] mt-1 text-[#1389FF] hover:text-[#151875]' />
                          </div>
                          <div className="h-[30px] w-[30px] rounded-full flex justify-center hover:bg-[#808080ba]">
                            <CiHeart className='text-[20px] mt-1 text-[#1389FF] hover:text-[#151875]' />
                          </div>
                          <div className="h-[30px] w-[30px] rounded-full flex justify-center hover:bg-[#808080ba]">
                            <FaSearchPlus className='text-[20px] mt-1 text-[#1389FF] hover:text-[#151875]' />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center py-4">
                        <Link to={`/product/${item.id}`}>
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
                        <h4 className='font-Lato font-medium text-[#151875] text-[14px] text-center group-hover:!text-[#fff]'>${item.price}</h4>
                      </div>
                    </div>

                  ))}
                </div>


                <div className="my-4">
                  {filltercate.length > 8 && show ? <h2 className='border-1 py-2 w-[150px] bg-[#F6F7FB] text-[#262626]
                   text-center rounded-[10px] cursor-pointer hover:bg-[#151875] hover:text-[#fff]' onClick={handleshowall}>Show All</h2> : filltercate.length > 8 && <h2 className='border-1 py-2 w-[150px] bg-[#F6F7FB] text-[#262626]
                   text-center rounded-[10px] cursor-pointer hover:bg-[#151875] hover:text-[#fff]' onClick={handlenomore}>No more</h2>}

                </div>


              </div>


              :
              <div className={` ${listitem == "active" ? "grid grid-cols-1 w-[24%]" : "grid grid-cols-4"}`}>
                {allpage.map((item) => (
                  <div className="bg-[#F6F7FB] mt-4 mx-3">
                    <div className="">
                      <div className="my-2 mx-2 flex gap-x-2">
                        <div className="h-[30px] w-[30px] rounded-full flex justify-center hover:bg-[#808080ba]">
                          <PiShoppingCartThin className='text-[20px] mt-1 text-[#1389FF] hover:text-[#151875]' />
                        </div>
                        <div className="h-[30px] w-[30px] rounded-full flex justify-center hover:bg-[#808080ba]">
                          <CiHeart className='text-[20px] mt-1 text-[#1389FF] hover:text-[#151875]' />
                        </div>
                        <div className="h-[30px] w-[30px] rounded-full flex justify-center hover:bg-[#808080ba]">
                          <FaSearchPlus className='text-[20px] mt-1 text-[#1389FF] hover:text-[#151875]' />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center py-4">
                         <Link to={`/product/${item.id}`}>
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
                      <h4 className='font-Lato font-medium text-[#151875] text-[14px] text-center group-hover:!text-[#fff]'>${item.price}</h4>
                    </div>
                  </div>
                ))}

              </div>
            }


          </div>

        </Container>
      </section>
    </>
  )
}

export default Post