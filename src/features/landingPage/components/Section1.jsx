import React from 'react'
import Navbar from '../subComp/Navbar'
import Sec1Content from '../subComp/Sec1Content'

const Section1 = () => {
  return (
    <div className='h-[112vh] bg-[#FF5200] relative'>

      
        <Navbar />
      <div>
        <Sec1Content />
      </div>
      
      <div className=' h-full flex items-center justify-between  '>
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" className='h-[65%] absolute left-0 top-[12%]' />
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" className='h-[65%] absolute right-0 top-[12%]' />
      </div>
        
        
        
      
      
      
    </div>
  )
}

export default Section1

