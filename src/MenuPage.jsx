import React from 'react'

import vodka from "./assets/images/vodka.png"
import coke from "./assets/images/vodka.png"
import salad from "./assets/images/salad.png"
import cocktail from "./assets/images/cocktail.png"
import continental from "./assets/images/continental.png"
import menubg from "./assets/images/menubg.png"
import insta from "./assets/icons/instawhite.png"
import wa from "./assets/icons/wawhite.png"
import { foodOne } from './data'
import { drinks } from './data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const MenuPage = () => {
    const foodSliderSettings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide:true,
        touchMove:true
    }
    return (
        <section className='h-auto w-full py-4 px-8 flex flex-col ' style={{backgroundImage:`url(${menubg})`}} >
            {/* restaurant name */}
            <div className='text-center pb-2'>
                <h1 className='font-bold text-lg text-white'><span className='text-[#E6B200] '>SNACK</span>WORLD</h1>
                <h5 className='font-bold text-white text-sm '>FOOD & DRINKS</h5>
            </div>

            {/* menu head text */}
            <div className='flex justify-center items-center mb-4'>
                <hr className='w-20 text-white' />
                <h1 className='font-extrabold text-3xl text-center text-white'>FOOD</h1>
                <hr className='w-20 text-white' />
            </div>

            {/* categories */}
            <div className='flex h-[10%] w-[90%] justify-between items-center mb-4 font-bold text-[#E6B200] gap-4 ml-auto mr-auto'>
                <div className='w-full flex flex-col '>
                    <img src={continental} alt="" className='h-14 w-14 object-cover bg-transparent' />
                    <p>LOCAL</p>
                </div>

                <div className='w-full flex flex-col'>
                    <img src={continental} alt="" className='h-14 w-14 object-cover bg-transparent mr-auto ml-auto' />
                    <p>CONTINENTAL</p>
                </div>

                <div className='w-full flex flex-col'>
                    <img src={salad} alt="" className='h-14 w-14 object-cover bg-transparent ' />
                    <p>VEGAN</p>
                </div>
            </div>

            {/* food carousel */}
            <div className='w-full h-[60vh]'>
                <Slider {...foodSliderSettings}>
                    {
                        foodOne.map((meal) => (
                            <div key={meal.id} className='h-full relative '>
                                {/* image and description container*/}
                                <div className='flex flex-col w-full h-full '>
                                    {/* image */}
                                    <div className='relative w-full h-full'>
                                        <img src={meal.image} alt="" className='object-cover h-full w-[80%] ml-auto mr-auto' />
                                    </div>

                                    {/* description */}
                                    <div className=' flex items-center justify-center h-32 w-[70%] ml-auto mr-auto bg-white z-10 '>
                                        <div className="p-4">
                                            <h2 className="text-xl font-bold">{meal.name}</h2>
                                            <p className="text-sm text-gray-600">{meal.description}</p>
                                            <p className='font-extrabold text-xl'>₵{meal.price}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        ))
                    }
                </Slider>
            </div>
            {/* nav buttons */}
            {/* <div className='border h-[7%] mb-4'>

            </div> */}

{/* DRINKS */}
            {/* drinks head text*/}
            <div className='flex justify-center items-center mb-4'>
                <hr className='w-20 text-white' />
                <h1 className='font-extrabold text-3xl text-center text-white'>DRINKS</h1>
                <hr className='w-20 text-white' />
            </div>

            {/* categories */}
            <div className='flex h-[10%] justify-between px-16 items-center mb-4 '>
                <div>
                    <img src={cocktail} alt="" className='w-8 h-full object-cover bg-transparent' />
                </div>

                <div>
                    <img src={vodka} alt="" className='h-full w-14 object-cover bg-transparent' />
                </div>

                <div>
                    <img src={coke} alt="" className='h-full w-10 object-cover bg-transparent ' />
                    <div className='bg-[#666666] '></div>
                </div>
            </div>

            {/* drink carousel */}
            <div className='w-full h-[25%] mb-4'>
                <Slider {...foodSliderSettings}>
                    {
                        drinks.map((drink) => (
                            <div key={drink.id} className='h-full relative '>
                                {/* image and description container*/}
                                <div className='flex justify-between w-full ml-auto mr-auto h-full '>
                                      {/* description */}
                                      <div className=' flex items-center justify-center h-full w-[50%] bg-white z-10 mt-16 ml-10'>
                                        <div className="p-4">
                                            <h2 className="text-xl font-bold">{drink.name}</h2>
                                            <p className="text-sm text-gray-600">{drink.description}</p>
                                            <p className='text-xl font-extrabold'>₵{drink.price}</p>
                                        </div>
                                    </div>
                                    {/* image */}
                                    <div className='relative w-full h-full '>
                                        <img src={drink.image} alt="" className='object-cover h-60 ' />
                                    </div>

                                  
                                </div>

                            </div>

                        ))
                    }
                </Slider>
            </div>
            {/* nav buttons */}
            {/* <div className='border h-[7%] mb-4'>

            </div> */}

            {/* footer */}
            {/* social media links */}
            <div className='flex justify-center items-center mb-4'>
                <hr className='w-20 text-white' />
                <div>
                    <img src={insta} alt="" />
                </div>
                <div>
                    <img src={wa} alt="" />
                </div>
                <hr className='w-20 text-white' />
            </div>
            {/* restaurant name */}
            <div className='text-center pb-2'>
                <h1 className='font-bold text-lg text-white'><span className='text-[#E6B200] '>SNACK</span>WORLD</h1>
                <h5 className='font-bold text-white text-sm '>FOOD & DRINKS</h5>
            </div>

            
            
        </section>
    )
}

export default MenuPage