
import React, { useState } from 'react';
import Container from './Container'
import Slider from 'react-slick';
import latest1 from '../assets/latest1.png';
import latest2 from '../assets/latest2.png';
import feauter1 from '../assets/feauter1.png';
import feauter2 from '../assets/feauter2.png';
import lbot1 from "../assets/lbot1.png"
import letbot2 from "../assets/letbot2.png"
import letbot3 from "../assets/letbot3.png"

const Latest = () => {

     const [activeTab, setActiveTab] = useState("new");

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const sliderData = {
        new: [latest1, latest1, latest1],
        best: [latest2, latest2, latest2],
        featured: [feauter1, feauter1, feauter1],
        special: [feauter2, feauter2, feauter2],
    };

    const tabs = [
        { key: "new", label: "New Arrival" },
        { key: "best", label: "Best Seller" },
        { key: "featured", label: "Featured" },
        { key: "special", label: "Special Offer" },
    ];

  return (
    <>
        <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="my-4">
                <h2 className='text-[42px] text-[#1A0B5B] font-josefin font-bold text-center'>Leatest Products</h2>
            </div>
            <div className="flex gap-x-8 justify-center mb-6">
                {tabs.map((tab) => (
                    <h2
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`cursor-pointer text-[18px] font-medium transition-colors duration-200 ${activeTab === tab.key ? "text-red-500" : "text-[#151875]"
                            }`}
                    >
                        {tab.label}
                    </h2>
                ))}
            </div>

            <Slider {...settings}>
                {sliderData[activeTab].map((img, index) => (
                    <div key={index} className="px-2">
                        <img
                            src={img}
                            alt={`Slide ${index}`}
                            className="rounded-lg shadow-md w-full h-64 object-cover"
                        />
                    </div>
                ))}
            </Slider>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 my-[64px]">
                        <div className="">
                            <img src={lbot1} alt="" />
                        </div>
                        <div className="">
                            <img src={letbot2} alt="" />
                         </div>
                        <div className="">
                            <img src={letbot3} alt="" />
                        </div>
                    </div>
        </div>
    
    </>
  )
}

export default Latest




// src/components/MySlider.jsx

// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// Import your images
// import latest1 from '../assets/latest1.png';
// import latest2 from '../assets/latest2.png';
// import feauter1 from '../assets/feauter1.png';
// import feauter2 from '../assets/feauter2.png';
// import lbot1 from "../assets/lbot1.png"
// import letbot2 from "../assets/letbot2.png"
// import letbot3 from "../assets/letbot3.png"


// const Latestproduct = () => {
    // const [activeTab, setActiveTab] = useState("new");

    // const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     arrows: false,
    //     responsive: [
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //     ],
    // };

    // const sliderData = {
    //     new: [latest1, latest1, latest1],
    //     best: [latest2, latest2, latest2],
    //     featured: [feauter1, feauter1, feauter1],
    //     special: [feauter2, feauter2, feauter2],
    // };

    // const tabs = [
    //     { key: "new", label: "New Arrival" },
    //     { key: "best", label: "Best Seller" },
    //     { key: "featured", label: "Featured" },
    //     { key: "special", label: "Special Offer" },
    // ];

    // return (


    //     <div className="max-w-6xl mx-auto px-4 py-8">
    //         <div className="my-4">
    //             <h2 className='text-[42px] text-[#1A0B5B] font-josefin font-bold text-center'>Leatest Products</h2>
    //         </div>
    //         <div className="flex gap-x-8 justify-center mb-6">
    //             {tabs.map((tab) => (
    //                 <h2
    //                     key={tab.key}
    //                     onClick={() => setActiveTab(tab.key)}
    //                     className={`cursor-pointer text-[18px] font-medium transition-colors duration-200 ${activeTab === tab.key ? "text-red-500" : "text-[#151875]"
    //                         }`}
    //                 >
    //                     {tab.label}
    //                 </h2>
    //             ))}
    //         </div>

    //         <Slider {...settings}>
    //             {sliderData[activeTab].map((img, index) => (
    //                 <div key={index} className="px-2">
    //                     <img
    //                         src={img}
    //                         alt={`Slide ${index}`}
    //                         className="rounded-lg shadow-md w-full h-64 object-cover"
    //                     />
    //                 </div>
    //             ))}
    //         </Slider>

    //         <div className="flex justify-between mt-[64px]">
    //                     <div className="">
    //                         <img src={lbot1} alt="" />
    //                     </div>
    //                     <div className="">
    //                         <img src={letbot2} alt="" />
    //                      </div>
    //                     <div className="">
    //                         <img src={letbot3} alt="" />
    //                     </div>
    //                 </div>
    //     </div>
    // );
// };

// export default Latestproduct;