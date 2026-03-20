import React from 'react'
import { UseLandingPage } from '../Hooks/UseLandingPage'
import CategoryCard from '../subComp/CategoryCard'

const Section2 = () => {


  let {categoryData,navigate} = UseLandingPage()
  return (
    <div>
      <h1>Order our best food options</h1>
      <div className="mt-10 flex gap-6">
      {
        categoryData.map(function(elem,idx){
          return(
            <div key={idx} onClick={()=> navigate(`/particularfood/${elem.name}`)} >
              <CategoryCard elem={elem}  />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Section2
