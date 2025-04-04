import React from 'react'

const CustomerFeedback = () => {
  return (
    <div className='px-20 pb-20 pt-20 flex justify-around'>
        <div className="left">
            <div className="title text-5xl font-[Nunito] font-semibold">
                Customer <span className='text-[#F03328]'>Feedback</span>
            </div>
            <p className='text-lg text-gray-600 w-1/2 mt-5'>I recently dined at your restaurant and wanted to share my experience. The food was absolutely delicious, and I was impressed by the freshness of the ingredients. Each dish was bursting with flavor, and the portion sizes were perfect. The service was quick and efficient, and the staff was incredibly friendly and welcoming.</p>
        </div>
        <div className="right scale-150">
            <img src='image.png' alt="" />
        </div>
    </div>
  )
}

export default CustomerFeedback