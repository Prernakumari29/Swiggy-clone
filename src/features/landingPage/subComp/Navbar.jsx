import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex  text-white pr-16 font-bold items-center justify-around py-8   '>
        <div className='h-[7vh]'>
            <img className='h-full'
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
        </div>
      <div className='flex gap-8 items-center'>
        <h1>Swiggy Corporate</h1>
        <h1>Partner with us </h1>
        <h1 className='border border-white px-6 py-3 rounded-xl'>Get the App 
            <span className='pl-2 text-xl font-extralight'><i className="ri-arrow-right-up-long-line"></i></span>
        </h1>
        <h1 className='bg-black px-10 py-3 rounded-2xl'>Sign in</h1>
      </div>
    </div>

   </> 
  )
}

export default Navbar
