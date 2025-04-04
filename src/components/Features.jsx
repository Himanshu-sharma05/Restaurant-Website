import React from 'react'

const Features = () => {
  return (
    <div>
        <div className="quality-food grid grid-cols-4 justify-between gap-5 px-20">
            <FeatCard image={"/Quality Food/01.png"} title={'Quality Food'} info={'lorem ipsum dolor lfjdsflkjdaslfjdasldfj ncvnjfajfsdjd fnfsfkjwejinfsd fjewoirjewlfdjlsfj fhfjsarjelk'} />
            <FeatCard image={"/Quality Food/02.png"} title={'Quality Food'} info={'lorem ipsum dolor lfjdsflkjdaslfjdasldfj ncvnjfajfsdjd fnfsfkjwejinfsd fjewoirjewlfdjlsfj fhfjsarjelk'} />
            <FeatCard image={"/Quality Food/03.png"} title={'Quality Food'} info={'lorem ipsum dolor lfjdsflkjdaslfjdasldfj ncvnjfajfsdjd fnfsfkjwejinfsd fjewoirjewlfdjlsfj fhfjsarjelk'} />
            <FeatCard image={"/Quality Food/04.png"} title={'Quality Food'} info={'lorem ipsum dolor lfjdsflkjdaslfjdasldfj ncvnjfajfsdjd fnfsfkjwejinfsd fjewoirjewlfdjlsfj fhfjsarjelk'} />
        </div>
        <div className="unique px-20 py-10 mt-10 flex gap-10 justify-between">
            <div className="left">
                <img src="left.png" alt="" />
            </div>
            <div className="right">
                <div className="title text-6xl font-[Nunito] font-semibold">Why People Choose us?</div>
                <TitleCard url={'/Title Icons/01.png'} title={'Convenient and Reliable'} para={'Whether you dine in, take out, or order delivery, our service is convenient, fast, and reliable, making mealtime hassle-free.'}/>
                <TitleCard url={'/Title Icons/02.png'} title={'Eat Burger'} para={'Our burgers are grilled to perfection, with juicy patties and flavorful toppings that make every bite a delicious experience.'}/>
                <TitleCard url={'/Title Icons/03.png'} title={'Variety Of Options'} para={'From hearty meals to light snacks, we offer a wide range of options to suit every taste and craving.'}/>
            </div>
        </div>
    </div>
  )
}

const FeatCard = ({image,title,info})=>{
    return(
        <div className='card border-1 border-red-100 w-full rounded-3xl py-10 p-5 flex flex-col text-center gap-5 shadow-xl/10 h-full shadow-black items-center'>
            <img src={image} alt="" />
            <h1 className='font-semibold font-[Nunito]'>{title}</h1>
            <p className='text-gray-500 '>{info}</p>
            <a className='text-[#F03328] font-bold text-lg font-[Nunito]' href="">Learn more</a>
        </div>
    )
}

const TitleCard = ({url,title,para})=>{
    return(
        <div className='flex gap-10 border-1 border-red-50 shadow-lg/5 rounded-3xl p-3 w-170 mt-5'>
            <div className="img">
                <img src={url} alt="" />
            </div>
            <div className="right-text">
                <h1 className='font-[Nunito] text-2xl font-semibold'>{title}</h1>
                <p className='text-lg text-gray-500'>{para}</p>
            </div>
        </div>
    )
}

export default Features