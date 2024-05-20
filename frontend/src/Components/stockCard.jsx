import React from 'react'
import {card1data} from '../Data/stockData'
import './card1.css'

function stockCard() {
    
  return (
    <div className='flex flex-col'>
    <div>
        <h1 className=' ml-24 mt-8  text-4xl font-bold mb-10'>BLOOD STOCK</h1>
    </div>
   
    <div className='outer'>
        {card1data.map((item)=>{
            return(
                
            <div className='card'>
              {item.image}  
            <h2 className='title'>{item.name}</h2>
            <p className='text'>{item.unit}</p>
            </div>
            )
        })}
    </div>

    </div>
  )
}

export default stockCard