import React from 'react'
import { UseLandingPage } from '../Hooks/UseLandingPage'

const Sec1Content = () => {

  let {navigate} = UseLandingPage()
  return (
    <div className='flex flex-col items-center mt-15 text-center text-white'>
      <h1 className=' text-5xl font-semibold'>
          Order food & groceries. Discover <br />
           best restaurants. Swiggy it!
        </h1>
        <div className='flex gap-3 mt-8 '>


        <div className='bg-white text-gray-900 font-semibold  rounded-2xl py-3 border-none text-xl w-[20vw]'>
          <i className="ri-map-pin-2-fill text-orange-500 px-2 "></i>
          <input  type="text"  placeholder='enter your location'     
            className='outline-0' />
            <i className="ri-arrow-down-s-line "></i>
        </div>

      <div className='bg-white text-gray-900 font-semibold rounded-2xl py-3  border-none text-xl w-[30vw] flex justify-around'>
        <input type="text" placeholder='Search for restaurant, item or more' 
        className='outline-0 w-full h-full px-4' />
        <i className="ri-search-line pr-4 font-extralight"></i>
      </div>
            
        </div>
       <div className='h-[50vh] flex gap-1 mt-13'>
        <img onClick={()=> navigate(`/restraurant/food`)} className='h-full' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
        <img className='h-full' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
        <img className='h-full' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
       </div>

       <div className='h-[2vh] w-[80vw] bg-white flex justify-between text-gray-600 text-xl items-center' >
        <i className="ri-arrow-left-s-fill"></i>
        <i className="ri-arrow-right-s-fill"></i>
       </div>
    </div>
  )
}

export default Sec1Content
