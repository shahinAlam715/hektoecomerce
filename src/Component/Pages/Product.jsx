import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import { IoGridSharp } from 'react-icons/io5'
import { FaThList } from 'react-icons/fa'
import Post from '../Post'
import { ApiData } from '../ContextApi'
import Pagination from '../Pagination'
import { IoIosArrowDown } from 'react-icons/io'

export const Product = () => {

    let info = useContext(ApiData)

    let [perpage, setperpage] = useState(8)
    let [currentpage, setcurrentpage] = useState(1)
    let lastpage = perpage * currentpage
    let firstpage = lastpage - perpage


     // category  start//

    let [ccategory, setccategory] = useState([])
    let [filltercate, setfilltercate] = useState([])
    let [cate, setcate] = useState(false)
    let cateref = useRef()

    useEffect(() => {
        setccategory([...new Set(info.map((item) => item.category))])
    }, [info])

    useEffect(() => {
        document.addEventListener("click", (e) => {

            if (cateref.current && cateref.current.contains(e.target)) {
                setcate(!cate)
            }else{
                setcate(false)
            }
        })



    },[cateref])


    let handlecate = (citem) => {

        let Filtercate = info.filter((item) => item.category == citem)

        setfilltercate(Filtercate);


    }

    
   
    

    // category  end//



    // pagination  start//

    let pageNumber = []

    for (let i = 0; i < Math.ceil(info.length / perpage); i++) {

        pageNumber.push(i)

    }

    let paginate = (index) => {

        setcurrentpage(index + 1)

    }

    let prev = () => {

        if (1 < currentpage) {
            setcurrentpage((state) => state - 1)
        }
    }

    let next = () => {
        if (currentpage < pageNumber.length) {
            setcurrentpage((state) => state + 1)
        }
    }

    // pagination  end//


    // per page  start//

    let allpage = info.slice(firstpage, lastpage)


    let handleperpagechang = (e) => {
        setperpage(e.target.value);

    }

    // per page end//

    // listgird  start//

    let [listitem, setlistitem] = useState("")

    let handlegrid = ()=>{
       setlistitem("");
        
    }

    let handlelist = ()=>{
       
        setlistitem("active");
        
    }
   
    

     // listgird  end//



    return (
        <>
            <section className='bg-[#F6F5FF] py-[64px]'>
                <Container>
                    <div className="">
                        <h2 className='text-[36px] font-Josefin font-bold text-[#101750] py-4'>Shop Grid Default</h2>
                        <div className="flex items-center py-2 gap-x-2">
                            <Link to="/">
                                <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Home .</h3>
                            </Link>
                            <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Pages .</h3>
                            <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Shop Grid Default</h3>
                        </div>
                    </div>
                </Container>
            </section>
            <section className='mt-[64px]'>
                <Container>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-12 mx-4">
                        <div className="col-span-4">
                            <h2 className='text-[#151875] text-[22px] font-bold font-Josefin'>Ecommerce Acceories & Fashion item </h2>
                            <p className='text-[#8A8FB9] text-[12px] font-Lato font-normal pt-[10px]'>About 9,620 results (0.62 seconds)</p>
                        </div>
                        <div className="col-span-2 pl-[40px] sm:my-[20px] lg:my-[0px]">
                            <label htmlFor="" className='flex'>
                                <h2>Per Page :</h2>
                                <select name="" id="" className='border-1 px-4 py-1 outline-none ml-2' onChange={handleperpagechang}>
                                    <option value="6">6</option>
                                    <option value="12">12</option>
                                    <option value="18">18</option>
                                </select>
                            </label>
                        </div>
                        <div className="col-span-2 flex gap-x-2">
                            <div className="flex">
                                <h2>Sort By :</h2>
                            </div>

                            <div className="border-1 h-[30px] w-auto relative" ref={cateref}>
                                <h3 className='px-8 cursor-pointer'>Category</h3>
                                <div className="absolute top-[5px] right-0">
                                    <IoIosArrowDown className='text-[20px]' />
                                </div>
                                {cate &&
                                    <div className="absolute top-[29px] left-0 w-full">
                                        <ul className='border-1 text-center py-2'>
                                           
                                            {ccategory.map((item) => (
                                                <li onClick={() => handlecate(item)}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                }
                            </div>


                        </div>

                        <div className="col-span-2">
                            <div className="flex items-center gap-x-2 pl-[50px]">
                                <h2>View :</h2>
                                <div className="flex gap-x-2 items-center">
                                <div className='bg-[#101750] p-2 text-[#fff]' onClick={handlegrid}>
                                    <IoGridSharp className='text-[24px]' />
                                </div>
                                    <div className="bg-[#101750] p-2 text-[#fff]" onClick={handlelist}>
                                    <FaThList className='text-[24px]' />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-span-2">
                            <div className="h-[30px] w-full border-1"></div>
                        </div>

                    </div>

                    <Post allpage={allpage} filltercate={filltercate}  listitem={listitem}/>

                    <Pagination pageNumber={pageNumber} paginate={paginate} currentpage={currentpage} prev={prev} next={next} />
                </Container>
            </section>
        </>
    )
}
