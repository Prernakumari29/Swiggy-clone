import React from 'react'

const CategoryCard = ({elem}) => {
  return (
    <div className='h-[25vh] flex gap-4 '>
      <img src={elem.image_url} alt=""  />
    </div>
  )
}

export default CategoryCard
