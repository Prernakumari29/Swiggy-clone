import React from 'react'
import { useParams } from 'react-router'

const UseParticularfood = () => {
    let {name} = useParams()
  return {
    name,
  }
}

export default UseParticularfood
