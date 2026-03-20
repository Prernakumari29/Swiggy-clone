import React from 'react'
import UseParticularfood from '../hooks/UseParticularfood'


const ParticularFood = () => {
    
    let {name} = UseParticularfood()
  return (
    <div>
      <h1>here you will see</h1>
      <h2>{name}</h2>
    </div>
  )
}

export default ParticularFood
