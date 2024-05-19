import React from 'react'

function Searchbar({filter,setfilter}) {
  return (
    <div className=' ml-28  '>
        Search:{' '}
        <input type='text' className='text-black' value={filter || ''}
        onChange={e=>setfilter(e.target.value)}></input>
    </div>
  )
}

export default Searchbar