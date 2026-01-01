import React, { useEffect, useState } from 'react'
import Container from '../Container'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { IoStarHalfSharp, IoStarOutline, IoStarSharp } from 'react-icons/io5'
import { FaFacebookF, FaInstagram, FaRegHeart, FaTwitter } from 'react-icons/fa'
import update1 from "../../assets/update1.png"
import { RiInstagramFill } from 'react-icons/ri'
import { IoIosArrowBack, IoIosArrowForward, IoMdArrowRoundForward } from 'react-icons/io'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../Slice/CountSlice'
import Slider from 'react-slick'



const Productdetails = () => {

    //  Productdetails start //
    let productid = useParams()
    let [singleproduct, setsingleproduct] = useState([])
    
    console.log(singleproduct.rating);
    


    let getid = ()=>{
        axios.get(`https://dummyjson.com/products/${productid.id}`).then((response)=>{

            setsingleproduct(response.data);
            

        })
    }

    useEffect(()=>{
        getid()
    },[])

    let Clientrating = (rating)=> Array.from({ length: 5},(_, index)=>{
        let number = index + 0.5
        return(
            singleproduct.rating > index + 1 ?  <IoStarSharp  className='text-[24px] text-[gold]'/>
             : singleproduct.rating > number ?  <IoStarHalfSharp  className='text-[24px] text-[gold]'/>
             :  <IoStarOutline  className='text-[24px] text-[gold]'/>
        )

        
    })

     //  Productdetails end //


     // Move CartPage //

     let navigate = useNavigate()

     let handlecart = (item)=>{
         dispacth(addtoCart({...item, quntity: 1}))
        toast("Add to Cart Succesfull")
        setTimeout(()=>{
            navigate("/cart")
        },2000)
     }

     let handlecartt = (item)=>{
         dispacth(addtoCart({...item, quntity: 1}))
        toast("Add to Cart Succesfull")
        setTimeout(()=>{
            navigate("/cart")
        },2000)
     }


     let dispacth = useDispatch()



     //related product//

     let [relatedProducts, setRelatedProducts] = useState([]);

     useEffect(() => {
  if (singleproduct?.category) {
    axios
      .get(`https://dummyjson.com/products/category/${singleproduct.category}`)
      .then((res) => {
        // এবার same product বাদ দাও
        const others = res.data.products.filter(
          (item) => item.id !== singleproduct.id
        );
        setRelatedProducts(others);
      })
      .catch((err) => console.log(err));
  }
}, [singleproduct]);



    // Slider start //

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

    const settings = {
    dots: true,
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



  // mmainimg // ismallimg //

const [mainImg, setMainImg] = useState("");

useEffect(() => {
  if (singleproduct?.thumbnail) {
    setMainImg(singleproduct.thumbnail);
  }
}, [singleproduct]);



    return (
        <>

            <section className='bg-[#F6F5FF] py-[64px]'>
                <Container>
                    <div className="">
                        <h2 className='text-[36px] font-Josefin font-bold text-[#101750] py-4'>Shop Grid Default</h2>
                        <div className="flex items-center py-2 gap-x-2">
                            <Link to="/product">
                                <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Product .</h3>
                            </Link>
                            <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Pages .</h3>
                            <h3 className='text-[#000000] text-[16px] font-Lato font-medium hover:text-[#FB2E86]'>Shop Grid Default</h3>
                        </div>
                    </div>
                </Container>
            </section>

            <section>
                <Container>
                    <div className="my-[64px]">
                           
                        <div className="grid sm:grid-cols-1 lg:grid-cols-2  bg-[#F6F5FF] py-2 px-2">
                            <div className="grid grid-cols-12 px-2 py-2">
                                <div className="col-span-4 h-[583px] overflow-y-scroll cursor-auto">

                                    {relatedProducts.map((item)=>(

                                    <div className="bg-[purple] my-2" key={item.id} onClick={()=>setsingleproduct(item)}>
                                    <img src={item.thumbnail} alt="" />
                                    </div>
                                    ))}
                                </div>
                                <div className="col-span-8 mx-auto mt-[0%] bg-[#fff]">
                                    <img className='w-full mt-[50%]' src={singleproduct.thumbnail} alt="" />
                                </div>
                            </div>
                            <div className="">

                               

                                    
                                <div className="mt-[64px]">
                                <h2 className='text-[36px] font-Josefin font-bold text-[#0D134E] my-2'>{singleproduct.title}</h2>
                                </div>

                                <div className="flex my-2">
                                    { Clientrating(singleproduct.rating)}
                                    <div className="px-2">
                                        ({singleproduct.rating})
                                    </div>
                                </div>

                                <div className="flex gap-x-4 items-center my-2">
                                    <div className="mt-1">
                                        <h2 className='text-[16px] font-Josefin text-[#151875]'>${singleproduct.price}</h2>
                                    </div>
                                     <div className="">
                                        <del className='text-[16px] font-Josefin text-[#FB2E86]'>${singleproduct.discountPercentage}</del>
                                     </div>
                                </div>

                                <div className="my-2">
                                    <h2 className='text-[16px] font-Josefin text-[#151875]'>Color {singleproduct.color}</h2>
                                </div>

                                <div className=" pr-2 my-2">
                                    <h2 className='text-[16px] font-Josefin text-[#A9ACC6] font-blod leading-[30px]'>{singleproduct.description}</h2>
                                </div>
                               

                                <div className="flex items-center gap-x-4 my-[64px] justify-center">
                                    <div className="" onClick={()=>handlecart(singleproduct)}>
                                        <button className='text-[16px] font-Josefin text-[#151875] px-6 py-2 bg-[#fff]
                                         rounded-[10px] hover:bg-[#FB2E86] hover:text-[#fff]'>Add To cart</button>
                                    </div>

                                        <div className="">
                                            <ToastContainer
                                                    position="top-center"
                                                    autoClose={5000}
                                                    hideProgressBar={false}
                                                    newestOnTop={false}
                                                    closeOnClick={false}
                                                    rtl={false}
                                                    pauseOnFocusLoss
                                                    draggable
                                                    pauseOnHover
                                                    theme="light"
                                                    />
                                        </div>

                                    <div className="">
                                        <FaRegHeart  className='text-[24px]'/>
                                    </div>
                                </div>

                                <div className="flex items-center gap-x-3 my-4">
                                    <div className="">
                                        <h2 className='text-[16px] font-Josefin text-[#151875]'>Categories :</h2>
                                    </div>
                                    <div className="">
                                        <h2 className='text-[16px] font-Josefin text-[#FB2E86] capitalize'>{singleproduct.category}</h2>
                                    </div>
                                </div>

                                <div className="my-4 flex items-center gap-x-3">
                                    <div className="">
                                    <h2 className='text-[16px] font-Josefin text-[#151875]'>Tags :</h2>
                                    </div>
                                    <div className="">
                                        <h2 className='text-[16px] font-Josefin text-[#FB2E86] capitalize'>{singleproduct.tags}</h2>
                                    </div>
                                </div>

                                <div className="flex gap-x-3 items-center mt-4">
                                    <div className="">
                                        <h2  className='text-[16px] font-Josefin text-[#151875]'>Share :</h2>
                                    </div>
                                    <div className="flex gap-x-2">
                                        <div className="h-[30px] w-[30px] rounded-full bg-[#151875] pt-1.5 hover:bg-[#FB2E86]">
                                            <FaFacebookF className='text-[#fff] mx-auto leading-[30px] text-[18px]'/>
                                        </div>
                                        <div className="h-[30px] w-[30px] rounded-full bg-[#151875] pt-1.5 hover:bg-[#FB2E86]">
                                            <RiInstagramFill className='text-[#fff] mx-auto leading-[30px] text-[18px]'/>
                                        </div>
                                        <div className="h-[30px] w-[30px] rounded-full bg-[#151875] pt-1.5 hover:bg-[#FB2E86]">
                                            <FaTwitter className='text-[#fff] mx-auto leading-[30px] text-[18px]'/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                           
                    </div>
                </Container>

            </section>

                <section className="my-[64px] bg-[#F9F8FE] py-[64px]">
                <Container>
                    <div className="">
                        <div className="grid grid-cols-4 gap-x-2">
                            <div className="">
                            <h2 className='text-[16px] font-Josefin text-[#151875]'>Description</h2>
                            </div>
                             <div className="">
                            <h2 className='text-[16px] font-Josefin text-[#151875]'>Additional Info</h2>
                            </div>
                             <div className="">
                            <h2 className='text-[16px] font-Josefin text-[#151875]'>Reviews</h2>
                            </div>
                             <div className="">
                            <h2 className='text-[16px] font-Josefin text-[#151875]'>Video</h2>
                            </div>
                        </div>

                        <div className="mt-[64px]">
                            <h2 className='text-[22px] font-Josefin text-[#151875] my-4'>Varius tempor.</h2>
                            <p className='text-[18px] font-Josefin text-[#A9ACC6] my-2 leading-[30px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et
                                 eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante.
                                  Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam
                                   tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu,
                                 nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        </div>

                         <div className="mt-[50px]">
                            <div className="">
                            <h2 className='text-[22px] font-Josefin text-[#151875] my-4'>More details</h2>
                            </div>
                            <div className="flex gap-x-2 items-center mt-2">
                                <div className="">
                                    <IoMdArrowRoundForward className='text-[24px]'/>
                                </div>
                                <div className="">
                                     <p className='text-[18px] font-Josefin text-[#A9ACC6] my-2 leading-[30px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                            </div>
                             <div className="flex gap-x-2 items-center mt-2">
                                <div className="">
                                    <IoMdArrowRoundForward className='text-[24px]'/>
                                </div>
                                <div className="">
                                     <p className='text-[18px] font-Josefin text-[#A9ACC6] my-2 leading-[30px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                            </div>

                             <div className="flex gap-x-2 items-center mt-2">
                                <div className="">
                                    <IoMdArrowRoundForward className='text-[24px]'/>
                                </div>
                                <div className="">
                                     <p className='text-[18px] font-Josefin text-[#A9ACC6] my-2 leading-[30px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                            </div>
                             <div className="flex gap-x-2 items-center mt-2">
                                <div className="">
                                    <IoMdArrowRoundForward className='text-[24px]'/>
                                </div>
                                <div className="">
                                     <p className='text-[18px] font-Josefin text-[#A9ACC6] my-2 leading-[30px]'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                                </div>
                            </div>


                           
                        </div>

                    </div>
                </Container>
                </section>

                <section>
                    <Container>
                        <div className="my-[64px]">
                            <div className="my-4">
                                <h2 className='text-[36px] font-Josefin font-bold text-[#101750]'>Related Products</h2>
                            </div>
            
                                 <div className="">
                                    <Slider {...settings}>


                                   {relatedProducts.map((item)=>(

                                   <div className="" onClick={()=>handlecartt(item)}>
                                     <img className='bg-[#808080a1] m-2' src={item.thumbnail} alt="" />
                                       
                                       
                                    <div className="flex items-center py-2 px-2 justify-between">
                                        <div className="">
                                            <h2>{item.title}</h2>
                                        </div>
                                        <div className="flex items-center pr-2">
                                            {Clientrating(item.rating)}
                                        </div>
                                    </div>
                                    <div className="pl-2">
                                        <h2>${item.price}</h2>
                                    </div>
                                   </div>
                                    ))}
                                    </Slider>
                                    </div>


                        </div>

                    <div className="flex justify-center my-[64px]">
                        <img src={update1} alt="" />
                    </div>

                    </Container>

                </section>
        </>
    )
}

export default Productdetails