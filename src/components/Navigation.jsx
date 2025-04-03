import React from 'react'

const Navigation = () => {
  return (
    <div className='p-10 flex items-center justify-between'>
        <div className="logo">
            <img src="logo.png" alt="" />
        </div>
        <div className="navigation font-[Nunito] text-xl flex gap-10">
            <a href="">Home</a>
            <a href="">Our Menu</a>
            <a href="">Foods</a>
            <a href="">About Us</a>
            <a href="">Contact US</a>
        </div>
        <div className="login-button">
            <button className='p-3 px-6 cursor-pointer border-2 rounded-4xl border-[#F03328] text-[#F03328]'>LOGIN</button>
        </div>
    </div>
  )
}

export default Navigation