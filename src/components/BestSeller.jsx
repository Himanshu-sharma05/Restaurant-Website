import React, { useState } from 'react'

const BestSeller = () => {
  return (
    <div className='pt-20 px-20 pb-20'>
        <div className="title text-6xl font-[Nunito] font-semibold text-center">
           Our best Seller Dishes🔥🔥
        </div>
        <p className='text-gray-600 text-lg text-center mt-5 md:px-50'>
        Our fresh garden salad is a light and refreshing option. It features a mix of crisp lettuce, juicy tomatoe all tossed in your choice of dressing.
        </p>
        <div className='grid grid-cols-3 gap-5 mt-5'>
            <ProductCard image={'/ProductImages/01.png'} title={'BreakFast Food'} rating={4} price={'$ 240'}/>
            <ProductCard image={'/ProductImages/02.png'} title={'BreakFast Food'} rating={4} price={'$ 240'}/>
            <ProductCard image={'/ProductImages/03.png'} title={'BreakFast Food'} rating={4} price={'$ 240'}/>
            <ProductCard image={'/ProductImages/04.png'} title={'BreakFast Food'} rating={4} price={'$ 240'}/>
            <ProductCard image={'/ProductImages/05.png'} title={'BreakFast Food'} rating={4} price={'$ 240'}/>
            <ProductCard image={'/ProductImages/06.png'} title={'BreakFast Food'} rating={4} price={'$ 240'}/>
        </div>
    </div>
  )
}

const ProductCard = ({image,title,price,rating})=>{
    const stars = [];

    for(let i = 0; i<rating; i++){
        stars.push('Star.png');
    }
        return(
            <div className='rounded-3xl px-5 w-fit border-3 border-red-50 pt-5 pb-10'>
                <img src={image} className='w-fit rounded-3xl' alt="" />
                <div className='flex justify-between mt-5 '>
                    <div className="title text-2xl font-[Nunito]">{title}</div>
                    <button className='rounded-3xl p-3 px-6 text-white bg-[#F03328]'>Buy Now</button>
                </div>
                <div className='flex justify-between mt-5 pr-4'>
                    <div className="rating flex gap-2">
                        { stars.map((item)=>{return(<img className='scale-80' src={item}/>)}) }
                    </div>
                    <div className="price text-2xl font-semibold font-[Nunito]">
                        {price}
                    </div>
                </div>
            </div>
        )
}


export default BestSeller