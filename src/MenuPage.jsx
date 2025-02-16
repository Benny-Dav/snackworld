import React from 'react'
import continental from "./assets/images/continental.png"
import salad from "./assets/images/salad.png"
import juice from "./assets/images/juice.png"
import coke from "./assets/images/coke.png"
import cocktail from "./assets/images/cocktail.png"
import vodka from "./assets/images/vodka.png"
import menubg from "./assets/images/menubg.png"
import insta from "./assets/icons/instawhite.png"
import wa from "./assets/icons/wawhite.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const foodOne = [
    {
        id: 1,
        name: "Fried Rice with Grilled Chicken",
        description: "Coleslaw, spicy black and green pepper sauce ",
        image: continental,
        waittime: "30",
        price:"150"
    },
    {
        id: 2,
        name: "Fried Rice with Salmons",
        description: "Coleslaw, spicy black and green pepper sauce ",
        image: salad,
        waittime: "35",
        price:"170"
    },
]
const drinks=[
    {
        id:1,
        name:"Mojito",
        description:"Vodka, gin and cranberry",
        image:cocktail,
        price:"50"
    },
    {
        id:2,
        name:"Island",
        description:"Vodka, gin and cranberry",
        image:juice,
        price:"70"
    }
]
const MenuPage = () => {
    const foodSliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide:true,
        touchMove:true
    }
    return (
        <section className='h-auto w-full py-4 px-4 flex flex-col bg-[#111111]' >
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
            <div className='flex h-[10%] justify-between px-16 items-center mb-4'>
                <div>
                    <img src={continental} alt="" className='h-14 w-14 object-cover bg-transparent' />
                </div>

                <div>
                    <img src={continental} alt="" className='h-14 w-14 object-cover bg-transparent' />
                </div>

                <div>
                    <img src={salad} alt="" className='h-14 w-14 object-cover bg-transparent ' />
                    <div className='bg-[#666666] '></div>
                </div>
            </div>

            {/* food carousel */}
            <div className='w-full h-[40%]'>
                <Slider {...foodSliderSettings}>
                    {
                        foodOne.map((meal) => (
                            <div key={meal.id} className='h-full relative '>
                                {/* image and description container*/}
                                <div className='flex justify-between w-full ml-auto mr-auto h-full'>
                                    {/* image */}
                                    <div className='relative w-full h-full'>
                                        <img src={meal.image} alt="" className='object-cover h-60 w-full' />
                                    </div>

                                    {/* description */}
                                    <div className=' flex items-center justify-center h-full w-[50%] bg-white z-10 '>
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
            <div className='border h-[7%] mb-8'>

            </div>

{/* DRINKS */}
            {/* drinks head text*/}
            <div className='flex justify-center items-center mb-4'>
                <hr className='w-20 text-white' />
                <h1 className='font-extrabold text-3xl text-center text-white'>DRINKS</h1>
                <hr className='w-20 text-white' />
            </div>

            {/* categories */}
            <div className='flex h-[10%] justify-between px-16 items-center mb-4'>
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
            <div className='w-full h-[40%]'>
                <Slider {...foodSliderSettings}>
                    {
                        drinks.map((drink) => (
                            <div key={drink.id} className='h-full relative '>
                                {/* image and description container*/}
                                <div className='flex justify-between w-full ml-auto mr-auto h-full '>
                                      {/* description */}
                                      <div className=' flex items-center justify-center h-full w-[50%] bg-white z-10 mt-16'>
                                        <div className="p-4">
                                            <h2 className="text-xl font-bold">{drink.name}</h2>
                                            <p className="text-sm text-gray-600">{drink.description}</p>
                                            <p className='text-xl font-extrabold'>₵{drink.price}</p>
                                        </div>
                                    </div>
                                    {/* image */}
                                    <div className='relative w-full h-full pl-8'>
                                        <img src={drink.image} alt="" className='object-cover h-60 ' />
                                    </div>

                                  
                                </div>

                            </div>

                        ))
                    }
                </Slider>
            </div>
            {/* nav buttons */}
            <div className='border h-[7%] mb-8'>

            </div>

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