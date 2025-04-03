import React from 'react'

const Hero = () => {
  return (
    <div className='p-10 px-30 flex  '>
        <div className="left mt-20 w-1/2 flex flex-col gap-5">
            <div className='flex gap-5 font-[Nunito] font-bold text-7xl'>
            <h1>Desire</h1>
            <div className='bg-linear-to-r from-[#FF9E0C] to-[#D58000] p-3 px-8 text-white rounded-full'>Food</div>
            </div>
            <h1 className='text-7xl font-bold font-[Nunito]'>For your taste</h1>
            <p className='font-[Nunito] text-2xl'>Food is what we eat to stay alive and healthy. It comes in many different forms and flavors, from fruits and vegetables to meats and grains.</p>
            <button className='bg-[#F03328] ml-5 mt-5 cursor-pointer rounded-3xl p-3 px-6 text-white font-[Nunito] scale-150 w-fit'>Order Now</button>
            
        </div>
        <div className="right">
            <img src="right.png" alt="" />
        </div>
    </div>
  )
}

export default Hero