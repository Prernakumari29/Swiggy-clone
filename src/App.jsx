import React from 'react'
import { Route, Routes } from 'react-router'
import Restraurants from './layouts/Restraurants'
import MainSection from './layouts/MainSection'
import ParticularFood from './features/foodDelivery/components/ParticularFood'

const App = () => {
  return (
    <div>
      
      

      <Routes>
        
          <Route path='/' element={<MainSection />} />
          
       
       
        <Route path='/restraurant/:food' element={<Restraurants />} />
        <Route path='/particularfood/:name' element={<ParticularFood />}/>
      </Routes>  
     
    </div>
  )
}

export default App
